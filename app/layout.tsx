import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { PROJECT } from "@/lib/project-data";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://southpriderealty.com/sanctuary"),
  title: {
    default: "SouthPride Sanctuary – Premium Residential Plots in Shankarpally",
    template: "%s | SouthPride Sanctuary",
  },
  description:
    "SouthPride Sanctuary – A premium residential plotted development in Julkal, Shankarpally, West Hyderabad. RERA Registered: P01100010026. Plot sizes 200–700 Sq. Yards.",
  keywords: [
    "SouthPride Sanctuary",
    "Sanctuary Shankarpally",
    "residential plots in Shankarpally",
    "plots in West Hyderabad",
    "plots near IIT Hyderabad",
    "premium plots Shankarpally",
    "plots in Julkal",
    "residential plots Telangana",
    "RERA registered plots Hyderabad",
    "plotted development Shankarpally",
  ],
  authors: [{ name: "SouthPride Realty" }],
  creator: "SouthPride Realty",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://southpriderealty.com/sanctuary/",
    siteName: "SouthPride Sanctuary",
    title: "SouthPride Sanctuary – Premium Residential Plots in Shankarpally",
    description:
      "Discover SouthPride Sanctuary – exclusive residential plots in Shankarpally, West Hyderabad. RERA No. P01100010026.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SouthPride Sanctuary – The Art of Elevated Living",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SouthPride Sanctuary – Premium Residential Plots in Shankarpally",
    description:
      "Discover SouthPride Sanctuary – exclusive residential plots in Shankarpally, West Hyderabad.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://southpriderealty.com/sanctuary/",
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
      className={`${cormorant.variable} ${manrope.variable} scroll-smooth`}
    >
      <body className="bg-sanctuary-cream font-manrope antialiased">
        <Navbar />
        <main>{children}</main>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
