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
    default: "Mbonyange Africa Limited | Industrial Chemical Supply & Distribution",
    template: "%s | Mbonyange Africa Limited",
  },
  description: "Mbonyange Africa Limited is a leading industrial chemical supplier and distributor across Africa. We supply industrial chemicals, laboratory reagents, polymers, agricultural inputs, and water treatment chemicals to businesses across 20+ African countries.",
  keywords: [
    "industrial chemicals Africa", "chemical supplier Uganda", "laboratory reagents Africa",
    "industrial supply Africa", "chemical distribution Uganda", "polymers plastics Africa",
    "water treatment chemicals", "agricultural chemicals Uganda", "Mbonyange Africa",
    "industrial procurement Africa", "chemical trading company Uganda", "bulk chemicals Africa"
  ],
  authors: [{ name: "Mbonyange Africa Limited" }],
  creator: "Mbonyange Africa Limited",
  publisher: "Mbonyange Africa Limited",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: "https://mbonyange.com",
    siteName: "Mbonyange Africa Limited",
    title: "Mbonyange Africa Limited | Industrial Chemical Supply & Distribution",
    description: "Leading industrial chemical supplier and distributor across Africa. Chemicals, polymers, lab reagents, agricultural inputs and more.",
    images: [{ url: "/images/logo-tbg.png", width: 500, height: 500, alt: "Mbonyange Africa Limited" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mbonyange Africa Limited | Industrial Chemical Supply",
    description: "Leading industrial chemical supplier and distributor across Africa.",
    images: ["/images/logo-tbg.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  metadataBase: new URL("https://mbonyange.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${lato.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
