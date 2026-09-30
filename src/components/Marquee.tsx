const items = ["VideoCompressor", "Sendy", "Strate", "Interview Prep AI"];

function Set({ dupe = false }: { dupe?: boolean }) {
  return (
    <div
      className={`flex items-center gap-11 ${dupe ? "marquee-dupe" : ""}`}
      aria-hidden="true"
    >
      {items.flatMap((n, i) => [
        <span
          key={`${n}-${i}-n`}
          className="whitespace-nowrap font-display text-[17px] font-semibold text-mute"
        >
          {n}
        </span>,
        <span
          key={`${n}-${i}-s`}
          aria-hidden="true"
          className="marquee-sep"
        />,
      ])}
    </div>
  );
}

/** Unique marquee de la page : les produits défilent, pause au survol. */
export default function Marquee() {
  return (
    <div
      className="marquee overflow-hidden border-y border-linesoft py-4"
      aria-hidden="true"
    >
      <div className="marquee-track">
        <Set />
        <Set dupe />
      </div>
    </div>
  );
}
