import {
  motion,
  useReducedMotion,
} from "motion/react";
import { IconArrowUpRight, IconBrandGithub } from "@tabler/icons-react";
import Reveal from "./Reveal";
import { alsoOnline, projects, type Project } from "../data/projects";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/**
 * Pile « sticky stack » : chaque projet reste épinglé en haut,
 * le suivant glisse par-dessus. Effet purement CSS + reveal Motion.
 */
function WorkCard({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  const imageLeft = index % 2 === 0;
  return (
    <motion.article
      className="work-card overflow-hidden border border-line bg-raise md:min-h-[68vh]"
      style={{ top: 88 + index * 16 }}
      initial={reduce ? false : { opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      <div className="grid md:grid-cols-12">
        <div className={`min-w-0 md:col-span-7 ${imageLeft ? "" : "md:order-2"}`}>
          {project.imageKind === "phone" ? (
            <div className="flex h-full items-center justify-center bg-ink p-8 md:p-10">
              <img
                src={project.image}
                alt={project.alt}
                loading="lazy"
                decoding="async"
                className="max-h-[56vh] w-auto border border-linesoft"
              />
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.alt}
              loading="lazy"
              decoding="async"
              className={`aspect-[16/10] w-full object-cover md:aspect-auto md:h-full ${
                imageLeft
                  ? "border-b border-linesoft md:border-b-0 md:border-r"
                  : "border-b border-linesoft md:border-b-0 md:border-l"
              }`}
            />
          )}
        </div>
        <div
          className={`flex flex-col p-7 md:col-span-5 md:p-10 ${imageLeft ? "" : "md:order-1"}`}
        >
          <div className="flex items-center gap-3">
            <img src={project.logo} alt="" className="h-9 w-9" />
            <h3 className="font-display text-2xl font-semibold tracking-[-0.01em] md:text-[1.75rem]">
              {project.name}
            </h3>
          </div>
          {project.tagline && (
            <p className="mt-4 font-display text-lg text-mute">
              {project.tagline}
            </p>
          )}
          <p className="mt-4 text-[0.9875rem] leading-relaxed text-mute">
            {project.description}
          </p>
          <div className="mt-5 space-y-1 font-mono text-xs tracking-[0.02em] text-mute tabular-nums">
            <p>{project.stack}</p>
            <p>{project.platforms}</p>
          </div>
          <div className="mt-auto flex flex-wrap gap-3 pt-8">
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
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Work() {
  return (
    <section id="travail" className="py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <h2 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.015em]">
            Le travail
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-5 max-w-[56ch] text-mute">
            Quatre produits, quatre problèmes concrets. Chaque projet reste
            épinglé le temps que le suivant arrive, et ouvre sur son code.
          </p>
        </Reveal>
        <div className="work-stack mt-14">
          {projects.map((p, i) => (
            <WorkCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        <Reveal>
          <div className="mt-20 border-t border-linesoft pt-10">
            <h3 className="font-display text-lg font-semibold">
              Et d'autres en ligne
            </h3>
            <div className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-3">
              {alsoOnline.map((o) => (
                <a
                  key={o.url}
                  href={o.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 border-t border-line pt-4"
                >
                  <span className="font-display text-base font-medium transition-colors duration-200 group-hover:text-signal">
                    {o.name}
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-xs text-mute">
                    {new URL(o.url).host}
                    <IconArrowUpRight
                      size={14}
                      stroke={1.5}
                      className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
