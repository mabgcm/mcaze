import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { footerNav, siteConfig, socialLinks } from "@/data/site";

type SocialIconProps = {
  icon: (typeof socialLinks)[number]["icon"];
};

function SocialIcon({ icon }: SocialIconProps) {
  if (icon === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M14 8.4V6.7c0-.8.2-1.3 1.4-1.3H17V2.2C16.2 2.1 15.3 2 14.3 2c-2.8 0-4.7 1.7-4.7 4.8v1.6H6.5V12h3.1v10H14V12h3l.5-3.6H14Z" />
      </svg>
    );
  }

  if (icon === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current stroke-[1.9]">
        <rect x="4" y="4" width="16" height="16" rx="4.5" />
        <circle cx="12" cy="12" r="3.6" />
        <circle cx="16.8" cy="7.2" r="0.9" className="fill-current stroke-none" />
      </svg>
    );
  }

  if (icon === "youtube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M21.5 7.2a3 3 0 0 0-2.1-2.1C17.6 4.6 12 4.6 12 4.6s-5.6 0-7.4.5a3 3 0 0 0-2.1 2.1A31.1 31.1 0 0 0 2 12a31.1 31.1 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.8.5 7.4.5 7.4.5s5.6 0 7.4-.5a3 3 0 0 0 2.1-2.1A31.1 31.1 0 0 0 22 12a31.1 31.1 0 0 0-.5-4.8ZM10 15.4V8.6l5.8 3.4L10 15.4Z" />
      </svg>
    );
  }

  if (icon === "tiktok") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M15.6 2c.4 2.7 1.9 4.3 4.4 4.5v3.6a8 8 0 0 1-4.3-1.3v6.4c0 4.1-2.5 6.8-6.3 6.8A5.4 5.4 0 0 1 4 16.5c0-3.3 2.6-5.7 6.1-5.5v3.7c-1.5-.2-2.5.5-2.5 1.8 0 1.2.8 2 1.9 2 1.3 0 2.1-.8 2.1-2.7V2h4Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M14.2 10.2 22.6 0h-2l-7.3 8.8L7.5 0H.8l8.8 13.1L.8 24h2l7.7-9.4 6.2 9.4h6.7l-9.2-13.8Zm-2.7 3.3-.9-1.3L3.5 1.6h3l5.7 8.5.9 1.3 7.5 11.1h-3l-6.1-9Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#eee9e1] bg-[#161616] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_2.15fr]">
        <div className="max-w-md">
          <Link href="/" className="inline-flex" aria-label={`${siteConfig.name} home`}>
            <BrandLogo src={siteConfig.footerLogo} className="h-auto w-[190px]" />
          </Link>
          <p className="mt-5 max-w-md leading-7 text-white/70">
            Premium renovation and property improvement services for homeowners across the Greater Toronto Area.
          </p>

          <div className="mt-7 grid gap-5 text-sm text-white/70">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Office Address</h2>
              <address className="mt-2 not-italic leading-7">
                <a href={siteConfig.mapUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-[#F59D28]">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.region} {siteConfig.address.postalCode}
                </a>
              </address>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Contact</h2>
              <div className="mt-2 space-y-2">
                <p>
                  <a href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`} className="transition hover:text-[#F59D28]">
                    {siteConfig.phone}
                  </a>
                </p>
                {siteConfig.emails.map((email) => (
                  <p key={email}>
                    <a href={`mailto:${email}`} className="transition hover:text-[#F59D28]">
                      {email}
                    </a>
                  </p>
                ))}
                <p>
                  <a href={siteConfig.url} className="transition hover:text-[#F59D28]">
                    {siteConfig.displayUrl}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3" aria-label="Social media links">
            {socialLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`McAze on ${item.label}`}
                title={item.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-white/75 transition hover:border-[#F59D28]/60 hover:bg-[#F59D28] hover:text-[#161616] focus:outline-none focus:ring-2 focus:ring-[#F59D28] focus:ring-offset-2 focus:ring-offset-[#161616]"
              >
                <SocialIcon icon={item.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[0.9fr_1.7fr_0.9fr]">
          {footerNav.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/55">{group.title}</h2>
              <ul className={group.title === "Services" ? "mt-5 grid gap-3 sm:grid-cols-2" : "mt-5 space-y-3"}>
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-white/75 transition hover:text-[#F59D28]">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
          <p>Built for accessibility, speed, and search visibility.</p>
        </div>
      </div>
    </footer>
  );
}
