import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { IVFSpotlight } from "@/components/sections/IVFSpotlight";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { DoctorsPreview } from "@/components/sections/DoctorsPreview";
import { EmergencyBanner } from "@/components/sections/EmergencyBanner";
import { StatsBar } from "@/components/sections/StatsBar";

export const metadata: Metadata = {
  title:
    "Deep Superspeciality Hospital & Solapur Test Tube Baby Centre | Expert Care in Solapur",
  description:
    "Solapur's premier destination for IVF, Critical Care, Urology & Surgical excellence. 5000+ successful IVF cycles. 24/7 emergency care. Healing with expertise, technology & compassion.",
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Services Overview */}
      <ServicesGrid />

      {/* 3. Why Choose Us */}
      <WhyChooseUs />

      {/* 4. IVF Spotlight */}
      <IVFSpotlight />

      {/* 5. Stats Bar */}
      <StatsBar />

      {/* 6. Testimonials */}
      <TestimonialsSection />

      {/* 7. Doctors Preview */}
      <DoctorsPreview />

      {/* 8. Emergency Banner */}
      <EmergencyBanner />
    </>
  );
}
