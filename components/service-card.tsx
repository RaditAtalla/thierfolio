import Image from "next/image";

type ServiceCardType = {
  title: string,
  description: string,
  isFlipped?: boolean,
}

export default function ServiceCard({ title, description, isFlipped}: ServiceCardType) {
  return(
    <div className="relative flex flex-col gap-[28px] p-[34px] rounded-[22px] bg-[#FBFBFB] w-full">
      <div className="h-[185px] md:h-[285px] lg:h-[385px] w-full bg-gray-300 rounded-[22px]"></div>
      <div className={`${isFlipped ? "self-start" : "self-end"} sm:w-[278px] md:w-[378px] xl:w-[478px]`}>
        <h3 className="text-[22px] lg:text-[37px] mb-[27px]">{title}</h3>
        <p className="text-[16px] lg:text-[22px] text-[#838383]">{description}</p>
      </div>

      <Image width={318} height={318} alt="fathir" src={"/character/fathir-3.png"} className={`hidden sm:block sm:w-[250px] xl:w-[318px] absolute bottom-0 z-10 ${isFlipped ? "right-0 scale-x-[-1]" : "left-0"}`} />
    </div>
  )
}