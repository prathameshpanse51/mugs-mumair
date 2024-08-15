import Image from "next/image";
import React from "react";
import { Slider } from "@/components/ui/slider";
import localFont from "next/font/local";
import aboutMe from "../../public/aboutMe.png";
import { cn } from "@/lib/utils";

const PoppinsMedium = localFont({
  src: "../../public/Poppins/Poppins-Light.ttf",
});

const PoppinsSemiBold = localFont({
  src: "../../public/Poppins/Poppins-SemiBold.ttf",
});

export default function AboutMe() {
  return (
    <>
      <main
        id="aboutme"
        className="relative flex flex-col md:flex-row justify-between items-center mx-4 md:mx-36 mb-20"
      >
        <div className="flex flex-col items-center">
          <div
            className="absolute w-[200px] md:w-[300px] h-[60px] md:h-[80px] top-[50px] md:top-[60px]"
            style={{ background: "#FD6F0099" }}
          ></div>
          <Image
            src="https://ik.imagekit.io/qz6ubt34n4/mugsaboutme.png?updatedAt=1723689400590"
            alt="aboutME"
            width={500}
            height={600}
            priority={true}
          />
        </div>
        <div className="flex flex-col gap-1 pt-10 md:pt-0">
          <h1
            className={cn(
              "text-5xl md:text-6xl pb-2",
              PoppinsSemiBold.className
            )}
          >
            About Me
          </h1>
          <p
            className={cn(
              "text-lg md:text-xl text-justify md:w-[550px] pb-2",
              PoppinsMedium.className
            )}
          >
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
          <div
            className={cn(
              "text-lg md:text-2xl flex flex-col gap-4",
              PoppinsSemiBold.className
            )}
          >
            <p>UX</p>
            <Slider defaultValue={[95]} max={100} disabled />
            <p>Website Design</p>
            <Slider defaultValue={[90]} max={100} disabled />
            <p>App Design</p>
            <Slider defaultValue={[98]} max={100} disabled />
            <p>Graphic Design</p>
            <Slider defaultValue={[95]} max={100} disabled />
          </div>
        </div>
      </main>
    </>
  );
}
