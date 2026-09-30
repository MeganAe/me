import { motion, useReducedMotion } from "motion/react";
import { IconBrandGithub } from "@tabler/icons-react";
import { github } from "../data/projects";
import photo from "../assets/photo.jpg";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Ligne de titre qui glisse hors de son masque (reveal par masque). */
function MaskLine({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const reduce = useReducedMotion();
  return (
    <span className="-mb-[0.08em] block overflow-hidden pb-[0.08em]">
      <motion.span
        className="block"
        initial={reduce ? false : { y: "112%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** Portrait en noir et blanc, dans un cadre sobre. */
function Portrait() {
  const reduce = useReducedMotion();
  return (
    <motion.figure
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
      className="w-[min(100%,24rem)] border border-line bg-raise md:ml-auto"
    >
      <img
        src={photo}
        alt="Portrait de Metoushela Walker"
        fetchPriority="high"
        className="aspect-[4/5] w-full object-cover object-top grayscale contrast-[1.08]"
      />
      <figcaption className="border-t border-linesoft px-5 py-4">
        <p className="font-display text-[15px] font-semibold">
          Metoushela Walker
        </p>
        <p className="mt-1 font-mono text-xs text-mute">
          Développeur full-stack / Bukavu, RDC
        </p>
      </figcaption>
    </motion.figure>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" aria-label="Présentation" className="grid items-center py-16 md:py-20 lg:py-24">
      <div className="wrap grid items-center gap-10 md:grid-cols-12 lg:gap-12">
        <div className="min-w-0 md:col-span-7">
          <h1 className="font-display text-[clamp(3.25rem,8.5vw,6rem)] font-bold leading-[0.98] tracking-[-0.02em]">
            <MaskLine delay={0.55}>Metoushela</MaskLine>
            <MaskLine delay={0.68}>
              Walker<span className="text-signal">.</span>
            </MaskLine>
          </h1>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0, ease: EASE }}
            className="mt-7 max-w-[44ch] text-lg text-mute"
          >
            Full-stack developer. Je construis des logiciels complets qui rendent
            le lourd léger : vidéo, fichiers, réseau, interviews.
          </motion.p>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.12, ease: EASE }}
            className="mt-10 flex flex-wrap gap-3.5"
          >
            <a href="#travail" className="btn btn-solid">
              Voir le travail
            </a>
            <a
              href={github.url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              <IconBrandGithub size={18} stroke={1.5} className="mr-2.5" />
              GitHub
            </a>
          </motion.div>
        </div>
        <div className="min-w-0 md:col-span-5">
          <Portrait />
        </div>
      </div>
    </section>
  );
}