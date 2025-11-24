// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://roastmyscreenshot.com"),
  title: {
    default: "RoastMyScreenshot 🔥 Get Destroyed by AI",
    template: "%s | RoastMyScreenshot",
  },
  description: "Upload any screenshot. Get emotionally damaged for free.",
  keywords: ["roast", "screenshot", "ai", "funny", "meme"],
  authors: [{ name: "qolednoi-rgb" }],
  creator: "qolednoi-rgb",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://roastmyscreenshot.com",
    siteName: "RoastMyScreenshot",
    title: "RoastMyScreenshot 🔥",
    description: "Upload anything. Get emotionally damaged for free.",
    images: [
      {
        url: "/og-preview.jpg", // ← create this 1200×630 image later, for now it 404s gracefully
        width: 1200,
        height: 630,
        alt: "RoastMyScreenshot preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourhandle", // ← change to your real X handle
    creator: "@yourhandle",
    title: "RoastMyScreenshot 🔥",
    description: "I let an AI roast my screenshot and I regret everything",
    images: ["/og-preview.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="antialiased bg-black text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
