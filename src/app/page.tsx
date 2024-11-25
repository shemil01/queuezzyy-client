import { Desc } from '@/components/user/desc'
import { Navbar } from '@/components/user/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='mt-10 mx-10 space-y-5'>
        <Navbar/>
        <Desc/>
    </div>
  )
}

export default page