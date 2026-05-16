import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ────────────────────────────────────────────────────────
   Certificates — grid carousel with lightbox modal
──────────────────────────────────────────────────────── */

type Certificate = {
  image: string;
  title: string;
  issuer: string;
  date: string;
  slug: string;
};

/* ════════════════════════════════════════
   Inline visual placeholders
════════════════════════════════════════ */
function RatingBadge({ stars }: { stars: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24"
             fill={i < stars ? "#e5c06e" : "none"}
             stroke="#e5c06e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  );
}

function PlayOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center
                    bg-brand-dark/40 backdrop-blur-[2px]
                    opacity-0 group-hover:opacity-100 transition-opacity duration-400">
      <div className="flex flex-col items-center gap-1.5">
        <span className="text-brand-cream text-2xl drop-shadow-lg">▶</span>
        <span className="text-brand-cream/70 text-xs">View</span>
      </div>
    </div>
  );
}

function TimerIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-goldLight">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );
}

function ShaplaIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-brand-rose">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
      <path fill="#0a0a0f" d="M8.5 9.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm7 0a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z"/>
      <path fill="#0a0a0f" d="M10.5 13.5c-.275 0-.45.108-.525.2-.422.51-1.13 1.646-1.86 2.56-.73.912-1.29 1.59-1.665 1.515-.37-.075-.37-.645.145-.785s.07-.41-.35-.45-1.58.43-2.06.67c-.47.24-.935.222-1.34-.06-.655-.45-.92-1.448-.81-2.005.114-.56.247-.83.245-.83z"/>
      <path fill="#0a0a0f" d="M12.5 13.5c.275 0 .45.108.525.2.423.51 1.13 1.646 1.86 2.56.73.912 1.29 1.59 1.665 1.515.37-.075.37-.645-.145-.785-.516-.141-.07-.41.35-.45s1.58.43 2.06.67c.47.24.935.222 1.34-.06.655-.45.92-1.448.81-2.005-.114-.56-.247-.83-.245-.83z"/>
    </svg>
  );
}

/* ════════════════════════════════════════
   Card
════════════════════════════════════════ */
function CertCard({ data, delay }: { data: Certificate; delay: number }) {
  return (
    <motion.div
       className="group relative rounded-2xl overflow-hidden cursor-pointer
                 border border-brand-darkBorder bg-brand-darkSurface
                 hover:border-brand-rose/30 transition-all duration-500
                 shadow-glow-sm hover:shadow-glow-rose"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay, duration: 0.55 }}
      onClick={() => {/* handled in parent wrapper */}}
      data-hover
    >
      {/* Certificate image */}
      <div className="relative aspect-[4/3] bg-brand-dark overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-contain
                     group-hover:scale-[1.04] transition-transform duration-700 ease-out"
        />
        <PlayOverlay />
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display font-bold text-brand-cream text-sm leading-snug
                         group-hover:text-brand-roseLight transition-colors line-clamp-2">
            {data.title}
          </h3>
          {/* Decorative rating */}
          <div className="hidden sm:flex flex-col items-end gap-0.5">
            <RatingBadge stars={5} />
          </div>
        </div>

        <div className="flex items-center justify-between text-[0.68rem] text-brand-muted">
          <span>{data.issuer}</span>
          <span className="flex items-center gap-1"><TimerIcon /> {data.date}</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ════════════════════════════════════════
   Lightbox
════════════════════════════════════════ */
function Lightbox({ data, onClose }: { data: Certificate; onClose: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-brand-dark/85 backdrop-blur-xl" />
      <motion.div
        className="relative z-10 w-full max-w-3xl max-h-[90vh]
                   rounded-3xl overflow-hidden border border-brand-darkBorder
                   bg-brand-dark shadow-glow-rose flex flex-col"
        initial={{ scale: 0.88, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.88, y: 30 }}
        transition={{ type: "spring", damping: 22, stiffness: 320 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-1.5 rounded-full
                     bg-brand-dark/70 backdrop-blur-sm
                     text-brand-muted hover:text-brand-rose transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {/* Certificate image */}
        <div className="relative aspect-[4/3] bg-brand-darkSurface overflow-hidden">
          <img
            src={data.image} alt={data.title}
            className="w-full h-full object-contain bg-brand-dark"
          />
        </div>

        {/* Body */}
        <div className="p-7 overflow-y-auto max-h-[40vh]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <ShaplaIcon />
              <h3 className="font-display font-bold text-brand-cream text-xl">{data.title}</h3>
            </div>
            <p className="text-brand-muted text-sm">
              Issuer: <span className="text-brand-cream/80 font-semibold">{data.issuer}</span>
            </p>
            <p className="text-brand-muted text-sm">
              Earned: <span className="text-brand-goldLight font-semibold">{data.date}</span>
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ════════════════════════════════════════
   Main export
════════════════════════════════════════ */
const CERTS: Certificate[] = [
  {
    image:  "/certificate1.png",
    title:  "Professional Frontend Certificate",
    issuer: "TechAcademy",
    date:   "Oct 2024",
    slug:   "frontend-pro",
  },
  {
    image:  "/certificate2.png",
    title:  "React Developer Certification",
    issuer: "Meta",
    date:   "Jun 2024",
    slug:   "react-meta",
  },
  {
    image:  "/certificate1.png",
    title:  "Tailwind CSS Mastery",
    issuer: "Tailwind Labs",
    date:   "Sep 2024",
    slug:   "tailwind-mastery",
  },
  {
    image:  "/certificate2.png",
    title:  "Advanced JavaScript Patterns",
    issuer: "Udemy",
    date:   "Jan 2025",
    slug:   "js-advanced",
  },
  {
    image:  "/certificate1.png",
    title:  "TypeScript Fundamentals",
    issuer: "Microsoft",
    date:   "Dec 2024",
    slug:   "ts-ms",
  },
  {
    image:  "/certificate2.png",
    title:  "Git & GitHub Workflow",
    issuer: "GitHub",
    date:   "Aug 2024",
    slug:   "git-github",
  },
];

export default function Certificates() {
  const [active, setActive] = useState<Certificate | null>(null);

  return (
    <section
      id="certificates"
      className="relative py-28 px-6 md:px-10
                 bg-brand-dark overflow-hidden"
    >
      <div className="orb orb-b" style={{ bottom: "10%", left: "-8%" }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-brand-roseLight font-semibold mb-2">
            Credentials
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-cream">
            Certificates
          </h2>
          <div className="section-rule mt-5 w-24" />
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTS.map((c, i) => (
            <CertCard key={c.slug} data={c} delay={i * 0.08} />
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {active && (
          <Lightbox data={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
