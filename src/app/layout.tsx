import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { localBusinessSchema, organizationSchema } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Renovation Company in the GTA`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "McAze is a Canadian renovation company serving Vaughan, Markham, Richmond Hill, Toronto, North York, Mississauga, and nearby GTA communities.",
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  verification: {
    google: "VEM_QIhCmH5_DTI39UD1scRyxbno5XrALjbm_9jbygg",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Renovation Company in the GTA`,
    description:
      "Premium renovation and property improvement services for homeowners across the Greater Toronto Area.",
    images: [{ url: siteConfig.logo, width: 646, height: 281, alt: "McAze logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Renovation Company in the GTA`,
    description:
      "Premium renovation and property improvement services for homeowners across the Greater Toronto Area.",
    images: [siteConfig.logo],
  },
  icons: {
    icon: [
      { url: "/icons/logo-icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icons/logo-icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={localBusinessSchema()} />
        <Analytics />
      </body>
    </html>
  );
}
