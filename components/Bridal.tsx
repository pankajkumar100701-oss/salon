"use client";

import Image from "next/image";
import { bridalSteps, hero } from "@/data/salon";
import { sendBooking } from "@/lib/booking";
import { ArrowIcon } from "./Icons";
import SectionHeading from "./SectionHeading";

export default function Bridal() {
  return (
    <section id="bridal" className="bg-ink py-24 text-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionHeading
            dark
            eyebrow="Aurelia Bride"
            title="Your wedding look, rehearsed to perfection"
            body="600+ brides in nine years. HD and airbrush makeup, hair, draping and a private bridal suite, with the same artist from trial to pheras."
          />

          <ol className="mt-10 space-y-6">
            {bridalSteps.map((s, i) => (
              <li key={s.title} className="reveal flex gap-5">
                <span className="w-14 shrink-0 font-display text-5xl italic leading-none text-gold">0{i + 1}</span>
                <div>
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-1 text-sm text-stone-400">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <button
            type="button"
            onClick={() => sendBooking({ service: "Bridal Makeup", stylist: "Tanya Rao" })}
            className="group mt-10 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 font-bold text-ink transition hover:bg-cream"
          >
            Book a bridal trial
            <ArrowIcon className="size-5 transition group-hover:translate-x-1" />
          </button>
        </div>

        <div className="reveal relative aspect-[4/5] overflow-hidden rounded-[2rem] lg:order-first">
          <Image src={hero.bridal} alt="Bridal makeup palette and brushes laid out before a trial" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
          <p className="absolute bottom-6 left-6 right-6 font-display text-3xl italic">&ldquo;I felt like myself, only more.&rdquo;</p>
        </div>
      </div>
    </section>
  );
}
