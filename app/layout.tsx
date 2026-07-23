import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nicogusman.com"),

  title: {
    default: "Nico Gusman | Research, Strategy, Service Design",
    template: "%s | Nico Gusman",
  },

  description:
    "UX researcher helping organizations understand what people are experiencing before deciding what to build, change, or improve.",

  openGraph: {
    title: "Nico Gusman",
    description:
      "Helping organizations understand what people are experiencing before deciding what to build, change, or improve.",
    url: "https://nicogusman.com",
    siteName: "Nico Gusman",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nico Gusman",
    description:
      "Helping organizations understand what people are experiencing before deciding what to build, change, or improve.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} antialiased`}>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}