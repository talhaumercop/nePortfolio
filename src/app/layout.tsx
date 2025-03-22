import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Chatbot from "@/components/ChatAgent";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ["latin"], variable: "--font-serif", weight: "400" });

export const metadata: Metadata = {
  title: "My Portfolio",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/icon.ico",  // ✅ Fixed Path (Now in public/)
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon-precomposed.png",
    },
  },
  openGraph: {
    images: ["/icon.ico"],  // ✅ Fixed Path (Now in public/)
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/book-cover.png" />
        <meta property="og:image" content="/book-cover.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
