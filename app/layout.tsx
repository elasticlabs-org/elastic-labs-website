import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elasticlabs.org"),
  title: "Elastic Labs | AI x Crypto Innovation & Developer Activation",
  description: "Premier marketing and developer relations agency driving AI x Crypto innovation. Empowering on-chain ecosystems through strategic marketing, developer activation, and venture building in Southeast Asia.",
  keywords: ["AI", "Crypto", "Web3", "Blockchain", "Developer Relations", "Marketing Agency", "Polkadot", "Southeast Asia"],
  authors: [{ name: "Elastic Labs" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elasticlabs.org",
    siteName: "Elastic Labs",
    title: "Elastic Labs | AI x Crypto Innovation",
    description: "Grow your on-chain ecosystem with AI-powered solutions",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elastic Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elastic Labs | AI x Crypto Innovation",
    description: "Grow your on-chain ecosystem with AI-powered solutions",
    creator: "@elasticlabs",
    images: ["/og-image.png"],
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
        <Footer />
      </body>
    </html>
  );
}
