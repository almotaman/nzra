import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "VIRTUAL ARCHITECTURE | Immersive 3D Sales Engines for Real Estate",
  description:
    "We transform blueprints and floor plans into ultra-premium, high-converting interactive 3D & 360° virtual tours for developers, brokers, and agencies.",
  keywords: [
    "3D Real Estate Tours",
    "Matterport Egypt",
    "Kuula 360 Tours",
    "Property Visualization",
    "Real Estate Pre-sales",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${inter.className} bg-zinc-950 text-zinc-50 antialiased selection:bg-amber-500/30 selection:text-amber-200`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
