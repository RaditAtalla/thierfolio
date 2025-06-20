import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ExperienceCardType = {
  src: string;
  role: string;
  company: string;
  status: string;
  period: string;
  href: string;
};

export default function ExperienceCard({
  src,
  role,
  company,
  status,
  period,
  href,
}: ExperienceCardType) {
  return (
    <div className="rounded-[17px] border border-[#EFEFEF] px-[20px] py-[16px]">
      <div className="mb-[19px] flex flex-col gap-[13px] rounded-[16px] bg-[#FBFBFB] p-[24px]">
        <div className="flex items-center gap-[13px]">
          <Image width={58} height={58} alt="experience" src={src} />
          <p className="line-clamp-2 text-[20px] leading-[110%] sm:text-[26px]">
            {role}
          </p>
        </div>
        <p className="text-[16px] font-medium text-[#8E8E8E] sm:text-[19px]">
          {company} - {status}
        </p>
        <p className="text-[16px] text-[#979797] sm:text-[17px]">{period}</p>
      </div>
      <Link
        href={href}
        className="flex items-end gap-[6px] text-[16px] font-medium sm:text-[18px]"
      >
        See the projects <ChevronRight size={24} />
      </Link>
    </div>
  );
}
