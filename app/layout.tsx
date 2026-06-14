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
    default: "EuroDent — Kujdes Premium Stomatologjik",
    template: "%s · EuroDent",
  },
  description:
    "EuroDent është ekipi kryesor i stomatologëve në rajon, në Pejë, Kosovë — precizion evropian dhe stomatologji moderne e butë. Implante, estetikë, ortodonci dhe kujdes familjar.",
  keywords: [
    "dentist Pejë",
    "stomatolog Kosovë",
    "klinikë dentare",
    "EuroDent",
    "implante dentare",
    "faseta",
    "ortodonci",
    "zbardhim dhëmbësh",
  ],
  openGraph: {
    title: "EuroDent — Kujdes Premium Stomatologjik",
    description:
      "Ekipi më i mirë i stomatologëve në rajon. Precizion evropian, kujdes modern e i butë. Pejë, Kosovë.",
    type: "website",
    locale: "sq_AL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sq"
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
