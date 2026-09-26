import {
  IconAppWindow,
  IconArrowUpRight,
  IconBrandGithub,
  IconDeviceMobile,
  IconMovie,
  IconNetwork,
  IconSparkles,
  IconWorld,
} from "@tabler/icons-react";
import type { Capability } from "../data/stack";
import { capabilities, githubData } from "../data/stack";
import Counter from "./Counter";
import Reveal from "./Reveal";
import avatar from "../assets/avatar.png";

const icons: Record<Capability["icon"], typeof IconAppWindow> = {
  app: IconAppWindow,
  mobile: IconDeviceMobile,
  web: IconWorld,
  network: IconNetwork,
  film: IconMovie,
  ai: IconSparkles,
};

export default function About() {
  return (
    <section id="a-propos" className="border-t border-linesoft py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <h2 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.015em]">
            À propos
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-12 md:grid-cols-12 lg:gap-16">
          <Reveal delay={0.06} className="md:col-span-4">
            <div className="floaty w-[min(100%,20rem)] border border-linesoft bg-raise">
              <img
                src={avatar}
                alt="Avatar pixel art de Metoushela Walker"
                className="pixel w-full"
              />
              <div className="border-t border-linesoft px-5 py-4">
                <p className="font-display text-[15px] font-semibold">
                  Metoushela Walker
                </p>
                <p className="mt-1 font-mono text-xs text-mute">
                  Développeur full-stack
                </p>
                <p className="mt-0.5 font-mono text-xs text-mute">
                  Bukavu, RDC
                </p>
              </div>
            </div>
          </Reveal>
          <div className="min-w-0 md:col-span-8">
            <Reveal delay={0.1}>
              <div className="max-w-[62ch] space-y-6">
                <p className="font-display text-2xl font-semibold leading-tight text-paper md:text-[1.75rem]">
                  Bonjour, je suis Metoushela.
                </p>
                <p className="text-[1.0625rem] leading-relaxed text-mute">
                  Développeur full-stack de la République Démocratique du
                  Congo. Mon métier, c'est le logiciel complet : l'interface que
                  l'on voit, le serveur qui tourne derrière, et le build qui
                  arrive sur la machine de l'utilisateur.
                </p>
                <p className="text-[1.0625rem] leading-relaxed text-mute">
                  Je viens de l'Android, je construis du web, et je passe le
                  reste du temps à rendre des choses utiles : un compresseur de
                  vidéo, un partage de fichiers, un proxy partagé, une
                  préparation d'entretiens. Mon GitHub raconte le reste, et je
                  ne montre ici que ce qui marche.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
                <Counter to={githubData.products} label="produits publiés" />
                <Counter to={githubData.platforms} label="plateformes" />
                <Counter to={githubData.repos} label="dépôts GitHub" />
                <Counter to={githubData.tests} label="tests réussis, v5.1" />
              </div>
              <a
                href={githubData.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost mt-10"
              >
                <IconBrandGithub size={18} stroke={1.5} className="mr-2.5" />
                Voir les dépôts
                <IconArrowUpRight
                  size={16}
                  stroke={1.5}
                  className="ml-2 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c, i) => {
            const Icon = icons[c.icon];
            return (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="cap-cell group border-t border-line pt-5">
                  <Icon
                    size={22}
                    stroke={1.5}
                    className="text-mute transition-colors duration-200 group-hover:text-signal"
                  />
                  <h3 className="mt-3 font-display text-base font-semibold transition-colors duration-200 group-hover:text-signal">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm text-mute">{c.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
