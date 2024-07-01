import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhatWeDoSection from "./components/WhatWeDoSection";
import WhyChooseUsSection from "./components/WhyChooseUs";

export default function Home() {
  return (
    <main>
     <HeroSection/>
     <WhatWeDoSection/>
     <WhyChooseUsSection/>
    </main>
  );
}
