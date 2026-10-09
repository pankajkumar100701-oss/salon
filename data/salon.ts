export const photo = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop`;

// Used for canonical/OG URLs. Vercel sets VERCEL_PROJECT_PRODUCTION_URL automatically.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

export const salon = {
  name: "Aurelia",
  suffix: "Salon & Spa",
  tagline: "Hair, skin & a little self-love",
  address: "SCO 21, Galleria Market, DLF Phase 4, Gurugram, Haryana 122009",
  phone: "+91 98110 24680",
  email: "hello@aureliasalon.in",
  hours: [
    { days: "Tue – Sun", time: "10:00 AM – 8:30 PM" },
    { days: "Monday", time: "12:00 PM – 8:00 PM" },
  ],
  social: {
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    facebook: "https://facebook.com",
  },
  mapQuery: "Galleria Market, DLF Phase 4, Gurugram",
  rating: { value: 4.8, count: 1240 },
};

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#stylists", label: "Stylists" },
  { href: "#bridal", label: "Bridal" },
  { href: "#lookbook", label: "Lookbook" },
  { href: "#faq", label: "FAQ" },
  { href: "#book", label: "Book" },
];

export const stats = [
  { value: "9", label: "Years in Gurugram" },
  { value: "18", label: "Expert stylists" },
  { value: "600+", label: "Brides styled" },
  { value: "40k", label: "Happy clients" },
];

export const features = [
  { title: "Single-use kits", body: "Fresh towels, sealed nail kits and sterilised tools for every client, every time." },
  { title: "Premium products", body: "Kérastase, L'Oréal Professionnel, O.P.I and Dermalogica. Nothing diluted, nothing local." },
  { title: "Unisex & family", body: "Separate quiet zones for women, men and kids, so everyone gets the chair they want." },
  { title: "Honest consults", body: "Every colour and treatment starts with a free 10-minute consult and a strand or patch test." },
];

export type Service = { name: string; duration: string; body: string };
export type Category = { id: string; name: string; img: string; blurb: string; services: Service[] };

export const categories: Category[] = [
  {
    id: "hair",
    name: "Hair",
    img: photo("1562322140-8baeececf3df"),
    blurb: "Precision cuts, lived-in colour and treatments that bring tired hair back to life.",
    services: [
      { name: "Signature Haircut & Blow-dry", duration: "60 min", body: "Consult, wash, cut and a finish styled for how you actually wear your hair." },
      { name: "Balayage", duration: "3 hrs", body: "Hand-painted, soft-grown-out colour that looks good for months, not weeks." },
      { name: "Global Colour", duration: "2 hrs", body: "Ammonia-free root-to-tip colour with a bond-builder to protect every strand." },
      { name: "Keratin Smoothening", duration: "3 hrs", body: "Frizz-free, glossy hair for up to four months. Formaldehyde-free formula." },
      { name: "Kérastase Hair Spa", duration: "45 min", body: "Deep-conditioning ritual matched to your scalp and hair type after a quick diagnosis." },
    ],
  },
  {
    id: "skin",
    name: "Skin",
    img: photo("1570172619644-dfd03ed5d881"),
    blurb: "Results-led facials and peels by trained skin therapists, not sales staff.",
    services: [
      { name: "Hydra Facial", duration: "60 min", body: "Cleanse, exfoliate, extract and hydrate in one session. Zero downtime." },
      { name: "Dermalogica Pro Facial", duration: "75 min", body: "Skin mapping first, then a facial built for exactly what your skin needs." },
      { name: "De-tan & Brightening", duration: "45 min", body: "Lifts sun damage and dullness after Gurugram summers. Gentle enough for sensitive skin." },
      { name: "Threading & Waxing", duration: "15–60 min", body: "Rica and chocolate wax, with single-use spatulas and strips." },
    ],
  },
  {
    id: "nails",
    name: "Nails",
    img: photo("1604654894610-df63bc536371"),
    blurb: "Clean, long-lasting manicures and nail art from our in-house nail artists.",
    services: [
      { name: "Gel Manicure", duration: "45 min", body: "Chip-free colour for three weeks, cured under LED, not UV." },
      { name: "Nail Extensions", duration: "90 min", body: "Soft gel or acrylic extensions shaped to suit your hands." },
      { name: "Custom Nail Art", duration: "30+ min", body: "From minimal French tips to hand-painted designs. Bring a reference or let us surprise you." },
      { name: "Spa Pedicure", duration: "60 min", body: "Soak, scrub, mask and massage with a flower-bowl finish." },
    ],
  },
  {
    id: "makeup",
    name: "Makeup & Bridal",
    img: photo("1487412947147-5cebf100ffc2"),
    blurb: "Soft glam to full bridal, with airbrush and HD options and a trial before the big day.",
    services: [
      { name: "Bridal Makeup", duration: "3 hrs", body: "HD or airbrush makeup, hair styling, draping and touch-up kit. Trial included." },
      { name: "Engagement / Reception Look", duration: "2 hrs", body: "Glam that photographs well and lasts through a long evening." },
      { name: "Party Makeup", duration: "75 min", body: "Soft glam, smoky eyes or a bold lip. Lashes included." },
      { name: "Pre-bridal Package", duration: "4 sessions", body: "A four-week plan of facials, hair spa and body polish leading up to the wedding." },
    ],
  },
  {
    id: "men",
    name: "Men's Grooming",
    img: photo("1599351431202-1e0f0137899a"),
    blurb: "Sharp fades, beard work and grooming in a dedicated barber lounge.",
    services: [
      { name: "Haircut & Styling", duration: "40 min", body: "Classic or modern cut, finished with a hot-towel neck shave." },
      { name: "Beard Sculpting", duration: "30 min", body: "Shape, line-up and a straight-razor finish with beard oil." },
      { name: "Hair Colour & Grey Blending", duration: "45 min", body: "Natural-looking cover that grows out without a harsh line." },
      { name: "Men's Facial", duration: "45 min", body: "Deep-cleansing facial for oily, sun-stressed skin." },
    ],
  },
  {
    id: "spa",
    name: "Spa",
    img: photo("1544161515-4ab6ce6db874"),
    blurb: "Quiet rooms, warm oils and therapists trained in Balinese and Swedish massage.",
    services: [
      { name: "Swedish Massage", duration: "60 min", body: "Long, flowing strokes to ease stress and tired muscles." },
      { name: "Hot Stone Therapy", duration: "75 min", body: "Heated basalt stones melt away deep tension in the back and shoulders." },
      { name: "Head, Neck & Shoulder", duration: "30 min", body: "A quick reset for desk-job necks, with warm almond oil." },
      { name: "Body Polish", duration: "60 min", body: "Exfoliating scrub and wrap that leaves skin soft and glowing." },
    ],
  },
];

export const allServices = categories.flatMap((c) => c.services.map((s) => ({ ...s, category: c.name })));

export const stylists = [
  { name: "Meera Kapoor", role: "Creative Director · Colour", exp: "14 yrs", img: photo("1580489944761-15a19d654956") },
  { name: "Kabir Anand", role: "Senior Barber · Men's Grooming", exp: "9 yrs", img: photo("1506794778202-cad84cf45f1d") },
  { name: "Tanya Rao", role: "Bridal & Celebrity Makeup", exp: "11 yrs", img: photo("1544005313-94ddf0286df2") },
  { name: "Ishita Sen", role: "Skin Therapist · Facials", exp: "7 yrs", img: photo("1534528741775-53994a69daeb") },
];

export const bridalSteps = [
  { title: "Consult & trial", body: "Meet your artist a month out. We test your look, take photos in daylight and fine-tune it together." },
  { title: "Pre-bridal glow", body: "Four weekly sessions of facials, hair spa and body polish so your skin and hair are at their best." },
  { title: "The big day", body: "Your artist comes to you or you come to our private bridal suite. Touch-up kit for the family included." },
];

export const testimonials = [
  { name: "Aditi Sharma", role: "Bride, Feb 2026", img: photo("1494790108377-be9c29b29330"), quote: "Tanya understood exactly what I wanted after one trial. My makeup lasted through a 14-hour day and looked natural in every photo." },
  { name: "Rohan Mehra", role: "Regular for 3 years", img: photo("1507003211169-0a1dd7228f2d"), quote: "Kabir is the only barber I trust with a fade. Clean lounge, on-time appointments and nobody upsells you." },
  { name: "Sana Qureshi", role: "Balayage client", img: photo("1438761681033-6461ffad8d80"), quote: "Meera talked me out of going too light and she was right. Four months later my colour still looks fresh." },
  { name: "Vikram Bhatia", role: "Spa member", img: photo("1500648767791-00dcc994a43e"), quote: "The hot stone massage is my monthly reset. Quiet rooms, great therapists and they remember my pressure preference." },
];

export const gallery = [
  { img: photo("1560066984-138dadb4c035"), alt: "Styling stations by the big windows" },
  { img: photo("1600948836101-f9ffda59d250"), alt: "The styling floor with round mirrors" },
  { img: photo("1519014816548-bf5fe059798b"), alt: "Hand-painted nail art" },
  { img: photo("1492106087820-71f1a00d2b11"), alt: "Lavender pastel colour" },
  { img: photo("1582095133179-bfd08e2fc6b3"), alt: "Pin curls being set for an event look" },
  { img: photo("1605497788044-5a32c7078486"), alt: "Men's cut and blow-dry in the barber lounge" },
  { img: photo("1616394584738-fc6e612e71b9"), alt: "Brightening facial in the skin room" },
  { img: photo("1607779097040-26e80aa78e66"), alt: "Pastel gel manicure" },
];

export const hero = {
  img: photo("1522337360788-8b13dee7a37e"),
  side: photo("1580618672591-eb180b1a973f"),
  about: photo("1633681926022-84c23e8cb2d6"),
  bridal: photo("1512496015851-a90fb38ba796"),
};

export const marquee = ["Balayage", "Keratin", "Hydra Facial", "Gel Nails", "Bridal Makeup", "Beard Sculpting", "Hot Stone", "Hair Spa"];

export const faqs = [
  {
    q: "Do I need an appointment, or can I walk in?",
    a: "Walk-ins are welcome for haircuts, threading and manicures when a chair is free. Colour, keratin, facials, spa and bridal are by appointment so your stylist can block enough time.",
  },
  {
    q: "Will you do a patch or strand test before colour?",
    a: "Always. First-time colour and chemical clients get a free patch test at least 48 hours before, and a strand test on the day.",
  },
  {
    q: "How early should I book my bridal makeup?",
    a: "Ideally two to three months ahead in wedding season (October to February). That leaves time for a trial and the pre-bridal package.",
  },
  {
    q: "Can I reschedule or cancel?",
    a: "Yes. Call or message us at least four hours before your slot and we will move it, no questions asked.",
  },
  {
    q: "Is parking available?",
    a: "Free parking in the Galleria Market lot, right outside the salon. Valet is available on weekend evenings.",
  },
];

// Hourly start times for the booking form. Mondays open at noon, see Booking.
export const slots =["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"];
