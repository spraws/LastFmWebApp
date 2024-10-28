import Image from "next/image";
import { WavyBackground } from "@/components/ui/wavy-background";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { ShimmerBtn } from "@/components/ui/shimmer-btn";

import HelpBtn from "@/components/ui/help-btn";


export default function Home() {
  return (
    <div className="">
            <div className="absolute z-10 bottom-0 m-5 ">
        <HelpBtn></HelpBtn>
    </div>
      <WavyBackground className=" -z-5 absolute ">
    <h1 className="text-5xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
      Portfolio
    </h1>
    <h2 className=" mt-3 text-white font-normal inter-var text-center text-xl">
      Made with
    </h2>
    <div className="flex gap-4 items-center justify-center m-5 text-6xl burn opacity-75">
    <a href="https://react.dev/" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-reactBlue "><FaReact/></a>
      <a href="https://tailwindcss.com" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-tailwindBlue "><RiTailwindCssFill/></a>
      <a href="https://nextjs.org/" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-nextjsGrey # "><RiNextjsLine /></a>
      <a href="https://ui.shadcn.com" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:text-black "><SiShadcnui/></a>
      <a href="https://ui.aceternity.com" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
      <svg 
        width="80"
        height="60"
        viewBox="0 0 70 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" text-white "
      >
        <path
          d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
          stroke="currentColor"
          strokeWidth="10"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
        />
      </svg>
      </a>
      
    </div>
    <div className="flex flex-col items-center justify-center gap-5 text-white">
    <p>View The Source Code on Github</p>
      <a href="https://github.com/spraws/portfolio-web">
      <ShimmerBtn></ShimmerBtn></a>
    </div>

      </WavyBackground>

    </div>

    
  );
}
