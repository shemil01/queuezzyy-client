import Banner from '@/components/banner'
import { Desc } from '@/components/user/desc'
import { Navbar } from '@/components/user/Navbar'
import { Tratmentcatogary } from '@/components/user/tratmentcatogary'
import React from 'react'

const page = () => {
  return (
    <div className='mt-10 mx-10 space-y-3'>
        <Navbar/>
        <div><Banner/></div>
        <div><Tratmentcatogary/></div>
        <div><Desc/></div>
    </div>
  )
}

export default page
