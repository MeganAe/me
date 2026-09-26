import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

/**
 * Préchargement court, lié au vrai chargement (load + polices),
 * avec un temps minimum et un temps maximum de sécurité.
 */
export default function Preloader({ onDone }: { onDone: () => void }) {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let finished = false;
    const finish = () => {
      if (!finished) {
        finished = true;
        setReady(true);
      }
    };
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish);
    document.fonts?.ready.then(finish).catch(finish);
    const max = setTimeout(finish, 3000);
    return () => {
      window.removeEventListener("load", finish);
      clearTimeout(max);
    };
  }, []);

  useEffect(() => {
    if (!ready || leaving) return;
    const t = setTimeout(() => setLeaving(true), 900);
    return () => clearTimeout(t);
  }, [ready, leaving]);

  useEffect(() => {
    if (!leaving) return;
    const t = setTimeout(onDone, 700);
    return () => clearTimeout(t);
  }, [leaving, onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ink"
      exit={{ y: reduce ? 0 : "-100%", opacity: reduce ? 0 : 1 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex w-[min(22rem,72vw)] flex-col items-center gap-6">
        <p className="text-center font-display text-2xl font-semibold tracking-tight md:text-3xl">
          Metoushela Walker
        </p>
        <div className="h-px w-full overflow-hidden bg-line">
          <motion.div
            className="h-px w-full bg-signal"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: ready ? 1 : 0.85 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
