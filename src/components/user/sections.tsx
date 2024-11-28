import Image from 'next/image'
import React from 'react'

interface Specialization{
  name:string,
  icon:string
}
const specialization : Specialization []= [
  {name:'Cardiology',icon:'/orthoicon.png'},
  {name:'Cardiology',icon:'/orthoicon.png'},
  {name:'Cardiology',icon:'/orthoicon.png'},
  {name:'Cardiology',icon:'/orthoicon.png'},
  {name:'Cardiology',icon:'/orthoicon.png'},

]

export const Sections : React.FC = () => {
  return (
    <div className=' flex flex-col'>
        <div className=' flex justify-start' >
            <h2 className='text-[#252b61] font-Graphik font-bold text-6xl '>Book an appointment for an <br /> in-clinic consultation</h2>
        </div>
        <div className=' flex justify-between text-blue-700  space-y-2'>
        <p >Specializations</p>
            <p >See All</p>
        </div>
        <div className=' flex flex-wrap space-y-2 space-x-2 '>
          {specialization.map((items,index)=>(
            <div className=' rounded-md bg-[#f1f5f9] w-2/12 h-11 flex justify-center items-center p-2' key={index}><Image src={items.icon} width={50} height={50} alt='Specialization'/>
            <h3 className='font-Graphikregular text-[#252b61] font-semibold'>{items.name}</h3>
            </div>
          ))}
        </div>
    </div>
  )
}
