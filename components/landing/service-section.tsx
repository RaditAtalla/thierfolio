import Image from "next/image";
import ServiceCard from "../service-card";

const SERVICES = [
  {
    title: "Product & UI/UX Design",
    description:
      "We craft compelling online experiences that boost conversions and engagement. Our responsive, SEO-friendly websites are designed for success.",
  },
  {
    title: "Web Design & No Code Development",
    description:
      "Transform your digital landscape with stunning websites that convert visitors into customers and foster deep engagement.",
  },
];

export default function ServiceSection() {
  return (
    <section className="relative pt-[79px] pb-[129px] before:pointer-events-none before:absolute before:inset-0 before:border before:border-[#EBE5E5] before:border-t-0 before:z-10">
      <h2 className="text-[40px] sm:text-[49px] text-center relative mb-[79px]">
        My <span className="text-[#1D61FF]">Services</span>
        <span className="absolute -bottom-[30px] left-1/2 -translate-x-1/2">
          <Image width={290} height={41} alt="scribble" src={"/scribble.png"} />
        </span>
      </h2>

      <div className="flex flex-col items-center gap-[54px] sm:gap-[74px] px-[12px] lg:px-[70px] xl:px-[142px]">
        {SERVICES.map((service, i) => (
          <ServiceCard title={service.title} description={service.description} key={i} isFlipped={i % 2 == 0 ? false : true} />
        ))}
      </div>


    </section>
  );
}
