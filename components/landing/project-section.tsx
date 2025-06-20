import Image from "next/image";
import ProjectCard from "../project-card";
import Button from "../button";
import Link from "next/link";

const PROJECT = [
  {
    img: "/projects/plek.webp",
    title: "PLEK",
    href: "",
  },
  {
    img: "/projects/lid.webp",
    title: "Life Itinerary Design",
    href: "",
  },
  {
    img: "/projects/clara-ai.webp",
    title: "CLARA.AI",
    href: "",
  },
  {
    img: "/projects/vyrtual.webp",
    title: "Vyrtual",
    href: "",
  },
];

export default function ProjectSection() {
  return (
    <section className="relative flex flex-col items-center pt-[87px] pb-[110px] before:pointer-events-none before:absolute before:inset-0 before:z-10 before:border before:border-t-0 before:border-b-0 before:border-[#EBE5E5]">
      <h2 className="relative mb-[85px] text-center text-[40px] sm:text-[49px]">
        Featured <span className="text-[#1D61FF]">Projects</span>
        <span className="absolute -bottom-[30px] left-1/2 -translate-x-1/2">
          <Image width={290} height={41} alt="scribble" src={"/scribble.png"} />
        </span>
      </h2>

      <div className="grid grid-cols-1 gap-x-[24px] gap-y-[38px] px-[28px] md:px-[38px] lg:grid-cols-2">
        {PROJECT.map((project, i) => (
          <ProjectCard
            title={project.title}
            src={project.img}
            href={project.href}
            key={i}
          />
        ))}
      </div>

      <Link href={"/projects"} className="mt-[94px]">
        <Button variant={"ghost"}>Explore My Projects</Button>
      </Link>
    </section>
  );
}
