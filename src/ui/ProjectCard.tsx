import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import type { ProjectData } from "../pages/Project";

export default function ProjectCard({
  image, url, title, tools,
}: ProjectData) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article
        className="group relative rounded-2xl overflow-hidden cursor-pointer
                    border border-brand-darkBorder bg-brand-dark
                    hover:border-brand-rose/30 transition-all duration-500
                    shadow-glow-sm hover:shadow-glow-rose h-full flex flex-col"
        onClick={() => setOpen(true)}
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-brand-darkSurface">
          <img
            src={image} alt={title}
            className="w-full h-full object-cover
                       group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Dark gradient at bottom of image */}
          <div className="absolute inset-x-0 bottom-0 h-1/3
                          bg-gradient-to-t from-brand-dark to-transparent" />

          {/* Hover overlay CTA */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center gap-3
                        bg-brand-dark/55 backdrop-blur-[2px] opacity-0
                        group-hover:opacity-100 transition-opacity duration-400"
          >
            <span className="btn-primary !py-2.5 !px-5 text-xs">
              View Site <FaExternalLinkAlt />
            </span>
            <a
              href={url}
              target="_blank" rel="noopener noreferrer"
              className="btn-outline !py-2.5 !px-5 text-xs"
              onClick={(e) => e.stopPropagation()}
            >
              Code <FaGithub />
            </a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-2 flex-1">
          <h3 className="font-display font-bold text-brand-cream text-lg group-hover:text-brand-roseLight transition-colors">
            {title}
          </h3>
          <div className="flex flex-wrap gap-1 mt-auto">
            {tools.split(", ").map((t: string) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>
      </article>

      {/* ── Modal ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            {/* Blurred backdrop */}
            <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-xl" />

            {/* Modal card */}
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
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 z-20
                           w-9 h-9 rounded-full bg-brand-dark/70 backdrop-blur-sm
                           flex items-center justify-center
                           text-brand-muted hover:text-brand-rose transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>

              {/* Full image */}
              <div className="relative aspect-video bg-brand-darkSurface overflow-hidden">
                <img
                  src={image} alt={title}
                  className="w-full h-full object-contain bg-brand-dark"
                />
              </div>

              {/* Body */}
              <div className="p-7 flex flex-col gap-3 overflow-y-auto max-h-[50vh]">
                <h3 className="font-display font-bold text-brand-cream text-2xl">{title}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {tools.split(", ").map((t: string) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
                <p className="text-brand-muted text-sm pt-2">
                  Click <a href={url} target="_blank" rel="noopener noreferrer" className="text-brand-roseLight underline hover:no-underline">here</a> to visit the live site.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
