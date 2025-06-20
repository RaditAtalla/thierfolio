import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProjectCardType = {
  title: string;
  src: string;
  href: string;
  tag?: string[];
};

export default function ProjectCard({
  title,
  src,
  href,
  tag,
}: ProjectCardType) {
  return (
    <div className="relative flex max-w-[607px] flex-col gap-[9px]">
      {tag && (
        <div className="absolute top-[20px] left-[20px] flex flex-wrap gap-[12px]">
          {tag.map((tag, i) => (
            <p
              key={i}
              className="rounded-[100px] border border-[#E8E8E8] px-[16px] py-[12px] text-[12px] leading-none font-medium text-white sm:text-[20px]"
            >
              {tag}
            </p>
          ))}
        </div>
      )}
      <Image
        width={607}
        height={336}
        alt="project"
        src={src}
        className="w-full rounded-[16px] object-cover object-center"
      />
      <Link
        href={href}
        className="flex items-center justify-between rounded-[8px] border border-[#DCDCDC] px-[24px] py-[10px] text-[19px] font-medium transition-all hover:bg-[#1D61FF] hover:text-white"
      >
        {title}
        <ArrowRight />
      </Link>
    </div>
  );
}
