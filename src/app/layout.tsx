import type { Metadata } from "next";
import { Inter, Poppins, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const poppins = Poppins({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-poppins", display: "swap" });
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"], variable: "--font-lato", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Talkyd Industrials | Industrial Chemical Supply & Distribution",
    template: "%s | Talkyd Industrials",
  },
  description: "Talkyd Industrials is a leading industrial chemical supplier and distributor across Africa. We supply industrial chemicals, laboratory reagents, polymers, agricultural inputs, and water treatment chemicals to businesses across 20+ African countries.",
  keywords: [
    "industrial chemicals Africa", "chemical supplier Uganda", "laboratory reagents Africa",
    "industrial supply Africa", "chemical distribution Uganda", "polymers plastics Africa",
    "water treatment chemicals", "agricultural chemicals Uganda", "Talkyd",
    "industrial procurement Africa", "chemical trading company Uganda", "bulk chemicals Africa"
  ],
  authors: [{ name: "Talkyd Industrials" }],
  creator: "Talkyd Industrials",
  publisher: "Talkyd Industrials",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "https://talkyd.com",
    siteName: "Talkyd Industrials",
    title: "Talkyd Industrials | Industrial Chemical Supply & Distribution",
    description: "Leading industrial chemical supplier and distributor across Africa. Chemicals, polymers, lab reagents, agricultural inputs and more.",
    images: [{ url: "/images/talkyd-nav-logo.png", width: 500, height: 500, alt: "Talkyd Industrials" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Talkyd Industrials | Industrial Chemical Supply",
    description: "Leading industrial chemical supplier and distributor across Africa.",
    images: ["/images/talkyd-nav-logo.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  metadataBase: new URL("https://talkyd.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TALKYD INDUSTRIALS - SMC LTD",
    "url": "https://talkyd.com",
    "logo": "https://talkyd.com/images/talkyd-nav-logo.png",
    "description": "TALKYD INDUSTRIALS - SMC Ltd is a Uganda-focused industrial chemical distribution and supply company sourcing industrial chemicals, specialty chemicals, solvents, manufacturing raw materials, water treatment products, construction chemicals, and related industrial supplies for businesses across Uganda and the wider East African market.",
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "info@talkyd.com"
    },
    "areaServed": ["UG", "KE", "TZ", "RW"],
    "foundingDate": "2018"
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${lato.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
