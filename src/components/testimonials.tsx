const testimonials = [
  {
    name: "Lana A",
    initials: "LA",
    date: "July 2026",
    quote: "McAze did an excellent job! The team was professional, clean, and completed everything on time. Highly recommended!",
  },
  {
    name: "Müjde Güristan",
    initials: "MG",
    date: "July 2026",
    quote: "Affordable prices and they got the job done really fast. Loved the service. Thanks McAze",
  },
  {
    name: "Buse Leman Guristan",
    initials: "BG",
    date: "July 2026",
    quote: "Very experienced team, affordable prices Thanks Mcaze",
  },
];

const googleProfileUrl =
  "https://www.google.com/maps/place/McAze+Renovation/@43.776922,-79.3169853,17z/data=!3m1!4b1!4m6!3m5!1s0x882b2d12551a10c1:0xcf32f0507882156e!8m2!3d43.776922!4d-79.3144104!16s%2Fg%2F11nhh64g15";

export function Testimonials() {
  return (
    <div>
      <div className="mb-6 flex flex-col gap-5 rounded-2xl border border-[#e6e2dc] bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div>
            <p className="font-semibold text-[#161616]">Excellent on Google</p>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <span className="text-lg font-bold text-[#161616]">5.0</span>
              <span className="tracking-[0.1em] text-[#fbbc04]" aria-label="Five out of five stars">
                ★★★★★
              </span>
              <span className="text-sm text-[#6f6a62]">19 reviews</span>
            </div>
          </div>
        </div>
        <a
          href={googleProfileUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#d8d5cf] px-5 text-sm font-semibold text-[#161616] transition hover:border-[#4285f4] hover:text-[#1a73e8]"
        >
          View all reviews on Google
        </a>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.name} className="flex h-full flex-col rounded-2xl border border-[#e6e2dc] bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#eef3fc] text-sm font-bold text-[#1a73e8]" aria-hidden="true">
                  {testimonial.initials}
                </span>
                <figcaption>
                  <span className="block text-sm font-semibold text-[#161616]">{testimonial.name}</span>
                  <span className="mt-0.5 block text-xs text-[#6f6a62]">{testimonial.date}</span>
                </figcaption>
              </div>
            </div>
            <div className="mt-5 tracking-[0.1em] text-[#fbbc04]" aria-label="Five out of five stars">
              ★★★★★
            </div>
            <blockquote className="mt-4 flex-1 leading-8 text-[#4c4842]">“{testimonial.quote}”</blockquote>
            <a href={googleProfileUrl} target="_blank" rel="noreferrer" className="mt-5 text-sm font-semibold text-[#1a73e8] hover:underline">
              Google Review
            </a>
          </figure>
        ))}
      </div>
    </div>
  );
}
