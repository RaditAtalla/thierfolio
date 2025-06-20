import TestimonyCard from "../testimony-card";

export default function TestimonySection() {
  return (
    <section className="relative pt-[169px] pb-[260px] before:pointer-events-none before:absolute before:inset-0 before:z-10 before:border before:border-t-0 before:border-b-0 before:border-[#EBE5E5]">
      <h2 className="relative mb-[25px] text-center text-[40px] sm:text-[49px]">
        Testimoni <span className="text-[#1D61FF]">Klien</span>
      </h2>

      <div className="grid grid-cols-1 gap-x-[20px] gap-y-[36px] px-[26px] sm:grid-cols-2 lg:grid-cols-3">
        <TestimonyCard />
        <TestimonyCard />
        <TestimonyCard />
      </div>
    </section>
  );
}
