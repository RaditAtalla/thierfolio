import Image from "next/image";

const COMPANIES = [
  "/companies/vyrtual.png",
  "/companies/reekaa.png",
  "/companies/techstars.png",
  "/companies/nghbr.png",
  "/companies/smb.png",
  "/companies/r.png",
  "/companies/myx-studio.png",
];

export default function PartnerSection() {
  return (
    <section className="relative flex flex-col items-center gap-[9px] pt-[101px] pb-[53px] before:pointer-events-none before:absolute before:inset-0 before:z-10 before:border before:border-t-0 before:border-[#EBE5E5] md:gap-[54px] md:pt-[62px] md:pb-[74px]">
      <h2 className="text-center text-[16px] sm:text-[32px]">
        A company that is{" "}
        <span className="text-[#1D61FF]">my direct client.</span>
      </h2>
      <div className="flex flex-col items-center justify-center px-[84px] md:flex-row md:px-[33px]">
        {COMPANIES.map((company, i) => (
          <Image
            key={i}
            height={103}
            width={214}
            alt="logo"
            src={company}
            className="md:w-[90px] lg:w-[120px] xl:w-[150px] 2xl:w-[214px]"
          />
        ))}
      </div>
    </section>
  );
}
