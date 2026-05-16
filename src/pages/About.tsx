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
      className="relative min-h-screen py-28 px-6 md:px-10
                 bg-gradient-to-b from-brand-dark via-brand-darkAlt to-brand-dark
                 overflow-hidden"
    >
      {/* ── Ambient orbs ── */}
      <div className="orb orb-a" style={{ top: "5%", right: "-10%" }} />
      <div className="orb orb-b" style={{ bottom: "10%", left: "-8%" }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ─── Section header ─── */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-brand-roseLight font-semibold mb-3">
            About Me
          </p>
          <h2
            className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-bold
                         text-brand-cream leading-tight"
          >
            I craft digital experiences
            <span
              className="block font-script font-normal text-brand-rose mt-2
                             text-[2.6rem] sm:text-[3.2rem] lg:text-[3.8rem]"
            >
              with passion &amp; precision
            </span>
          </h2>
          <div className="section-rule mt-6" />
        </motion.div>

        {/* ─── Content grid ─── */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* ── Left column — photo + stats ── */}
          <motion.div
            className="lg:col-span-2 flex flex-col items-center gap-10"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
          >
            {/* Photo card */}
            <div className="relative group">
              <div
                className="absolute -inset-3 rounded-[2rem]
                              bg-gradient-to-tr from-brand-rose/20 to-brand-gold/15
                              blur-xl group-hover:blur-2xl transition-all duration-700"
              />
              <img
                src="/Ella3.jpg"
                alt="Emmanuella Campbell"
                className="relative w-[280px] h-[340px] lg:w-[320px] lg:h-[400px]
                           object-cover rounded-[1.5rem] shadow-glow-rose
                           ring-2 ring-brand-rose/15"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 w-full">
              {STATS.map(({ value, label }) => (
                <motion.div
                  key={label}
                  className="glass rounded-2xl p-4 text-center"
                  whileHover={{ scale: 1.04, y: -2 }}
                  transition={{ type: "spring", damping: 18 }}
                >
                  <p className="font-display font-black text-2xl text-brand-roseLight">
                    {value}
                  </p>
                  <p className="text-[0.72rem] uppercase tracking-wider text-brand-muted mt-1">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right column — bio cards ── */}
          <motion.div
            className="lg:col-span-3 flex flex-col gap-5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.15 }}
          >
            {/* Hero card */}
            <div className="glass rounded-3xl p-7 sm:p-9 shadow-glow-sm">
              <p className="text-brand-cream/70 leading-relaxed text-[0.93rem] sm:text-base">
                Hey! I'm{" "}
                <span className="text-brand-roseLight font-bold">
                  Emmanuella
                </span>
                , a passionate frontend developer who genuinely loves turning
                cool ideas into delightful, interactive digital experiences. My
                focus is on building interfaces that are not just visually
                engaging but also incredibly intuitive to use.
              </p>
            </div>

            {/* Marquee row — personality */}
            <div className="glass rounded-2xl p-4 shadow-glow-sm">
              <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide">
                {CARD_PERSONALITY.map(({ emoji, text }) => (
                  <span
                    key={text}
                    className="shrink-0 flex items-center gap-2 px-4 py-1.5
                               rounded-full border border-brand-rose/15
                               bg-brand-darkAlt text-xs font-medium text-brand-cream/80"
                  >
                    {emoji} {text}
                  </span>
                ))}
              </div>
            </div>

            {/* Two lower cards */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div
                className="glass rounded-2xl p-6 shadow-glow-sm hover:shadow-glow-md
                              transition-shadow duration-400"
              >
                <p className="text-brand-cream/70 leading-relaxed text-sm">
                  I'm a{" "}
                  <span className="text-brand-roseLight font-bold">
                    React lover
                  </span>{" "}
                  and a lady on a journey to explore, grow, and create fun and
                  meaningful projects with a touch of good vibes. Whether
                  designing, coding, or brainstorming - I'm all in!
                </p>
              </div>
              <div
                className="glass rounded-2xl p-6 shadow-glow-sm hover:shadow-glow-md
                              transition-shadow duration-400"
              >
                <p className="text-brand-cream/70 leading-relaxed text-sm">
                  I enjoy music and creativity as much as I enjoy clean
                  architecture. My quote:{" "}
                  <span className="font-script italic text-brand-gold">
                    "Every moment is a fresh beginning"
                  </span>
                </p>
              </div>
            </div>

            {/* Quote strip */}
            <motion.div
              className="glass rounded-2xl px-7 py-5 text-center"
              whileHover={{ scale: 1.012 }}
              transition={{ type: "spring", damping: 14 }}
            >
              <p className="font-script text-2xl text-brand-gold italic leading-snug">
                "Design is intelligence made visible"
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
