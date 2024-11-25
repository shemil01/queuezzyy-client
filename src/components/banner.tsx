import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    //hero banner
    <div className=" w-auto h-auto bg-[#252b61] pt-[36px] pr-[56px] pb-[40px] pl-[54px] flex font-Graphik rounded-[40px] overflow-hidden  relative  justify-center">
     {/* banner upper  */}
     <div className=" space-y-6  ">
        {/* //banner title */}
    <div className=" justify-center flex flex-wrap">
    <div className=" flex align-middle justify-center ">
        <h1 className="font-bold text-[250px] text-[#dbebff]  tracking-wide  text-9xl h-[100%] ">
          Healthcare
        </h1>
      </div>
      {/* banner item wrap */}
      <div className="font-extralight  w-3/6 flex justify-between p-3 font-Graphikregular text-[#c7cbf5] text-2xl mb-[148px] relative">
        <div>
          <p>Reduce HbA1c</p>
        </div>{" "}
        <div>
          <p>No more medications</p>
        </div>
      </div>
    </div>
{/* banner bottom conten */}
<div className="flex justify-between  ">
    <div><h3 className=" text-white font-light"> IF YOU RE LOOKING FOR A CREATIVE AND <br />EASY WAY TO BUILD A WEBSITE, WOW! <br />IS THE PERFECT SOLUTION</h3></div>
    <div><button className=" bg-[#e7c2d4] pl-[24px] pr-[24px] pt-[19px] pb-[19px] font-Graphikregular font-light rounded-[100px] tracking-wider">Find nearst</button></div>
</div>
     </div>
     <div  className="absolute mt-24 inline-block "><Image src={'/bannerdocter.png '} width={500}height={568.77} alt="main "/></div>
    </div>
  ); 
};

export default Banner;
