export default function StatSection() {
  return (
    <section className="relative flex flex-col divide-y-1 divide-[#D9D9D9] before:pointer-events-none before:absolute before:inset-0 before:z-10 before:border before:border-[#EBE5E5] md:flex-row md:divide-x-1 md:divide-y-0">
      <div className="flex flex-1 flex-col items-center px-[35px] py-[46px] md:pt-[61px] md:pb-[49px]">
        <h2 className="relative text-center text-[36px] text-[#1D61FF] before:absolute before:inset-0 before:bg-radial-[at_50%_10%] before:from-white/30 before:to-white/0 md:text-[82px]">
          02 <span className="md:hidden">Years</span>
        </h2>
        <p className="w-[250px] px-[24px] text-center text-[14px] leading-[150%] text-[#737373] md:w-full md:text-[20px] lg:px-0">
          <span className="hidden md:block">
            Bringing years of experience from agencies, tech
            <br /> industries, and freelance projects.
          </span>
          <span className="block md:hidden">
            {" "}
            of experience from agencies, tech industries, digital products and
            freelance projects.
          </span>
        </p>
      </div>
      <div className="flex flex-1 flex-col items-center px-[35px] py-[46px] md:pt-[61px] md:pb-[49px]">
        <h2 className="relative text-center text-[36px] text-[#1D61FF] before:absolute before:inset-0 before:bg-radial-[at_50%_10%] before:from-white/30 before:to-white/0 md:text-[82px]">
          85+
        </h2>
        <p className="w-[250px] px-[24px] text-center text-[14px] leading-[150%] text-[#737373] md:w-full md:text-[20px] lg:px-0">
          Projects Solved Including Web3, Mobile,
          <br className="hidden lg:block" />
          SaAS & Company Profile
        </p>
      </div>
    </section>
  );
}
