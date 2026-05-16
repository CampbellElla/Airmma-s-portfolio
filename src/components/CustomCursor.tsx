import { useEffect, useRef, useLayoutEffect } from "react";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef  = useRef<HTMLDivElement>(null);
  const rafRef  = useRef<number>(0);
  const posRef  = useRef({ x: 0, y: 0 });

  useLayoutEffect(() => {
    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left  = `${e.clientX}px`;
        dotRef.current.style.top   = `${e.clientY}px`;
      }
      if (ringRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
          if (ringRef.current) {
            ringRef.current.style.left = `${e.clientX}px`;
            ringRef.current.style.top  = `${e.clientY}px`;
          }
        });
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const hoverable = document.querySelectorAll<HTMLElement>(
      "a, button, [data-hover]"
    );
    const ring = ringRef.current;
    if (!ring) return;
    const enter = () => ring.classList.add(styles.hovering);
    const leave = () => ring.classList.remove(styles.hovering);
    hoverable.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });
    return () => {
      hoverable.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className={styles.ring} />
      <div ref={dotRef}  className={styles.dot}  />
    </>
  );
}
