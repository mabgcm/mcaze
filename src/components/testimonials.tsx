const testimonials = [
  {
    quote:
      "McAze was organized from the first visit. The quote explained what was included, the schedule was realistic, and the crew kept the work area cleaner than we expected. Our kitchen feels brighter and more practical without the project feeling out of control.",
    name: "Homeowner in Vaughan",
  },
  {
    quote:
      "We hired McAze for a bathroom renovation after comparing a few contractors. They were straightforward about materials, timing, and what could affect the cost. The finished bathroom looks clean, but what we appreciated most was the steady communication.",
    name: "Homeowner in Markham",
  },
  {
    quote:
      "Our basement project had drywall, flooring, lighting, and painting all happening in stages. McAze kept the schedule practical and told us what decisions were needed before each step. It made a complicated renovation feel much easier to manage.",
    name: "Homeowner in Richmond Hill",
  },
];

export function Testimonials() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
        <figure key={testimonial.name} className="rounded-2xl border border-[#eee9e1] bg-white p-6 shadow-sm">
          <blockquote className="leading-8 text-[#4c4842]">“{testimonial.quote}”</blockquote>
          <figcaption className="mt-5 text-sm font-semibold text-[#161616]">{testimonial.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}
