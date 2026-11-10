import { Section, SectionHeader, Reveal } from "./shared";
import { ArrowUpRight, Boxes, Building2, Globe, KeyRound, User } from "lucide-react";

const projects = [
  {
    icon: Boxes,
    kicker: "Pharmaceutical ERP · Live",
    title: "Curavite Pharma ERP",
    desc: "Full-featured ERP web application purpose-built for pharmaceutical operations — materials, vendors, purchase orders, inventory tracking and analytics dashboards, deployed live.",
    href: "https://curavitepharma.netlify.app/",
    tag: "curavitepharma.netlify.app",
    demo: { user: "Demo", pass: "demo" },
    accent: "from-teal/15 to-transparent",
    accentBorder: "hover:border-teal/50",
    accentIcon: "text-teal",
    featured: true,
  },
  {
    icon: Building2,
    kicker: "Construction Company Website · Live",
    title: "KDS Builders",
    desc: "Responsive website and platform built for a construction company — project showcase, service pages, contact integration and a clean business presence, optimised for desktop, tablet and mobile.",
    href: "https://kdsbuilders.netlify.app/",
    tag: "kdsbuilders.netlify.app",
    accent: "from-gold/15 to-transparent",
    accentBorder: "hover:border-gold/50",
    accentIcon: "text-gold",
    featured: true,
  },
  {
    icon: Globe,
    kicker: "You're viewing it",
    title: "My Personal Portfolio",
    desc: "This very portfolio — designed and developed from scratch as a living resume. Editorial typography, tasteful motion, and a fully responsive layout built with React, Tailwind CSS and Framer Motion.",
    href: "#top",
    tag: "React · Tailwind · Framer Motion",
    accent: "from-stone/10 to-transparent",
    accentBorder: "hover:border-stone/40",
    accentIcon: "text-stone",
  },
];

function DemoCredentials({ user, pass }: { user: string; pass: string }) {
  return (
    <div className="mt-5 rounded-2xl border border-rule bg-cream/70 p-4">
      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-stone">
        <KeyRound className="h-3 w-3 text-gold" />
        Demo credentials
      </div>
      <div className="mt-2.5 grid grid-cols-2 gap-2 text-[13px]">
        <div className="flex items-center gap-2 rounded-lg bg-ivory px-3 py-2">
          <User className="h-3.5 w-3.5 text-stone-light" />
          <span className="font-serif font-bold text-stone">user:</span>
          <span className="font-serif font-bold text-ink">{user}</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg bg-ivory px-3 py-2">
          <KeyRound className="h-3.5 w-3.5 text-stone-light" />
          <span className="font-serif font-bold text-stone">pass:</span>
          <span className="font-serif font-bold text-ink">{pass}</span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" className="bg-paper">
      <SectionHeader eyebrow="Selected Work" title="Projects" />
      <p className="mt-5 max-w-xl font-serif text-[16px] leading-[1.7] text-stone">
        Fully responsive, live-deployed ERP systems built end-to-end — plus this
        portfolio itself. Click any card to launch the live site in a new tab.
      </p>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {/* Featured ERPs */}
        {projects
          .filter((p) => p.featured)
          .map((p, i) => (
            <Reveal key={p.title} delay={0.1 * i}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className={`group relative block h-full overflow-hidden rounded-3xl border border-rule bg-ivory p-8 transition-all duration-500 hover:-translate-y-1 ${p.accentBorder} hover:shadow-[0_24px_60px_-24px_rgba(47,110,92,0.28)] sm:p-10`}
              >
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br ${p.accent} blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="relative flex items-start justify-between">
                  <div
                    className={`grid h-14 w-14 place-items-center rounded-2xl border border-rule bg-paper ${p.accentIcon}`}
                  >
                    <p.icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-rule bg-cream px-3 py-1.5 font-serif text-[10px] font-bold uppercase tracking-[0.24em] text-stone-light">
                    Live
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
                    </span>
                  </div>
                </div>

                <div className="relative mt-8 font-serif text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
                  {p.kicker}
                </div>
                <h3 className="relative mt-3 font-serif text-[1.8rem] font-bold leading-tight text-ink sm:text-[2.1rem]">
                  {p.title}
                </h3>
                <p className="relative mt-4 font-serif text-[15px] leading-[1.65] text-stone">
                  {p.desc}
                </p>

                {p.demo && <DemoCredentials user={p.demo.user} pass={p.demo.pass} />}

                <div className="relative mt-6 flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-rule bg-cream px-4 py-1.5 font-serif text-[10px] font-bold uppercase tracking-[0.24em] text-stone-light">
                    {p.tag}
                  </span>
                  <span className={`inline-flex items-center gap-2 font-serif text-[13px] font-bold ${p.accentIcon} transition-transform duration-300 group-hover:translate-x-0.5`}>
                    Visit live site
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
      </div>

      {/* Portfolio (smaller) */}
      <Reveal delay={0.2}>
        <a
          href="#top"
          className="group relative mt-6 block overflow-hidden rounded-3xl border border-rule bg-ivory p-8 transition-all duration-500 hover:-translate-y-1 hover:border-stone/40 hover:shadow-[0_20px_50px_-20px_rgba(26,23,19,0.25)] sm:p-10"
        >
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-5">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-rule bg-paper">
                <Globe className="h-6 w-6 text-stone" strokeWidth={1.6} />
              </div>
              <div>
                <div className="font-serif text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
                  {projects[2].kicker}
                </div>
                <h3 className="mt-2 font-serif text-[1.8rem] font-bold leading-tight text-ink sm:text-[2.1rem]">
                  {projects[2].title}
                </h3>
                <p className="mt-3 max-w-2xl font-serif text-[15px] leading-[1.65] text-stone">
                  {projects[2].desc}
                </p>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-stone transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {projects[2].tag.split(" · ").map((t) => (
              <span
                key={t}
                className="rounded-full border border-rule bg-cream px-4 py-1.5 font-serif text-[10px] font-bold uppercase tracking-[0.24em] text-stone-light"
              >
                {t}
              </span>
            ))}
          </div>
        </a>
      </Reveal>
    </Section>
  );
}
