import { cn } from "@/lib/utils"

type FloatingSkillsType = {
  title: string
  className?: string
}

export default function FloatingSkills({ title, className }: FloatingSkillsType) {
  return(
    <div className={cn("absolute flex items-center gap-[10px] px-[24px] py-[11px] rounded-[47px] shadow-[0_5px_11px_0_rgba(0,0,0,0.1),0_20px_20px_0_rgba(0,0,0,0.09),0_45px_27px_0_rgba(0,0,0,0.05),0_80px_32px_0_rgba(0,0,0,0.01)]", className)}>
      <img src="icons/brush.svg" alt="brush" />
      <p className="font-medium text-black">{title}</p>
    </div>
  )
}