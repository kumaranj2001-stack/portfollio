import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "research", label: "Research" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navText = "text-stone";
  const navHover = "hover:text-ink";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[90] transition-all duration-500 ${
          scrolled
            ? "bg-paper/95 backdrop-blur-md border-b border-rule py-3 shadow-[0_2px_20px_-12px_rgba(26,23,19,0.2)]"
            : "bg-paper/70 backdrop-blur-sm py-5"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-14">
          <a href="#top" className="group">
            <span className="font-serif text-2xl font-bold tracking-tight text-ink sm:text-[1.85rem]">
              Kumaran <span className="text-ink">J</span>
            </span>
          </a>

          <nav className="hidden items-center gap-10 lg:flex">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`font-serif text-[12px] font-bold uppercase tracking-[0.28em] ${navText} ${navHover} transition-colors duration-300`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-rule text-ink transition-colors hover:border-gold hover:text-gold lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex flex-col bg-paper"
          >
            <div className="flex items-center justify-between px-6 py-5 sm:px-10">
              <span className="font-serif text-2xl font-bold text-ink">
                Kumaran J
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-rule text-ink"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col items-start justify-center gap-6 px-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.07 }}
                  className="font-serif text-5xl font-bold text-ink transition-colors hover:text-gold"
                >
                  {l.label}.
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
