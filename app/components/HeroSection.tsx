import React, { FC } from 'react'
import CTASec from './Main/CTASec'
import Hero from './Main/Hero'

const HeroSection = ({}) => {
  return (
    <>
      <div className='flex flex-col'>
        <CTASec />
        <Hero />
      </div>
    </>
  )
}

export default HeroSection