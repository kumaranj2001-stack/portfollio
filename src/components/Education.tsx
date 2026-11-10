import { Section, SectionHeader, Reveal, CountUp } from "./shared";

const degrees = [
  {
    degree: "Master of Pharmacy",
    short: "M.Pharm",
    institution: "Sri Vijay Vidyalaya College of Pharmacy",
    university: "Tamil Nadu Dr. M.G.R. Medical University, Chennai",
    years: "2023 — 2025",
    score: 64.7,
  },
  {
    degree: "Bachelor of Pharmacy",
    short: "B.Pharm",
    institution: "P.S.V. College of Pharmaceutical Science and Research, Krishnagiri",
    university: "Tamil Nadu Dr. M.G.R. Medical University, Chennai",
    years: "2019 — 2023",
    score: 67.0,
  },
];

export default function Education() {
  return (
    <Section id="education" className="bg-cream">
      <SectionHeader eyebrow="Academic Background" title="Education" />

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {degrees.map((d, i) => (
          <Reveal key={d.short} delay={0.1 * i}>
            <div className="group relative overflow-hidden rounded-3xl border border-rule bg-ivory p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(47,110,92,0.25)] sm:p-10">
              {/* top accent bar (gold → teal) */}
              <div className="absolute inset-x-0 top-0 h-[4px] bg-gradient-to-r from-gold via-[#8a9f6f] to-teal" />

              <h3 className="font-serif text-[1.9rem] font-bold leading-tight text-ink sm:text-[2.1rem]">
                {d.degree}{" "}
                <span className="font-normal text-stone-light">({d.short})</span>
              </h3>
              <p className="mt-4 font-serif text-[17px] font-normal leading-snug text-stone">
                {d.institution}
              </p>
              <p className="mt-1.5 font-serif text-[15px] italic leading-snug text-stone-light">
                {d.university}
              </p>

              <div className="mt-12 flex items-end justify-between">
                <span className="font-serif text-[13px] font-bold uppercase tracking-[0.25em] text-gold">
                  {d.years}
                </span>
                <span className="font-serif text-4xl font-bold text-teal sm:text-5xl">
                  <CountUp to={d.score} suffix="%" />
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
