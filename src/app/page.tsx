import Navbar from "@/pages/Navbar";
import HomeProfile from "@/pages/Home";
import AboutMe from "@/pages/AboutMe";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import Testimonials from "@/pages/Testimonials";
import Connect from "@/pages/Connect";
import Footer from "@/pages/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeProfile />
      <AboutMe />
      <Services />
      <Projects />
      <Testimonials />
      <Connect />
      <Footer />
    </>
  );
}
