import React from 'react'
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
        <FaAndroid size={75} className='top-0 left-[15%] absolute fill-[#3DDB86]' />
        <FaNodeJs size={95} className='absolute bottom-0 z-20 right-[5%] fill-[#24B45D]' />
        <FaReact size={75} className='absolute z-30 top-[50%] left-0 fill-[#62ADFC]' />
        <Image className='w-3/4 z-10' src={ Me } alt='Picture of the Developer'/>
      </div>
    </>
  )
}

export default Hero