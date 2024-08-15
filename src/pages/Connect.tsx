import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import React from "react";

const PoppinsMedium = localFont({
  src: "../../public/Poppins/Poppins-Light.ttf",
});

const PoppinsSemiBold = localFont({
  src: "../../public/Poppins/Poppins-SemiBold.ttf",
});

export default function Connect() {
  return (
    <>
      <main
        id="contact"
        className="flex flex-col gap-8 items-center mx-4 md:mx-36 my-28"
      >
        <h1
          className={cn(
            "text-5xl md:text-6xl text-center ",
            PoppinsSemiBold.className
          )}
        >
          Lets Design Together
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

        <div className="flex flex-col md:flex-row gap-4 md:items-center">
          <Input
            type="email"
            placeholder="Enter Your Email"
            className={cn(
              "md:w-[550px] md:h-[75px] rounded-xl bg-[#F8F8F8] text-xl",
              PoppinsMedium.className
            )}
            style={{ border: "1px solid #AFAFAF" }}
          />
          <Button
            className={cn(
              "md:w-[220px] md:h-[75px] dark:text-white rounded-xl text-xl bg-[#FD6F00] font-medium hover:bg-[#FE6100]",
              PoppinsMedium.className
            )}
          >
            Contact Me
          </Button>
        </div>
      </main>
    </>
  );
}
