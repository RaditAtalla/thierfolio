import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "relative rounded-[47px] font-medium cursor-pointer leading-none",
  {
    variants: {
      variant: {
        default:
          "bg-[#1D61FF] text-white shadow-[0_2px_4px_0_rgba(0,0,0,0.1),0_7px_7px_rgba(0,0,0,0.09),0_15px_9px_rgba(0,0,0,0.05),0_26px_11px_rgba(0,0,0,0.01),0_41px_12px_rgba(0,0,0,0)] before:absolute before:inset-0 before:bg-radial-[at_25%_25%] before:from-white/30 before:to-white/0 to-75% after:absolute after:inset-0 after:-z-10 after:h-[calc(100%+1px)] after:-top-[1px] after:rounded-[47px] after:bg-radial-[at_50%_30%] after:from-[#FFB8B2] after:to-transparent",
        ghost: "border border-1 border-[##E9E9E9] text-black bg-transparent",
        noGlow: "bg-[#1D61FF] text-white",
      },
      size: {
        default: "px-[24px] py-[11px] text-[19px]",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export default function Button({
  children,
  className,
  variant,
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button className={cn(buttonVariants({ variant, className }))}>
      {children}
    </button>
  );
}
