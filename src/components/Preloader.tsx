import { useEffect, useState, useRef } from "react";

export default function Preloader() {
  const [loaded, setLoaded] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    timer.current = window.setTimeout(() => setLoaded(true), 1800);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  if (loaded) return null;

  return (
    <div id="preloader" className="flex items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <div className="loader-dot" />
        <p className="font-script text-2xl text-brand-cream">
          Crafting your experience...
        </p>
      </div>
    </div>
  );
}
