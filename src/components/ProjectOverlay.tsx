import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconX,
} from "@tabler/icons-react";
import type { Project } from "../data/projects";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

type Props = {
  project: Project;
  onClose: () => void;
};

/** Vue agrandie d'un projet : capture en grand, infos et liens. */
export default function ProjectOverlay({ project, onClose }: Props) {
  const reduce = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const items = dialogRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[75] flex items-center justify-center bg-ink/95 p-4 md:p-8"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={project.name}
        className="flex max-h-full w-full max-w-[84rem] flex-col border border-line bg-raise"
        initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.45, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-ink">
          <img
            src={project.image}
            alt={project.alt}
            className={
              project.imageKind === "phone"
                ? "max-h-[68vh] w-auto p-6"
                : "max-h-[68vh] w-auto max-w-full object-contain"
            }
          />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-linesoft px-5 py-4 md:px-7">
          <div className="min-w-0">
            <h3 className="font-display text-lg font-semibold">
              {project.name}
            </h3>
            <p className="mt-1 font-mono text-xs text-mute">
              {project.stack} / {project.platforms}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost btn-sm"
              >
                <IconBrandGithub size={16} stroke={1.5} className="mr-2" />
                Voir le code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost btn-sm"
              >
                Voir le site
                <IconArrowUpRight size={16} stroke={1.5} className="ml-2" />
              </a>
            )}
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="btn btn-solid btn-sm"
            >
              <IconX size={16} stroke={1.75} className="mr-2" />
              Fermer
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}