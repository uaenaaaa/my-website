import React, { FC } from 'react'
import CTASec from './Main/CTASec'
import Hero from './Main/Hero'

const HeroSection = ({}) => {
  return (
    <>
      <div className='flex flex-col gap-5'>
        <Hero />
        <CTASec />
      </div>
    </>
  )
}

export default HeroSection