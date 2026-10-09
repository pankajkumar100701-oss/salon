import { marquee } from "@/data/salon";
import { SparkleIcon } from "./Icons";

export default function Marquee() {
  // Two copies side by side so the -50% loop is seamless.
  const items = [...marquee, ...marquee];
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-ink py-5 text-cream" aria-hidden>
      <div className="animate-marquee flex w-max items-center gap-10">
        {items.map((m, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-3xl italic">
            {m}
            <SparkleIcon className="size-4 text-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}
