import Image from "next/image";
import ExperienceCard from "../experience-card";

const EXPERIENCES = [
  {
    img: "/companies/myx-square.png",
    role: "Product Designer & UI/UX Lead",
    company: "Myx Studio",
    status: "Fulltime",
    period: "Dec 2023 - Mar 2025",
  },
  {
    img: "/companies/cerulean.png",
    role: "UI/UX Designer",
    company: "Cerulean Studio",
    status: "Part-Time",
    period: "Nov 2024 - Feb 2025",
  },
  {
    img: "/companies/daffascript.png",
    role: "UI/UX Designer",
    company: "Daffascript Agency",
    status: "Fulltime",
    period: "Dec 2023 - August 2024",
  },
  {
    img: "/companies/self-employed.png",
    role: "UI/UX Designer & No Code Dev",
    company: "Self Employed",
    status: "Freelance",
    period: "2022 - Now",
  },
  {
    img: "/companies/soluvion.png",
    role: "Web3 Creative Lead & Product Designer",
    company: "Soluvion",
    status: "Freelance",
    period: "Sep 2024 - Mar 2025",
  },
  {
    img: "/companies/self-employed.png",
    role: "UI/UX Designer & No Code Dev",
    company: "Self Employed",
    status: "Freelance",
    period: "2022 - Now",
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative py-[103px] before:pointer-events-none before:absolute before:inset-0 before:z-10 before:border before:border-t-0 before:border-b-0 before:border-[#EBE5E5]">
      <h2 className="relative mb-[59px] text-center text-[31px] md:text-[49px]">
        <span className="hidden md:block">
          Work <span className="text-[#1D61FF]">Experience</span>
        </span>
        <span className="md:hidden">
          My <span className="text-[#1D61FF]">Journey</span>
        </span>
        <span className="absolute -bottom-[30px] left-1/2 -translate-x-1/2">
          <Image width={290} height={41} alt="scribble" src={"/scribble.png"} />
        </span>
      </h2>

      <div className="grid grid-cols-1 gap-[12px] gap-x-[21px] px-[14px] sm:grid-cols-2 md:gap-y-[36px] md:px-[32px] lg:grid-cols-3 lg:px-[56px]">
        {EXPERIENCES.map((exp, i) => (
          <ExperienceCard
            key={i}
            src={exp.img}
            role={exp.role}
            company={exp.company}
            status={exp.status}
            period={exp.period}
            href=""
          />
        ))}
      </div>
    </section>
  );
}
