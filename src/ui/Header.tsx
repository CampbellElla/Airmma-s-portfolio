import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";

/* ════════════════════════════════════════
   Inline SVG icon components
════════════════════════════════════════ */
const IconHome   = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const IconUser   = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const IconSkills = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>;
const IconCap    = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10L12 3 2 10l10 7 10-7z"/><path d="M6 12v5c0 2 6 3 6 3s6-1 6-3v-5"/></svg>;
const IconMsg    = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
const IconCode   = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const IconMenu   = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>;
const IconClose  = () => <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;

const NAV_LINKS = [
  { to: "/",              label: "Home",     hash: false, Icon: IconHome   },
  { to: "/about#about",   label: "About",    hash: false, Icon: IconUser   },
  { to: "/skills#skills", label: "Skills",   hash: false, Icon: IconSkills },
  { to: "/experience",    label: "Experience", hash: false, Icon: IconCap    },
  { to: "/contact#contact",label: "Contact", hash: false, Icon: IconMsg    },
  { to: "/projects#projects", label: "Projects", hash: false, Icon: IconCode   },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const loc      = useLocation();
  const path     = loc.pathname + loc.hash;

  /* close mobile menu on route change */
  useEffect(() => { setOpen(false); }, [path]);

  /* Escape key closes menu */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* ╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
     Desktop nav item  (inside Header so it has access to setOpen)
  ╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌ */
  function NavItem({
    to, label, Icon, active,
  }: {
    to: string;
    label: string;
    Icon: () => React.ReactNode;
    active: boolean;
  }) {
    const Comp = to.includes("#") ? HashLink : Link;
    return (
      <Comp
        to={to} smooth
        onClick={() => setOpen(false)}
        aria-current={active ? "page" : undefined}
        className={`
          relative flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase
          tracking-widest font-semibold transition-all duration-200
          ${active
            ? "text-brand-dark bg-brand-rose shadow-glow-md"
            : "text-brand-muted hover:text-brand-cream hover:bg-brand-darkSurface"
          }
        `}
      >
        <Icon />
        {label}
        {active && (
          <motion.span
            className="absolute inset-0 rounded-full -z-10 bg-brand-rose/10"
            layoutId="nav-pill"
            transition={{ type: "spring", damping: 22, stiffness: 380 }}
          />
        )}
      </Comp>
    );
  }

  /* ╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
     Mobile nav item
  ╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌ */
  function MobileNavItem({
    to, label, Icon, delay,
  }: {
    to: string;
    label: string;
    Icon: () => React.ReactNode;
    delay: number;
  }) {
    const Comp = to.includes("#") ? HashLink : Link;
    return (
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay, type: "spring", damping: 24 }}
      >
        <Comp
          smooth to={to}
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 py-3 text-lg font-display
                     text-brand-cream/80 hover:text-brand-rose transition-colors"
        >
          <span className="opacity-50"><Icon /></span>
          {label}
        </Comp>
      </motion.div>
    );
  }

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 h-16 md:h-14
                 bg-brand-darkAlt/70 backdrop-blur-xl
                 border-b border-brand-darkBorder"
    >
      <nav className="mx-auto max-w-7xl h-full px-6 md:px-10
                     flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src="logo.png" alt="logo" className="w-8 h-8 rounded-md invert" />
          <span className="hidden sm:block font-display font-bold text-sm tracking-wider text-brand-cream">
            ELLA<span className="text-brand-rose">.</span>DEV
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(({ to, label, Icon }) => (
            <NavItem key={to} to={to} label={label} Icon={Icon}
                     active={path === to} />
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((p) => !p)}
          className="lg:hidden text-brand-cream hover:text-brand-rose transition-colors"
        >
          {!open ? <IconMenu /> : <IconClose />}
        </button>
      </nav>

      {/* ── Mobile sheet ── */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed z-50 top-14 left-0 right-0
                         bg-brand-darkAlt/95 backdrop-blur-2xl
                         border-b border-brand-darkBorder
                         px-6 py-8 lg:hidden overflow-y-auto"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0,   opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
            >
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map(({ to, label, Icon }, i) => (
                  <MobileNavItem key={to} to={to} label={label} Icon={Icon} delay={i * 0.04} />
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
