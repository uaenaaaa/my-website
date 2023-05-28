import React from 'react'
import Arrow from '../../../public/images/arrow.png'
import Image from 'next/image'

const CTASec = () => {
  return (
    <>
      <div className='
        w-full
        flex
        flex-row
        justify-center
        relative'>
        <div className='w-3/4'>
          <h1 className='font-bold'>Hi! I&apos;m Froilan,</h1>
          <p className='text-xs md:hidden'>Software Developer Based In</p>
          <p className='text-xs md:hidden'>Caloocan Philippines</p>
          <p className='text-xs hidden md:block'>Software Developer Based In Caloocan Philippines</p>
        </div>
          <Image className='w-1/4 absolute top-[-35%] left-[65%]' src={ Arrow } alt='Arrow Illustration'/>
      </div>
    </>
  )
}

export default CTASec