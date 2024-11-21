import Image from "next/image";
import React from "react";

export const DoctorProfail = () => {
  return (
    <div>
      <div className="border p-4 rounded-lg shadow-lg">
        <Image
          src={"/doctorexmpl.png"}
          alt="doctor"
          className="w-32 h-32 rounded-full mx-auto"
        />
        <h1 className="text-2xl font-bold text-center">Dr.Jose antony</h1>
        <p className="text-center">
          (MBBS, DNB (Orthopaedics), MNAMS, Fellowship in Orthopaedic Oncology)
        </p>
      </div>
    </div>
  );
};
