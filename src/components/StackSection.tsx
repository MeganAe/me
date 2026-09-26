import Reveal from "./Reveal";
import { languages, tools, type StackItem } from "../data/stack";

function LogoGrid({ title, items }: { title: string; items: StackItem[] }) {
  return (
    <div>
      <h3 className="font-mono text-[13px] text-mute">{title}</h3>
      <div className="mt-5 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
        {items.map((l, i) => (
          <Reveal key={l.name} delay={i * 0.04}>
            <div className="stack-cell flex items-center gap-3.5 border-t border-line py-4">
              <span
                className="stack-logo block h-6 w-6 shrink-0"
                dangerouslySetInnerHTML={{ __html: l.svg }}
              />
              <span className="text-[15px] font-medium">{l.name}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function StackSection() {
  return (
    <section id="stack" className="border-t border-linesoft py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <h2 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.015em]">
            La stack
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-5 max-w-[56ch] text-mute">
            Choisie projet par projet, jamais par mode. Celles qui servent les
            quatre produits, affichées en monochrome pour rester dans le monde
            du site.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-x-12 gap-y-14 md:grid-cols-2">
          <LogoGrid title="langages" items={languages} />
          <LogoGrid title="frameworks & outils" items={tools} />
        </div>
      </div>
    </section>
  );
}
