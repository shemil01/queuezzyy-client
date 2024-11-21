import Banner from '@/components/banner'
import { Navbar } from '@/components/user/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='mt-10'>
        <Navbar/>
        <div><Banner/></div>
    </div>
  )
}

export default page
