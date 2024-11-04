import { ReminderSection } from "@/components/ReminderSection";
import { HeroSection } from "@/components/user/HeroSection";
import { Navbar } from "@/components/user/Navbar";

export default function Home() {
  return (
    <div>
<<<<<<< HEAD
     <div className="flex justify-center"> <Navbar/></div>
    <HeroSection/>
      <div className="flex justify-center mt-10">
=======
     <div><div className="flex justify-center"> <Navbar/></div></div>
      <div className=" flex justify-end"><div><HeroSection/></div></div>
      <div><div className="flex justify-center mt-10">
>>>>>>> 296ea624e3a74859f09739e4fa34886db1b6bf7f
      <ReminderSection/>
      </div></div>
    </div>
  );
}
