import Image from "next/image";
import Button from "../button";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="relative w-screen md:flex justify-between hidden">
      <div className="pl-[149px] mt-[101px]">
        <p className="text-[54px] mb-[38px] leading-[110%]">
          Do you want have some
          <br />
          <span className="text-[#1D61FF]">discussion with me</span>
        </p>
        <div className="flex">
          <Button variant={"noGlow"} className="mr-[9px]">
            Contact me now!
          </Button>
          <Link href={""} className="mr-[4px]">
            <Image width={50} height={50} alt="dribbble" src={"/dribble.png"} />
          </Link>
          <Link href={""}>
            <Image width={50} height={50} alt="behance" src={"/behance.png"} />
          </Link>
        </div>
      </div>

      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="relative -z-10 bottom-0 right-0 w-[634px] scale-x-[-1]"
      >
        <source src="character/fathir-1.mp4" />
      </video>

      <Image width={435} height={253} alt="building" src={"/buildings.png"} className="absolute bottom-0" />
    </footer>
  );
}
