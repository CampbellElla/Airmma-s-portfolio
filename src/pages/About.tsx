import { motion } from "framer-motion";

const CARD_PERSONALITY: { emoji: string; text: string }[] = [
  { emoji: "🎯", text: "Precision-first coding" },
  { emoji: "🌸", text: "Design-driven mindset" },
  { emoji: "🎮", text: "Gaming enthusiast" },
  { emoji: "🎵", text: "Music fuels my flow" },
  { emoji: "✍️", text: "Copywriting & storytelling" },
  { emoji: "🌍", text: "Based in Nigeria" },
];

const STATS = [
  { value: "2.5+", label: "Years Coding" },
  { value: "12+", label: "Projects Built" },
  { value: "3+", label: "Certificates Earned" },
  { value: "∞", label: "Curiosity" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-16 sm:py-24 md:py-28
                 px-4 sm:px-6 md:px-10
                 bg-gradient-to-b from-brand-dark via-brand-darkAlt to-brand-dark
                 overflow-hidden"
    >
      {/* ── Ambient orb ── */}
      <div className="orb orb-a pointer-events-none" style={{ top: "5%", right: "-10%" }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ─── Section header ─── */}
        <motion.div
          className="mb-10 sm:mb-14 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[0.6rem] sm:text-xs uppercase tracking-[0.25em]
                         text-brand-roseLight font-semibold mb-2 sm:mb-3 flex items-center gap-2">
            <span className="w-3 sm:w-4 h-px bg-brand-rose shrink-0" />
            About Me
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem]
                         font-bold text-brand-cream leading-[1.1]">
            I craft digital experiences
            <span
              className="block font-script font-normal text-brand-rose mt-1 sm:mt-2
                             text-[2rem] sm:text-[2.6rem] md:text-[3.2rem] lg:text-[3.8rem]"
            >
              with passion &amp; precision
            </span>
          </h2>
          <div className="section-rule mt-4 sm:mt-6 w-12 sm:w-16 md:w-20" />
        </motion.div>

        {/* ─── Content — full-width columns ─── */}
        <div className="flex flex-col gap-8 sm:gap-10 md:gap-12">

          {/* ══════════════════════════════════
              Left column — photo + stats side-by-side on lg+
          ══════════════════════════════════ */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

            {/* Photo */}
            <motion.div
              className="lg:flex-1 flex justify-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75 }}
            >
              <div className="relative group w-full max-w-xs sm:max-w-sm">
                <div
                  className="absolute -inset-2 sm:-inset-3 rounded-[1.5rem] sm:rounded-[2rem]
                                bg-gradient-to-tr from-brand-rose/20 to-brand-gold/15
                                blur-xl group-hover:blur-2xl transition-all duration-700"
                />
                <img
                  src="/Ella3.jpg"
                  alt="Emmanuella Campbell"
                  className="relative
                             w-full aspect-[7/9] sm:aspect-[7/9]
                             object-cover rounded-[1.5rem] sm:rounded-[2rem]
                             shadow-glow-rose ring-2 ring-brand-rose/15"
                />
                {/* Subtle top-right deco dot */}
                <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-5 sm:h-5 rounded-full
                                bg-brand-gold/60 shadow-glow-gold
                                pointer-events-none" />
              </div>
            </motion.div>

            {/* Stats inline beside photo on lg */}
            <motion.div
              className="lg:flex-1 flex flex-col justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.15 }}
            >
              <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                {STATS.map(({ value, label }) => (
                  <div
                    key={label}
                    className="glass rounded-xl sm:rounded-2xl p-2.5 sm:p-4 md:p-5 text-center
                               hover:shadow-glow-md transition-shadow duration-400"
                  >
                    <p className="font-display font-black text-base sm:text-xl md:text-2xl
                                   text-brand-roseLight leading-none">{value}</p>
                    <p className="text-[0.55rem] sm:text-[0.6rem] md:text-[0.72rem]
                                   uppercase tracking-wider text-brand-muted mt-1 sm:mt-2
                                   leading-tight">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ══════════════════════════════════
              Right column — bio cards
          ══════════════════════════════════ */}
          <motion.div
            className="flex flex-col gap-4 sm:gap-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.15 }}
          >
            {/* Hero bio card */}
            <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-9 shadow-glow-sm">
              <p className="text-brand-cream/70 leading-relaxed text-sm sm:text-[0.93rem] md:text-base">
                Hey! I'm{' '}
                <span className="text-brand-roseLight font-bold">Emmanuella</span>, a
                passionate frontend developer who genuinely loves turning cool
                ideas into delightful, interactive digital experiences. My focus
                is on building interfaces that are not just visually engaging but
                also incredibly intuitive to use.
              </p>
            </div>

            {/* Personality chips — scrollable row */}
            <div className="glass rounded-xl sm:rounded-2xl p-3.5 sm:p-4 shadow-glow-sm overflow-hidden">
              <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-hide -mx-1 px-1">
                {CARD_PERSONALITY.map(({ emoji, text }) => (
                  <span
                    key={text}
                    className="shrink-0 flex items-center gap-1.5 px-3 sm:px-4 py-1.5
                               rounded-full border border-brand-rose/15
                               bg-brand-darkAlt text-[0.65rem] sm:text-xs
                               font-medium text-brand-cream/80"
                  >
                    {emoji} {text}
                  </span>
                ))}
              </div>
            </div>

            {/* Two lower text cards */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              <div className="glass rounded-2xl p-4 sm:p-5 shadow-glow-sm
                              hover:shadow-glow-md transition-shadow duration-400">
                <p className="text-brand-cream/70 leading-relaxed text-xs sm:text-sm">
                  I'm a{' '}
                  <span className="text-brand-roseLight font-bold">React lover</span> and
                  a lady on a journey to explore, grow, and create fun and
                  meaningful projects with a touch of good vibes. Whether
                  designing, coding, or brainstorming — I'm all in. 🚀
                </p>
              </div>
              <div className="glass rounded-2xl p-4 sm:p-5 shadow-glow-sm
                              hover:shadow-glow-md transition-shadow duration-400">
                <p className="text-brand-cream/70 leading-relaxed text-xs sm:text-sm">
                  I enjoy music and creativity as much as I enjoy clean
                  architecture. My quote:{' '}
                  <span className="font-script italic text-brand-gold text-sm sm:text-base">
                    "Every moment is a fresh beginning"
                  </span>
                </p>
              </div>
            </div>

            {/* Quote strip */}
            <motion.div
              className="glass rounded-xl sm:rounded-2xl px-5 sm:px-7 py-4 sm:py-5 text-center"
              whileHover={{ scale: 1.005 }}
              transition={{ type: "spring", damping: 14 }}
            >
              <p className="font-script text-xl sm:text-2xl text-brand-gold
                             italic leading-snug">
                "Design is intelligence made visible"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
