import Image from "next/image";
import React from "react";

export const HeroSection: React.FC = () => {
  return (
    <div className="relative font-fustat">
      <div className="bg-[#2376F2] w-[850px] h-[333px] rounded-3xl flex items-center px-10 z-0">
        {/* Text Section */}
        <div className="space-y-14">
          <h1 className="text-5xl font-bold text-white leading-tight tracking-wide">
            Find the Right Doctor
            <br /> Book Instantly!
          </h1>
          <button className="bg-[#F5F5F5] text-xl text-[#0E4698] font-bold  py-3 px-10 rounded-full shadow-md ml-10 hover:bg-gray-100">
            find nearby
          </button>
        </div>

      </div>
        {/* Image Section */} 
        <div className="w-1/2 flex justify-end z-10 absolute right-[5px] top-[-67px]">
          <Image
            src="/hero1.png"
            alt="Doctor"
            className="rounded-xl"
            width={400}
            height={419}
            objectFit="cover"
          />
        </div>
    </div>
  );
};
