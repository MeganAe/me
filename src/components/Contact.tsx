import { IconArrowUpRight } from "@tabler/icons-react";
import Magnetic from "./Magnetic";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-linesoft py-28 md:py-40">
      <div className="wrap">
        <Reveal>
          <h2 className="max-w-[18ch] font-display text-[clamp(2.5rem,6.5vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.02em]">
            Un projet, un poste, une idée ?
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-[44ch] text-lg text-mute">
            Écris-moi. Je lis tout, je réponds vite.
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          {/* REMPLACE : mettre ici l'adresse email réelle de Metoushela */}
          <Magnetic
            href="mailto:contact@metoushela.dev"
            className="btn btn-solid group mt-10"
          >
            contact@metoushela.dev
            <IconArrowUpRight
              size={20}
              stroke={1.5}
              className="ml-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
