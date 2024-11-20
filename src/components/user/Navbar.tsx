import React from 'react';
import { IoLocation, IoSearch } from "react-icons/io5";

export const Navbar = () => {
  return (
    <div className='bg-[#F6F7F8] h-24 w-full flex justify-between items-center px-5 font-[graphik] rounded-2xl cursor-pointer '>
      <p>QueEzzy</p>
      <div className='flex items-center space-x-1 hover:underline'>
        <IoLocation />
        <p>Select Location</p>
      </div>
      <div className='relative flex items-center'>
        <span className='absolute left-2 bg-yellow-300 rounded-full p-2'>
          <IoSearch className='text-gray-600' />
        </span>
        <input
          type="text"
          className='pl-14 py-2 w-64 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
          placeholder='Search your doctor'
        />
      </div>
      <p className='hover:underline'>About</p>
      <p className='hover:underline'>Help</p>
      <div className='space-x-4 flex'>
  <p className='px-4 py-2 rounded-3xl transition duration-300 hover:bg-blue-500 hover:text-white'>
    Sign Up
  </p>
  <p className='px-4 py-2 rounded-3xl transition duration-300 hover:bg-blue-500 hover:text-white'>Login</p>
</div>

    </div>
  );
};
