import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { IconBrandGithub } from "@tabler/icons-react";
import shotCompressor from "../assets/shot-compressor.jpg";
import shotSendy from "../assets/shot-sendy.jpg";
import shotProxy from "../assets/shot-proxy.jpg";
import { github } from "../data/projects";

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

/** Collage des trois captures produits : parallaxe 3 niveaux + flottement. */
function Collage() {
  const reduce = useReducedMotion();
  const boxRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const a = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 45, damping: 18 });
  const b = useSpring(useTransform(mx, [-0.5, 0.5], [-11, 11]), { stiffness: 45, damping: 18 });
  const c = useSpring(useTransform(mx, [-0.5, 0.5], [-17, 17]), { stiffness: 45, damping: 18 });
  const ay = useSpring(useTransform(my, [-0.5, 0.5], [-3, 3]), { stiffness: 45, damping: 18 });
  const by = useSpring(useTransform(my, [-0.5, 0.5], [-8, 8]), { stiffness: 45, damping: 18 });
  const cy = useSpring(useTransform(my, [-0.5, 0.5], [-12, 12]), { stiffness: 45, damping: 18 });

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || !boxRef.current) return;
    const r = boxRef.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <div
      ref={boxRef}
      onPointerMove={onMove}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="floaty relative hidden aspect-[16/11] md:block"
      aria-hidden
    >
      <motion.img
        src={shotCompressor}
        alt=""
        className="absolute left-0 top-0 w-[72%] border border-linesoft"
        style={reduce ? undefined : { x: a, y: ay }}
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
      />
      <motion.img
        src={shotSendy}
        alt=""
        className="absolute right-[10%] top-[14%] z-10 w-[48%] border border-line"
        style={reduce ? undefined : { x: b, y: by }}
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.62, ease: EASE }}
      />
      <motion.img
        src={shotProxy}
        alt=""
        className="absolute bottom-0 right-0 z-20 h-[88%] border border-line"
        style={reduce ? undefined : { x: c, y: cy }}
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.74, ease: EASE }}
      />
    </div>
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
          <Collage />
          <motion.img
            src={shotCompressor}
            alt="Capture d'écran de VideoCompressor"
            fetchPriority="high"
            className="w-full border border-linesoft md:hidden"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
          />
        </div>
      </div>
    </section>
  );
}
