import { useEffect } from "react";

export default function ScrollBar() {
  useEffect(() => {
    /* ── Thin bar style already handled in index.css ── */
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const scrolled =
        window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const bar = document.getElementById("scroll-progress-bar");
      if (bar) bar.style.width = `${scrolled * 100}%`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
