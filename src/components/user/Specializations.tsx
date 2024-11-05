import Image from 'next/image';
import React from 'react'

interface specializations{
name:string;
icon:string

}

const specialization:specializations[] = [
    { name: 'Cardiology', icon: '/orthoicon.png' },
    { name: 'Orthopedics', icon: '/orthoicon.png' },
    // Add more specializations as needed
  ];

export const Specializations:React.FC = () => {
        
  return (
    <div className=' font-fustat'>
        <div className=' flex justify-between p-2'><div className='font-semibold text-black'>specialization</div><div className=' font-medium text-[#0E4698]'>seeAll</div></div>
        <div className='flex flex-wrap space-x-5 p-5'>{specialization.map((items,index)=>(
            <div key={index} className='w-[163px] h-[163px] bg-slate-200 rounded-full'>
                <Image src={items.icon} width={500} height={500}></Image>
            </div>
        ))}</div>
    </div>
  )
}
