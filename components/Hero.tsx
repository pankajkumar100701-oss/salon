import Image from "next/image";
import { hero, salon, stats } from "@/data/salon";
import { ArrowIcon, SparkleIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pb-16 pt-28 sm:pt-32">
      <div className="absolute -left-40 top-10 -z-10 size-[30rem] rounded-full bg-rose/15 blur-[120px]" aria-hidden />
      <div className="absolute -right-20 bottom-0 -z-10 size-[26rem] rounded-full bg-gold/20 blur-[120px]" aria-hidden />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-rose/30 bg-white/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-rose">
            <SparkleIcon className="size-3" />
            Unisex salon · DLF Phase 4, Gurugram
          </p>

          <h1 className="mt-6 font-display text-6xl font-medium leading-[0.95] sm:text-7xl lg:text-8xl">
            Hair, skin &amp; a little <em className="text-rose">self-love</em>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-stone-600">
            Colour that grows out beautifully, cuts that suit how you live, facials that actually work and bridal looks that
            last all night. Open {salon.hours[0].time}.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#book" className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 font-bold text-cream transition hover:bg-rose">
              Book Appointment
              <ArrowIcon className="size-5 transition group-hover:translate-x-1" />
            </a>
            <a href="#services" className="inline-flex items-center rounded-full border border-ink/20 px-7 py-4 font-bold transition hover:border-rose hover:text-rose">
              View Services
            </a>
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm text-stone-600">
            <span className="text-gold" aria-hidden>
              ★★★★★
            </span>
            <span>
              <span className="font-bold text-ink">{salon.rating.value}</span> on Google · {salon.rating.count.toLocaleString("en-IN")}+ reviews
            </span>
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="arch relative aspect-[4/5] overflow-hidden shadow-2xl shadow-rose/20">
            <Image src={hero.img} alt="Client showing off soft, glossy waves" fill priority sizes="(min-width: 1024px) 45vw, 90vw" className="object-cover" />
          </div>
          <div className="absolute -bottom-6 left-0 size-36 overflow-hidden rounded-full border-[6px] border-cream shadow-xl sm:-left-10 sm:size-44">
            <Image src={hero.side} alt="Stylist blow-drying a client's hair" fill sizes="176px" className="object-cover" />
          </div>
          <div className="absolute -right-2 top-10 rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur sm:-right-6">
            <p className="font-display text-3xl font-semibold leading-none text-rose">Free</p>
            <p className="text-xs font-semibold text-stone-500">colour consult</p>
          </div>
        </div>
      </div>

      <dl className="mx-auto mt-20 grid max-w-7xl grid-cols-2 gap-6 px-4 sm:grid-cols-4 sm:px-6">
        {stats.map((s) => (
          <div key={s.label} className="border-t border-ink/15 pt-5">
            <dt className="sr-only">{s.label}</dt>
            <dd className="font-display text-5xl font-medium text-ink">{s.value}</dd>
            <dd className="text-sm text-stone-500">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
