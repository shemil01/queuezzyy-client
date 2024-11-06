import { ReminderSection } from "@/components/user/ReminderSection";
import { HeroSection } from "@/components/user/HeroSection";
import { Navbar } from "@/components/user/Navbar";
import { Specializations } from "@/components/user/Specializations";
import { WhyUsSection } from "@/components/user/WhyUsSection";

export default function Home() {
  return (
    <div >
     <div><div className="flex justify-center"> <Navbar/></div></div>
      <div className=" flex justify-end mr-10 mt-10"><div><HeroSection/></div></div>
      <div><Specializations/></div>
      <div><div className="flex justify-start m-10">
      <ReminderSection/>
      </div></div>
      <div className=""><WhyUsSection/></div>
    </div>
  );
}

