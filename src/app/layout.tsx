import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Boxes } from "@/components/ui/background-boxes";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
// const fontSans = FontSans({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

const myFont = localFont({ src: "../../public/Poppins/Poppins-Black.ttf" });

export const metadata: Metadata = {
  title: "Mumair",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={(cn("min-h-screen bg-background"), myFont.className)}
        suppressHydrationWarning={true}
      >
        {/* <ShootingStars />
        <StarsBackground /> */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
