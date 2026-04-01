import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pompano Beach House AC Repair - Expert HVAC Services | Licensed & Insured",
  description: "Professional HVAC services for over 25 years. Expert AC repair, replacement, emergency HVAC, and inspections. Free estimates. Licensed & insured. Call (555) 123-4567.",
  keywords: "HVAC, AC repair, AC installation, emergency HVAC, HVAC contractor, licensed HVAC technician, insured HVAC",
  openGraph: {
    title: "Pompano Beach House AC Repair - Expert HVAC Services",
    description: "Professional HVAC services with 25+ years experience. Free estimates, lifetime warranty, and expert craftsmanship.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
