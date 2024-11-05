"use client";
import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

export const SearchBar = () => {
  const [isLocationFocused, setIsLocationFocused] = useState<boolean>(false);
  return (
    <div>
      <div className="flex h-[40px] w-1/2   ">
        <div className="flex items-center  relative bg-white">
          {!isLocationFocused && (
            <span className="absolute text-gray-500">
              <FaLocationDot />
            </span>
          )}
          <input
            type="text"
            placeholder={isLocationFocused ? "" : "Location"}
            onFocus={() => setIsLocationFocused(true)}
            onBlur={() => setIsLocationFocused(false)}
            className="pl-8 outline-none flex-1 text-black bg-transparent"
          />
        </div>
        <div className="w-[1px] bg-gray-300"></div>
        <div className="bg-white flex items-center">
          <input
            type="text"
            placeholder="Doctor/specialization"
            className="pl-8 outline-none flex-1 text-black bg-transparent"
          />
        </div>
        <button className="bg-blue-800 rounded-r-[50px] px-4">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};
