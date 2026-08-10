import Image from "next/image";
import { Cta } from "@/components/cta";
import { InternalLinks } from "@/components/internal-links";
import { Container, Section } from "@/components/section";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Meet the McAze Team",
  description:
    "Meet the leadership team behind McAze construction and renovation projects across Toronto and the Greater Toronto Area.",
  path: "/team",
});

const teamMembers = [
  {
    name: "Samir Mammadov",
    role: "Founder & CEO",
    experience: "Construction business leadership since 2007",
    image: "/images/team/samir-mammadov-founder-seo.webp",
    imagePosition: "object-center",
    alt: "Samir Mammadov, Founder and CEO of McAze, at a construction site",
    bio: "Samir brings together business strategy, project planning, field operations and client communication. His practical, accountable leadership keeps McAze focused on clear scopes, capable teams and responsible delivery from the first conversation through completion.",
  },
  {
    name: "Kadri Yiğit",
    role: "GTA Supervisor",
    experience: "More than 10 years of construction experience",
    image: "/images/team/kadri-yigit-gta-supervisor.webp",
    imagePosition: "object-center",
    alt: "Kadri Yiğit, GTA Supervisor at McAze, on an active construction site",
    bio: "Kadri has more than a decade of experience across multifunctional construction projects. As GTA Supervisor, he coordinates job-site activity, supports trade sequencing and helps maintain McAze standards for safety, communication, workmanship and day-to-day progress.",
  },
];

export default function TeamPage() {
  return (
    <>
      <section className="relative min-h-[560px] overflow-hidden bg-[#171714] sm:min-h-[660px]">
        <Image
          src="/images/site/home-cta-mcaze-team.webp"
          alt="McAze construction and renovation team"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/70" />
        <Container className="relative flex min-h-[560px] items-center justify-center py-24 text-center text-white sm:min-h-[660px]">
          <div className="max-w-5xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#ffc56d]">The people behind McAze</p>
            <h1 className="mt-5 text-5xl font-bold tracking-[-0.045em] drop-shadow-lg sm:text-6xl lg:text-7xl">
              Building a culture of responsibility.
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
              Experienced leadership, practical site coordination and one shared standard for every project across Toronto and the GTA.
            </p>
          </div>
        </Container>
      </section>

      <Section className="relative bg-[#f7f3ec] !pt-0">
        <Container className="relative z-10 -mt-20 lg:-mt-28">
          <div className="grid overflow-hidden rounded-[2rem] border border-[#e3ddd2] bg-white shadow-[0_28px_90px_rgba(35,31,25,0.14)] lg:grid-cols-[0.88fr_1.12fr]">
            <div className="relative z-10 flex flex-col justify-center px-7 py-10 sm:px-12 sm:py-14 lg:my-12 lg:-mr-14 lg:rounded-r-[2rem] lg:bg-white lg:px-14 lg:shadow-[18px_0_50px_rgba(35,31,25,0.08)]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a95e08]">Rooted in experience</p>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-[#171714] sm:text-5xl">
                Different responsibilities. One McAze standard.
              </h2>
              <div className="mt-6 space-y-4 text-base leading-7 text-[#5d5a55]">
                <p>
                  McAze is built around people who understand both the plan and the realities of the job site. Leadership sets the direction; field supervision turns that direction into organized daily progress.
                </p>
                <p>
                  Our team works across residential, commercial and specialized construction environments. Clear communication, practical sequencing and accountability connect every role—and help us deliver work clients can trust.
                </p>
              </div>
            </div>
            <div className="relative min-h-[360px] sm:min-h-[460px] lg:min-h-[560px]">
              <Image
                src="/images/site/home-why-mcaze-teamwork.webp"
                alt="McAze team coordinating a construction project on site"
                fill
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#a95e08]">Meet the team</p>
            <h2 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-[#171714] sm:text-5xl">
              The people guiding the work.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5d5a55]">
              Our team page will continue to grow as we introduce the people responsible for planning, supervision, coordination and craftsmanship at McAze.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-7 sm:grid-cols-2 lg:gap-10">
            {teamMembers.map((member) => (
              <article
                key={member.name}
                className="group overflow-hidden rounded-[1.75rem] border border-[#e3ddd2] bg-[#f7f3ec] shadow-[0_18px_55px_rgba(35,31,25,0.08)]"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#e8e2d8]">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    sizes="(min-width: 640px) 45vw, 100vw"
                    className={`object-cover ${member.imagePosition} transition duration-700 group-hover:scale-[1.025]`}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-6 pb-6 pt-32 text-white sm:px-8 sm:pb-8">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#ffc56d]">{member.role}</p>
                    <h3 className="mt-2 text-3xl font-bold tracking-[-0.025em]">{member.name}</h3>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#a95e08]">{member.experience}</p>
                  <p className="mt-4 leading-7 text-[#5d5a55]">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <InternalLinks title="Connect with the McAze team" links={[
        { label: "About McAze", href: "/about", description: "Learn about the standards behind our work." },
        { label: "Careers at McAze", href: "/careers", description: "Explore current opportunities and submit an application." },
        { label: "See our portfolio", href: "/portfolio", description: "Review projects coordinated by the McAze team." },
      ]} />
      <Cta />
    </>
  );
}
