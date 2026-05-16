import { useState } from "react";
import { motion } from "framer-motion";

/* ════════════════════════════════════════
   Inline SVG skill icons
════════════════════════════════════════ */
const IconHtml    = () => <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500"><path d="M1.5 0h21l-1.9 20.5L12 23.5l-8.6-3L1.5 0Zm7.86 6.75L12 3.86l2.64 2.89 1.48.94-1.1 12.06H9.98l-1.11-12.06 1.48-.94ZM10.45 9.35h3v3h-3v-3Z"/></svg>;
const IconCss3    = () => <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500"><path d="M1.5 0h21l-1.9 20.5L12 23.5l-8.6-3L1.5 0Zm17.4 6.75-1.1 11.98H6.2l-1.1-11.98H7.1l.38 4.2h7.06l.46-4.2h1.9Z"/></svg>;
const IconJs      = () => <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.868-2.03-4.126-2.735-1.519-.328-3.273-.492-5.143-.734-.195-.025-.395-.049-.594-.075-1.963-.262-3.856-.466-4.784-1.704-.458-.615-.51-1.312-.508-1.704.004-.392.1-.79.528-1.06.572-.372 1.466-.53 2.5-.594.58-.043 1.247-.075 2.006-.106-.044-.336-.07-.676-.07-1.026 0-1.133.16-2.236.554-3.295.105-.352.277-.682.533-.976.748-1.35 1.976-2.478 3.506-3.325.18-.1.362-.195.542-.285.066-.036.133-.07.2-.106-.667.063-1.444.1-2.282.127-.045.503-.053 2.267-.053 2.267 0 5.328 2.28 5.858 5.12.322 1.7.092 3.62-.634 5.147-.327.708-.634 1.39-1.42 1.834-1.34.753-3.115.6-4.244.317-1.57-.397-2.63-1.17-3.206-2.32-.32-.643-.392-1.305-.232-1.972.25-1.067 1.04-2.05 2.22-2.783.003-.13.007-.26.012-.388a7.75 7.75 0 0 1 .023-.305h.001c.081-.99.398-1.942 1.91-2.755 1.014-.55 2.378-.827 4.051-.827.008 0 .017 0 .025.002l.004-.002h.007c.261.01.565.015.905.015 1.363 0 2.746-.092 4.107-.277.344-.045.689-.093 1.033-.145-.449.06-.897.124-1.342.193l-.262.042c.902.045 1.706.148 2.413.307a9.68 9.68 0 0 1 2.295 1.075c.182.139.355.282.511.432l.018-.025c-.182.139-.354.282-.51.432-.326.296-.673.568-1.04.818 1.872 1.172 2.204 3.546 2.272 4.69.007 1.314.087 1.954.39 2.793.005.202.023.403.044.603l.002.028a3.897 3.897 0 0 1-.007.114c.01 0 .02-.002.025-.002-1.556 3.385-5.742 4.29-9.816 3.99-.01.096-.035.188-.057.2Zm-8.26-4.504h7.908c-.06-1.45-1.435-2.602-3.127-2.871-.47-.073-.957-.11-1.455-.143-.5-.032-1.019-.061-1.548-.089-.005.104 0 .207 0 .31 1.159.01 2.164.502 2.786 1.394.556.803.714 1.78.343 2.74-.11.28-.266.525-.47.743.578-.014 1.252-.034 1.686-.063.748-.051 1.24-.171 1.516-.402.518-.44.55-1.085.058-1.751l-.003-.008-.002-.006c-.49-.667-1.366-.78-2.487-.625v-.024c-.424-.059-.916-.097-1.434-.114l-.002-.067.006-4.81h-.02l.006-4.81v.067l-.001-.068-.003-.069-.003-.029-.002-.076c-.49.028-.692.071-.69.075v.015l.071 1.139 1.14-.075v-.05l.003-.089.016-.069.035-.08.073-.108.1-.1.128-.095.17-.08a.748.748 0 0 1 .19-.046c.02-.002.042-.003.062-.003a3.98 3.98 0 0 1 .474.036c.017.397.049 1.003.11 1.771.371 4.835-.555 8.207-2.734 10.15Z"/></svg>;
const IconTs      = () => <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2 3.908 3.908 0 0 0-1.401.209 2.706 2.706 0 0 0-.906.634 2.274 2.274 0 0 0-.323 1.006 3.336 3.336 0 0 0 .218 1.048c.144.32.356.604.63.846.274.241.602.43.979.565.378.134.786.2 1.216.2.518 0 .978-.09 1.38-.272.401-.181.745-.429 1.032-.744.287-.315.506-.676.656-1.083a2.13 2.13 0 0 0-.327-1.347c-.4-.501-.977-.896-1.728-1.186-.752-.29-1.587-.435-2.506-.435zM13.5 8.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-7.875 1.875A1.125 1.125 0 0 0 4.5.875v4.75zM1.125 5 .875 5 .875 5 1 8.875 3 9 .875 6.875 1.125 7l3-2 .875 2.75.875-.125L6 11.75.875 12zm1.875 8.625a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25z"/></svg>;
const IconReact   = () => <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><g><circle cx="12" cy="12" r="2.1" fill="#61DAFB"/><ellipse cx="12" cy="12" rx="11" ry="4.1" fill="none" stroke="#61DAFB" strokeWidth="1"/><ellipse cx="12" cy="12" rx="11" ry="4.1" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="11" ry="4.1" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(120 12 12)"/></g></svg>;
const IconTailwind= () => <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="text-cyan-400"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.4-1.8 3.9-2.8 5.8-1.4 1.7 1.2 2.6 3.5 2 5.7-.3 1.1-1.1 2.1-2.4 2.6-1.8.6-4 .1-5.4-1.5-1.6-1.8-2.1-4.4-1.4-6.6.7-2.2 2.4-3.8 4.6-4.6 1.9-.7 3.9-.1 5 1.5l1.2-1c1.4-1.3 3.5-1.6 5.3-.6 1.8 1 2.8 3 2.6 5.1-.2 1.4-.9 2.7-2.1 3.5-1.5 1-3.3 1-5.1.2-1.8-1-3.2-2.9-3-5.3.1-1.6.9-3.2 2.2-4.1l1.1-1.2z"/></svg>;
const IconGithub2 = () => <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="text-white"><path d="M12 0C5.375 0 0 5.375 0 12c0 5.313 3.438 9.813 8.188 11.389.6.113.813-.263.813-.578v-2.053c-3.338.725-4.042-1.613-4.042-1.613C4.538 17.875 3.788 17 3.788 17c-1.037-.838.1-.838.1-.838 1.363.1 2.088 1.4 2.088 1.4 1.225 2.075 3.225 1.475 4.025 1.138.125-.875.5-1.438.9-1.763-3.163-.363-6.5-1.588-6.5-7.05 0-1.55.563-2.825 1.475-3.825-.15-.363-.663-1.85.15-3.875 0 0 1.25-.4 3.95 1.45A13.788 13.788 0 0 1 12 5.225c1.238 0 2.488-.138 3.625-.4 2.7-1.85 3.95-1.45 3.95-1.45.813 2.125.287 3.513.137 3.875.925 1 1.463 2.275 1.463 3.825C16.5 16.438 14.6 18.4 11.65 18.4c-2.625 0-4.763-1.75-5.5-4.163l-.375-1.45C5.138 17.975 6.563 18.9 8.125 18.9c.1 0 .188-.013.563-.038V21c0 .338.225.688.825.575A12.018 12.018 0 0 0 24 12c0-6.625-5.375-12-12-12Z"/></svg>;

