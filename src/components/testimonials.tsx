const testimonials = [
  {
    quote:
      "McAze was organized from the first visit. The quote was clear, the site stayed clean, and the finished space feels exactly how we hoped it would.",
    name: "Homeowner in Vaughan",
  },
  {
    quote:
      "They paid attention to the details most contractors rush through. Communication was steady and the work looks sharp.",
    name: "Homeowner in Markham",
  },
  {
    quote:
      "Our basement project had a lot of moving parts. McAze kept the schedule practical and handled the trade coordination well.",
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
