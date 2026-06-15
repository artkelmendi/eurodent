import type { Metadata } from "next";
import ServicesView from "@/components/views/ServicesView";

export const metadata: Metadata = {
  title: "Services & Treatments",
  description:
    "From dental implants and veneers to orthodontics, whitening and family care — explore EuroDent's full range of treatments in Peja, Kosovo.",
};

export default function ServicesPage() {
  return <ServicesView />;
}
