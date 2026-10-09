import Image from "next/image";
import { features, hero } from "@/data/salon";
import { CheckIcon } from "./Icons";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-24 sm:px-6 lg:grid-cols-2">
      <div className="reveal relative aspect-[4/3] overflow-hidden rounded-[2rem]">
        <Image src={hero.about} alt="Aurelia's bright styling floor with marble and soft lighting" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>

      <div>
        <SectionHeading
          eyebrow="About Aurelia"
          title="A calm chair in a busy city"
          body="We opened in 2017 with four chairs and one rule: listen first. Today 18 stylists, therapists and artists share that rule. No rushed appointments, no pushy upselling, just good work and a cup of masala chai while you wait."
        />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <li key={f.title} className="reveal flex gap-4">
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-rose/10 text-rose">
                <CheckIcon className="size-4" />
              </span>
              <div>
                <h3 className="font-bold">{f.title}</h3>
                <p className="mt-1 text-sm text-stone-600">{f.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
