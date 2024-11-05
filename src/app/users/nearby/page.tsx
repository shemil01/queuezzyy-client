import { SearchBar } from '@/components/SearchBar'
import { Navbar } from '@/components/user/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100">
         <div className='bg-blue-900  rounded-br-[70px] w-[800px] h-[280px] absolute z-0'></div>
         <div className="relative z-10">
      <div className="flex justify-center">
        <Navbar />
      </div>
      <div className='mt-36'>
        <SearchBar/>
      </div>
    </div>
    </div>
  )
}

export default page