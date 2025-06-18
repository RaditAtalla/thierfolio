export default function StatSection() {
  return(
    <section className="relative flex divide-x-1 divide-[#D9D9D9] before:pointer-events-none before:absolute before:inset-0 before:border before:border-[#EBE5E5] before:z-10">
      <div className="flex flex-1 flex-col items-center pt-[61px] pb-[49px]">
        <h2 className="text-[62px] sm:text-[82px] text-[#1D61FF] text-center">02</h2>
        <p className="text-[16px] sm:text-[20px] text-[#737373] text-center px-[24px] lg:px-0">Bringing years of experience from agencies, tech<br className="hidden lg:block"/> industries, and freelance projects.</p>
      </div>
      <div className="flex flex-1 flex-col items-center pt-[61px] pb-[49px]">
        <h2 className="text-[62px] sm:text-[82px] text-[#1D61FF] text-center">85+</h2>
        <p className="text-[16px] sm:text-[20px] text-[#737373] text-center px-[24px] lg:px-0">Projects Solved Including Web3, Mobile,<br className="hidden lg:block"/>SaAS & Company Profile</p>
      </div>
    </section>
  )
}