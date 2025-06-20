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
    <div className="relative flex flex-col gap-[9px] max-w-[607px]">
      {tag && (
        <div className="absolute top-[20px] left-[20px] flex gap-[12px] flex-wrap">
          {tag.map((tag, i) => (
            <p key={i} className="rounded-[100px] border border-[#E8E8E8] py-[12px] px-[16px] font-medium text-[12px] sm:text-[20px] text-white leading-none">
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
        className="rounded-[16px]"
      />
      <Link
        href={href}
        className="transition-all flex items-center justify-between rounded-[8px] py-[10px] px-[24px] border border-[#DCDCDC] hover:bg-[#1D61FF] hover:text-white font-medium text-[19px]"
      >
        {title}
        <ArrowRight />
      </Link>
    </div>
  );
}
