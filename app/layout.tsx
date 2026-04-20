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
  metadataBase: new URL('https://k-survival-kit.vercel.app'),
  title: "K-Survival Kit — Korea Guide for International Students",
  description: "Practical guide for international students living in Korea. ARC card, SIM, banking, housing, daily life and more — in 4 languages.",
  icons: {
    icon: "/icon.svg",
  },
  other: {
    'p:domain_verify': '536fb95b54c46a7e53ed9342c3b113d7',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
