import { Section, SectionHeader, Reveal } from "./shared";
import { Trophy } from "lucide-react";

const publications = [
  "Formulation and Evaluation of Ocimum Species Extract Ointments for Mosquito Repellence",
  "Analgesic Effect Studies on Acetic Acid-Induced Writhing Test using Withania somnifera and Piper nigrum Herbal Extracts",
  "A Multidisciplinary Review of a Zoonotic Disease: Mpox",
];

export default function Research() {
  return (
    <Section id="research" className="bg-cream">
      <SectionHeader eyebrow="Academic Contributions" title="Research & Publications" />

      <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left: Publications list */}
        <Reveal delay={0.1}>
          <div>
            <h3 className="border-b border-rule pb-3 font-serif text-[11px] font-bold uppercase tracking-[0.32em] text-stone">
              Publications
            </h3>
            <ol className="mt-4 divide-y divide-rule">
              {publications.map((p, i) => (
                <li
                  key={p}
                  className="group grid grid-cols-[3.2rem_1fr] items-start gap-4 py-6 transition-colors duration-300 hover:bg-paper/60"
                >
                  <span className="pt-1 font-serif text-2xl font-bold text-gold">
                    0{i + 1}
                  </span>
                  <p className="font-serif text-[1.35rem] font-normal leading-snug text-ink transition-colors duration-300 group-hover:text-teal">
                    {p}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        {/* Right: Achievements */}
        <Reveal delay={0.2}>
          <div>
            <h3 className="border-b border-rule pb-3 font-serif text-[11px] font-bold uppercase tracking-[0.32em] text-stone">
              Achievements
            </h3>

            <div className="mt-8 rounded-3xl bg-ink p-8 text-cream sm:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-gold/15 ring-1 ring-gold/25">
                  <Trophy className="h-8 w-8 text-gold" strokeWidth={1.6} />
                </div>
                <div>
                  <h4 className="font-serif text-2xl font-bold leading-tight text-gold sm:text-[1.85rem]">
                    First Prize — Poster Presentation
                  </h4>
                  <p className="mt-4 font-serif text-[16px] leading-relaxed text-mist">
                    &ldquo;Monkeypox: A Comprehensive Review of Transmission,
                    Pathogenesis and Manifestation&rdquo; — Awarded first place
                    in competitive academic poster presentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
