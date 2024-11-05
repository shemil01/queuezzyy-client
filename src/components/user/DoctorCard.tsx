import Image from "next/image";
import React from "react";

export const DoctorCard = () => {
  return (
    <div className="w-[600px] h-[150px] bg-[#F8F8F8] flex items-center rounded-lg px-5 space-x-5">
      <div>
        {" "}
        <Image
          className="rounded-full"
          src={"/doctorexmpl.png"}
          width={70}
          height={20}
          alt="docter"
        />
      </div>
     <div className="flex">
     <div >
        <div className="text-gray-600">Orthopedics</div>
        <h2 className="text-lg font-semibold">Dr.Jose antony</h2>
        <p className="text-gray-500">(MBBS ,DNB(Orthopedics))</p>
      </div>
     </div>
      <div className="flex space-x-1 font-semibold text-sm ">
<span className="hover:bg-[#0E4698] bg-white py-1 px-3 rounded-full hover:text-white">know your doctor</span>
<span className="hover:bg-[#0E4698] py-1 px-3 bg-white rounded-full hover:text-white ">Book know</span>   
      </div>
    </div>
  );
};
