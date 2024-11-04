import { HeroSection } from "@/components/user/HeroSection";
import { Navbar } from "@/components/user/Navbar";

export default function Home() {
  return (
    <div className="h-screen w-full flex justify-center ">
      <Navbar/>
      <HeroSection/>
    </div>
  );
}
