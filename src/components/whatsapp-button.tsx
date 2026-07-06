import { siteConfig } from "@/data/site";

function whatsappHref(phone: string) {
  return `https://wa.me/${phone.replace(/\D/g, "")}`;
}

export function WhatsAppButton() {
  return (
    <a
      href={whatsappHref(siteConfig.whatsapp)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Message McAze on WhatsApp at ${siteConfig.whatsapp}`}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#1fb85a] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 sm:bottom-6 sm:right-6"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7 fill-current">
        <path d="M16 3.5A12.4 12.4 0 0 0 5.3 22.2L4 28.5l6.4-1.5A12.4 12.4 0 1 0 16 3.5Zm0 22.5a10 10 0 0 1-5.1-1.4l-.4-.2-3.2.8.7-3.1-.2-.4A10 10 0 1 1 16 26Zm5.7-7.5c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-.9 1.2-.3.2-.6.1a8.2 8.2 0 0 1-2.4-1.5 9.1 9.1 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5a.6.6 0 0 0 0-.5c-.1-.2-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1 2.8 1.1 3a11.4 11.4 0 0 0 4.4 4.3c.6.3 1.1.5 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.8-.7 2-1.4s.2-1.3.2-1.4-.2-.2-.5-.4Z" />
      </svg>
    </a>
  );
}
