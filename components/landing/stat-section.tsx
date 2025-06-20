export default function StatSection() {
  return(
    <section className="relative flex flex-col md:flex-row divide-y-1 md:divide-y-0 md:divide-x-1 divide-[#D9D9D9] before:pointer-events-none before:absolute before:inset-0 before:border before:border-[#EBE5E5] before:z-10">
      <div className="flex flex-1 flex-col items-center py-[46px] px-[35px] md:pt-[61px] md:pb-[49px]">
        <h2 className="text-[36px] md:text-[62px] sm:text-[82px] text-[#1D61FF] text-center relative before:absolute before:inset-0 before:bg-radial-[at_50%_10%] before:from-white/30 before:to-white/0">02 <span className="md:hidden">Years</span></h2>
        <p className="text-[14px] w-[250px] md:w-full md:text-[16px] sm:text-[20px] text-[#737373] text-center px-[24px] lg:px-0 leading-[150%]"><span className="hidden md:block">Bringing years of experience from agencies, tech<br/> industries, and freelance projects.</span><span className="block md:hidden"> of experience from agencies, tech industries, digital products and freelance projects.</span></p>
      </div>
      <div className="flex flex-1 flex-col items-center py-[46px] px-[35px] md:pt-[61px] md:pb-[49px]">
        <h2 className="text-[36px] md:text-[62px] sm:text-[82px] text-[#1D61FF] text-center relative before:absolute before:inset-0 before:bg-radial-[at_50%_10%] before:from-white/30 before:to-white/0">85+</h2>
        <p className="text-[14px] w-[250px] md:w-full md:text-[16px] sm:text-[20px] text-[#737373] text-center px-[24px] lg:px-0 leading-[150%]">Projects Solved Including Web3, Mobile,<br className="hidden lg:block"/>SaAS & Company Profile</p>
      </div>
    </section>
  )
}