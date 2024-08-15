import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import project11 from "../../public/project11.png";
import project12 from "../../public/project12.png";
import project21 from "../../public/project21.png";
import project22 from "../../public/project22.png";
import project31 from "../../public/project31.png";
import project32 from "../../public/project32.png";
import React from "react";
import Image from "next/image";

const PoppinsMedium = localFont({
  src: "../../public/Poppins/Poppins-Light.ttf",
});

const PoppinsSemiBold = localFont({
  src: "../../public/Poppins/Poppins-SemiBold.ttf",
});

export default function Projects() {
  return (
    <>
      <main className="flex flex-col gap-8 items-center mx-4 md:mx-36 my-28">
        <h1 className={cn("text-5xl md:text-6xl", PoppinsSemiBold.className)}>
          My Projects
        </h1>
        <p
          className={cn(
            "text-lg md:text-xl text-center mb-4",
            PoppinsMedium.className
          )}
        >
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
          mauris est risus <br className="hidden md:block" /> lectus. Phasellus
          consequat urna tellus
        </p>

        <div
          className={cn(
            "flex flex-row flex-wrap gap-4 justify-center",
            PoppinsMedium.className
          )}
        >
          <Button className="bg-white text-black rounded-lg border-[1px] border-[#545454] hover:bg-white">
            All
          </Button>
          <Button className="bg-white text-black rounded-lg border-[1px] border-[#545454] hover:bg-white">
            UI/UX
          </Button>
          <Button className="bg-[#FD6F00] text-white rounded-lg border-[1px] border-[#545454] hover:bg-[#FD6F00]">
            Web Design
          </Button>
          <Button className="bg-white text-black rounded-lg border-[1px] border-[#545454] hover:bg-white">
            App Design
          </Button>
          <Button className="bg-white text-black rounded-lg border-[1px] border-[#545454] hover:bg-white">
            Graphic Design
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <div className="relative w-[360px] md:w-[445px] h-[440px] md:h-[490px] rounded-xl bg-[#FFEBDB] mb-4">
              <Image
                src={project11}
                className="z-[1] h-[440px] md:h-[490px] w-[300px] md:w-[270px] absolute left-[50px] md:left-[130px]"
                alt="service1"
                width={340}
                height={610}
              />
              <Image
                src={project12}
                className="z-[999] h-[380px] md:h-[410px] w-[300px] md:w-[270px] absolute left-[35px] md:left-[30px] top-[65px] md:top-[85px]"
                alt="service2"
                width={340}
                height={610}
              />
            </div>
            <p
              className={cn("text-xl text-[#FD6F00]", PoppinsMedium.className)}
            >
              Web Design
            </p>
            <p className={cn("text-2xl", PoppinsSemiBold.className)}>
              AirCalling Landing Page Design{" "}
            </p>
          </div>

          <div className="flex flex-col gap-2 items-center md:items-start">
            <div className="relative w-[360px] md:w-[445px] h-[440px] md:h-[490px] rounded-xl bg-[#FFEBDB] mb-4">
              <Image
                src={project21}
                className="z-[1] h-[440px] md:h-[490px] w-[300px] md:w-[270px] absolute left-[50px] md:left-[130px]"
                alt="service1"
                width={340}
                height={610}
              />
              <Image
                src={project22}
                className="z-[999] h-[380px] md:h-[410px] w-[300px] md:w-[270px] absolute left-[35px] md:left-[30px] top-[65px] md:top-[85px]"
                alt="service2"
                width={340}
                height={610}
              />
            </div>
            <p
              className={cn("text-xl text-[#FD6F00]", PoppinsMedium.className)}
            >
              Web Design
            </p>
            <p className={cn("text-2xl", PoppinsSemiBold.className)}>
              Business Landing Page Design{" "}
            </p>
          </div>

          <div className="flex flex-col gap-2 items-center md:items-start">
            <div className="relative w-[360px] md:w-[445px] h-[440px] md:h-[490px] rounded-xl bg-[#FFEBDB] mb-4">
              <Image
                src={project31}
                className="z-[1] h-[440px] md:h-[490px] w-[300px] md:w-[270px] absolute left-[50px] md:left-[130px]"
                alt="service1"
                width={340}
                height={610}
              />
              <Image
                src={project32}
                className="z-[999] h-[380px] md:h-[410px] w-[300px] md:w-[270px] absolute left-[35px] md:left-[30px] top-[65px] md:top-[85px]"
                alt="service2"
                width={340}
                height={610}
              />
            </div>
            <p
              className={cn("text-xl text-[#FD6F00]", PoppinsMedium.className)}
            >
              Web Design
            </p>
            <p className={cn("text-2xl", PoppinsSemiBold.className)}>
              Ecom Web Page Design{" "}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
