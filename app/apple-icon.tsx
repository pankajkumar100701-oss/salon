import { ImageResponse } from "next/og";
import { sparklePath } from "@/components/Icons";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="180" height="180">
        <rect width="64" height="64" fill="#1f1a17" />
        <path transform="translate(14 14) scale(1.5)" d={sparklePath} fill="#b8925a" />
      </svg>
    ),
    size,
  );
}
