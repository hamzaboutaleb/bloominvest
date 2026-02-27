import React from "react";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesPreview from "@/components/ServicesPreview";
import PortfolioPreview from "@/components/PortfolioPreview";
import Team from "@/components/Team";
import ContactTeaser from "@/components/ContactTeaser";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      {/* <TrustBar /> */}
      <ServicesPreview />
      <PortfolioPreview />
      <Team />
      <ContactTeaser />
    </main>
  );
}
