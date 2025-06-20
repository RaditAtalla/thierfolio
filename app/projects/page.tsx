import NavButton from "@/components/nav-button";
import ProjectCard from "@/components/project-card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Image from "next/image";

const TOGGLE_MENU = [
  {
    value: "mobile-app",
    title: "Mobile App",
  },
  {
    value: "web3-products",
    title: "Web3 Products",
  },
  {
    value: "landing-page",
    title: "Landing Pages",
  },
  {
    value: "web-service",
    title: "Web Services",
  },
];

const PROJECTS = [
  {
    img: "/projects/techstartup.webp",
    title: "Techstartup University",
    tag: ["Mobile App", "Product", "Landing Page"],
    href: "",
  },
  {
    img: "/projects/lid.webp",
    title: "Life Itinerary Design",
    tag: ["Website", "Landing Page"],
    href: "",
  },
  {
    img: "/projects/clar-ai.webp",
    title: "CLARA.AI",
    tag: ["Website", "Landing Page"],
    href: "",
  },
  {
    img: "/projects/vyrtual.webp",
    title: "Vyrtual",
    tag: ["Product", "Landing Page"],
    href: "",
  },
];

export default function Projects() {
  return (
    <>
      <div className="absolute px-[64px] -z-10 before:absolute before:inset-0 before:bg-linear-to-b before:from-white/28 before:via-white/100 before:to-white/100">
        <Image
          width={1313}
          height={380}
          alt="background"
          src={"/dotted-pattern.png"}
        />
      </div>

      <main className="relative px-[24px] sm:px-[100px] before:pointer-events-none before:absolute before:inset-0 before:border before:border-[#D9D9D9] before:border-b-0 before:mx-[12px] sm:before:mx-[64px]">
        <NavButton className="fixed top-[52px] z-20" />
        <h1 className="text-[24px] sm:text-[34px] md:text-[44px] lg:text-[54px] pt-[150px]">
          The Projects <span className="text-[#747474]">i had worked</span>
        </h1>
        <div className="flex items-center gap-[24px] mt-[20px]">
          <DropdownMenu>
            <DropdownMenuTrigger className="leading-[110%] tracking-[-4%]">All company & projects</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Company A</DropdownMenuItem>
              <DropdownMenuItem>Company B</DropdownMenuItem>
              <DropdownMenuItem>Company C</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="h-[31px] w-[1px] bg-[#DBDBDB]" />
          <ToggleGroup type="multiple" className="gap-[11px]">
            <ToggleGroupItem value="my-featured-project" className="gap-[11px] leading-[110%] tracking-[-4%]">
              My Featured Project{" "}
              <Image
                width={19}
                height={19}
                alt="fire"
                src={"/icons/fire-fill.png"}
              />
            </ToggleGroupItem>
            {TOGGLE_MENU.map((menu, i) => (
              <ToggleGroupItem variant={"outline"} key={i} value={menu.value} className="leading-[110%] tracking-[-4%]">
                {menu.title}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[24px] gap-y-[57px] mt-[36px] pb-[72px]">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={i}
              src={project.img}
              title={project.title}
              href={project.href}
              tag={project.tag}
            />
          ))}
        </div>
      </main>
    </>
  );
}
