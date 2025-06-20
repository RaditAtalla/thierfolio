import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar({ className }: {className?: string}) {
  return(
    <nav className={cn("flex items-center gap-[22px] sm:gap-[44px] rounded-[100px] p-[24px] bg-[#FAFAFA] border border-[#E5E5E5]", className)}>
      <p className="tracking-[-4%] font-medium text-[18px] sm:text-[24px] text-[#261F1F]">thier<span className="text-[#1D61FF]">folio.</span></p>
      <span className="flex items-center gap-[20px] sm:gap-[25px]">
        <Link href={""} className="tracking-[-4%]font-medium text-[16px] sm:text-[20px]">Home<span className="text-[#1D61FF]">.</span></Link>
        <Link href={""} className="tracking-[-4%] text-[#898989] text-[16px] sm:text-[20px]">my projects<span className="text-[#1D61FF]">.</span></Link>
      </span>
    </nav>
  )
}