interface SkillItem {
  Icon: () => React.ReactNode;
  title: string;
  progress: string;
  color: string;
  bgColor: string;
  tags: string[];
}
interface CategoryDef {
  label: string;
  items: SkillItem[];
}

const CATEGORIES: CategoryDef[] = [
  {
    label: "Frontend",
    items: [
      {
        Icon: IconHtml,
        title: "HTML5",
        progress: "100%",
        color: "text-orange-500",
        bgColor: "bg-orange-500",
        tags: ["Semantic", "SEO", "Accessibility", "Forms"],
      },
      {
        Icon: IconCss3,
        title: "CSS3",
        progress: "95%",
        color: "text-blue-500",
        bgColor: "bg-blue-500",
        tags: ["Flexbox", "Grid", "Animations", "Media Queries"],
      },
      {
        Icon: IconJs,
        title: "JavaScript",
        progress: "70%",
        color: "text-yellow-400",
        bgColor: "bg-yellow-400",
        tags: ["ES6+", "DOM", "Async/Await", "Promises"],
      },
      {
        Icon: IconTs,
        title: "TypeScript",
        progress: "30%",
        color: "text-blue-500",
        bgColor: "bg-blue-500",
        tags: ["Types", "Interfaces", "Generics"],
      },
      {
        Icon: IconReact,
        title: "React",
        progress: "90%",
        color: "text-cyan-400",
        bgColor: "bg-cyan-400",
        tags: ["Hooks", "Router", "Context", "Redux"],
      },
      {
        Icon: IconTailwind,
        title: "Tailwind",
        progress: "85%",
        color: "text-cyan-500",
        bgColor: "bg-cyan-500",
        tags: ["Utilities", "Responsive", "Dark Mode"],
      },
    ],
  },
  {
    label: "Tools",
    items: [
      {
        Icon: IconGithub2,
        title: "GitHub",
        progress: "80%",
        color: "text-white",
        bgColor: "bg-white",
        tags: ["Repos", "PRs", "Actions", "Pages"],
      },
      {
        Icon: function() {
          return (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="text-indigo-400">
              <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-8.17 10.33-.02-.02L6.92 3.392a1.32 1.32 0 0 0-1.882.29L.49 5.943a1.5 1.5 0 0 0 0 2.324l3.278 3.278L.753 15.12a1.5 1.5 0 0 0 0 2.324l4.85 4.85a1.5 1.5 0 0 0 2.324 0l4.9-4.9a1.5 1.5 0 0 0-.29-1.704l-3.38-3.38L17.3 19.3a1.12 1.12 0 0 0 1.596 0l1.693-1.693a1.12 1.12 0 0 0 0-1.596l-4.95-4.95.002-.005 8.64-10.283.001-.003a1.12 1.12 0 0 0-.29-1.596zM14.96 8.495l2.954-3.218-5.836 5.836 2.754-2.753a.72.72 0 0 0 0-1.016l-.775-.777a1.58 1.58 0 0 0-1.078 2.02l3.08-3.08z"/>
            </svg>
          );
        },
        title: "Vercel",
        progress: "75%",
        color: "text-gray-300",
        bgColor: "bg-gray-300",
        tags: ["Deploy", "Serverless", "Edge Functions"],
      },
      {
        Icon: function() {
          return (
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="text-blue-500">
              <path d="M5.759 3.975h12.482c.893 0 1.635.688 1.72 1.58l.52 7.53a1.72 1.72 0 0 1-1.72 1.635H5.76a1.72 1.72 0 0 1-1.72-1.635l.52-7.53A1.72 1.72 0 0 1 5.76 3.975z" opacity=".3"/><path d="M5.72 1.5l.022.031 7.7 11.086H5.7l-.463-7.136L2.55 21.9l.022.008h9.286l-.723 2.741L23.2 4.163 5.72 1.5zM5.76 3.975h12.482a1.72 1.72 0 0 1 1.72 1.58l.52 7.53a1.72 1.72 0 0 1-1.72 1.635H5.76a1.72 1.72 0 0 1-1.72-1.635l.52-7.53A1.72 1.72 0 0 1 5.76 3.975z"/>
            </svg>
          );
        },
        title: "Git",
        progress: "85%",
        color: "text-orange-500",
        bgColor: "bg-orange-500",
        tags: ["Branching", "Merging", "Workflow"],
      },
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState(0);
  const cat = CATEGORIES[active];

  return (
    <section id="skills" className="relative min-h-screen py-28 px-6 md:px-10
                                     bg-brand-dark overflow-hidden">
      <div className="orb orb-a" style={{ top: "10%", right: "-12%" }} />
      <div className="orb orb-b" style={{ bottom: "5%", left: "-10%" }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-brand-roseLight font-semibold mb-2">
            Skill Set
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.2rem] font-bold text-brand-cream">
            What I work with
          </h2>
          <div className="section-rule mt-5" />
        </motion.div>

        {/* ── Tabs ── */}
        <div className="flex gap-2 mb-10">
          {CATEGORIES.map((c, i) => (
            <motion.button
              key={c.label}
              onClick={() => setActive(i)}
              className={`relative px-6 py-2.5 rounded-full text-xs uppercase tracking-widest
                         font-semibold transition-colors ${
                active === i
                  ? "text-brand-dark"
                  : "text-brand-muted hover:text-brand-cream border border-brand-darkBorder"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {c.label}
              {active === i && (
                <motion.div
                  layoutId="skill-pill"
                  className="absolute inset-0 rounded-full bg-brand-rose -z-10"
                  transition={{ type: "spring", damping: 22, stiffness: 380 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* ── Skill cards ── */}
        <motion.div
          key={active}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {cat.items.map((skill: SkillItem, idx: number) => (
            <motion.div
              key={skill.title}
              className="group glass rounded-2xl p-6 cursor-default shadow-glow-sm
                         hover:shadow-glow-md transition-shadow duration-500"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: idx * 0.09,
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ scale: 1.025 }}
            >
              {/* Icon + title + progress */}
              <div className="flex items-start gap-4">
                <div className="shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <skill.Icon />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-display font-semibold text-brand-cream text-sm">
                      {skill.title}
                    </span>
                    <span className="text-xs font-mono text-brand-roseLight">{skill.progress}</span>
                  </div>

                  {/* Progress bar */}
                  <div className="h-1.5 rounded-full bg-brand-darkBorder overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${skill.bgColor}`}
                      initial={{ width: "0%" }}
                      whileInView={{ width: skill.progress }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08 + 0.2, duration: 0.9, ease: "easeOut" }}
                    />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mt-3">
                    {skill.tags.map((t) => (
                      <span key={t} className="chip">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center mt-12 italic text-brand-roseLight text-sm">
          Still Learning, always building...
        </p>
      </div>
    </section>
  );
}
