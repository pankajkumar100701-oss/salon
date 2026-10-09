import { ImageResponse } from "next/og";
import { sparklePath } from "@/components/Icons";

export const alt = "Aurelia Salon & Spa: unisex salon in DLF Phase 4, Gurugram";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "radial-gradient(circle at 85% 20%, #f0d6c8 0%, #faf6f0 55%)",
          color: "#1f1a17",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="88" height="88">
            <rect width="64" height="64" rx="32" fill="#1f1a17" />
            <path transform="translate(14 14) scale(1.5)" d={sparklePath} fill="#b8925a" />
          </svg>
          <div style={{ display: "flex", fontSize: 52, fontWeight: 700, letterSpacing: 2 }}>
            AURELIA<span style={{ color: "#b4694f", marginLeft: 16 }}>SALON &amp; SPA</span>
          </div>
        </div>
        <div style={{ marginTop: 48, fontSize: 92, fontWeight: 700, lineHeight: 1 }}>Hair, skin &amp; a little self-love.</div>
        <div style={{ marginTop: 32, fontSize: 32, color: "#57534e" }}>Hair · Skin · Nails · Bridal · Men · Spa · DLF Phase 4, Gurugram</div>
        <div style={{ marginTop: 40, display: "flex" }}>
          <div style={{ background: "#1f1a17", color: "#faf6f0", fontSize: 30, fontWeight: 700, padding: "14px 32px", borderRadius: 999 }}>
            Book an appointment
          </div>
        </div>
      </div>
    ),
    size,
  );
}
