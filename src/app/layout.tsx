import type { Metadata } from "next";
import { Roboto_Mono, Libre_Franklin } from "next/font/google";
import "./styles/lp-1.scss";

export const metadata: Metadata = {
  title: "Best Chemotherapy Treatment in India - Personalised Care",
  description:
    "Get Effective Chemotherapy at Everhope with advanced and personalised treatment plans for various types of cancer healing & recovery. Book an Appointment Now!",
};

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
