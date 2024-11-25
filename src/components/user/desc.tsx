import React from "react";

export const Desc = () => {
  return (
    <div className="flex space-x-3">
      <div>
        <div className="bg-[#F0DA69] w-[600px] h-[450px] rounded-3xl ">
          <div className="flex-col pt-10 px-10">
            <span>.podcast</span>

            <h1>Nu</h1>
          </div>{" "}
        </div>
      </div>
      <div className="flex-col space-y-3">
        <div className="bg-[#2C438A] w-[600px] h-[220px] rounded-3xl"></div>
        <div className="flex space-x-3">
          <div className="bg-[#A3DAC2] w-[295px] h-[220px] rounded-3xl"></div>
          <div className="bg-[#E7C2D4] w-[295px] h-[220px] rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
};
