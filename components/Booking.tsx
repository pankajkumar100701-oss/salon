"use client";

import { useEffect, useMemo, useState, useSyncExternalStore, type FormEvent } from "react";
import { categories, salon, slots, stylists } from "@/data/salon";
import { onBooking } from "@/lib/booking";
import SectionHeading from "./SectionHeading";

type Confirmed = { name: string; phone: string; service: string; stylist: string; when: string };

const ANY = "Any available stylist";
const NOT_SURE = "Not sure yet, help me choose";
const field = "mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 outline-none transition focus:border-rose";
const chip = "rounded-xl border px-3 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-35";

const noop = () => () => {};
// The page is prerendered, so "now" is only known in the browser. Hour precision keeps the snapshot stable.
const getNow = () => {
  const d = new Date();
  return `${d.toDateString()}|${d.getHours()}`;
};

const slotHour = (slot: string) => {
  const [time, meridiem] = slot.split(" ");
  const h = Number(time.split(":")[0]) % 12;
  return meridiem === "PM" ? h + 12 : h;
};

export default function Booking() {
  const now = useSyncExternalStore(noop, getNow, () => null);
  const [service, setService] = useState(NOT_SURE);
  const [stylist, setStylist] = useState(ANY);
  const [dayIndex, setDayIndex] = useState(0);
  const [slot, setSlot] = useState("");
  const [error, setError] = useState("");
  const [confirmed, setConfirmed] = useState<Confirmed | null>(null);

  useEffect(
    () =>
      onBooking((pick) => {
        if (pick.service) setService(pick.service);
        if (pick.stylist) setStylist(pick.stylist);
        setConfirmed(null);
      }),
    [],
  );

  // The next seven days, starting today.
  const days = useMemo(() => {
    if (!now) return [];
    const start = new Date(now.split("|")[0]);
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      return d;
    });
  }, [now]);

  const currentHour = now ? Number(now.split("|")[1]) : 0;
  const day = days[dayIndex];

  function isOpen(s: string) {
    if (!day) return false;
    const h = slotHour(s);
    if (day.getDay() === 1 && h < 12) return false; // Mondays open at noon.
    if (dayIndex === 0 && h <= currentHour) return false;
    return true;
  }

  function pickDay(i: number) {
    setDayIndex(i);
    setSlot("");
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name")).trim().replace(/\s+/g, " ");
    const phone = String(data.get("phone")).replace(/\D/g, "").replace(/^(91|0)(?=\d{10}$)/, "");
    if (name.length < 2) return setError("Please tell us your name.");
    if (!/^[6-9]\d{9}$/.test(phone)) return setError("Please enter a valid 10-digit mobile number.");
    if (!day || !slot) return setError("Please pick a date and time.");
    setError("");
    const date = day.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" });
    setConfirmed({ name, phone, service, stylist, when: `${date} at ${slot}` });
  }

  function reset() {
    setConfirmed(null);
    setService(NOT_SURE);
    setStylist(ANY);
    setSlot("");
  }

  return (
    <section id="book" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="grid gap-12 lg:grid-cols-[3fr_2fr]">
        <div>
          <SectionHeading eyebrow="Book appointment" title="Reserve your chair" body="Pick a service, a stylist and a time. We'll call to confirm within the hour. Nothing to pay online." />

          <div className="reveal mt-10 rounded-[2rem] border border-ink/10 bg-sand/60 p-6 sm:p-8">
            {confirmed ? (
              <div className="py-6 text-center" aria-live="polite">
                <p className="font-display text-5xl font-medium text-rose">See you soon, {confirmed.name.split(" ")[0]}!</p>
                <dl className="mx-auto mt-6 max-w-sm space-y-2 text-left text-sm">
                  {[
                    ["Service", confirmed.service],
                    ["Stylist", confirmed.stylist],
                    ["When", confirmed.when],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 border-b border-ink/10 pb-2">
                      <dt className="text-stone-500">{k}</dt>
                      <dd className="text-right font-semibold">{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 text-stone-600">
                  We&apos;ll call <span className="font-semibold text-ink">+91 {confirmed.phone}</span> to confirm.
                </p>
                <button type="button" onClick={reset} className="mt-6 text-sm text-stone-500 underline-offset-4 hover:underline">
                  Book another appointment
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2" noValidate>
                <label className="block">
                  <span className="text-sm font-semibold text-stone-600">Full name</span>
                  <input name="name" required minLength={2} autoComplete="name" placeholder="Priya Sharma" className={field} />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-stone-600">Mobile number</span>
                  <input name="phone" required type="tel" inputMode="numeric" autoComplete="tel" placeholder="98110 24680" className={field} />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-stone-600">Service</span>
                  <select value={service} onChange={(e) => setService(e.target.value)} className={field}>
                    <option>{NOT_SURE}</option>
                    {categories.map((c) => (
                      <optgroup key={c.id} label={c.name}>
                        {c.services.map((s) => (
                          <option key={s.name}>{s.name}</option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-stone-600">Stylist</span>
                  <select value={stylist} onChange={(e) => setStylist(e.target.value)} className={field}>
                    <option>{ANY}</option>
                    {stylists.map((s) => (
                      <option key={s.name}>{s.name}</option>
                    ))}
                  </select>
                </label>

                <fieldset className="sm:col-span-2">
                  <legend className="text-sm font-semibold text-stone-600">Date</legend>
                  <div className="no-scrollbar mt-2 flex gap-2 overflow-x-auto pb-1">
                    {days.length === 0 && <p className="py-3 text-sm text-stone-500">Loading dates…</p>}
                    {days.map((d, i) => (
                      <button
                        key={d.toDateString()}
                        type="button"
                        aria-pressed={dayIndex === i}
                        onClick={() => pickDay(i)}
                        className={`${chip} min-w-16 shrink-0 text-center ${dayIndex === i ? "border-ink bg-ink text-cream" : "border-ink/15 bg-white hover:border-rose"}`}
                      >
                        <span className="block text-xs font-medium uppercase opacity-70">{i === 0 ? "Today" : d.toLocaleDateString("en-IN", { weekday: "short" })}</span>
                        <span className="block font-display text-2xl leading-tight">{d.getDate()}</span>
                      </button>
                    ))}
                  </div>
                </fieldset>

                <fieldset className="sm:col-span-2">
                  <legend className="text-sm font-semibold text-stone-600">Time</legend>
                  <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-5">
                    {slots.map((s) => (
                      <button
                        key={s}
                        type="button"
                        disabled={!isOpen(s)}
                        aria-pressed={slot === s}
                        onClick={() => setSlot(s)}
                        className={`${chip} ${slot === s ? "border-rose bg-rose text-cream" : "border-ink/15 bg-white hover:border-rose"}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  {day && slots.every((s) => !isOpen(s)) && <p className="mt-2 text-sm text-stone-500">We&apos;re fully past opening hours today. Pick another day.</p>}
                </fieldset>

                {error && (
                  <p role="alert" className="text-sm font-semibold text-red-700 sm:col-span-2">
                    {error}
                  </p>
                )}
                <button type="submit" className="rounded-full bg-ink py-4 font-bold text-cream transition hover:bg-rose sm:col-span-2">
                  Request Appointment
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="relative min-h-80 flex-1 overflow-hidden rounded-[2rem] border border-ink/10">
            <iframe
              title={`Map to ${salon.name} ${salon.suffix}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(salon.mapQuery)}&output=embed`}
              className="absolute inset-0 size-full sepia-[0.3]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="rounded-[2rem] border border-ink/10 bg-white p-6">
            <h3 className="font-display text-2xl font-semibold text-rose">Visit us</h3>
            <p className="mt-2 text-sm text-stone-600">{salon.address}</p>
            <a href={`tel:${salon.phone.replace(/\s/g, "")}`} className="mt-3 block font-bold hover:text-rose">
              {salon.phone}
            </a>
            <a href={`mailto:${salon.email}`} className="block text-sm text-stone-500 hover:text-rose">
              {salon.email}
            </a>
            <dl className="mt-4 space-y-1 border-t border-ink/10 pt-4 text-sm">
              {salon.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-4">
                  <dt className="text-stone-500">{h.days}</dt>
                  <dd className="font-semibold">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
