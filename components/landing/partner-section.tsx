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
    <section className="flex flex-col items-center gap-[54px] relative pt-[62px] pb-[74px] before:pointer-events-none before:absolute before:inset-0 before:border before:border-[#EBE5E5] before:border-t-0 before:z-10">
      <h2 className="text-[20px] sm:text-[32px] text-center">A company that is <span className="text-[#1D61FF]">my direct client.</span></h2>
      <div className="flex flex-col md:flex-row items-center justify-center px-[33px]">
        {COMPANIES.map((company, i) => (
          <Image key={i} height={103} width={214} alt="logo" src={company} className="md:w-[90px] lg:w-[120px] xl:w-[150px] 2xl:w-[214px]" />
        ))}
      </div>
    </section>
  );
}
