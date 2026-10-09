# Aurelia Salon & Spa — salon demo site

One-page demo website for a fictional unisex salon in DLF Phase 4, Gurugram. Built with Next.js 16 and Tailwind CSS 4.

Sections: hero, about, tabbed service menu (hair, skin, nails, makeup & bridal, men's grooming, spa), stylists,
bridal journey, lookbook gallery with lightbox, testimonials, FAQ, appointment booking form, Google Map and footer.
No pricing or WhatsApp; this is a demo.

"Book" buttons on services, stylists and the bridal section pre-fill the booking form. The form offers the next seven
days and hourly slots, greying out times that have already passed and Monday mornings (the salon opens at noon).
Sections fade in on scroll and a progress bar tracks the page, both pure CSS (scroll-driven animations) that fall back
to static content in older browsers and respect reduced motion.

SEO: Open Graph image, JSON-LD (`BeautySalon` + `FAQPage`), `robots.txt`, `sitemap.xml` and a web manifest. Set
`NEXT_PUBLIC_SITE_URL` to the live URL in production (on Vercel it is picked up automatically).

All content (name, services, stylists, photos) lives in `data/salon.ts`. Photos load straight from Unsplash
through `lib/unsplash-loader.ts`.

```bash
npm install
npm run dev
```
