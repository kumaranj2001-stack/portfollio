import { Reveal, Section, SectionHeader } from "./shared";
import Scene3D from "./Scene3D";

/* Outline icons matching the reference style */
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gold"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gold"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <polyline points="3 7 12 13 21 7" />
  </svg>
);

const PinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gold"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ArrowUpRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const PHONE = "+91 89407 12139";
const EMAIL = "kumaranj2001@gmail.com";
const LOCATION_LINE1 = "Jayapuram, Tirupattur";
const LOCATION_LINE2 = "Tamil Nadu, India — 635651";
// Google Maps search URL for the address
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Jayapuram, Tirupattur, Tamil Nadu 635651");

function ContactCard({
  icon,
  label,
  children,
  href,
  cta,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  href?: string;
  cta?: React.ReactNode;
}) {
  const Wrapper: any = href ? "a" : "div";
  return (
    <Wrapper
      href={href}
      target={href && href.startsWith("http") ? "_blank" : undefined}
      rel={href && href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group relative flex h-full min-h-[260px] flex-col items-center justify-between overflow-hidden rounded-3xl border border-[#3a352b] bg-[#24201a]/70 px-5 py-8 text-center transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:bg-[#2a251e] sm:px-6 sm:py-10"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-24 bg-gold/5 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* top block: icon + label (fixed top for cross-card alignment) */}
      <div className="flex w-full flex-col items-center gap-3">
        <div className="grid h-12 w-12 place-items-center">{icon}</div>
        <span className="font-serif text-[10px] font-bold uppercase tracking-[0.34em] text-gold sm:text-[11px]">
          {label}
        </span>
      </div>

      {/* middle block: primary value (centered, aligned across cards) */}
      <div className="flex w-full flex-1 items-center justify-center px-1">
        <div className="flex w-full flex-col items-center gap-1.5 break-words text-center">
          {children}
        </div>
      </div>

      {/* bottom block: cta (fixed bottom) */}
      <div className="h-8 w-full">{cta && <div>{cta}</div>}</div>
    </Wrapper>
  );
}

export default function Contact() {
  return (
    <Section id="contact" dark className="!pt-28 !pb-20 lg:!pt-36 lg:!pb-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Scene3D dark />
      </div>
      <SectionHeader
        eyebrow="Get in Touch"
        title="Let's Connect"
        align="center"
        light
      />

      <Reveal delay={0.15}>
        <p className="mx-auto mt-6 max-w-3xl text-center font-serif text-lg leading-[1.8] text-[#a39a83] sm:text-[1.35rem] sm:leading-[1.7]">
          I'm actively seeking entry-level SAP MM Consultant roles. Let's talk
          about how I can contribute to your supply chain operations.
        </p>
      </Reveal>

      <div className="mx-auto mt-16 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Reveal delay={0.1}>
          <ContactCard
            icon={<PhoneIcon />}
            label="Phone"
            href="tel:+918940712139"
          >
            <span className="block whitespace-nowrap font-serif text-[1.3rem] font-bold leading-tight tracking-tight text-[#f5efe0] sm:text-[1.45rem] lg:text-[1.55rem]">
              {PHONE}
            </span>
          </ContactCard>
        </Reveal>

        <Reveal delay={0.2}>
          <ContactCard
            icon={<MailIcon />}
            label="Email"
            href={`mailto:${EMAIL}?subject=SAP%20MM%20Consultant%20Opportunity`}
          >
            <span className="block whitespace-nowrap font-serif text-[1.2rem] font-bold leading-tight tracking-[-0.01em] text-[#f5efe0] sm:text-[1.35rem] lg:text-[1.48rem]">
              {EMAIL}
            </span>
          </ContactCard>
        </Reveal>

        <Reveal delay={0.3}>
          <ContactCard
            icon={<PinIcon />}
            label="Location"
            href={MAPS_URL}
            cta={
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 font-serif text-[9px] font-bold uppercase tracking-[0.26em] text-gold transition-colors duration-300 group-hover:bg-gold/15 sm:text-[10px]">
                Open in Google Maps
                <ArrowUpRight />
              </span>
            }
          >
            <span className="block whitespace-nowrap font-serif text-[1.25rem] font-bold leading-tight text-[#f5efe0] sm:text-[1.4rem] lg:text-[1.55rem]">
              {LOCATION_LINE1}
            </span>
            <span className="mt-1.5 block whitespace-nowrap font-serif text-[13px] italic text-[#a39a83] sm:text-[14px]">
              {LOCATION_LINE2}
            </span>
          </ContactCard>
        </Reveal>
      </div>
    </Section>
  );
}
