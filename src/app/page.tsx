import { ReminderSection } from "@/components/ReminderSection";
import { HeroSection } from "@/components/user/HeroSection";
import { Navbar } from "@/components/user/Navbar";

export default function Home() {
  return (
    <div>
     <div className="flex justify-center"> <Navbar/></div>
    <HeroSection/>
      <div className="flex justify-center mt-10">
      <ReminderSection/>

      </div>
    </div>
  );
}
