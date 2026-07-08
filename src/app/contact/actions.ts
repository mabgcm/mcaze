"use server";

import { redirect } from "next/navigation";
import nodemailer from "nodemailer";
import { siteConfig } from "@/data/site";

const requiredFields = ["name", "phone", "email", "service", "message"] as const;

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

export async function sendContactEmail(formData: FormData) {
  const values = {
    name: getField(formData, "name"),
    phone: getField(formData, "phone"),
    email: getField(formData, "email"),
    service: getField(formData, "service"),
    message: getField(formData, "message"),
  };

  const hasMissingField = requiredFields.some((field) => values[field].length === 0);

  if (hasMissingField) {
    redirect("/contact?error=missing");
  }

  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;
  const from = process.env.SMTP_FROM ?? process.env.SMTP_USER;
  const subject = `New estimate request from ${values.name}`;
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
