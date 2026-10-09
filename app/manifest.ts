import type { MetadataRoute } from "next";
import { salon } from "@/data/salon";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${salon.name} ${salon.suffix}`,
    short_name: salon.name,
    description: `${salon.tagline}. Unisex salon in DLF Phase 4, Gurugram.`,
    start_url: "/",
    display: "standalone",
    background_color: "#faf6f0",
    theme_color: "#faf6f0",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
