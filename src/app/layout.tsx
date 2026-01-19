import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://interceptly.net"),
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
  },
  title: {
    default: "Interceptly | Privacy-First API Mocking",
    template: "%s | Interceptly",
  },
  description:
    "Zero-friction API Mocking, Redirecting, and Blocking directly in your browser. No accounts, no cloud syncing, just local developer tools.",
  keywords: [
    "API Mocking",
    "API Interceptor",
    "Developer Tools",
    "Privacy-first",
    "Network Mocking",
    "Chrome Extension",
    "API Redirecting",
    "API Blocking",
  ],
  authors: [{ name: "Interceptly Labs" }],
  creator: "Interceptly Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://interceptly.net",
    siteName: "Interceptly",
    title: "Interceptly | Privacy-First API Mocking",
    description: "Zero-friction API Mocking directly in your browser. Local-only, privacy-first.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Interceptly - Privacy-First API Mocking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interceptly | Privacy-First API Mocking",
    description: "Zero-friction API Mocking directly in your browser. Local-only, privacy-first.",
    images: ["/logo.png"],
    creator: "@interceptly",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
