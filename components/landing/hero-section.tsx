import Image from "next/image";
import Button from "../button";
import FloatingSkills from "../floating-skills";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col-reverse items-center justify-center gap-[22px] pt-[46px] before:pointer-events-none before:absolute before:inset-0 before:z-10 before:border before:border-t-0 before:border-b-0 before:border-[#EBE5E5] md:min-h-screen md:pt-0">
      <div className="flex flex-col items-center gap-[25px] px-[12px] pb-[55px] sm:gap-[60px] md:gap-[32px] md:pb-0">
        <div className="flex max-w-[800px] flex-col gap-[16px] px-[12px] sm:gap-[20px] md:gap-[31px] lg:px-0">
          <h1 className="text-center text-[32px] leading-[110%] tracking-[-4%] md:text-[44px] lg:text-[54px]">
            Designing Interfaces That Are{" "}
            <span className="text-[#1D61FF]">
              Fast, High-Quality, and Goal-Driven
            </span>
          </h1>
          <p className="text-center text-[14px] leading-[150%] tracking-[-2%] text-[#7E7E7E] sm:text-[16px] md:text-[18px]">
            . I read, I solve, and I design with purpose,focusing on clean
            visuals,
            <br className="hidden sm:block" />
            smooth user experiences, and aligning every detail with business
            goals.
          </p>
        </div>
        <div className="flex w-full flex-col justify-center gap-[5px] sm:flex-row">
          <Button>Hire me!</Button>
          <Link href={"/projects"}>
            <Button variant={"ghost"}>Explore My Projects</Button>
          </Link>
        </div>
      </div>

      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="relative left-0 -z-10 h-[260px] self-start border-b border-[#EBE5E5] sm:self-center xl:absolute xl:bottom-0 xl:h-auto xl:w-[380px] xl:self-auto xl:border-b-0"
      >
        <source src="character/fathir-1.mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="right-0 -z-10 hidden w-[297px] xl:absolute xl:bottom-0 xl:block"
      >
        <source src="character/fathir-2.mp4" />
      </video>

      <FloatingSkills
        title="Front-end Development"
        className="absolute top-[82px] left-[64px] hidden xl:flex"
      />
      <FloatingSkills
        title="No-code Development"
        className="absolute top-[105px] right-[88px] hidden xl:flex"
      />
      <FloatingSkills
        title="UI/UX Design"
        className="absolute top-[306px] left-[34px] hidden xl:flex"
      />
      <FloatingSkills
        title="Web Design"
        className="absolute top-[254px] right-[50px] hidden xl:flex"
      />

      <Image
        width={290}
        height={41}
        alt="scribble"
        src={"/scribble.png"}
        className="absolute top-[200px] left-[50px] hidden xl:flex"
      />

      <Image
        width={290}
        height={41}
        alt="scribble"
        src={"/scribble.png"}
        className="absolute top-[378px] right-[50px] hidden xl:flex"
      />
    </section>
  );
}
