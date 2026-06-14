import type { Metadata } from "next";
import ContactView from "@/components/views/ContactView";

export const metadata: Metadata = {
  title: "Rreth nesh & Kontakt",
  description:
    "Njihuni me ekipin e EuroDent — Dr. Enver Berisha dhe Dr. Etrit Berisha — dhe caktoni vizitën tuaj. Orari, vendndodhja në Pejë, Kosovë dhe kontakti.",
};

export default function ContactPage() {
  return <ContactView />;
}
