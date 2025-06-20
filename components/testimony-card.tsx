import Image from "next/image";

export default function TestimonyCard() {
  return (
    <div className="rounded-[12px] border border-[#F4F2F2] p-[24px] flex flex-col gap-[68px] rotate-[0.81deg]">
      <div>
        <Image
          width={93}
          height={81}
          alt="profile"
          src={"/jonathan.png"}
          className="rounded-[16px] mb-[13px]"
        />
        <p className="text-[24px] text-[#030303]">Jonathan Reeves</p>
        <p className="font-medium text-[20px] text-[#898484]">CEO of Nexa AI</p>
      </div>
      <p className="text-[20px] text-[#8D8C8C] leading-[150%]">
        Illuminance DAO helped us scale our AI-powered blockchain from an idea
        to a globally recognized protocol.
      </p>
    </div>
  );
}
