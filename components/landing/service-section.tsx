import Image from "next/image";
import ServiceCard from "../service-card";

const SERVICES = [
  {
    img: "/services/product-uix.webp",
    title: "Product & UI/UX Design",
    description:
      "We craft compelling online experiences that boost conversions and engagement. Our responsive, SEO-friendly websites are designed for success.",
  },
  {
    img: "/services/no-code-dev.webp",
    title: "Web Design & No Code Development",
    description:
      "Transform your digital landscape with stunning websites that convert visitors into customers and foster deep engagement.",
  },
];

export default function ServiceSection() {
  return (
    <section className="relative pt-[79px] pb-[129px] before:pointer-events-none before:absolute before:inset-0 before:z-10 before:border before:border-t-0 before:border-[#EBE5E5]">
      <h2 className="relative mb-[53px] text-center text-[31px] md:mb-[79px] md:text-[49px]">
        My <span className="text-[#1D61FF]">Services</span>
        <span className="absolute -bottom-[30px] left-1/2 -translate-x-1/2">
          <Image width={290} height={41} alt="scribble" src={"/scribble.png"} />
        </span>
      </h2>

      <div className="flex flex-col items-center gap-[37px] px-[17px] md:gap-[74px] lg:px-[70px] xl:px-[142px]">
        {SERVICES.map((service, i) => (
          <ServiceCard
            src={service.img}
            title={service.title}
            description={service.description}
            key={i}
            isFlipped={i % 2 == 0 ? false : true}
          />
        ))}
      </div>
    </section>
  );
}
