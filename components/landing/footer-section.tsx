import Image from "next/image";
import Button from "../button";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="relative flex w-screen flex-col justify-between md:flex-row">
      <div className="mt-[101px] pl-[27px] lg:pl-[149px]">
        <p className="mb-[16px] text-[32px] leading-[110%] sm:text-[54px] md:mb-[38px]">
          Do you want have some <br className="hidden xl:block" />
          <span className="text-[#1D61FF]">discussion with me</span>
        </p>
        <div className="flex flex-wrap items-center gap-[9px]">
          <Button variant={"noGlow"}>Contact me now!</Button>
          <div className="flex items-center gap-[4px]">
            <Link href={""}>
              <Image
                width={50}
                height={50}
                alt="dribbble"
                src={"/dribble.png"}
              />
            </Link>
            <Link href={""}>
              <Image
                width={50}
                height={50}
                alt="behance"
                src={"/behance.png"}
              />
            </Link>
          </div>
        </div>
      </div>

      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="relative right-0 bottom-0 -z-10 mt-[64px] w-[343px] scale-x-[-1] self-end sm:w-[443px] lg:w-[634px]"
      >
        <source src="character/fathir-1.mp4" />
      </video>

      <Image
        width={435}
        height={253}
        alt="building"
        src={"/buildings.png"}
        className="absolute bottom-0 hidden xl:block"
      />
    </footer>
  );
}
