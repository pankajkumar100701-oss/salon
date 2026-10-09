import { navLinks, salon } from "@/data/salon";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./Icons";
import Logo from "./Logo";

const socials = [
  { href: salon.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: salon.social.youtube, label: "YouTube", Icon: YoutubeIcon },
  { href: salon.social.facebook, label: "Facebook", Icon: FacebookIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-sand">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <a href="#top" aria-label="Back to top" className="inline-block">
            <Logo large />
          </a>
          <p className="mt-4 max-w-sm text-sm text-stone-600">{salon.tagline}. Gurugram&apos;s neighbourhood salon for cuts, colour, skin, nails, brides and grooms.</p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid size-10 place-items-center rounded-full border border-ink/15 transition hover:border-rose hover:text-rose">
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
        <nav aria-label="Footer">
          <h3 className="font-display text-2xl font-semibold text-rose">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-stone-600">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h3 className="font-display text-2xl font-semibold text-rose">Find us</h3>
          <p className="mt-3 text-sm text-stone-600">{salon.address}</p>
          <p className="mt-2 text-sm text-stone-600">{salon.phone}</p>
        </div>
      </div>
      <p className="border-t border-ink/10 py-6 text-center text-xs text-stone-500">
        © 2026 {salon.name} {salon.suffix}. Demo website. All photos from Unsplash.
      </p>
    </footer>
  );
}
