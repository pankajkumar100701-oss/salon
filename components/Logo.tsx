import { salon } from "@/data/salon";
import { SparkleIcon } from "./Icons";

export default function Logo({ large = false }: { large?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <span className={`grid place-items-center rounded-full bg-ink text-gold ${large ? "size-11" : "size-9"}`}>
        <SparkleIcon className={large ? "size-5" : "size-4"} />
      </span>
      <span className="leading-none">
        <span className={`block font-display font-semibold tracking-wide ${large ? "text-3xl" : "text-2xl"}`}>{salon.name}</span>
        <span className="block text-[0.6rem] font-bold uppercase tracking-[0.35em] text-rose">{salon.suffix}</span>
      </span>
    </span>
  );
}
