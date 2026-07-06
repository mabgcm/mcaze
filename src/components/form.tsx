export function ContactForm() {
  return (
    <form className="grid gap-5 rounded-2xl border border-[#eee9e1] bg-white p-6 shadow-sm" action="/contact" method="post">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-[#161616]">
          Name
          <input name="name" required className="min-h-12 rounded-xl border border-[#dedbd5] px-4 text-base font-normal outline-none focus:border-[#F59D28]" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-[#161616]">
          Phone
          <input name="phone" type="tel" required className="min-h-12 rounded-xl border border-[#dedbd5] px-4 text-base font-normal outline-none focus:border-[#F59D28]" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-[#161616]">
        Email
        <input name="email" type="email" required className="min-h-12 rounded-xl border border-[#dedbd5] px-4 text-base font-normal outline-none focus:border-[#F59D28]" />
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
        <textarea name="message" rows={6} required className="rounded-xl border border-[#dedbd5] px-4 py-3 text-base font-normal outline-none focus:border-[#F59D28]" />
      </label>
      <button className="min-h-12 rounded-full bg-[#F59D28] px-6 font-semibold text-[#161616] transition hover:bg-[#e78f18]" type="submit">
        Send Request
      </button>
    </form>
  );
}
