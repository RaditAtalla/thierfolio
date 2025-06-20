import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NavButton({ className }: { className: string }) {
  return (
    <Link
      href={"/"}
      className={cn(
        "flex items-center gap-[10px] rounded-[16px] border border-[#E5E5E5] bg-white p-[16px] text-[12px] leading-[110%] font-medium tracking-[-4%] shadow-[0_2px_4px_0_rgba(0,0,0,0.1),0_7px_7px_rgba(0,0,0,0.09),0_15px_9px_rgba(0,0,0,0.05),0_26px_11px_rgba(0,0,0,0.01),0_41px_12px_rgba(0,0,0,0)] sm:text-[20px]",
        className,
      )}
    >
      <ChevronLeft color="#1D61FF" className="size-[18px] sm:size-[24px]" />
      Back to Homepage
    </Link>
  );
}
