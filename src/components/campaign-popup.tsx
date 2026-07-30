"use client";

import { track } from "@vercel/analytics/react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const campaign = {
  id: "price-match-20",
  enabled: true,
  displayDelayMs: 5_000,
  image: {
    src: "/images/campaigns/price-match-popup.webp",
    alt: "McAze renovation price-match promotion: bring another company's quote and get 20% off their price.",
  },
  eyebrow: "The McAze Promise",
  title: "We'll beat any price.",
  description:
    "Bring us another company's written renovation quote. We'll review the same scope and show you how McAze can do better.",
  cta: {
    label: "Show Us Their Quote",
    href: "/contact?campaign=price-match-20",
  },
} as const;

function trackCampaignEvent(name: string, trigger?: string) {
  try {
    track(name, trigger ? { campaign: campaign.id, trigger } : { campaign: campaign.id });
  } catch {
    // Analytics must never interrupt the visitor's experience.
  }
}

export function CampaignPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [openTrigger, setOpenTrigger] = useState("delay");
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const hasOpenedRef = useRef(false);

  const openPopup = useCallback((trigger: "delay" | "exit_intent") => {
    if (hasOpenedRef.current) return;

    hasOpenedRef.current = true;
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    setOpenTrigger(trigger);
    setIsOpen(true);
    trackCampaignEvent("campaign_popup_view", trigger);
  }, []);

  const closePopup = useCallback(
    (reason: "close_button" | "backdrop" | "escape" | "cta") => {
      setIsOpen(false);
      trackCampaignEvent("campaign_popup_close", reason);
      window.setTimeout(() => previousFocusRef.current?.focus(), 0);
    },
    [],
  );

  useEffect(() => {
    if (!campaign.enabled || window.location.pathname.startsWith("/contact")) return;

    const timer = window.setTimeout(() => openPopup("delay"), campaign.displayDelayMs);
    const handleExitIntent = (event: MouseEvent) => {
      if (event.clientY <= 8 && event.relatedTarget === null) {
        window.clearTimeout(timer);
        openPopup("exit_intent");
      }
    };

    document.addEventListener("mouseout", handleExitIntent);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseout", handleExitIntent);
    };
  }, [openPopup]);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup("escape");
        return;
      }

      if (event.key !== "Tab") return;

      const dialog = closeButtonRef.current?.closest('[role="dialog"]');
      const focusable = dialog?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closePopup, isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) closePopup("backdrop");
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="campaign-popup-title"
        aria-describedby="campaign-popup-description"
        data-open-trigger={openTrigger}
        className="relative grid max-h-[calc(100dvh-1.5rem)] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl sm:max-h-[calc(100dvh-3rem)] md:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] md:overflow-hidden"
      >
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Close promotion"
          onClick={() => closePopup("close_button")}
          className="absolute right-2 top-2 z-10 flex size-11 items-center justify-center rounded-full border border-white/25 bg-black/80 text-2xl leading-none text-white shadow-lg transition hover:border-[#F59D28] hover:text-[#F59D28] focus:outline-none focus:ring-2 focus:ring-[#F59D28] focus:ring-offset-2 focus:ring-offset-black"
        >
          <span aria-hidden="true">×</span>
        </button>

        <div className="relative min-h-[23rem] bg-black md:min-h-[39rem]">
          <Image
            src={campaign.image.src}
            alt={campaign.image.alt}
            fill
            priority
            sizes="(max-width: 767px) 100vw, 55vw"
            className="object-contain"
          />
        </div>

        <div className="flex flex-col justify-center p-5 text-white sm:p-7 md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F59D28]">{campaign.eyebrow}</p>
          <h2 id="campaign-popup-title" className="mt-3 text-3xl font-black uppercase leading-none sm:text-4xl">
            {campaign.title}
          </h2>
          <p id="campaign-popup-description" className="mt-4 text-base leading-7 text-white/80">
            {campaign.description}
          </p>

          <Link
            href={campaign.cta.href}
            onClick={() => {
              trackCampaignEvent("campaign_popup_cta_click", openTrigger);
              closePopup("cta");
            }}
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#F59D28] px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-[#161616] transition hover:bg-[#ffb13d] focus:outline-none focus:ring-2 focus:ring-[#F59D28] focus:ring-offset-2 focus:ring-offset-black"
          >
            {campaign.cta.label}
          </Link>

          <a
            href="tel:+16476733343"
            onClick={() => trackCampaignEvent("campaign_popup_phone_click", openTrigger)}
            className="mt-3 inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#F59D28] hover:text-[#F59D28] focus:outline-none focus:ring-2 focus:ring-[#F59D28]"
          >
            Call +1 (647) 673-3343
          </a>

          <p className="mt-5 text-xs leading-5 text-white/55">
            Offer applies to comparable written quotes with equivalent scope, materials, schedule, and site
            conditions. Final eligibility is confirmed after review.
          </p>
        </div>
      </section>
    </div>
  );
}
