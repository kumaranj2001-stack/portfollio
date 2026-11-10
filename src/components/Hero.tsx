import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Award, Boxes, GraduationCap, Trophy } from "lucide-react";
import Scene3D from "./Scene3D";

const statCards = [
  { big: "M.Pharm", small: "Highest Qualification", icon: GraduationCap },
  { big: "3", small: "Research Publications", icon: Award },
  { big: "1", bigSuffix: " 🏆", small: "First Prize — Poster Presentation", icon: Trophy },
  { big: "SAP", bigSub: "MM", small: "Core Specialisation", icon: Boxes },
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-24 lg:pt-28">
      <div className="grid min-h-[calc(100vh-6rem)] grid-cols-1 lg:grid-cols-2">
        {/* ─── LEFT : cream ─── */}
        <div className="relative overflow-hidden bg-paper">
          <Scene3D />
          <div className="relative z-10 flex flex-col justify-center px-6 pb-20 pt-16 sm:px-10 lg:px-14 lg:pb-24 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/50 bg-paper px-5 py-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="font-serif text-[10px] font-bold uppercase tracking-[0.28em] text-gold">
              Open to Opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-8 font-serif text-[2.8rem] font-bold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.8rem]"
          >
            Kumaran{" "}
            <span className="text-gold">J</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-5 font-serif text-[11px] font-bold uppercase tracking-[0.34em] text-stone"
          >
            SAP MM Consultant · Fresher
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-8 max-w-xl font-serif text-[17px] leading-[1.7] text-stone"
          >
            Aspiring <span className="font-bold text-ink">SAP MM Consultant</span>{" "}
            with hands-on command of the Materials Management module —
            procurement lifecycle (PR&nbsp;→&nbsp;PO&nbsp;→&nbsp;GR&nbsp;→&nbsp;IV),
            inventory control, material &amp; vendor master data, and SAP
            reporting. I pair a researcher&rsquo;s analytical discipline with an
            AI-first workflow to help organisations run accurate, efficient
            supply-chain and procurement operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="tel:+918940712139"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-serif text-base font-bold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-ink"
            >
              <span aria-hidden>📞</span>
              +91 89407 12139
            </a>
            <a
              href="mailto:kumaranj2001@gmail.com?subject=SAP%20MM%20Consultant%20Opportunity"
              className="group inline-flex items-center gap-3 rounded-full border border-stone/40 bg-transparent px-7 py-4 font-serif text-base font-bold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
            >
              <Mail className="h-4 w-4" />
              kumaranj2001@gmail.com
            </a>
            <a
              href="#about"
              className="group inline-flex items-center gap-2 font-serif text-[12px] font-bold uppercase tracking-[0.24em] text-stone transition-colors hover:text-teal"
            >
              About Me
              <span aria-hidden>↓</span>
            </a>
          </motion.div>
          </div>
        </div>

        {/* ─── RIGHT : dark ─── */}
        <div className="relative overflow-hidden bg-charcoal px-6 py-24 sm:px-10 lg:px-14">
          {/* Giant SAP watermark */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
            <span className="select-none font-serif text-[22rem] font-bold leading-none text-[#2a261f]/90 sm:text-[26rem]">
              SAP
            </span>
          </div>
          {/* subtle gold glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />

          <div className="relative z-10 mx-auto grid h-full max-w-lg grid-cols-2 gap-4 content-center">
            {statCards.map((c, i) => (
              <motion.div
                key={c.small}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.12 }}
                className="group rounded-2xl border border-graphite bg-coal/70 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-gold/40 sm:p-6"
              >
                <c.icon className="h-5 w-5 text-gold/80" />
                <div className="mt-4 font-serif text-3xl font-bold leading-none text-gold sm:text-[2.4rem]">
                  {c.big}
                  {c.bigSub && (
                    <span className="ml-1 font-serif text-2xl font-bold text-gold sm:text-3xl">
                      {c.bigSub}
                    </span>
                  )}
                  {c.bigSuffix}
                </div>
                <div className="mt-2 font-serif text-[13px] leading-snug text-mist">
                  {c.small}
                </div>
              </motion.div>
            ))}

            {/* Procurement lifecycle banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="col-span-2 rounded-2xl border border-gold/30 bg-gold/10 p-6 backdrop-blur-sm"
            >
              <div className="font-serif text-2xl font-bold text-gold sm:text-3xl">
                PR → PO → GR → Invoice
              </div>
              <div className="mt-2 font-serif text-[13px] leading-snug text-mist">
                Full Procurement Lifecycle Proficiency
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
