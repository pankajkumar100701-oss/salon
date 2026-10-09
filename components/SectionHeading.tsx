export default function SectionHeading({
  eyebrow,
  title,
  body,
  center = false,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`reveal ${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-rose">{eyebrow}</p>
      <h2 className="mt-3 font-display text-5xl font-medium leading-[1.05] sm:text-6xl">{title}</h2>
      {body && <p className={`mt-4 ${dark ? "text-stone-400" : "text-stone-600"}`}>{body}</p>}
    </div>
  );
}
