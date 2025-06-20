import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NavButton({className}: { className: string}) {
  return (
    <Link href={"/"} className={cn("leading-[110%] tracking-[-4%] font-medium text-[12px] sm:text-[20px] bg-white rounded-[16px] p-[16px] flex items-center gap-[10px] border border-[#E5E5E5] shadow-[0_2px_4px_0_rgba(0,0,0,0.1),0_7px_7px_rgba(0,0,0,0.09),0_15px_9px_rgba(0,0,0,0.05),0_26px_11px_rgba(0,0,0,0.01),0_41px_12px_rgba(0,0,0,0)]", className)}>
      <ChevronLeft color="#1D61FF" size={24} />
      Back to Homepage
    </Link>
  );
}
