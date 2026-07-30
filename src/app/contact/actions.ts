"use server";

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { createHash } from "node:crypto";
import nodemailer from "nodemailer";
import { siteConfig } from "@/data/site";

const requiredFields = ["name", "phone", "email", "service", "message"] as const;
const fieldLimits = {
  name: 80,
  phone: 30,
  email: 254,
  service: 80,
  message: 4000,
} as const;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const headerBreakPattern = /[\r\n]/;
const htmlPattern = /<[^>]*>|(?:javascript|data):/i;
const urlPattern = /(?:https?:\/\/|www\.)/gi;
const minimumSubmissionTimeMs = 3_000;
const maximumSubmissionTimeMs = 2 * 60 * 60 * 1_000;
const duplicateWindowMs = 30_000;
const rateLimitWindowMs = 10 * 60 * 1_000;
const maximumRequestsPerWindow = 5;

type SubmissionRecord = {
  count: number;
  firstSeenAt: number;
  lastFingerprint?: string;
  lastSubmissionAt?: number;
};

const submissionRecords = new Map<string, SubmissionRecord>();

function getField(formData: FormData, key: (typeof requiredFields)[number]) {
  const value = formData.get(key);

  if (typeof value !== "string") {
    return "";
  }

  return value.trim();
}

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error("missing_email_config");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isValidSubmission(values: Record<(typeof requiredFields)[number], string>) {
  if (requiredFields.some((field) => values[field].length === 0 || values[field].length > fieldLimits[field])) {
    return false;
  }

  if (
    values.message.length < 20 ||
    !emailPattern.test(values.email) ||
    headerBreakPattern.test(values.name) ||
    headerBreakPattern.test(values.email) ||
    headerBreakPattern.test(values.phone) ||
    htmlPattern.test(values.name) ||
    htmlPattern.test(values.message) ||
    (values.message.match(urlPattern)?.length ?? 0) > 2
  ) {
    return false;
  }

  return true;
}

async function verifyTurnstile(token: string, remoteIp: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    return true;
  }

  if (!token) {
    return false;
  }

  const body = new URLSearchParams({
    secret,
    response: token,
  });

  if (remoteIp !== "unknown") {
    body.set("remoteip", remoteIp);
  }

  try {
    const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body,
      cache: "no-store",
    });
    const result = (await response.json()) as { success?: boolean; action?: string };

    return result.success === true && (!result.action || result.action === "contact-form");
  } catch (error) {
    console.error("Turnstile verification failed:", error);
    return false;
  }
}

function isRateLimited(key: string, fingerprint: string) {
  const now = Date.now();
  const record = submissionRecords.get(key);

  if (!record || now - record.firstSeenAt > rateLimitWindowMs) {
    submissionRecords.set(key, { count: 1, firstSeenAt: now, lastFingerprint: fingerprint, lastSubmissionAt: now });
    return false;
  }

  if (record.lastFingerprint === fingerprint && record.lastSubmissionAt && now - record.lastSubmissionAt < duplicateWindowMs) {
    return true;
  }

  record.count += 1;
  record.lastFingerprint = fingerprint;
  record.lastSubmissionAt = now;
  submissionRecords.set(key, record);

  return record.count > maximumRequestsPerWindow;
}

export async function sendContactEmail(formData: FormData) {
  const values = {
    name: getField(formData, "name"),
    phone: getField(formData, "phone"),
    email: getField(formData, "email"),
    service: getField(formData, "service"),
    message: getField(formData, "message"),
  };

  const honeypot = formData.get("website");
  const startedAt = Number(formData.get("formStartedAt"));
  const elapsed = Date.now() - startedAt;

  if (
    (typeof honeypot === "string" && honeypot.trim().length > 0) ||
    !Number.isFinite(startedAt) ||
    elapsed < minimumSubmissionTimeMs ||
    elapsed > maximumSubmissionTimeMs ||
    !isValidSubmission(values)
  ) {
    redirect("/contact?error=invalid");
  }

  const requestHeaders = await headers();
  const remoteIp = requestHeaders.get("cf-connecting-ip") ?? requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const turnstileToken = formData.get("cf-turnstile-response");
  const isHuman = await verifyTurnstile(typeof turnstileToken === "string" ? turnstileToken : "", remoteIp);

  if (!isHuman) {
    redirect("/contact?error=verification");
  }

  const fingerprint = createHash("sha256")
    .update(`${values.email.toLowerCase()}|${values.phone}|${values.message}`)
    .digest("hex");
  const rateLimitKey = `${remoteIp}|${values.email.toLowerCase()}`;

  if (isRateLimited(rateLimitKey, fingerprint)) {
    redirect("/contact?error=rate-limit");
  }

  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const from = process.env.SMTP_FROM ?? process.env.SMTP_USER;
  const subject = `New estimate request from ${values.name.replace(headerBreakPattern, " ")}`;
  const text = [
    "New estimate request",
    "",
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    `Email: ${values.email}`,
    `Project type: ${values.service}`,
    "",
    "Project details:",
    values.message,
  ].join("\n");
  const safeValues = {
    name: escapeHtml(values.name),
    phone: escapeHtml(values.phone),
    email: escapeHtml(values.email),
    service: escapeHtml(values.service),
    message: escapeHtml(values.message),
  };

  const html = `
    <h2>New estimate request</h2>
    <p><strong>Name:</strong> ${safeValues.name}</p>
    <p><strong>Phone:</strong> ${safeValues.phone}</p>
    <p><strong>Email:</strong> ${safeValues.email}</p>
    <p><strong>Project type:</strong> ${safeValues.service}</p>
    <p><strong>Project details:</strong></p>
    <p>${safeValues.message.replace(/\n/g, "<br />")}</p>
  `;

  try {
    await createTransporter().sendMail({
      to,
      from,
      replyTo: values.email,
      subject,
      text,
      html,
    });
  } catch (error) {
    console.error("Contact form email failed:", error);

    if (error instanceof Error && error.message === "missing_email_config") {
      redirect("/contact?error=config");
    }

    redirect("/contact?error=send");
  }

  redirect("/contact?sent=1");
}
