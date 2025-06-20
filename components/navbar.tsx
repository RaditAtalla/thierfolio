import { cn } from "@/lib/utils";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar({ className }: {className?: string}) {
  return(
    <nav className={cn("flex items-center justify-between md:justify-start gap-[22px] sm:gap-[44px] rounded-[100px] p-[18px] md:p-[24px] bg-[#FAFAFA] border border-[#E5E5E5]", className)}>
      <p className="tracking-[-4%] font-medium text-[18px] sm:text-[24px] text-[#261F1F]">thier<span className="text-[#1D61FF]">folio.</span></p>
      <span className="flex items-center gap-[20px] sm:gap-[25px]">
        <Link href={""} className="tracking-[-4%]font-medium text-[16px] sm:text-[20px] hidden md:block">Home<span className="text-[#1D61FF]">.</span></Link>
        <Link href={""} className="tracking-[-4%] text-[#898989] text-[16px] sm:text-[20px] hidden md:block">my projects<span className="text-[#1D61FF]">.</span></Link>
        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger><Menu /></SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle><p className="tracking-[-4%] font-medium text-[18px] sm:text-[24px] text-[#261F1F]">thier<span className="text-[#1D61FF]">folio.</span></p></SheetTitle>
                  <Link href={""} className="tracking-[-4%]font-medium text-[16px] sm:text-[20px] md:hidden">Home<span className="text-[#1D61FF]">.</span></Link>
                  <Link href={""} className="tracking-[-4%] text-[#898989] text-[16px] sm:text-[20px] md:hidden">my projects<span className="text-[#1D61FF]">.</span></Link>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </span>
    </nav>
  )
}