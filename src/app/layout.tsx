import type { Metadata } from "next";
import { Lora, Nunito_Sans } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { business } from "@/lib/site-data";
import { localBusinessSchema, pageMetadata, websiteSchema } from "@/lib/seo";
import "./globals.css";

const nunito = Nunito_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...pageMetadata("/"),
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `${business.name} | Custom Orthotics & Shoe Repair`,
    template: `%s | ${business.name}`,
  },
  applicationName: business.name,
  authors: [{ name: business.name }],
  creator: business.name,
  publisher: business.name,
  category: "healthcare",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${lora.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
      </body>
    </html>
  );
}
