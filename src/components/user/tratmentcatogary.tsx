import { Html } from "next/document";
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
    image: "/queuezzyy-client/public/treamtment catogary03.png",
    color: "#f0da69",
  },
  {
    title: "Find Doctors\n near you",
    subtitle: "Confirmed appointments",
    image: "/queuezzyy-client/public/treatment catogary01.png",
    color: "#a3dac2",
  },
  {
    title: "24/7 \n Medicines",
    subtitle: "Essentials at your doorstep",
    image: "/queuezzyy-client/public/treatment catogary02.png",
    color: "#e7c2d4",
  },
  {
    title: "Lab\nTests",
    subtitle: "Sample pickup at your home",
    image: "/queuezzyy-client/public/treamtment catogary03.png",
    color: "#92bdf6 ",
  },
];

export const Tratmentcatogary: React.FC = () => {
  return (
    <div className=" w-full flex flex-wrap space-x-2 font-Graphicsemibold ">
      {treatmentCatogary.map((items, index) => (
        <div
          className="pl-[36px] pr-[36px] pt-[42px] pb-[42px] rounded-[30px] text-[#252b61]"
          style={{ backgroundColor: items.color }}
          key={index}
        >
          <h1
  className="font-semibold text-[28px] leading-tight"
  dangerouslySetInnerHTML={{ __html: items.title.replace(/\n/g, "<br/>") }}
></h1>

        </div>
      ))}
    </div>
  );
};
