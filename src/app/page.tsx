import { ReminderSection } from "@/components/user/ReminderSection";
import { HeroSection } from "@/components/user/HeroSection";
import { Navbar } from "@/components/user/Navbar";

export default function Home() {
  return (
    <div>
     <div><div className="flex justify-center"> <Navbar/></div></div>
      <div className=" flex justify-end"><div><HeroSection/></div></div>
      <div><div className="flex justify-center mt-10">
      <ReminderSection/>
      </div></div>
    </div>
  );
}
