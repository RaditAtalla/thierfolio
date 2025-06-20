import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ExperienceCardType = {
  src: string,
  role: string,
  company: string,
  status: string,
  period: string,
  href: string
}

export default function ExperienceCard({src, role, company, status, period, href}: ExperienceCardType) {
  return(
    <div className="border border-[#EFEFEF] rounded-[17px] py-[16px] px-[20px]">
      <div className="flex flex-col gap-[13px] mb-[19px] bg-[#FBFBFB] rounded-[16px] p-[24px]">
        <div className="flex items-center gap-[13px]">
          <Image width={58} height={58} alt="experience" src={src} />
          <p className="text-[20px] sm:text-[26px] leading-tight line-clamp-2 leading-[110%]">{role}</p>
        </div>
        <p className="font-medium text-[16px] sm:text-[19px] text-[#8E8E8E]">{company} - {status}</p>
        <p className="text-[16px] sm:text-[17px] text-[#979797]">{period}</p>
      </div>
      <Link href={href} className="font-medium text-[16px] sm:text-[18px] flex items-end gap-[6px]">See the projects <ChevronRight size={24} /></Link>
    </div>
  )
}