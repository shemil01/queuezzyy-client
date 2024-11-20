import React from 'react';
import { IoLocation, IoSearch } from "react-icons/io5";

export const Navbar = () => {
  return (
    <div className='bg-[#F6F7F8] h-24 w-full flex justify-between items-center px-5 font-[graphik]'>
      <p>QueEzzy</p>
      <div className='flex items-center space-x-1'>
        <IoLocation />
        <p>Select Location</p>
      </div>
      <div className='relative flex items-center'>
        <span className='absolute left-2 bg-yellow-300 rounded-full p-2'>
          <IoSearch className='text-gray-600' />
        </span>
        <input
          type="text"
          className='pl-10 py-2 w-64 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
          placeholder='Search'
        />
      </div>
      <p>QueEzzy</p>
      <p>QueEzzy</p>
      <p>QueEzzy</p>
      <p>QueEzzy</p>
    </div>
  );
};
