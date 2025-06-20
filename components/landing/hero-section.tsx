import Image from "next/image";
import Button from "../button";
import FloatingSkills from "../floating-skills";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="pt-[46px] md:pt-0 relative flex flex-col-reverse gap-[22px] justify-center items-center md:min-h-screen before:pointer-events-none before:absolute before:inset-0 before:border before:border-[#EBE5E5] before:border-t-0 before:border-b-0 before:z-10">
      <div className="flex flex-col items-center gap-[25px] sm:gap-[60px] md:gap-[32px] px-[12px] pb-[55px] md:pb-0">
        <div className="flex flex-col gap-[16px] sm:gap-[20px] md:gap-[31px] max-w-[800px] px-[12px] lg:px-0">
          <h1 className="text-[32px] sm:text-[34px] md:text-[44px] lg:text-[54px] text-center leading-[110%] tracking-[-4%]">
            Designing Interfaces That Are{" "}
            <span className="text-[#1D61FF]">
              Fast, High-Quality, and Goal-Driven
            </span>
          </h1>
          <p className="text-[14px] md:text-[18px] text-[#7E7E7E] text-center leading-[150%] tracking-[-2%]">
            . I read, I solve, and I design with purpose,focusing on clean
            visuals,
            <br className="hidden sm:block" />
            smooth user experiences, and aligning every detail with business
            goals.
          </p>
        </div>
        <div className="flex flex-col justify-center sm:flex-row gap-[5px] w-full">
          <Button>Hire me!</Button>
          <Button variant={"ghost"}><Link href={"/projects"}>Explore My Projects</Link></Button>
        </div>
      </div>

      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="relative xl:absolute -z-10 xl:bottom-0 left-0 h-[260px] md:w-[380px] border-b border-[#EBE5E5] self-start"
      >
        <source src="character/fathir-1.mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute -z-10 bottom-0 right-0 w-[297px] hidden xl:flex"
      >
        <source src="character/fathir-2.mp4" />
      </video>

      <FloatingSkills
        title="Front-end Development"
        className="hidden xl:flex absolute left-[64px] top-[82px]"
      />
      <FloatingSkills
        title="No-code Development"
        className="hidden xl:flex absolute right-[88px] top-[105px]"
      />
      <FloatingSkills
        title="UI/UX Design"
        className="hidden xl:flex absolute left-[34px] top-[306px]"
      />
      <FloatingSkills
        title="Web Design"
        className="hidden xl:flex absolute right-[50px] top-[254px]"
      />

      <Image width={290} height={41} alt="scribble" src={"/scribble.png"} className="absolute top-[200px] left-[50px] hidden xl:flex" />

      <Image width={290} height={41} alt="scribble" src={"/scribble.png"} className="absolute top-[378px] right-[50px] hidden xl:flex" />
    </section>
  );
}
