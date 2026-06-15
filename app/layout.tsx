import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/i18n";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EuroDent — Premium Dental Care",
    template: "%s · EuroDent",
  },
  description:
    "EuroDent is the region's leading dental team in Peja, Kosovo — European precision and gentle, modern dentistry. Implants, cosmetic, orthodontics and family care.",
  keywords: [
    "dentist Peja",
    "dentist Kosovo",
    "dental clinic",
    "EuroDent",
    "dental implants",
    "veneers",
    "orthodontics",
    "teeth whitening",
  ],
  openGraph: {
    title: "EuroDent — Premium Dental Care",
    description:
      "The region's best dental team. European precision, gentle modern care. Peja, Kosovo.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
