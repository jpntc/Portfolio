import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection"
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroAnimation from "./components/HeroAnimation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-200">
      <Navbar/>
      <div class="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
      </div>
      <div className="bg-slate-300">
      <HeroAnimation />
      </div>
      <div class="container mt-24 mx-auto px-12 py-4">
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
