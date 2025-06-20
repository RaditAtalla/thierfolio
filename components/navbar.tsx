"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar({ className }: { className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const pathName = usePathname();

  useEffect(() => {
    setScreenWidth(screen.width);

    function controlNavbar() {
      const scrollY = window.scrollY;

      if (scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", controlNavbar);

    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  return (
    <nav
      className={cn(
        "flex items-center justify-between gap-[22px] rounded-[100px] border border-[#E5E5E5] bg-[#FAFAFA] p-[18px] transition-all duration-1000 sm:gap-[44px] md:justify-start md:p-[24px]",
        className,
        { "-bottom-[100px]": !isVisible && screenWidth < 768 },
      )}
    >
      <p className="text-[18px] font-medium tracking-[-4%] text-[#261F1F] md:text-[24px]">
        thier<span className="text-[#1D61FF]">folio.</span>
      </p>
      <span className="flex items-center gap-[20px] sm:gap-[25px]">
        <Link
          href={"/"}
          className={`hidden text-[16px] tracking-[-4%] sm:text-[20px] md:block ${pathName == "/" && "font-medium"}`}
        >
          Home<span className="text-[#1D61FF]">.</span>
        </Link>
        <Link
          href={"/projects"}
          className={`hidden text-[16px] tracking-[-4%] text-[#898989] sm:text-[20px] md:block ${pathName == "projects" && "font-medium"}`}
        >
          my projects<span className="text-[#1D61FF]">.</span>
        </Link>
        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger className="flex items-center justify-center">
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <p className="text-[18px] font-medium tracking-[-4%] text-[#261F1F] sm:text-[24px]">
                    thier<span className="text-[#1D61FF]">folio.</span>
                  </p>
                </SheetTitle>
                <Link
                  href={""}
                  className="tracking-[-4%]font-medium text-[16px] sm:text-[20px] md:hidden"
                >
                  Home<span className="text-[#1D61FF]">.</span>
                </Link>
                <Link
                  href={""}
                  className="text-[16px] tracking-[-4%] text-[#898989] sm:text-[20px] md:hidden"
                >
                  my projects<span className="text-[#1D61FF]">.</span>
                </Link>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </span>
    </nav>
  );
}
