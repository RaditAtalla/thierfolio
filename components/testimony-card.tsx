import Image from "next/image";

export default function TestimonyCard() {
  return (
    <div className="flex rotate-[0.81deg] flex-col gap-[68px] rounded-[12px] border border-[#F4F2F2] p-[24px]">
      <div>
        <Image
          width={93}
          height={81}
          alt="profile"
          src={"/jonathan.png"}
          className="mb-[13px] rounded-[16px]"
        />
        <p className="text-[24px] text-[#030303]">Jonathan Reeves</p>
        <p className="text-[20px] font-medium text-[#898484]">CEO of Nexa AI</p>
      </div>
      <p className="text-[20px] leading-[150%] text-[#8D8C8C]">
        Illuminance DAO helped us scale our AI-powered blockchain from an idea
        to a globally recognized protocol.
      </p>
    </div>
  );
}
