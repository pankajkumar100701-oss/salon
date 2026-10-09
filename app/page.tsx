import About from "@/components/About";
import Booking from "@/components/Booking";
import Bridal from "@/components/Bridal";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Stylists from "@/components/Stylists";
import Testimonials from "@/components/Testimonials";
import { faqs, salon, siteUrl } from "@/data/salon";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: `${salon.name} ${salon.suffix}`,
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    telephone: salon.phone,
    email: salon.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "SCO 21, Galleria Market, DLF Phase 4",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122009",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "10:00", closes: "20:30" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "12:00", closes: "20:00" },
    ],
    aggregateRating: { "@type": "AggregateRating", ratingValue: salon.rating.value, reviewCount: salon.rating.count },
    sameAs: Object.values(salon.social),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Stylists />
        <Bridal />
        <Gallery />
        <Testimonials />
        <Faq />
        <Booking />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
