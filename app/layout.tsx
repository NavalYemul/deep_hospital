import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "../styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Deep Superspeciality Hospital & Solapur Test Tube Baby Centre | Expert Care in Solapur",
    template: "%s | Deep Superspeciality Hospital Solapur",
  },
  description:
    "Deep Superspeciality Hospital & Solapur Test Tube Baby Centre — Premier IVF, Critical Care, Urology, and Surgical care in Solapur, Maharashtra. 5000+ successful IVF cycles. 24/7 emergency care.",
  keywords: [
    "IVF Solapur",
    "Test Tube Baby Centre Solapur",
    "hospital Solapur",
    "fertility clinic Solapur",
    "urology Solapur",
    "critical care Solapur",
    "IVF centre Maharashtra",
    "gynaecologist Solapur",
    "Dr Archana Shah",
    "Dr Harshit Shah",
  ],
  openGraph: {
    title:
      "Deep Superspeciality Hospital & Solapur Test Tube Baby Centre",
    description:
      "Premier IVF, Critical Care, Urology, and Surgical care in Solapur, Maharashtra.",
    url: "https://deephospital.in",
    siteName: "Deep Superspeciality Hospital",
    locale: "en_IN",
    type: "website",
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
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${inter.variable}`}
    >
      <body className="font-sans bg-warm-white text-text-primary antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
