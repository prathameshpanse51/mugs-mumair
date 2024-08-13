"use client";

import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./ModeToggle";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Meteors } from "@/components/ui/meteors";
const MontserratBold = localFont({ src: "../../public/Montserrat-Bold.ttf" });
const MontserratLight = localFont({
  src: "../../public/Montserrat-Medium.ttf",
});

const PoppinsMedium = localFont({
  src: "../../public/Poppins/Poppins-Light.ttf",
});

export default function Navbar() {
  return (
    <>
      <header className="flex h-20 w-full shrink-0 items-center mt-6 px-4 md:px-36">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetTitle className="hidden"></SheetTitle>
            <Link
              href="#"
              className="mr-6 lg:flex flex items-center gap-4"
              prefetch={false}
            >
              {/* <MountainIcon className="h-6 w-6" /> */}
              <svg
                width="67"
                height="67"
                viewBox="0 0 67 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[30px] md:w-[67px] h-[30px] md:h-[67px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M33.5 67C52.0015 67 67 52.0015 67 33.5C67 31.2865 66.7853 29.1232 66.3756 27.0296C66.2738 27.2142 66.1722 27.399 66.0709 27.584C62.3989 34.28 58.7749 41 55.9669 48.128C55.4629 49.424 54.9589 50.72 54.6229 52.064C54.5509 52.352 54.5029 52.616 54.4789 52.904C54.4549 53.432 54.3109 53.552 53.7829 53.408C52.8229 53.144 52.0069 52.112 51.8869 50.984C51.7669 49.76 52.0069 48.584 52.3189 47.408C53.6869 42.128 55.8229 37.136 58.2229 32.264C58.9601 30.7343 59.7538 29.233 60.5499 27.7273C60.7905 27.2723 61.0313 26.8168 61.2709 26.36C61.3669 26.168 61.4629 25.976 61.4869 25.712C61.3429 25.856 61.1989 26 61.0789 26.144L61.0778 26.1452C56.7582 31.2808 52.4385 36.4164 48.1189 41.528C46.9189 42.944 45.6709 44.288 44.3269 45.56C43.4629 46.376 42.5749 47.192 41.2309 46.64C39.6949 46.04 38.5189 45.08 38.2549 43.328C37.9909 41.648 38.2789 39.992 38.7109 38.384C39.9349 33.896 41.9029 29.72 44.0389 25.616C45.5029 22.808 47.1109 20.072 49.1029 17.6C50.2549 16.184 50.9269 16.064 52.4869 17.024C52.5522 17.0697 52.6176 17.1137 52.6824 17.1573C52.8558 17.274 53.0257 17.3883 53.1829 17.528C54.0949 18.32 54.2149 18.824 53.6389 19.88C53.0591 20.9465 52.4708 22.0065 51.8829 23.0659C50.4995 25.5588 49.1181 28.0479 47.8549 30.608C46.0789 34.28 44.4229 38.024 43.1269 41.888C43.0638 42.0562 43.0191 42.2244 42.9445 42.5055C42.9339 42.5453 42.9228 42.5874 42.9109 42.632C43.9909 41.864 44.8789 41.096 45.7189 40.304C49.2134 36.9173 52.4171 33.298 55.6262 29.6726C55.9875 29.2644 56.349 28.8561 56.7109 28.448C58.5794 26.3396 60.3749 24.1713 62.1707 22.0028C62.7966 21.2469 63.4226 20.4911 64.0516 19.7377C58.8011 8.09998 47.0965 0 33.5 0C14.9985 0 0 14.9985 0 33.5C0 34.1419 0.018056 34.7797 0.053688 35.4127C2.46602 29.918 5.01924 24.4924 7.728 19.136C8.088 18.44 8.472 17.792 8.928 17.168C9.336 16.616 9.816 16.496 10.464 16.688C11.064 16.88 11.592 17.216 12.072 17.624C12.696 18.152 12.912 18.776 12.624 19.592C11.7184 22.4447 10.5138 25.1693 9.31233 27.8865C9.24019 28.0497 9.16805 28.2129 9.096 28.376C8.472 29.792 7.848 31.208 7.344 32.672C7.576 32.384 7.80534 32.0933 8.03467 31.8027C8.49334 31.2213 8.952 30.64 9.432 30.08C12.936 25.904 16.632 21.896 20.52 18.056C20.7672 17.8265 21.0273 17.623 21.2909 17.4168C21.3856 17.3426 21.4808 17.2682 21.576 17.192C22.632 16.352 23.712 16.376 24.84 17C26.712 18.008 27.24 19.16 26.832 21.224C26.5156 22.7608 25.9012 24.1912 25.2896 25.6154C25.2517 25.7036 25.2138 25.7918 25.176 25.88C24.2949 27.9066 23.3329 29.8726 22.3642 31.8521C22.2775 32.0293 22.1908 32.2066 22.104 32.384C22.0893 32.4098 22.0729 32.4361 22.0559 32.4633C21.9621 32.6137 21.851 32.7919 21.912 33.056C22.0244 32.9232 22.1324 32.7991 22.236 32.68C22.3759 32.5193 22.5079 32.3676 22.632 32.216C23.3179 31.4327 24.0012 30.6468 24.6845 29.8607C27.5397 26.5764 30.3963 23.2904 33.456 20.192C34.656 18.992 35.904 17.864 37.272 16.88C38.376 16.088 39.408 16.064 40.512 16.784C41.664 17.528 42.312 18.464 42.072 19.904C41.64 22.52 40.608 24.92 39.36 27.224C38.1201 29.5087 36.7994 31.753 35.4775 33.9992C34.5222 35.6225 33.5663 37.2468 32.64 38.888C30.288 43.04 27.96 47.192 26.04 51.56C25.4367 52.9027 24.9755 54.2928 24.5155 55.6791C24.4082 56.0025 24.301 56.3257 24.192 56.648C24 57.152 23.952 57.68 23.976 58.208C23.976 58.976 23.688 59.168 22.968 58.904C21.576 58.376 20.712 56.744 21.12 55.184C21.936 52.016 22.944 48.896 24.216 45.872C27.048 39.104 30.408 32.624 34.104 26.288C34.872 24.944 35.592 23.576 36.168 22.136C34.752 23.312 33.456 24.608 32.208 25.928C28.1643 30.3025 24.3177 34.846 20.4741 39.3859C19.299 40.7739 18.1241 42.1616 16.944 43.544C16.6971 43.849 16.5293 44.1979 16.3609 44.5482C16.2509 44.7768 16.1407 45.006 16.008 45.224C15.816 45.56 15.612 45.896 15.408 46.232C15.204 46.568 15 46.904 14.808 47.24C14.52 47.768 14.112 47.864 13.584 47.648C12.072 47 11.832 46.304 12.024 45.128C12.384 43.208 13.152 41.432 13.92 39.68C15.3862 36.32 16.9884 33.028 18.5907 29.7361C19.5062 27.855 20.4218 25.9738 21.312 24.08C21.672 23.336 21.984 22.544 22.248 21.704C22.1483 21.7954 22.0485 21.884 21.9498 21.9716C21.7634 22.1371 21.5806 22.2994 21.408 22.472C16.224 27.44 11.616 32.912 7.464 38.768C5.80169 41.0952 4.06888 43.352 2.21909 45.515C7.04885 58.0813 19.2329 67 33.5 67Z"
                  fill="#FD6F00"
                />
              </svg>

              <span className="sr-only">Mumair </span>
              <p
                className={cn(
                  "text-3xl font-normal text-[#545454] dark:text-[#FBFBFB]",
                  MontserratLight.className
                )}
              >
                <span
                  className={cn(
                    "text-[#1E1E1E] dark:text-[#FBFBFB]",
                    MontserratBold.className
                  )}
                >
                  M
                </span>
                umair
              </p>
            </Link>
            <div className="grid gap-2 py-6">
              <Link
                href="#"
                className={cn(
                  "flex w-full items-center py-2 text-lg",
                  PoppinsMedium.className
                )}
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="#"
                className={cn(
                  "flex w-full items-center py-2 text-lg",
                  PoppinsMedium.className
                )}
                prefetch={false}
              >
                About Me
              </Link>
              <Link
                href="#"
                className={cn(
                  "flex w-full items-center py-2 text-lg",
                  PoppinsMedium.className
                )}
                prefetch={false}
              >
                Services
              </Link>
              <Link
                href="#"
                className={cn(
                  "flex w-full items-center py-2 text-lg",
                  PoppinsMedium.className
                )}
                prefetch={false}
              >
                Projects
              </Link>
              <Link
                href="#"
                className={cn(
                  "flex w-full items-center py-2 text-lg",
                  PoppinsMedium.className
                )}
                prefetch={false}
              >
                Testimonials
              </Link>
              <Link
                href="#"
                className={cn(
                  "flex w-full items-center py-2 text-lg",
                  PoppinsMedium.className
                )}
                prefetch={false}
              >
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
        <Link
          href="#"
          className="mr-6 hidden lg:flex flex items-center gap-4"
          prefetch={false}
        >
          {/* <MountainIcon className="h-6 w-6" /> */}
          <svg
            width="67"
            height="67"
            viewBox="0 0 67 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M33.5 67C52.0015 67 67 52.0015 67 33.5C67 31.2865 66.7853 29.1232 66.3756 27.0296C66.2738 27.2142 66.1722 27.399 66.0709 27.584C62.3989 34.28 58.7749 41 55.9669 48.128C55.4629 49.424 54.9589 50.72 54.6229 52.064C54.5509 52.352 54.5029 52.616 54.4789 52.904C54.4549 53.432 54.3109 53.552 53.7829 53.408C52.8229 53.144 52.0069 52.112 51.8869 50.984C51.7669 49.76 52.0069 48.584 52.3189 47.408C53.6869 42.128 55.8229 37.136 58.2229 32.264C58.9601 30.7343 59.7538 29.233 60.5499 27.7273C60.7905 27.2723 61.0313 26.8168 61.2709 26.36C61.3669 26.168 61.4629 25.976 61.4869 25.712C61.3429 25.856 61.1989 26 61.0789 26.144L61.0778 26.1452C56.7582 31.2808 52.4385 36.4164 48.1189 41.528C46.9189 42.944 45.6709 44.288 44.3269 45.56C43.4629 46.376 42.5749 47.192 41.2309 46.64C39.6949 46.04 38.5189 45.08 38.2549 43.328C37.9909 41.648 38.2789 39.992 38.7109 38.384C39.9349 33.896 41.9029 29.72 44.0389 25.616C45.5029 22.808 47.1109 20.072 49.1029 17.6C50.2549 16.184 50.9269 16.064 52.4869 17.024C52.5522 17.0697 52.6176 17.1137 52.6824 17.1573C52.8558 17.274 53.0257 17.3883 53.1829 17.528C54.0949 18.32 54.2149 18.824 53.6389 19.88C53.0591 20.9465 52.4708 22.0065 51.8829 23.0659C50.4995 25.5588 49.1181 28.0479 47.8549 30.608C46.0789 34.28 44.4229 38.024 43.1269 41.888C43.0638 42.0562 43.0191 42.2244 42.9445 42.5055C42.9339 42.5453 42.9228 42.5874 42.9109 42.632C43.9909 41.864 44.8789 41.096 45.7189 40.304C49.2134 36.9173 52.4171 33.298 55.6262 29.6726C55.9875 29.2644 56.349 28.8561 56.7109 28.448C58.5794 26.3396 60.3749 24.1713 62.1707 22.0028C62.7966 21.2469 63.4226 20.4911 64.0516 19.7377C58.8011 8.09998 47.0965 0 33.5 0C14.9985 0 0 14.9985 0 33.5C0 34.1419 0.018056 34.7797 0.053688 35.4127C2.46602 29.918 5.01924 24.4924 7.728 19.136C8.088 18.44 8.472 17.792 8.928 17.168C9.336 16.616 9.816 16.496 10.464 16.688C11.064 16.88 11.592 17.216 12.072 17.624C12.696 18.152 12.912 18.776 12.624 19.592C11.7184 22.4447 10.5138 25.1693 9.31233 27.8865C9.24019 28.0497 9.16805 28.2129 9.096 28.376C8.472 29.792 7.848 31.208 7.344 32.672C7.576 32.384 7.80534 32.0933 8.03467 31.8027C8.49334 31.2213 8.952 30.64 9.432 30.08C12.936 25.904 16.632 21.896 20.52 18.056C20.7672 17.8265 21.0273 17.623 21.2909 17.4168C21.3856 17.3426 21.4808 17.2682 21.576 17.192C22.632 16.352 23.712 16.376 24.84 17C26.712 18.008 27.24 19.16 26.832 21.224C26.5156 22.7608 25.9012 24.1912 25.2896 25.6154C25.2517 25.7036 25.2138 25.7918 25.176 25.88C24.2949 27.9066 23.3329 29.8726 22.3642 31.8521C22.2775 32.0293 22.1908 32.2066 22.104 32.384C22.0893 32.4098 22.0729 32.4361 22.0559 32.4633C21.9621 32.6137 21.851 32.7919 21.912 33.056C22.0244 32.9232 22.1324 32.7991 22.236 32.68C22.3759 32.5193 22.5079 32.3676 22.632 32.216C23.3179 31.4327 24.0012 30.6468 24.6845 29.8607C27.5397 26.5764 30.3963 23.2904 33.456 20.192C34.656 18.992 35.904 17.864 37.272 16.88C38.376 16.088 39.408 16.064 40.512 16.784C41.664 17.528 42.312 18.464 42.072 19.904C41.64 22.52 40.608 24.92 39.36 27.224C38.1201 29.5087 36.7994 31.753 35.4775 33.9992C34.5222 35.6225 33.5663 37.2468 32.64 38.888C30.288 43.04 27.96 47.192 26.04 51.56C25.4367 52.9027 24.9755 54.2928 24.5155 55.6791C24.4082 56.0025 24.301 56.3257 24.192 56.648C24 57.152 23.952 57.68 23.976 58.208C23.976 58.976 23.688 59.168 22.968 58.904C21.576 58.376 20.712 56.744 21.12 55.184C21.936 52.016 22.944 48.896 24.216 45.872C27.048 39.104 30.408 32.624 34.104 26.288C34.872 24.944 35.592 23.576 36.168 22.136C34.752 23.312 33.456 24.608 32.208 25.928C28.1643 30.3025 24.3177 34.846 20.4741 39.3859C19.299 40.7739 18.1241 42.1616 16.944 43.544C16.6971 43.849 16.5293 44.1979 16.3609 44.5482C16.2509 44.7768 16.1407 45.006 16.008 45.224C15.816 45.56 15.612 45.896 15.408 46.232C15.204 46.568 15 46.904 14.808 47.24C14.52 47.768 14.112 47.864 13.584 47.648C12.072 47 11.832 46.304 12.024 45.128C12.384 43.208 13.152 41.432 13.92 39.68C15.3862 36.32 16.9884 33.028 18.5907 29.7361C19.5062 27.855 20.4218 25.9738 21.312 24.08C21.672 23.336 21.984 22.544 22.248 21.704C22.1483 21.7954 22.0485 21.884 21.9498 21.9716C21.7634 22.1371 21.5806 22.2994 21.408 22.472C16.224 27.44 11.616 32.912 7.464 38.768C5.80169 41.0952 4.06888 43.352 2.21909 45.515C7.04885 58.0813 19.2329 67 33.5 67Z"
              fill="#FD6F00"
            />
          </svg>

          <span className="sr-only">Mumair </span>
          <p
            className={cn(
              "text-5xl font-normal text-[#545454] dark:text-[#FBFBFB]",
              MontserratLight.className
            )}
          >
            <span
              className={cn(
                "text-[#1E1E1E] dark:text-[#FBFBFB]",
                MontserratBold.className
              )}
            >
              M
            </span>
            umair
          </p>
        </Link>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-xl transition-colors hover:text-[#FD6F00] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 hover:transition hover:duration-700 hover:-translate-y-1",
                  PoppinsMedium.className
                )}
                prefetch={false}
              >
                Home
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-xl transition-colors hover:text-[#FD6F00] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/ hover:transition hover:duration-700 hover:-translate-y-1",
                  PoppinsMedium.className
                )}
                prefetch={false}
              >
                About Me
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-xl transition-colors hover:text-[#FD6F00] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 hover:transition hover:duration-700 hover:-translate-y-1",
                  PoppinsMedium.className
                )}
                prefetch={false}
              >
                Services
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-xl transition-colors hover:text-[#FD6F00] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 hover:transition hover:duration-700 hover:-translate-y-1",
                  PoppinsMedium.className
                )}
                prefetch={false}
              >
                Projects
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-xl transition-colors hover:text-[#FD6F00] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 hover:transition hover:duration-700 hover:-translate-y-1",
                  PoppinsMedium.className
                )}
                prefetch={false}
              >
                Testimonials
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className={cn(
                  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-xl transition-colors hover:text-[#FD6F00] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50 hover:transition hover:duration-700 hover:-translate-y-1",
                  PoppinsMedium.className
                )}
                prefetch={false}
              >
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex gap-4">
          <Button
            className={cn(
              "md:w-[188px] md:h-[52px] dark:text-white rounded-md text-xl bg-[#FD6F00] font-medium hover:bg-[#FE6100]",
              PoppinsMedium.className
            )}
          >
            Download CV
          </Button>
          <ModeToggle />
        </div>
      </header>
    </>
  );
}

function MenuIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
