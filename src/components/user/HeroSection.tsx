import React from 'react'

export const HeroSection : React.FC= () => {
  return (
    <div className=' bg-[#2376F2] w-[900px] h-[352px] rounded-3xl'>
        
            <div className='space-y-14 pt-10'>
              <h1 className='  text-5xl font-fustat font-bold text-white leading-tight  tracking-wide ml-6 '>Find the Right Doctor<br/> Book Instantly!</h1>
              <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full shadow-md ml-20 hover:bg-gray-100">
          find nearby
        </button>
              </div>
        
    </div>
  )
}
