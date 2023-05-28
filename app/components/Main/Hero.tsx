import React, { FC } from 'react'
import Image from 'next/image'
import Me from '../../../public/images/me.png'
import { 
  FaAndroid,
  FaNodeJs,
  FaReact
} from 'react-icons/fa'

const Hero = () => {
  return (
    <>
      <div className='w-full flex justify-center relative items-center'>
        <FaAndroid size={75} className='top-0 left-0 absolute fill-[#3DDB86]' />
        <FaNodeJs size={75} className='absolute right-0 fill-[#24B45D]' />
        <FaReact size={75} className='absolute z-0 left-0 fill-[#62ADFC]' />
        <Image className='w-3/4 z-50' src={ Me } alt='Picture of the Developer'/>
      </div>
    </>
  )
}

export default Hero