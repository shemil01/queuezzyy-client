import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-white border-b  border-gray-300 h-12 rounded-b-2xl mt-5 shadow-md p-4 flex justify-center items-center">
      <div className="flex  font-semibold">
        <div className="flex ml-10 space-x-8">
          <p>Home</p>
          <p>Help</p>
          <p>About</p>
        </div>
        <div className="flex ml-24 space-x-4">  
          <span className="hover:bg-[#0E4698] py-1 px-2 rounded-full hover:text-white">
            Login
          </span>
          <span className="hover:bg-[#0E4698] py-1 px-2 rounded-full hover:text-white">
            Signup{" "}
          </span>
        </div>
      </div>
    </nav>
  );
};
