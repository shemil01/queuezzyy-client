import { ReminderSection } from "@/components/ReminderSection";
import { HeroSection } from "@/components/user/HeroSection";
import { Navbar } from "@/components/user/Navbar";

export default function Home() {
  return (
    <div >
     <div><div className="flex justify-center"> <Navbar/></div></div>
      <div className=" flex justify-end mr-10 mt-10"><div><HeroSection/></div></div>
      <div><div className="flex justify-center mt-10">
      <ReminderSection/>
      </div></div>
    </div>
  );
}

