import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

export default function Hero() {
  const words =  `Turning Ideas into Interactive Digital Experiences`;
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-black-100">
        <div
          className={cn(
            "absolute inset-0",
            "opacity-20",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />

        <div className="flex justify-center z-10 my-20 relative">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="text-blue-100 uppercase tracking-widest text-xs text-center max-w-80"> empowering ideas with code</h2>

            <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl" words={words} />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-blue-100">
              HI, I&apos;m Chathuraka, Full-Stack Developer based in Sri Lanka.
            </p>            <div className="flex sm:flex-row flex-col gap-5">
                        <a href="#projects">
                          <MagicButton title="Show my work" icon={<FaLocationArrow />} position="right" otherClasses="gap-2" />
                        </a>
                         <a href="/cv/Chathuraka.pdf" download>
                          <MagicButton title="Download cv" icon={<FaLocationArrow />} position="right" otherClasses="gap-2" />
                        </a>
            </div>  
          </div>
        </div>

      </div>
    </div>
  );
}
