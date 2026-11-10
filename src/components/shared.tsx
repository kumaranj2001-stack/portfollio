import { motion, useInView } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

/* ── Scroll reveal ────────────────────────────────────────── */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Editorial section heading ────────────────────────────── */
export function SectionHeader({
  eyebrow,
  title,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  light?: boolean; // for dark bg
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <Reveal>
        <span
          className={`font-serif text-[11px] font-bold uppercase tracking-[0.34em] ${
            light ? "text-gold" : "text-gold"
          }`}
        >
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`mt-4 font-serif text-[2.4rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem] ${
            light ? "text-[#f3ede1]" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
    </div>
  );
}

/* ── Section shell ────────────────────────────────────────── */
export function Section({
  id,
  children,
  className = "",
  dark = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 ${
        dark ? "section-dark text-[#f3ede1]" : "bg-cream text-ink"
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-14 lg:py-32">
        {children}
      </div>
    </section>
  );
}

/* ── Animated width progress bar (skills) ─────────────────── */
export function ProgressBar({
  progress,
  delay = 0,
}: {
  progress: number;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  return (
    <div ref={ref} className="relative h-[3px] w-full overflow-hidden rounded-full bg-rule">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${progress}%` } : {}}
        transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-gold to-gold-light"
      />
    </div>
  );
}

/* ── Count-up percentage ──────────────────────────────────── */
export function CountUp({
  to,
  suffix = "",
  className = "",
  delay = 0,
}: {
  to: number;
  suffix?: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView || !ref.current) return;
    import("framer-motion").then(({ animate }) => {
      animate(0, to, {
        duration: 1.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (v) => {
          if (ref.current)
            ref.current.textContent = `${v.toFixed(1)}${suffix}`;
        },
      });
    });
  }, [inView, to, suffix, delay]);

  return <span ref={ref} className={className}>{`0${suffix}`}</span>;
}
