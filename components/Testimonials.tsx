import Image from "next/image";
import { testimonials } from "@/data/salon";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-sand py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading center eyebrow="Kind words" title="Why clients keep coming back" />
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <li key={t.name} className="reveal flex flex-col justify-between rounded-[2rem] bg-cream p-8">
              <blockquote className="font-display text-2xl leading-snug">&ldquo;{t.quote}&rdquo;</blockquote>
              <div className="mt-6 flex items-center gap-4">
                <Image src={t.img} alt="" width={48} height={48} className="size-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-stone-500">{t.role}</p>
                </div>
                <span className="ml-auto text-gold" aria-label="5 out of 5 stars">
                  ★★★★★
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
