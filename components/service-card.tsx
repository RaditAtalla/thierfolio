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
    <div className="relative flex w-full flex-col gap-[34px] rounded-[7px] bg-[#FBFBFB] p-[8px] md:rounded-[14px] md:p-[34px]">
      <Image
        src={src}
        width={1200}
        height={600}
        alt="Service"
        className="aspect-video h-[165px] rounded-[11px] object-cover md:h-[382px] md:rounded-[22px]"
      />
      <div
        className={`${
          isFlipped ? "self-start" : "self-end"
        } sm:w-[278px] md:w-[378px] xl:w-[478px]`}
      >
        <h3 className="mb-[8px] text-[24px] leading-[110%] md:mb-[27px] lg:text-[37px]">
          {title}
        </h3>
        <p className="text-[12px] leading-[150%] text-[#838383] lg:text-[22px]">
          {description}
        </p>
      </div>

      <Image
        width={318}
        height={318}
        alt="fathir"
        src={"/character/fathir-3.png"}
        className={`absolute bottom-0 z-20 hidden w-[200px] sm:block md:w-[250px] xl:w-[318px] ${
          isFlipped ? "right-0 scale-x-[-1]" : "left-0"
        }`}
      />
    </div>
  );
}
