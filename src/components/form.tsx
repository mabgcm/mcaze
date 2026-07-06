export function ContactForm() {
  const reassuranceItems = [
    "Written scope before construction",
    "Transparent pricing conversation",
    "Professional advice before you commit",
    "Response within one business day when possible",
  ];

  return (
    <form className="grid gap-5 rounded-2xl border border-[#eee9e1] bg-white p-6 shadow-sm" action="/contact" method="post">
      <div className="rounded-2xl border border-[#eee9e1] bg-[#faf7f1] p-5 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b86f12]">Estimate request</p>
            <h2 className="mt-2 text-xl font-semibold text-[#161616]">Free estimate, no obligation.</h2>
          </div>
          <span className="inline-flex w-fit rounded-full border border-[#F59D28]/30 bg-white px-3 py-1 text-xs font-semibold text-[#b86f12]">
            Fast follow-up
          </span>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {reassuranceItems.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-full border border-[#eee9e1] bg-white px-4 py-3 text-sm font-semibold text-[#4c4842] shadow-sm">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#F59D28]/15 text-[#b86f12]" aria-hidden="true">
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-none stroke-current stroke-[2]">
                  <path d="m4 8 2.5 2.5L12 5" />
                </svg>
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-[#161616]">
          Name
          <input name="name" required autoComplete="name" className="min-h-12 rounded-xl border border-[#dedbd5] px-4 text-base font-normal outline-none focus:border-[#F59D28]" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-[#161616]">
          Phone
          <input name="phone" type="tel" required autoComplete="tel" className="min-h-12 rounded-xl border border-[#dedbd5] px-4 text-base font-normal outline-none focus:border-[#F59D28]" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-[#161616]">
        Email
        <input name="email" type="email" required autoComplete="email" className="min-h-12 rounded-xl border border-[#dedbd5] px-4 text-base font-normal outline-none focus:border-[#F59D28]" />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-[#161616]">
        Project type
        <select name="service" className="min-h-12 rounded-xl border border-[#dedbd5] px-4 text-base font-normal outline-none focus:border-[#F59D28]">
          <option>Kitchen Renovation</option>
          <option>Bathroom Renovation</option>
          <option>Basement Renovation</option>
          <option>Painting</option>
          <option>Other</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold text-[#161616]">
        Tell us about the project
        <span className="text-sm font-normal leading-6 text-[#6f6a62]">Location, rough timeline, and what you want to improve are enough to start.</span>
        <textarea name="message" rows={6} required className="rounded-xl border border-[#dedbd5] px-4 py-3 text-base font-normal outline-none focus:border-[#F59D28]" />
      </label>
      <button className="min-h-12 rounded-full bg-[#F59D28] px-6 font-semibold text-[#161616] transition hover:bg-[#e78f18]" type="submit">
        Get Free Estimate
      </button>
      <p className="text-center text-sm leading-6 text-[#6f6a62]">No obligation. We use your details only to respond to your renovation inquiry.</p>
    </form>
  );
}
