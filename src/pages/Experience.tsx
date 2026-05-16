import { motion } from "framer-motion";

type Milestone = {
  year: string;
  title: string;
  body: string;
  color: "rose" | "gold" | "blue" | "emerald" | "purple";
  side?: "left" | "right";
};

const DATA: Milestone[] = [
  {
    year:    "2020 — 2025",
    title:   "Fashion Design Degree",
    body:    "Studied fashion design — shaped my creative eye, color sense, and understanding of visual structure, all of which directly influence my frontend design choices today.",
    color:   "rose",
  },
  {
    year:    "2023 — 2024",
    title:   "First Steps in Web Development",
    body:    "Explored HTML & CSS while completing my fashion studies. Built simple landing pages, watched tutorials, and fell in love with turning creative ideas into working websites.",
    color:   "emerald",
    side: "right",
  },
  {
    year:    "2024 — 2025",
    title:   "Mastered the Frontend Stack",
    body:    "Dove deep into JavaScript, Tailwind CSS, and React. Consumed documentation, built projects daily, and embraced the component-based architecture paradigm.",
    color:   "blue",
  },
  {
    year:    "2024 — 2025",
    title:   "Built Freelance & Personal Projects",
    body:    "Shipped responsive, production-ready websites for real-world clients and myself. Gained hands-on experience with Git, GitHub work-flows, and Vercel deployment.",
    color:   "gold",
    side: "right",
  },
  {
    year:    "2025 — Present",
    title:   "Formal Software Development Training",
    body:    "Started formal program focused on JavaScript, React, and TypeScript. Building a stronger coding foundation and preparing for senior-level frontend work.",
    color:   "purple",
  },
];

const COLOR_MAP: Record<string, { dot: string; glow: string }> = {
  rose:    { dot: "bg-brand-rose",   glow: "shadow-glow-rose" },
  gold:    { dot: "bg-brand-gold",   glow: "shadow-glow-gold" },
  blue:    { dot: "bg-blue-400",     glow: "shadow-glow-sm" },
  emerald: { dot: "bg-emerald-400",  glow: "shadow-glow-sm" },
  purple:  { dot: "bg-purple-400",   glow: "shadow-glow-sm" },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 md:px-10
                                         bg-brand-darkAlt overflow-hidden">
      <div className="orb orb-b" style={{ bottom: "-5%", left: "-8%" }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-brand-roseLight font-semibold mb-2">
            Journey
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-cream">
            Education &amp; Experience
          </h2>
          <div className="section-rule mt-5 w-20" />
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-brand-darkBorder -translate-x-1/2 hidden md:block" />

          {/* Vertical glow line */}
          <div className="absolute left-1/2 top-8 bottom-8 w-px
                          bg-gradient-to-b from-brand-rose/0 via-brand-rose/40 to-brand-gold/0
                          -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-0">
            {DATA.map((m, idx) => {
              const isLeft  = m.side === "right" ? false : idx % 2 === 0;
              const colors  = COLOR_MAP[m.color];
              return (
                <motion.div
                  key={idx}
                  className={`md:flex md:items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.1, duration: 0.65 }}
                >
                  {/* Card */}
                  <div className={`md:w-5/12 ${isLeft ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"}`}>
                    <div className="glass rounded-2xl p-6 sm:p-7 shadow-glow-sm
                                    hover:shadow-glow-md transition-shadow duration-500
                                    group cursor-default">
                      <span className={`inline-block w-2 h-2 rounded-full ${colors.dot}
                                       shadow-[0_0_8px_currentColor] mb-4`} />
                      <p className="text-[0.72rem] uppercase tracking-[0.18em]
                                    text-brand-goldLight font-semibold mb-2">{m.year}</p>
                      <h3 className="font-display font-bold text-brand-cream text-lg mb-2">
                        {m.title}
                      </h3>
                      <p className="text-brand-muted text-sm leading-relaxed">{m.body}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-2/12 justify-center py-4">
                    <div className={`relative w-5 h-5 rounded-full border-2 border-brand-darkAlt
                                    ${colors.dot} ${colors.glow} z-10`} />
                  </div>

                  {/* Empty spacer */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
