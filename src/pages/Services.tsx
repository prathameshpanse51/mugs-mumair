import React from "react";
import service1 from "../../public/mugsservice1.png";
import service2 from "../../public/mugsservice2.png";
import service3 from "../../public/mugsservice3.png";
import service4 from "../../public/mugsservice4.png";
import Image from "next/image";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const PoppinsMedium = localFont({
  src: "../../public/Poppins/Poppins-Light.ttf",
});

const PoppinsSemiBold = localFont({
  src: "../../public/Poppins/Poppins-SemiBold.ttf",
});

export default function Services() {
  const services = [
    {
      src: service1,
      title: "UI/UX",
      desc: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
    {
      src: service2,
      title: "Web Design",
      desc: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
    {
      src: service3,
      title: "App Design",
      desc: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
    {
      src: service4,
      title: "Graphic Design",
      desc: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    },
  ];
  return (
    <>
      <main className="flex flex-col gap-8 items-center mx-4 md:mx-36 mb-20">
        <h1 className={cn("text-5xl md:text-6xl", PoppinsSemiBold.className)}>
          Services
        </h1>
        <p
          className={cn(
            "text-lg md:text-xl text-center mb-4",
            PoppinsMedium.className
          )}
        >
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus <br className="hidden md:block" /> netus in. Aliquet donec
          morbi convallis pretium
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          {services.map((e, idx) => {
            return (
              <div
                key={idx}
                className="dark:text-black w-[300px] bg-[#F8F8F8] px-4 py-10 flex flex-col gap-6 rounded-xl hover:transition hover:duration-700 hover:-translate-y-2"
              >
                {idx == 0 && (
                  <Image
                    src={e.src}
                    alt="service1"
                    width={60}
                    height={60}
                    className="w-[60px] h-auto"
                  />
                )}
                {idx == 1 && (
                  <Image
                    src={e.src}
                    alt="service2"
                    width={55}
                    height={55}
                    className="w-[60px] h-auto"
                  />
                )}
                {idx == 2 && (
                  <Image
                    src={e.src}
                    alt="service3"
                    width={35}
                    height={35}
                    className="w-[60px] h-auto"
                  />
                )}
                {idx == 3 && (
                  <Image
                    src={e.src}
                    alt="service4"
                    width={70}
                    height={70}
                    className="w-[60px] h-auto"
                  />
                )}

                <h3 className={cn("text-3xl", PoppinsSemiBold.className)}>
                  {e.title}
                </h3>
                <p className={cn("text-lg", PoppinsMedium.className)}>
                  {e.desc}
                </p>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
