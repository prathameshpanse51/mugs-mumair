import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Image from "next/image";
import React from "react";
import testimonial1 from "../../public/testimonial1.png";
import testimonial2 from "../../public/testimonial2.png";

const PoppinsMedium = localFont({
  src: "../../public/Poppins/Poppins-Light.ttf",
});

const PoppinsSemiBold = localFont({
  src: "../../public/Poppins/Poppins-SemiBold.ttf",
});

export default function Testimonials() {
  return (
    <>
      <main
        id="testimonials"
        className="flex flex-col gap-8 items-center mx-4 md:mx-36 my-28"
      >
        <h1 className={cn("text-5xl md:text-6xl", PoppinsSemiBold.className)}>
          Testimonials
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

        <div className="flex gap-12">
          <div
            className={cn(
              "hidden opacity-[0.1] md:flex flex-col md:flex-row items-center gap-8 px-12 bg-[#F8F8F8] w-[350px] md:w-[1000px] md:h-[320px] rounded-lg"
            )}
          >
            <div>
              <Image
                src={testimonial1}
                className=""
                alt="service1"
                width={740}
                height={900}
              />
            </div>
            <div className="text-black flex flex-col gap-2">
              <p
                className={cn(
                  "relative text-lg md:text-xl text-justify mb-3",
                  PoppinsMedium.className
                )}
              >
                <svg
                  width="15"
                  height="10"
                  viewBox="0 0 15 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[-20px] top-[-10px]"
                >
                  <path
                    d="M5.816 9.112H0.216L3.8 0.535999H7.48L5.816 9.112ZM13.08 9.112H7.512L11.096 0.535999H14.744L13.08 9.112Z"
                    fill="#FD6F00"
                  />
                </svg>
                Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                accumsan. Id leo urna velit neque mattis id tellus arcu
                condimentum. Augue dictum dolor elementum convallis dignissim
                malesuada commodo ultrices.
                <svg
                  width="15"
                  height="10"
                  viewBox="0 0 15 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-[220px] bottom-[-5px]"
                >
                  <path
                    d="M5.816 9.112H0.216L3.8 0.535999H7.48L5.816 9.112ZM13.08 9.112H7.512L11.096 0.535999H14.744L13.08 9.112Z"
                    fill="#FD6F00"
                  />
                </svg>
              </p>
              <p className={cn("text-2xl", PoppinsSemiBold.className)}>Name</p>
              <p className={cn("text-xl", PoppinsMedium.className)}>CEO</p>
            </div>
          </div>

          <div
            className={cn(
              "flex flex-col md:flex-row items-center gap-8 px-12 py-4 bg-[#F8F8F8] w-[350px] md:w-[1000px] md:h-[320px] rounded-lg"
            )}
          >
            <div>
              <Image
                src={testimonial1}
                className=""
                alt="service1"
                width={740}
                height={900}
              />
            </div>
            <div className="text-black flex flex-col gap-2">
              <p
                className={cn(
                  "relative text-lg md:text-xl text-justify mb-3",
                  PoppinsMedium.className
                )}
              >
                <svg
                  width="15"
                  height="10"
                  viewBox="0 0 15 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[-20px] top-[-10px]"
                >
                  <path
                    d="M5.816 9.112H0.216L3.8 0.535999H7.48L5.816 9.112ZM13.08 9.112H7.512L11.096 0.535999H14.744L13.08 9.112Z"
                    fill="#FD6F00"
                  />
                </svg>
                Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                accumsan. Id leo urna velit neque mattis id tellus arcu
                condimentum. Augue dictum dolor elementum convallis dignissim
                malesuada commodo ultrices.
                <svg
                  width="15"
                  height="10"
                  viewBox="0 0 15 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-[170px] md:right-[220px] bottom-[-5px]"
                >
                  <path
                    d="M5.816 9.112H0.216L3.8 0.535999H7.48L5.816 9.112ZM13.08 9.112H7.512L11.096 0.535999H14.744L13.08 9.112Z"
                    fill="#FD6F00"
                  />
                </svg>
              </p>
              <p className={cn("text-2xl", PoppinsSemiBold.className)}>Name</p>
              <p className={cn("text-xl", PoppinsMedium.className)}>CEO</p>
            </div>
          </div>

          <div
            className={cn(
              "hidden opacity-[0.1] md:flex flex-col md:flex-row items-center gap-8 px-12 bg-[#F8F8F8] w-[350px] md:w-[1000px] md:h-[320px] rounded-lg"
            )}
          >
            <div>
              <Image
                src={testimonial2}
                className=""
                alt="service1"
                width={740}
                height={900}
              />
            </div>
            <div className="text-black flex flex-col gap-2">
              <p
                className={cn(
                  "relative text-lg md:text-xl text-justify mb-3",
                  PoppinsMedium.className
                )}
              >
                <svg
                  width="15"
                  height="10"
                  viewBox="0 0 15 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[-20px] top-[-10px]"
                >
                  <path
                    d="M5.816 9.112H0.216L3.8 0.535999H7.48L5.816 9.112ZM13.08 9.112H7.512L11.096 0.535999H14.744L13.08 9.112Z"
                    fill="#FD6F00"
                  />
                </svg>
                Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                accumsan. Id leo urna velit neque mattis id tellus arcu
                condimentum. Augue dictum dolor elementum convallis dignissim
                malesuada commodo ultrices.
                <svg
                  width="15"
                  height="10"
                  viewBox="0 0 15 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-[220px] bottom-[-5px]"
                >
                  <path
                    d="M5.816 9.112H0.216L3.8 0.535999H7.48L5.816 9.112ZM13.08 9.112H7.512L11.096 0.535999H14.744L13.08 9.112Z"
                    fill="#FD6F00"
                  />
                </svg>
              </p>
              <p className={cn("text-2xl", PoppinsSemiBold.className)}>Name</p>
              <p className={cn("text-xl", PoppinsMedium.className)}>CEO</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-2">
          <div className="bg-[#D9D9D9] w-[40px] md:w-[57px] h-[10px] md:h-[16px] rounded-xl"></div>
          <div className="bg-[#FD6F00] w-[40px] md:w-[57px] h-[10px] md:h-[16px] rounded-xl"></div>
          <div className="bg-[#D9D9D9] w-[40px] md:w-[57px] h-[10px] md:h-[16px] rounded-xl"></div>
          <div className="bg-[#D9D9D9] w-[40px] md:w-[57px] h-[10px] md:h-[16px] rounded-xl"></div>
        </div>
      </main>
    </>
  );
}
