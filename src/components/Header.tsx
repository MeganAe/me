import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import { IconBrandGithub } from "@tabler/icons-react";
import { github } from "../data/projects";

const links = [
  { href: "#travail", label: "Voir le travail" },
  { href: "#stack", label: "Stack" },
  { href: "#a-propos", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-[60] border-b border-linesoft bg-ink">
        <div className="wrap flex h-[72px] items-center justify-between gap-8">
          <a
            href="#top"
            className="font-display text-[15px] font-semibold tracking-wide"
          >
            Metoushela Walker
          </a>
          <nav
            aria-label="Navigation principale"
            className="hidden items-center gap-9 md:flex"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link relative text-[15px] font-medium text-mute transition-colors duration-200 hover:text-paper"
              >
                {l.label}
              </a>
            ))}
            <a
              href={github.url}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub de Metoushela"
              className="text-mute transition-colors duration-200 hover:text-paper"
            >
              <IconBrandGithub size={20} stroke={1.5} />
            </a>
          </nav>
          <button
            type="button"
            className="-m-3 flex flex-col gap-[7px] p-3 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-[2px] w-6 bg-paper transition-transform duration-300 ${
                open ? "translate-y-[4.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-paper transition-transform duration-300 ${
                open ? "-translate-y-[4.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
        <motion.div
          aria-hidden
          className="absolute inset-x-0 -bottom-px h-px origin-left bg-signal"
          style={{ scaleX: progress }}
        />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-[50] flex flex-col justify-center gap-3 bg-ink px-6 md:hidden"
            initial={reduce ? false : { y: "-100%" }}
            animate={{ y: 0 }}
            exit={reduce ? undefined : { y: "-100%" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-linesoft py-4 font-display text-4xl font-semibold"
              >
                {l.label}
              </a>
            ))}
            <a
              href={github.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 py-4 font-display text-4xl font-semibold"
            >
              GitHub <IconBrandGithub size={34} stroke={1.5} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
