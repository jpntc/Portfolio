import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection"
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#78b2b8]">
      <Navbar />
      <div className="container mt-24 mx-auto px-16 py-4 lg:mt-28 min-h-screen">
        <HeroSection />
      </div>

      <div className="container mt-24 mx-auto px-16 py-4 min-h-screen">
        <AboutSection />
      </div>

      <div className="container mt-24 mx-auto px-16 py-4 min-h-screen">
        <ProjectSection />
      </div>

      <div className="container mt-24 mx-auto px-16 py-4 min-h-screen">
        <EmailSection />
      </div>

      <Footer />
    </main>
  );
}
