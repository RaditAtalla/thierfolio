import Image from "next/image";

type ServiceCardType = {
  title: string;
  description: string;
  src: string;
  isFlipped?: boolean;
};

export default function ServiceCard({
  title,
  description,
  src,
  isFlipped,
}: ServiceCardType) {
  return (
    <div className="relative flex flex-col gap-[34px] p-[8px] md:p-[34px] rounded-[7px] md:rounded-[14px] bg-[#FBFBFB] w-full">
      <Image
        src={src}
        width={1200}
        height={600}
        alt="Service"
        className="rounded-[11px] md:rounded-[22px] object-cover h-[165px] md:h-[382px] aspect-video"
      />
      <div
        className={`${
          isFlipped ? "self-start" : "self-end"
        } sm:w-[278px] md:w-[378px] xl:w-[478px]`}
      >
        <h3 className="text-[24px] lg:text-[37px] mb-[8px] md:mb-[27px] leading-[110%]">{title}</h3>
        <p className="text-[12px] lg:text-[22px] text-[#838383] leading-[150%]">
          {description}
        </p>
      </div>

      <Image
        width={318}
        height={318}
        alt="fathir"
        src={"/character/fathir-3.png"}
        className={`hidden md:block md:w-[250px] xl:w-[318px] absolute bottom-0 z-20 ${
          isFlipped ? "right-0 scale-x-[-1]" : "left-0"
        }`}
      />
    </div>
  );
}
