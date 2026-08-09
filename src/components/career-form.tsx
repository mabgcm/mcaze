import { sendContactEmail } from "@/app/contact/actions";
import { SpamProtectionFields } from "@/components/spam-protection-fields";

const fieldClass = "min-h-12 rounded-sm border border-[#c9c1b4] bg-[#fbfaf7] px-4 text-base font-normal outline-none transition focus:border-[#F59D28] focus:ring-2 focus:ring-[#F59D28]/15";

export function CareerForm({ status }: { status?: "sent" | "error" | "config-error" }) {
  return (
    <form id="apply" action={sendContactEmail} className="relative grid scroll-mt-32 gap-6 border border-[#d8d0c3] bg-white p-6 shadow-[12px_12px_0_rgba(23,23,20,0.08)] sm:p-9">
      <SpamProtectionFields startedAt={Date.now().toString()} />
      <input type="hidden" name="formType" value="career" />
      {status === "sent" ? <p className="border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-800">Thank you. Your application has been sent to McAze.</p> : null}
      {status === "error" ? <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">We could not send your application. Please try again or email info@mcaze.ca.</p> : null}
      {status === "config-error" ? <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">Email settings are not available. Please email info@mcaze.ca directly.</p> : null}

      <header className="border-l-4 border-[#F59D28] pl-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a95e08]">Employment application</p>
        <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-[#171714] sm:text-3xl">Build your next chapter with McAze.</h2>
        <p className="mt-3 max-w-2xl leading-7 text-[#5e5b54]">Complete the form below and attach your résumé. Fields marked with an asterisk are required.</p>
      </header>

      <fieldset className="grid gap-5">
        <legend className="mb-1 text-sm font-bold uppercase tracking-[0.12em] text-[#171714]">Contact information</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold">Full name *<input name="name" required maxLength={80} autoComplete="name" className={fieldClass} /></label>
          <label className="grid gap-2 text-sm font-semibold">Phone *<input name="phone" type="tel" required maxLength={30} autoComplete="tel" className={fieldClass} /></label>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold">Email *<input name="email" type="email" required maxLength={254} autoComplete="email" className={fieldClass} /></label>
          <label className="grid gap-2 text-sm font-semibold">City / area *<input name="candidateLocation" required maxLength={100} autoComplete="address-level2" className={fieldClass} /></label>
        </div>
      </fieldset>

      <fieldset className="grid gap-5 border-t border-[#e5dfd5] pt-6">
        <legend className="mb-1 text-sm font-bold uppercase tracking-[0.12em] text-[#171714]">Position and availability</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold">Position applying for *
            <select name="service" required className={fieldClass} defaultValue="">
              <option value="" disabled>Select a position</option>
              <option>Experienced Carpenter</option>
              <option>Renovation Technician / Multi-trade</option>
              <option>Project Coordinator / Site Lead</option>
              <option>Subcontractor Partnership</option>
              <option>General Employment Inquiry</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold">Years of relevant experience *
            <select name="experienceYears" required className={fieldClass} defaultValue="">
              <option value="" disabled>Select experience</option><option>Less than 2 years</option><option>2–4 years</option><option>5–9 years</option><option>10+ years</option>
            </select>
          </label>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold">Availability *<select name="availability" required className={fieldClass} defaultValue=""><option value="" disabled>Select availability</option><option>Immediately</option><option>Within 2 weeks</option><option>Within 1 month</option><option>More than 1 month</option></select></label>
          <label className="grid gap-2 text-sm font-semibold">Employment preference *<select name="employmentPreference" required className={fieldClass} defaultValue=""><option value="" disabled>Select preference</option><option>Full-time</option><option>Part-time</option><option>Contract / subcontract</option><option>Open to discussion</option></select></label>
        </div>
      </fieldset>

      <fieldset className="grid gap-5 border-t border-[#e5dfd5] pt-6">
        <legend className="mb-1 text-sm font-bold uppercase tracking-[0.12em] text-[#171714]">Work readiness</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="flex items-start gap-3 border border-[#ded7cc] bg-[#fbfaf7] p-4 text-sm leading-6"><input type="checkbox" name="authorizedToWork" value="Yes" required className="mt-1 h-4 w-4 accent-[#F59D28]" /><span>I am legally authorized to work in Canada. *</span></label>
          <label className="flex items-start gap-3 border border-[#ded7cc] bg-[#fbfaf7] p-4 text-sm leading-6"><input type="checkbox" name="driversLicence" value="Yes" className="mt-1 h-4 w-4 accent-[#F59D28]" /><span>I hold a valid driver’s licence and have reliable transportation.</span></label>
          <label className="flex items-start gap-3 border border-[#ded7cc] bg-[#fbfaf7] p-4 text-sm leading-6"><input type="checkbox" name="ownTools" value="Yes" className="mt-1 h-4 w-4 accent-[#F59D28]" /><span>I have trade-appropriate tools and safety equipment.</span></label>
          <label className="flex items-start gap-3 border border-[#ded7cc] bg-[#fbfaf7] p-4 text-sm leading-6"><input type="checkbox" name="canTravel" value="Yes" className="mt-1 h-4 w-4 accent-[#F59D28]" /><span>I can travel to project sites across Toronto and the GTA.</span></label>
        </div>
      </fieldset>

      <label className="grid gap-2 border-t border-[#e5dfd5] pt-6 text-sm font-semibold">Experience, certifications and introduction *
        <span className="font-normal leading-6 text-[#6f6a62]">Tell us about your strongest trade skills, recent projects, certifications and why you want to work with McAze.</span>
        <textarea name="message" rows={7} required minLength={40} maxLength={4000} className={`${fieldClass} py-3`} />
      </label>
      <label className="grid gap-2 text-sm font-semibold">Résumé / CV
        <input name="resume" type="file" accept=".pdf,.doc,.docx" className="block border border-dashed border-[#bcb3a5] bg-[#fbfaf7] p-4 text-sm file:mr-4 file:border-0 file:bg-[#171714] file:px-4 file:py-2 file:font-semibold file:text-white" />
        <span className="font-normal text-[#6f6a62]">PDF, DOC or DOCX; maximum 4 MB.</span>
      </label>
      <label className="flex items-start gap-3 text-sm leading-6 text-[#5e5b54]"><input type="checkbox" required className="mt-1 h-4 w-4 accent-[#F59D28]" /><span>I confirm the information provided is accurate and consent to McAze contacting me about employment opportunities. *</span></label>
      <button type="submit" className="min-h-13 bg-[#F59D28] px-7 py-4 text-sm font-bold uppercase tracking-[0.1em] text-[#171714] shadow-[5px_5px_0_#171714] transition hover:-translate-y-0.5 hover:bg-[#e78f18]">Submit Application</button>
      <p className="text-sm leading-6 text-[#6f6a62]">McAze is committed to fair consideration. Accommodation requests can be discussed during the recruitment process.</p>
    </form>
  );
}
