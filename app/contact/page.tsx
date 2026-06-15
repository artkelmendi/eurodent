import type { Metadata } from "next";
import ContactView from "@/components/views/ContactView";

export const metadata: Metadata = {
  title: "About & Contact",
  description:
    "Meet the EuroDent team — Dr. Enver Berisha and Dr. Etrit Berisha — and book your visit. Hours, location in Peja, Kosovo, and contact details.",
};

export default function ContactPage() {
  return <ContactView />;
}
