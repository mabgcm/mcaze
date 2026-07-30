"use client";

import Script from "next/script";

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function SpamProtectionFields({ startedAt }: { startedAt: string }) {
  return (
    <>
      <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <input name="formStartedAt" type="hidden" value={startedAt} readOnly />
      {turnstileSiteKey ? (
        <>
          <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
          <div
            className="cf-turnstile min-h-[65px]"
            data-sitekey={turnstileSiteKey}
            data-theme="light"
            data-action="contact-form"
          />
        </>
      ) : null}
    </>
  );
}
