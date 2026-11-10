import { Section, SectionHeader, Reveal, ProgressBar } from "./shared";

const sapSkills = [
  { name: "Procurement Process", meta: "PR→PO→GR→IV", pct: 92 },
  { name: "SAP S/4HANA", meta: "MM Module", pct: 86 },
  { name: "Inventory Management", meta: "Stock Handling", pct: 88 },
  { name: "Vendor & Material Master Data", meta: "Master Records", pct: 80 },
  { name: "Goods Receipt & Invoice Verification", meta: "GR/IR", pct: 78 },
  { name: "SAP Navigation & Reporting", meta: "Transactions", pct: 82 },
  { name: "Org Structure Understanding", meta: "CoCd · Plant · Sloc", pct: 85 },
];

const techSkills = [
  "Tally & Cloud Accounting",
  "MS Word",
  "MS Excel",
  "MS PowerPoint",
  "Data Entry",
  "AI Prompt Engineering",
  "AI Tools",
  "Content Writing (AI-assisted)",
  "Data Analysis (AI)",
];

const competencies = [
  "Documentation & Record Keeping",
  "Quality Assurance Mindset",
  "Attention to Detail",
  "Team Collaboration",
  "Problem Solving",
  "Research & Analysis",
];

export default function Skills() {
  return (
    <Section id="skills" className="bg-paper">
      <SectionHeader eyebrow="Capabilities" title="Skills & Expertise" />

      <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Left: SAP MM skills */}
        <Reveal delay={0.1}>
          <div>
            <h3 className="border-b border-rule pb-3 font-serif text-[11px] font-bold uppercase tracking-[0.32em] text-stone">
              SAP MM Skills
            </h3>
            <div className="mt-8 flex flex-col gap-7">
              {sapSkills.map((s, i) => (
                <div key={s.name}>
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-serif text-[1.4rem] font-bold leading-tight text-ink">
                      {s.name}
                    </span>
                    <span className="shrink-0 font-serif text-[11px] font-bold uppercase tracking-[0.2em] text-stone">
                      {s.meta}
                    </span>
                  </div>
                  <div className="mt-3">
                    <ProgressBar progress={s.pct} delay={0.12 * i} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Right: tech + competencies */}
        <div className="flex flex-col gap-12">
          <Reveal delay={0.18}>
            <div>
              <h3 className="border-b border-rule pb-3 font-serif text-[11px] font-bold uppercase tracking-[0.32em] text-stone">
                Technical &amp; Software Skills
              </h3>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {techSkills.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-mint-border bg-teal-pale px-5 py-2.5 font-serif text-[14px] font-normal text-teal transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-5 font-serif text-[12px] italic text-stone-light">
                · 10+ AI tools for task automation · Gen AI Mastermind (Outskill,
                2-day program)
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div>
              <h3 className="border-b border-rule pb-3 font-serif text-[11px] font-bold uppercase tracking-[0.32em] text-stone">
                Core Competencies
              </h3>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {competencies.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-gold/40 bg-cream px-5 py-2.5 font-serif text-[14px] font-normal text-stone transition-transform duration-300 hover:-translate-y-0.5 hover:text-gold"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
