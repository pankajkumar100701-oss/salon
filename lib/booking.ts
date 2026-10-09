// "Book" buttons in the services menu and stylist cards hand their pick to the
// booking form through this event instead of shared state.
const EVENT = "aurelia:booking";

export type BookingPick = { service?: string; stylist?: string };

export function sendBooking(pick: BookingPick) {
  window.dispatchEvent(new CustomEvent<BookingPick>(EVENT, { detail: pick }));
  document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
}

export function onBooking(handler: (pick: BookingPick) => void) {
  const listener = (e: Event) => handler((e as CustomEvent<BookingPick>).detail);
  window.addEventListener(EVENT, listener);
  return () => window.removeEventListener(EVENT, listener);
}
