import React, { FC } from 'react'
import CTASec from './Main/CTASec'
import Hero from './Main/Hero'

const HeroSection = ({}) => {
  return (
    <>
      <div className='flex flex-col lg:flex-row-reverse gap-5 w-full md:w-[95%] lg:w-[80%]'>
        <Hero />
        <CTASec />
      </div>
    </>
  )
}

export default HeroSection