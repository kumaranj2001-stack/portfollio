import { Section, SectionHeader, Reveal } from "./shared";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <Section id="about" className="bg-paper">
      <SectionHeader eyebrow="About Me" title="SAP MM Consultant" />

      <div className="mt-16 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* ── Portrait ───────────────────────── */}
        <Reveal delay={0.1} className="relative">
          <div className="relative mx-auto w-full max-w-md">
            {/* Decorative gold frame offset */}
            <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border-2 border-gold/40" />
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] border border-teal/40" />

            <div className="relative overflow-hidden rounded-[2rem] border border-rule bg-ivory shadow-[0_30px_60px_-30px_rgba(26,23,19,0.4)]">
              <img
                src="/images/portrait.jpg"
                alt="Kumaran J — SAP MM Consultant"
                className="h-full w-full object-cover"
                style={{
                  aspectRatio: "4 / 5",
                  filter: "saturate(0.98) contrast(1.02)",
                }}
              />
              {/* Signature bar */}
              <div className="absolute inset-x-0 bottom-0 border-t border-rule/60 bg-paper/90 px-6 py-4 backdrop-blur-sm">
                <p className="font-serif text-[15px] font-bold italic text-ink">
                  &ldquo;Bringing rigour to materials, clarity to process.&rdquo;
                </p>
                <p className="mt-1 font-serif text-[12px] font-bold uppercase tracking-[0.24em] text-gold">
                  — Kumaran J
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Copy ───────────────────────────── */}
        <div>
          <Reveal delay={0.2}>
            <p className="font-serif text-[17px] leading-[1.8] text-stone">
              I am an M.Pharm graduate actively stepping into an{" "}
              <span className="font-bold text-ink">entry-level SAP MM Consultant</span>{" "}
              role, combining hands-on training in the Materials Management
              module — procurement lifecycles, inventory operations, material
              and vendor master data, and SAP navigation &amp; reporting — with
              the documentation discipline and quality-assurance mindset forged
              through six years of pharmaceutical higher education and published
              research.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-5 font-serif text-[17px] leading-[1.8] text-stone">
              I work with an AI-first toolset (10+ automation &amp; analysis
              tools), learn quickly, and translate complex business processes
              into clean, documented, auditable workflows. My goal is to help
              organisations streamline supply-chain and procurement operations
              through confident, detail-oriented MM consulting.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full border border-stone/40 bg-transparent px-6 py-3 font-serif text-[12px] font-bold uppercase tracking-[0.22em] text-stone transition-all duration-300 hover:-translate-y-0.5 hover:border-teal hover:text-teal"
              >
                View my ERP projects
                <CheckCircle2 className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
