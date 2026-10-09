import { faqs } from "@/data/salon";
import { ArrowIcon } from "./Icons";
import SectionHeading from "./SectionHeading";

export default function Faq() {
  return (
    <section id="faq" className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[2fr_3fr]">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <SectionHeading eyebrow="FAQ" title="Good to know before you come in" body="The questions our front desk hears most. Anything else, just ask when we call to confirm." />
        <a
          href="#book"
          className="group mt-8 inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 font-bold transition hover:border-rose hover:text-rose"
        >
          Book appointment
          <ArrowIcon className="size-5 transition group-hover:translate-x-1" />
        </a>
      </div>

      <div className="space-y-3">
        {faqs.map((f, i) => (
          <details key={f.q} name="faq" open={i === 0} className="faq reveal rounded-2xl border border-ink/10 bg-white transition open:border-rose/40">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-5 font-bold sm:p-6 sm:text-lg">
              {f.q}
              <span className="faq-icon grid size-8 shrink-0 place-items-center rounded-full border border-ink/15 text-xl leading-none text-rose transition">+</span>
            </summary>
            <p className="px-5 pb-6 text-stone-600 sm:px-6">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
