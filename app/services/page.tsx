import type { Metadata } from "next";
import ServicesView from "@/components/views/ServicesView";

export const metadata: Metadata = {
  title: "Shërbimet & Trajtimet",
  description:
    "Nga implantet dentare dhe fasetat te ortodoncia, zbardhimi dhe kujdesi familjar — shfletoni gamën e plotë të trajtimeve të EuroDent në Pejë, Kosovë.",
};

export default function ServicesPage() {
  return <ServicesView />;
}
