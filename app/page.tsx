import Image from "next/image";
import { WavyBackground } from "@/components/ui/wavy-background";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";


export default function Home() {
  return (

    <div className="absolute inset-0 -z-10">
      <WavyBackground className="max-w-4xl mx-auto pb-40">
    <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
      Portfolio
    </p>
    <h2 className=" mt-3 text-white font-normal inter-var text-center text-xl">
      Made with
    </h2>
    <div className="flex gap-4 items-center justify-center m-5 text-6xl burn opacity-75">
      <a href="https://react.dev/"><FaReact/></a>
      <a href="https://tailwindcss.com"><RiTailwindCssFill/></a>
      <a href="https://nextjs.org/"><RiNextjsLine /></a>
      <a href="https://ui.shadcn.com"><SiShadcnui/></a>
      <a href="https://ui.aceternity.com">
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
  </WavyBackground>
    </div>
    
  );
}
