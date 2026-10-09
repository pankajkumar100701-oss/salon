"use client";

// Every photo is on Unsplash, whose CDN resizes on the fly — so ask it for
// the exact width instead of proxying through Next's optimizer, which can
// time out (504) fetching the larger originals.
export default function unsplashLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  const url = new URL(src);
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality ?? 75));
  return url.toString();
}
