import ProjectCard from "../ui/ProjectCard";
import { motion } from "framer-motion";

export interface ProjectData {
  image: string;
  url: string;
  title: string;
  tools: string;
  span?: string;
}

const PROJECTS: ProjectData[] = [
  {
    image: "/project 5.png",
    url:   "https://react-socials.vercel.app/",
    title: "Social Website",
    tools: "React, Tailwind CSS, JavaScript",
    span: "col-span-full sm:col-span-2 row-span-2 row-span-2-lg",
  },
  {
    image: "/project 2.png",
    url:   "https://business-website-brown.vercel.app/",
    title: "Business Website",
    tools: "HTML, CSS, JavaScript",
    span: "row-span-1 sm:row-span-2",
  },
  {
    image: "/project 3.png",
    url:   "https://u-host-business-website-gp9f.vercel.app/",
    title: "First Web Page",
    tools: "HTML, JavaScript",
    span: "",
  },
  {
    image: "/project 1.png",
    url:   "http://localhost:5174/",
    title: "A Form",
    tools: "React, Tailwind CSS, Vite",
    span: "",
  },
  {
    image: "/project 4.png",
    url:   "https://construction-psi-five.vercel.app/",
    title: "Cat Website",
    tools: "HTML, CSS",
    span: "row-span-1",
  },
  {
    image: "/project 6.png",
    url:   "https://mindful-eating-qja5.vercel.app/",
    title: "Nutritional Website",
    tools: "React, Tailwind CSS, Vite",
    span: "col-span-full sm:col-span-2",
  },
];

export default function Project() {
  return (
    <section
      id="projects"
      className="relative min-h-screen py-28 px-6 md:px-10
                 bg-brand-darkAlt overflow-hidden"
    >
      <div className="orb orb-a" style={{ top: "15%", right: "-10%" }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}
        >
          <p className="text-xs uppercase tracking-[0.25em] text-brand-roseLight font-semibold mb-2">
            Portfolio
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-cream">
            Selected Projects
          </h2>
          <div className="section-rule mt-5 w-24" />
        </motion.div>

        {/* ── Bento grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={p.title}
              className={p.span}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
            >
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
