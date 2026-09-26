import { useEffect, useRef } from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
} from "motion/react";

/**
 * Compteur : de 0 à `to` quand il entre dans le viewport,
 * écriture directe dans le DOM (zéro re-render).
 */
export default function Counter({
  to,
  label,
}: {
  to: number;
  label: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const mv = useMotionValue(0);

  useMotionValueEvent(mv, "change", (v) => {
    if (ref.current) ref.current.textContent = String(Math.round(v));
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduce) {
      el.textContent = String(to);
      return;
    }
    if (!inView) return;
    const controls = animate(mv, to, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, reduce, to, mv]);

  return (
    <div className="border-t border-line pt-4">
      <span
        ref={ref}
        className="block font-display text-4xl font-bold tabular-nums text-paper md:text-[2.75rem]"
      >
        {reduce ? to : 0}
      </span>
      <span className="mt-1 block font-mono text-xs text-mute">{label}</span>
    </div>
  );
}
