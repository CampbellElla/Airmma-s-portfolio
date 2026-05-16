import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ══════════════════════════════════════
   Shapes & decorations
══════════════════════════════════════ */
function RingDeco() {
  return (
    <svg
      className="absolute -top-10 -right-10 opacity-10 text-brand-rose"
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
    >
      <circle cx="60" cy="60" r="55" stroke="currentColor" strokeWidth="1" />
      <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="60" cy="60" r="25" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}

/* ══════════════════════════════════════
   Floating ember particles
══════════════════════════════════════ */
const EMBER_COLORS = [
  "rgba(212,114,154,0.7)",
  "rgba(229,192,110,0.7)",
  "rgba(240,162,188,0.5)",
  "rgba(244,220,168,0.5)",
];

function EmberParticles() {
  const positions = [
    { left: 5, top: 12 },
    { left: 18, top: 60 },
    { left: 75, top: 8 },
    { left: 90, top: 55 },
    { left: 32, top: 80 },
    { left: 62, top: 90 },
    { left: 88, top: 30 },
    { left: 12, top: 40 },
    { left: 50, top: 5 },
    { left: 70, top: 70 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[1px]"
          style={{
            left: `${pos.left}%`,
            top: `${pos.top}%`,
            width: [3, 5, 4, 6][i % 4],
            height: [3, 5, 4, 6][i % 4],
            background: EMBER_COLORS[i % EMBER_COLORS.length],
            boxShadow: `0 0 6px ${EMBER_COLORS[i % EMBER_COLORS.length]}`,
          }}
          animate={{
            y: [0, -20, 0, 15, 0],
            x: [0, 8, -5, 0],
            opacity: [0.4, 0.9, 0.5, 1, 0.4],
            scale: [0.8, 1.3, 0.9, 1.1, 0.8],
          }}
          transition={{
            duration: [3.5, 4.2, 3.8, 4.5, 3.2][i % 5],
            repeat: Infinity,
            delay: [0, 0.5, 1.2, 2.8, 0.3, 1.7, 0.8, 3.1, 1.5, 2.2][i],
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ══════════════════════════════════════
   Certificate type
══════════════════════════════════════ */
type Certificate = {
  image: string;
  title: string;
  issuer: string;
  date: string;
  slug: string;
  description: string;
};

/* ══════════════════════════════════════
   Card
══════════════════════════════════════ */
function CertCard({
  data,
  onOpen,
  delay,
}: {
  data: Certificate;
  onOpen: () => void;
  delay: number;
}) {
  return (
    <motion.div
      className="group relative rounded-[1.25rem] overflow-hidden cursor-pointer
                 border border-brand-darkBorder bg-brand-dark/60
                 backdrop-blur-md
                 shadow-glow-sm
                 before:content-[''] before:absolute before:inset-0
                 before:rounded-[1.25rem]
                 before:bg-gradient-to-br
                 before:from-brand-rose/0
                 before:via-brand-rose/0
                 before:to-brand-gold/0
                 before:opacity-0
                 group-hover:before:opacity-100
                 group-hover:before:from-brand-rose/8
                 group-hover:before:via-brand-rose/4
                 group-hover:before:to-brand-gold/8
                 before:transition-opacity before:duration-700
                 after:content-[''] after:absolute after:inset-0
                 after:rounded-[1.25rem]
                 after:pointer-events-none after:opacity-0
                 group-hover:after:opacity-100
                 after:shadow-[0_0_32px_rgba(212,114,154,0.18)]
                 after:shadow-glow-rose
                 after:transition-opacity after:duration-600"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.025, y: -6 }}
      onClick={onOpen}
      data-hover
    >
      {/* Glowing accent bar on top */}
      <motion.div
        className="absolute top-0 inset-x-0 h-[2.5px] z-20"
        style={{
          background: "linear-gradient(90deg, #d4729a 0%, #e5c06e 100%)",
        }}
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: delay + 0.2, duration: 0.7, ease: "easeOut" }}
      />

      {/* Image */}
      <div className="relative aspect-[4/3] bg-brand-darkSurface overflow-hidden">
        <motion.img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-contain p-4 relative z-10"
          whileHover={{ scale: 1.06, rotate: 1 }}
          transition={{ type: "spring", damping: 18, stiffness: 260 }}
        />

        {/* Shimmer sweep on hover */}
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-0
                        group-hover:opacity-100 transition-opacity duration-500"
        >
          <div
            className="absolute inset-0 bg-gradient-to-r
                          from-transparent via-brand-rose/8
                          to-transparent
                          -translate-x-full group-hover:translate-x-[120%]
                          transition-transform duration-[1.8s] ease-in-out"
          />
        </div>

        {/* Hover overlay  */}
        <motion.div
          className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2
                      bg-brand-dark/55 backdrop-blur-md"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.div
            className="w-14 h-14 rounded-full
                       bg-gradient-to-br from-brand-rose to-brand-gold
                       flex items-center justify-center shadow-glow-md"
            whileHover={{ scale: 1.15, rotate: 8 }}
            transition={{ type: "spring", damping: 14 }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0a0a0f"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </motion.div>
          <span className="text-brand-cream text-xs font-semibold tracking-wider uppercase">
            Preview
          </span>
        </motion.div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col gap-2.5">
        <div className="flex items-start justify-between gap-2">
          <h3
            className="font-display font-bold text-brand-cream text-[0.9rem]
                         leading-snug transition-colors duration-300
                         group-hover:text-brand-roseLight"
          >
            {data.title}
          </h3>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <RingDeco />
          </motion.div>
        </div>

        <p className="text-brand-muted text-[0.75rem] leading-relaxed">
          {data.description}
        </p>

        <div className="flex items-center justify-between text-[0.65rem] text-brand-muted pt-2.5 border-t border-brand-darkBorder/50">
          <span className="font-semibold text-brand-cream/50">
            {data.issuer}
          </span>
          <span className="flex items-center gap-1 text-brand-goldLight font-medium">
            {data.date}
          </span>
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        className="absolute -bottom-1 -right-1
                   glass rounded-xl px-2.5 py-1
                   text-[0.6rem] font-semibold
                   text-brand-roseLight tracking-wider uppercase
                   shadow-glow-sm z-20"
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        ★ Certified
      </motion.div>
    </motion.div>
  );
}

/* ══════════════════════════════════════
   Lightbox / Modal
══════════════════════════════════════ */
function Lightbox({
  data,
  onClose,
}: {
  data: Certificate;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* ── Backdrop ── */}
      <motion.div
        className="absolute inset-0 bg-brand-dark/85 backdrop-blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
      />

      {/* ── Ambient glow behind modal ── */}
      <motion.div
        className="absolute | left-1/2 -translate-x-1/2
                   w-[420px] h-[420px] rounded-full
                   bg-radial-gradient(circle, rgba(212,114,154,0.18), transparent 70%)
                   pointer-events-none"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      />

      {/* ── Modal card ── */}
      <motion.div
        className="relative z-10 w-full max-w-2xl
                   rounded-[1.75rem] overflow-hidden
                   border border-brand-darkBorder
                   bg-brand-dark shadow-glow-rose
                   flex flex-col max-h-[92vh]"
        initial={{ scale: 0.85, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.85, y: 40, opacity: 0 }}
        transition={{ type: "spring", damping: 22, stiffness: 340, mass: 0.85 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent bar */}
        <div
          className="h-[3px] w-full shrink-0"
          style={{
            background: "linear-gradient(90deg, #d4729a, #e5c06e, #d4729a)",
          }}
        />

        {/* ── Close button ── */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30
                     w-9 h-9 rounded-full
                     bg-brand-darkSurface/80 backdrop-blur-md
                     border border-brand-darkBorder/70
                     flex items-center justify-center
                     text-brand-muted hover:text-brand-rose
                     transition-colors duration-200"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* ── Certificate image ── */}
        <div className="relative aspect-[4/3] bg-brand-darkSurface overflow-hidden shrink-0">
          <motion.img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-contain p-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 320,
              delay: 0.1,
            }}
          />
          {/* Top/bottom gradient fades */}
          <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-brand-dark/50 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-brand-dark/50 to-transparent pointer-events-none" />
        </div>

        {/* ── Body ── */}
        <div className="p-7 sm:p-8 flex flex-col gap-3 overflow-y-auto flex-1">
          <div className="flex items-center gap-3">
            <span
              className="shrink-0 inline-flex items-center justify-center
                         w-8 h-8 rounded-full
                         bg-gradient-to-br from-brand-rose to-brand-gold"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0a0a0f"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 10L12 3 2 10l10 7 10-7z" />
                <path d="M6 12v5c0 2 6 3 6 3s6-1 6-3v-5" />
              </svg>
            </span>
            <h3 className="font-serif font-bold text-brand-cream text-lg leading-snug">
              {data.title}
            </h3>
          </div>

          <p className="text-brand-muted text-sm leading-relaxed">
            {data.description}
          </p>

          <div
            className="flex flex-wrap items-center gap-x-6 gap-y-2
                          pt-3 mt-1 border-t border-brand-darkBorder/50"
          >
            <div className="flex items-center gap-2">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9ca3af"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="text-brand-muted text-xs">Issuer</span>
              <span className="text-brand-cream/80 text-xs font-semibold">
                {data.issuer}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#9ca3af"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span className="text-brand-muted text-xs">Earned</span>
              <span className="text-brand-goldLight text-xs font-semibold">
                {data.date}
              </span>
            </div>
          </div>

          {/* Decorative bottom chip */}
          <div className="flex items-center justify-between pt-2">
            <span
              className="inline-flex items-center gap-1.5 rounded-full
                         border border-brand-rose/25 bg-brand-rose/5
                         px-3 py-1 text-[0.65rem] font-semibold
                         text-brand-roseLight tracking-wider uppercase"
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
              </svg>
              Verified
            </span>
            <span className="text-brand-muted text-[0.6rem] tracking-wider">
              {data.slug}
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ══════════════════════════════════════
   Certificate data — exactly 2 entries
══════════════════════════════════════ */
const CERTS: Certificate[] = [
  {
    image: "/certificate2.png",
    title: "Frontend Development Training Certificate",
    issuer: "Gigonest Technology",
    date: "Completed 2026",
    slug: "gigonest-frontend-training",
    description:
      "Successfully completed frontend development training with focus on React, JavaScript, and responsive UI development.",
  },
  {
    image: "/certificate1.png",
    title: "Frontend Development Internship Certificate",
    issuer: "Truemind Innovation Ltd",
    date: "Completed 2026",
    slug: "truemind-frontend-internship",
    description:
      "Completed hands-on frontend development training focused on responsive web design and modern frontend technologies.",
  },
];

/* ══════════════════════════════════════
   Main section
══════════════════════════════════════ */
export default function Certificates() {
  const [active, setActive] = useState<Certificate | null>(null);

  return (
    <section
      id="certificates"
      className="relative py-28 px-6 md:px-10
                 bg-brand-dark overflow-hidden"
    >
      {/* ── Ambient blobs ── */}
      <div className="orb orb-a" style={{ top: "5%", right: "-10%" }} />
      <div className="orb orb-b" style={{ bottom: "8%", left: "-8%" }} />

      {/* ── Floating particles ── */}
      <EmberParticles />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-[0.65rem] uppercase tracking-[0.3em]
                         text-brand-roseLight font-semibold mb-2 flex items-center gap-2"
          >
            <span className="w-4 h-px bg-brand-rose" />
            Credentials
            <span className="w-4 h-px bg-brand-rose" />
          </p>
          <h2
            className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem]
                         font-bold text-brand-cream leading-[1.1]"
          >
            Certificates &amp; <br />
            <span
              className="font-script text-brand-rose -mt-2 block
                             text-[2.8rem] sm:text-[3.4rem] lg:text-[4rem]"
            >
              Achievements
            </span>
          </h2>
          <div className="section-rule mt-5 w-24" />
        </motion.div>

        {/* ── Cards — centered 2-column layout ── */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6 lg:gap-8
                     max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {CERTS.map((c, i) => (
            <CertCard
              key={c.slug}
              data={c}
              delay={i * 0.15}
              onOpen={() => setActive(c)}
            />
          ))}
        </motion.div>

        {/* ── Bottom accent line ── */}
        <motion.div
          className="mt-16 mx-auto h-px w-0 bg-gradient-to-r
                     from-transparent via-brand-rose/40 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {active && <Lightbox data={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
