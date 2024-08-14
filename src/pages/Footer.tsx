import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Link from "next/link";
import React from "react";

const MontserratBold = localFont({ src: "../../public/Montserrat-Bold.ttf" });
const MontserratLight = localFont({
  src: "../../public/Montserrat-Medium.ttf",
});

const PoppinsMedium = localFont({
  src: "../../public/Poppins/Poppins-Light.ttf",
});

export default function Footer() {
  return (
    <>
      <footer className="bg-[#F8F8F8] dark:bg-[#1E1E1E] w-full">
        <div className="flex flex-col items-center gap-12 py-10 md:py-20">
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
              className="w-[40px] md:w-[60px] h-[40px] md:h-[60px]"
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

          <NavigationMenu className="flex">
            <NavigationMenuList className="flex flex-row flex-wrap">
              <NavigationMenuLink asChild>
                <Link
                  href="#"
                  className={cn(
                    "dark:text-white group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-lg md:text-xl transition-colors hover:text-[#FD6F00] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 hover:transition hover:duration-700 hover:-translate-y-1",
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
                    "dark:text-white group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-lg md:text-xl transition-colors hover:text-[#FD6F00] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 hover:transition hover:duration-700 hover:-translate-y-1",
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
                    "dark:text-white group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-lg md:text-xl transition-colors hover:text-[#FD6F00] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 hover:transition hover:duration-700 hover:-translate-y-1",
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
                    "dark:text-white group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-lg md:text-xl transition-colors hover:text-[#FD6F00] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 hover:transition hover:duration-700 hover:-translate-y-1",
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
                    "dark:text-white group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-lg md:text-xl transition-colors hover:text-[#FD6F00] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 hover:transition hover:duration-700 hover:-translate-y-1",
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
                    "dark:text-white group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-lg md:text-xl transition-colors hover:text-[#FD6F00] focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 hover:transition hover:duration-700 hover:-translate-y-1",
                    PoppinsMedium.className
                  )}
                  prefetch={false}
                >
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex flex-row gap-4 items-center">
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.4752 16.2376C32.4752 7.26983 25.2054 0 16.2376 0C7.26983 0 0 7.26983 0 16.2376C0 24.3422 5.93783 31.0598 13.7005 32.278V20.9313H9.57766V16.2376H13.7005V12.6603C13.7005 8.59072 16.1247 6.34282 19.8337 6.34282C21.6097 6.34282 23.4684 6.65996 23.4684 6.65996V10.6559H21.421C19.404 10.6559 18.7748 11.9077 18.7748 13.1931V16.2376H23.2782L22.5582 20.9313H18.7748V32.278C26.5374 31.0598 32.4752 24.3422 32.4752 16.2376Z"
                fill="black"
                className="dark:fill-white"
              />
            </svg>
            <svg
              width="33"
              height="27"
              viewBox="0 0 33 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7246 26.4304C22.9764 26.4304 29.6795 16.2774 29.6795 7.4755C29.6795 7.19007 29.6732 6.8983 29.6605 6.61287C30.9645 5.66987 32.0897 4.50184 32.9835 3.16365C31.7691 3.70395 30.4797 4.05683 29.1594 4.21021C30.5496 3.37691 31.5905 2.06784 32.0892 0.525666C30.7813 1.30073 29.3511 1.84747 27.8598 2.14245C26.8549 1.07476 25.5264 0.367822 24.0794 0.130935C22.6325 -0.105952 21.1479 0.140406 19.855 0.83192C18.5622 1.52343 17.5331 2.62159 16.927 3.9566C16.3209 5.29161 16.1714 6.78912 16.5017 8.21761C13.8535 8.08472 11.2629 7.3968 8.89767 6.19846C6.53245 5.00011 4.44546 3.31809 2.77201 1.26143C1.92147 2.72786 1.6612 4.46313 2.04411 6.11455C2.42701 7.76598 3.42435 9.20966 4.83343 10.1522C3.77557 10.1186 2.7409 9.83377 1.81488 9.32126V9.40371C1.81393 10.9426 2.34595 12.4344 3.32049 13.6254C4.29503 14.8164 5.65196 15.6331 7.16061 15.9368C6.18067 16.2049 5.15219 16.244 4.15474 16.051C4.58045 17.3745 5.40873 18.532 6.52398 19.3621C7.63924 20.1921 8.98581 20.6533 10.3758 20.6812C8.01602 22.5349 5.10103 23.5403 2.1003 23.5355C1.56815 23.5347 1.03652 23.5021 0.508255 23.4378C3.55667 25.3936 7.1028 26.4323 10.7246 26.4304Z"
                fill="black"
                className="dark:fill-white"
              />
            </svg>
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1039_173)">
                <path
                  d="M16.2542 2.92392C20.5927 2.92392 21.1064 2.94295 22.8126 3.01906C24.3983 3.08883 25.2546 3.35523 25.8255 3.57723C26.5803 3.869 27.1258 4.2242 27.6903 4.78871C28.2611 5.35956 28.61 5.8987 28.9018 6.6535C29.1237 7.22435 29.3901 8.08698 29.4599 9.66634C29.536 11.3789 29.5551 11.8927 29.5551 16.2248C29.5551 20.5633 29.536 21.0771 29.4599 22.7833C29.3901 24.369 29.1237 25.2253 28.9018 25.7961C28.61 26.5509 28.2548 27.0964 27.6903 27.6609C27.1194 28.2318 26.5803 28.5806 25.8255 28.8724C25.2546 29.0944 24.392 29.3608 22.8126 29.4306C21.1001 29.5067 20.5863 29.5257 16.2542 29.5257C11.9157 29.5257 11.4019 29.5067 9.69569 29.4306C8.10998 29.3608 7.2537 29.0944 6.68285 28.8724C5.92805 28.5806 5.38257 28.2254 4.81806 27.6609C4.2472 27.0901 3.89835 26.5509 3.60658 25.7961C3.38458 25.2253 3.11818 24.3627 3.04841 22.7833C2.9723 21.0707 2.95327 20.557 2.95327 16.2248C2.95327 11.8863 2.9723 11.3726 3.04841 9.66634C3.11818 8.08063 3.38458 7.22435 3.60658 6.6535C3.89835 5.8987 4.25355 5.35322 4.81806 4.78871C5.38891 4.21785 5.92805 3.869 6.68285 3.57723C7.2537 3.35523 8.11632 3.08883 9.69569 3.01906C11.4019 2.94295 11.9157 2.92392 16.2542 2.92392ZM16.2542 -0.00012207C11.8459 -0.00012207 11.2941 0.0189064 9.56249 0.0950202C7.83724 0.171134 6.65113 0.450218 5.62359 0.849816C4.55166 1.26844 3.64463 1.82027 2.74395 2.72729C1.83693 3.62797 1.2851 4.535 0.866479 5.60059C0.466881 6.63447 0.187797 7.81423 0.111683 9.53948C0.035569 11.2774 0.0165405 11.8292 0.0165405 16.2375C0.0165405 20.6458 0.035569 21.1976 0.111683 22.9292C0.187797 24.6544 0.466881 25.8405 0.866479 26.8681C1.2851 27.94 1.83693 28.847 2.74395 29.7477C3.64463 30.6484 4.55166 31.2066 5.61725 31.6188C6.65113 32.0184 7.8309 32.2975 9.55614 32.3736C11.2877 32.4498 11.8396 32.4688 16.2478 32.4688C20.6561 32.4688 21.2079 32.4498 22.9395 32.3736C24.6647 32.2975 25.8509 32.0184 26.8784 31.6188C27.944 31.2066 28.851 30.6484 29.7517 29.7477C30.6524 28.847 31.2105 27.94 31.6228 26.8744C32.0224 25.8405 32.3015 24.6608 32.3776 22.9355C32.4537 21.2039 32.4728 20.6521 32.4728 16.2438C32.4728 11.8356 32.4537 11.2838 32.3776 9.55217C32.3015 7.82692 32.0224 6.64081 31.6228 5.61328C31.2232 4.535 30.6714 3.62797 29.7644 2.72729C28.8637 1.82661 27.9567 1.26844 26.8911 0.856159C25.8572 0.456561 24.6774 0.177477 22.9522 0.101363C21.2143 0.0189064 20.6624 -0.00012207 16.2542 -0.00012207Z"
                  fill="black"
                  className="dark:fill-white"
                />
                <path
                  d="M16.2541 7.89667C11.6493 7.89667 7.91333 11.6326 7.91333 16.2375C7.91333 20.8424 11.6493 24.5783 16.2541 24.5783C20.859 24.5783 24.595 20.8424 24.595 16.2375C24.595 11.6326 20.859 7.89667 16.2541 7.89667ZM16.2541 21.6479C13.2667 21.6479 10.8437 19.2249 10.8437 16.2375C10.8437 13.25 13.2667 10.8271 16.2541 10.8271C19.2416 10.8271 21.6646 13.25 21.6646 16.2375C21.6646 19.2249 19.2416 21.6479 16.2541 21.6479Z"
                  fill="black"
                  className="dark:fill-white"
                />
                <path
                  d="M26.872 7.56669C26.872 8.64498 25.9967 9.51394 24.9248 9.51394C23.8465 9.51394 22.9775 8.63863 22.9775 7.56669C22.9775 6.48841 23.8528 5.61945 24.9248 5.61945C25.9967 5.61945 26.872 6.49476 26.872 7.56669Z"
                  fill="black"
                  className="dark:fill-white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1039_173">
                  <rect
                    width="32.4752"
                    height="32.4752"
                    fill="white"
                    className="dark:fill-black"
                    transform="translate(0.0165405 -0.00012207)"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="33"
              height="33"
              viewBox="0 0 33 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1039_172)">
                <path
                  d="M30.5961 -0.00012207H2.92234C1.59669 -0.00012207 0.52475 1.04644 0.52475 2.34038V30.1283C0.52475 31.4222 1.59669 32.4751 2.92234 32.4751H30.5961C31.9217 32.4751 33 31.4222 33 30.1346V2.34038C33 1.04644 31.9217 -0.00012207 30.5961 -0.00012207ZM10.1595 27.6736H5.33895V12.1718H10.1595V27.6736ZM7.74922 10.0596C6.20158 10.0596 4.95204 8.81006 4.95204 7.26875C4.95204 5.72745 6.20158 4.47791 7.74922 4.47791C9.29053 4.47791 10.5401 5.72745 10.5401 7.26875C10.5401 8.80371 9.29053 10.0596 7.74922 10.0596ZM28.1985 27.6736H23.3843V20.1383C23.3843 18.3433 23.3526 16.0282 20.8789 16.0282C18.3734 16.0282 17.9929 17.9881 17.9929 20.0115V27.6736H13.185V12.1718H17.8026V14.2903H17.866C18.5066 13.0724 20.0797 11.7848 22.4202 11.7848C27.2978 11.7848 28.1985 14.9943 28.1985 19.1679V27.6736Z"
                  fill="black"
                  className="dark:fill-white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1039_172">
                  <rect
                    width="32.4752"
                    height="32.4752"
                    fill="white"
                    className="dark:fill-black"
                    transform="translate(0.52475 -0.00012207)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <p
          className={cn(
            "w-full bg-[#545454] dark:bg-[#121212] text-lg md:text-xl text-white text-center py-4",
            PoppinsMedium.className
          )}
        >
          © 2023 <span className="text-[#FD6F00]">Mumair</span> All Rights
          Reserved , Inc.
        </p>
      </footer>
    </>
  );
}
