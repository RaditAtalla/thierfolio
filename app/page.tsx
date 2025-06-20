import ExperienceSection from "@/components/landing/experience-section";
import FooterSection from "@/components/landing/footer-section";
import HeroSection from "@/components/landing/hero-section";
import PartnerSection from "@/components/landing/partner-section";
import ProjectSection from "@/components/landing/project-section";
import ServiceSection from "@/components/landing/service-section";
import StatSection from "@/components/landing/stat-section";
import TestimonySection from "@/components/landing/testimony-section";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="absolute -z-10 hidden px-[66px] before:absolute before:inset-0 before:bg-linear-to-b before:from-white/28 before:via-white/100 before:to-white/100 md:inline-block">
        <Image
          width={1313}
          height={380}
          alt="background"
          src={"/dotted-pattern.png"}
        />
      </div>
      <Navbar className="fixed bottom-[44px] left-1/2 z-20 w-full max-w-[352px] -translate-x-1/2" />
      <main className="relative min-h-screen px-[14px] lg:px-[64px]">
        <HeroSection />
        <StatSection />
        <PartnerSection />
        <ServiceSection />
        <ExperienceSection />
        <TestimonySection />
        <ProjectSection />
      </main>
      <FooterSection />
    </>
  );
}
