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
      <div className="hidden md:inline-block absolute px-[66px] -z-10 before:absolute before:inset-0 before:bg-linear-to-b before:from-white/28 before:via-white/100 before:to-white/100">
        <Image
          width={1313}
          height={380}
          alt="background"
          src={"/dotted-pattern.png"}
        />
      </div>
      <Navbar className="fixed z-20 left-[28px] sm:left-1/2 sm:-translate-x-1/2 bottom-[44px] min-w-[316px] max-w-[352px]" />
      <main className="relative px-[14px] lg:px-[64px] min-h-screen">

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
