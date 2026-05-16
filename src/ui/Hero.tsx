import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/* ════════════════════════════════════════
   Inline SVG icon components
════════════════════════════════════════ */
const IconGithub  = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.375 0 0 5.375 0 12c0 5.313 3.438 9.813 8.188 11.389.6.113.813-.263.813-.578v-2.053c-3.338.725-4.042-1.613-4.042-1.613C4.538 17.875 3.788 17 3.788 17c-1.037-.838.1-.838.1-.838 1.363.1 2.088 1.4 2.088 1.4 1.225 2.075 3.225 1.475 4.025 1.138.125-.875.5-1.438.9-1.763-3.163-.363-6.5-1.588-6.5-7.05 0-1.55.563-2.825 1.475-3.825-.15-.363-.663-1.85.15-3.875 0 0 1.25-.4 3.95 1.45A13.788 13.788 0 0 1 12 5.225c1.238 0 2.488-.138 3.625-.4 2.7-1.85 3.95-1.45 3.95-1.45.813 2.125.287 3.513.137 3.875.925 1 1.463 2.275 1.463 3.825C16.5 16.438 14.6 18.4 11.65 18.4c-2.625 0-4.763-1.75-5.5-4.163l-.375-1.45C5.138 17.975 6.563 18.9 8.125 18.9c.1 0 .188-.013.563-.038V21c0 .338.225.688.825.575A12.018 12.018 0 0 0 24 12c0-6.625-5.375-12-12-12Z"/></svg>;
const IconLinkedIn = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"/></svg>;
const IconArrowDown = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>;
const IconMail   = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z"/><polyline points="22,6 12,13 2,6"/></svg>;

const ROLES = [
  "Frontend Developer",
  "React Enthusiast",
  "Creative Coder",
  "UI/UX Lover",
];

function RoleCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % ROLES.length), 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative h-10 sm:h-12 overflow-hidden">
      {ROLES.map((role, idx) => (
        <motion.span
          key={role}
          className="absolute inset-0 flex items-center font-script text-3xl sm:text-4xl
                     bg-gradient-to-r from-brand-rose via-brand-gold to-brand-rose
                     bg-[length:200%_100%] animate-gradient-x"
          style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                   backgroundClip: "text", color: "transparent" }}
          initial={{ y: idx === i ? "0%" : "120%", opacity: idx === i ? 1 : 0 }}
          animate={{
            y: idx === i ? "0%" : idx < i ? "-120%" : "120%",
            opacity: idx === i ? 1 : 0,
          }}
          transition={{ type: "spring", damping: 18, stiffness: 280 }}
        >
          {role}
        </motion.span>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
                 bg-gradient-to-br from-brand-dark via-[#0d0b18] to-brand-darkAlt
                 pt-20"
    >
      {/* ── Ambient orbs ── */}
      <div className="orb orb-a" />
      <div className="orb orb-b" />

      {/* ── Glow overlay ── */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2
                       w-[720px] h-[720px]
                       bg-radial-gradient(circle,rgba(212,114,154,0.07) 0%,transparent 70%)
                       -translate-x-1/2 -translate-y-1/2"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10
                      grid lg:grid-cols-2 gap-16 items-center">

        {/* ── Text column ── */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow */}
          <motion.p
            className="flex items-center gap-2 text-xs uppercase tracking-[0.25em]
                       text-brand-roseLight font-semibold"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.55 }}
          >
            <span className="w-6 h-px bg-brand-rose" />
            Portfolio 2025
          </motion.p>

          {/* Headline */}
          <h1 className="font-display font-black leading-[1.05] tracking-tight
                         text-4xl sm:text-5xl lg:text-[3.75rem]">
            <span className="text-brand-cream/90 block">Hello, I'm</span>
            <motion.span
              className="block text-5xl sm:text-6xl lg:text-[4.5rem]
                         bg-gradient-to-r from-brand-rose via-brand-pink to-brand-gold
                         bg-[length:200%_100%] animate-gradient-x"
              style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                       backgroundClip: "text", color: "transparent" }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              Emmanuella Campbell
            </motion.span>
          </h1>

          {/* Role carousel */}
          <RoleCarousel />

          {/* Bio */}
          <motion.p
            className="text-brand-muted leading-relaxed max-w-lg text-sm sm:text-base"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            A passionate frontend engineer who loves turning ideas into
            delightful, interactive digital experiences. Based in Nigeria —
            building beautiful interfaces with <span className="text-brand-cream font-medium">React</span>,{" "}
            <span className="text-brand-cream font-medium">TypeScript</span> &amp;{" "}
            <span className="text-brand-cream font-medium">Tailwind CSS</span>.
          </motion.p>

          {/* CTA group */}
          <motion.div
            className="flex flex-wrap gap-3 pt-2"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            <Link
              to="/project#projects"
              className="btn-primary"
            >
              View Projects
              <IconArrowDown />
            </Link>
            <Link
              to="/contact#contact"
              className="btn-outline"
            >
              Contact Me
              <IconMail />
            </Link>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="flex items-center gap-4 pt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <a
              href="https://github.com/CampbellElla"
              target="_blank" rel="noopener noreferrer"
              className="text-brand-muted hover:text-brand-cream transition-colors"
              aria-label="GitHub"
            >
              <IconGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/emmanuella-campbell-7290553a2"
              target="_blank" rel="noopener noreferrer"
              className="text-brand-muted hover:text-brand-roseLight transition-colors"
              aria-label="LinkedIn"
            >
              <IconLinkedIn />
            </a>
          </motion.div>
        </motion.div>

        {/* ── Photo column ── */}
        <motion.div
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.88, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          {/* Glow ring */}
          <motion.div
            className="absolute inset-0 m-auto w-[380px] h-[380px] lg:w-[500px] lg:h-[500px]
                       rounded-full border border-brand-rose/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 m-auto w-[420px] h-[420px] lg:w-[560px] lg:h-[560px]
                       rounded-full border border-brand-gold/10"
            animate={{ rotate: -360 }}
            transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
          />

          {/* Photo */}
          <motion.img
            src="/Ella3.jpg"
            alt="Emmanuella Campbell"
            className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[440px] lg:h-[440px]
                       rounded-full object-cover
                       ring-4 ring-brand-rose/25
                       shadow-glow-rose"
            animate={{ y: [0, -16, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Floating badge */}
          <motion.div
            className="absolute top-8 -right-4 lg:top-12 lg:-right-8
                       glass rounded-2xl px-4 py-3 shadow-glow-sm"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          >
            <p className="text-xs text-brand-roseLight font-semibold tracking-wider uppercase">
              Available for Hire
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2
                   flex flex-col items-center gap-2
                   text-brand-muted text-xs tracking-widest uppercase"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <IconArrowDown />
        </motion.div>
      </motion.div>
    </section>
  );
}
