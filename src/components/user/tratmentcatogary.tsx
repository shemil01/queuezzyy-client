import Image from "next/image";
import React from "react";

interface TreatmentCatogary {
  title: string;
  subtitle: string;
  color: string;
  image: string;
}
const treatmentCatogary: TreatmentCatogary[] = [
  {
    title: "Instant Video\n Consultation",
    subtitle: "Connect within 60 secs",
    image: "/treatment catogary01.png",
    color: "#f0da69",
  },
  {
    title: "Find Doctors\n near you",
    subtitle: "Confirmed appointments",
    image: "/treatment catogary01.png",
    color: "#a3dac2",
  },
  {
    title: "24/7 \n Medicines",
    subtitle: "Essentials at your doorstep",
    image: "/treatment catogary02.png",
    color: "#e7c2d4",
  },
  {
    title: "Lab\nTests",
    subtitle: "Sample pickup at your home",
    image: "/treamtment catogary03.png",
    color: "#92bdf6 ",
  },
];

export const Tratmentcatogary: React.FC = () => {
  return (
    <div className=" w-full flex flex-wrap space-x-3 font-Graphicsemibold  relative justify-center ">
      {treatmentCatogary.map((items, index) => (
        <div
          className="pl-[36px] pr-[36px] pt-[42px] pb-[42px] rounded-[30px] text-[#252b61] block -z-20 w-auto "
          style={{ backgroundColor: items.color }}
          key={index}
        >
          <div className=" mb-[137px] z-10">
            <h1
              className="font-semibold text-[28px] leading-tight mb-[18px] mt-[10px]"
              dangerouslySetInnerHTML={{
                __html: items.title.replace(/\n/g, "<br/>"),
              }}
            ></h1>
            <p className=" font-Graphikregular mb-[10px] al">
              {items.subtitle}
            </p>
          </div>
          <div className=" pr-7 pt-4 pl-7 ">
          <div className=
          " w-[150px] h-[42px] bg-[#252b61] align-middle rounded-[100px] flex justify-center  mr-16 font-Graphikregular font-thin text-[20px] start-0">
            <button className=" text-white ">Book now</button>
          </div>

          <div className="  inset-y-0  -z-10 inline-block absolute pl-1 pt-40 ">
            <Image
              src={items.image}
              alt="treatment sections"
              width={245}
              height={245}
              className=""
            />
          </div>
          </div>
         
        </div>
      ))}
    </div>
  );
};
