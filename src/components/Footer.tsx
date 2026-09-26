import { IconBrandGithub } from "@tabler/icons-react";
import { github } from "../data/projects";

export default function Footer() {
  return (
    <footer className="border-t border-linesoft">
      <div className="wrap flex flex-wrap items-center justify-between gap-x-8 gap-y-4 py-7 font-mono text-[0.8125rem] text-mute tabular-nums">
        <span>© {new Date().getFullYear()} Metoushela Walker</span>
        <span className="flex items-center gap-5">
          <span>Bukavu, RDC</span>
          <a
            href={github.url}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub de Metoushela"
            className="flex items-center gap-2 transition-colors duration-200 hover:text-signal"
          >
            <IconBrandGithub size={16} stroke={1.5} />
            {github.user}
          </a>
        </span>
      </div>
    </footer>
  );
}
