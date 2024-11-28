import Banner from '@/components/banner'
import { Desc } from '@/components/user/desc'
import { Navbar } from '@/components/user/Navbar'
import { Reviewsection } from '@/components/user/reviewsection'
import { Sections } from '@/components/user/sections'
import { Tratmentcatogary } from '@/components/user/tratmentcatogary'
import React from 'react'

const page = () => {
  return (
    <div className='mt-10 mx-10 space-y-5'>
        <Navbar/>
        <div><Banner/></div>
        <div><Tratmentcatogary/></div>
        <div><Sections/></div>
        <div><Desc/></div>
        <div><Reviewsection/></div>

    </div>
  )
}

export default page
