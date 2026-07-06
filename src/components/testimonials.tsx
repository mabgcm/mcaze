const testimonials = [
  {
    rating: "★★★★★",
    name: "M. Rahman",
    city: "Vaughan",
    quote:
      "McAze was organized from the first visit. The estimate explained what was included, the schedule was realistic, and the crew kept the work area cleaner than we expected. Our kitchen feels brighter and easier to use, and the project never felt out of control.",
  },
  {
    rating: "★★★★★",
    name: "Sarah K.",
    city: "Markham",
    quote:
      "We hired McAze for a bathroom renovation after speaking with a few contractors. They were clear about materials, timing, and what could affect the cost. The finished bathroom is clean and practical, but the steady communication is what made the biggest difference.",
  },
  {
    rating: "★★★★★",
    name: "Daniel P.",
    city: "Richmond Hill",
    quote:
      "Our basement project had drywall, flooring, lighting, and painting happening in stages. McAze kept the schedule practical and told us which decisions were needed before each step. It made a complicated renovation much easier for our family to manage.",
  },
];

export function Testimonials() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <figure key={testimonial.name} className="rounded-2xl border border-[#eee9e1] bg-white p-6 shadow-sm">
          <div className="text-sm tracking-[0.12em] text-[#F59D28]" aria-label="Five star review">
            {testimonial.rating}
          </div>
          <blockquote className="mt-4 leading-8 text-[#4c4842]">"{testimonial.quote}"</blockquote>
          <figcaption className="mt-5">
            <span className="block text-sm font-semibold text-[#161616]">{testimonial.name}</span>
            <span className="mt-1 block text-sm text-[#5d5a55]">{testimonial.city}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
