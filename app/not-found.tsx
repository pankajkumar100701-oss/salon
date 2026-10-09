import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-32 text-center">
      <p className="font-display text-[10rem] italic leading-none text-rose sm:text-[14rem]">404</p>
      <h1 className="mt-4 font-display text-5xl font-medium">Bad hair day?</h1>
      <p className="mt-3 max-w-md text-stone-600">This page went for a trim and never came back. Let&apos;s get you back to the salon floor.</p>
      <Link href="/" className="mt-8 rounded-full bg-ink px-7 py-4 font-bold text-cream transition hover:bg-rose">
        Back to home
      </Link>
    </main>
  );
}
