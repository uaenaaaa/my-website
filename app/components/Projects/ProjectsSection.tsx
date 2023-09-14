'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import MockImage from '../../../public/images/mock-image.png'
import { AiFillGithub } from 'react-icons/ai'

const ProjectsSection = () => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <>
      <div className='
      w-full
      flex
      flex-col
      justify-center
      items-center
      gap-5'>
        <h1 className='
        text-left
        self-start
        font-bold
        text-xl
        lg:text-4xl'>Projects</h1>

        <div className='
        flex
        justify-center
        items-center
        w-full'>
          <div className='w-3/4
          relative
          overflow-hidden
          rounded-lg'>
            <h1 className={`
            font-bold
            absolute
            transition-all
            duration-1000
            bg-white
            text-black
            p-2
            rounded-md
            text-sm
            z-50 ${isHovered ? 'top-2 left-2' : 'left-[-200px] top-2'}`}>ClimateCast w/ NextJS </h1>
            <AiFillGithub className={`hidden bottom-5 right-5 transition-all ${isHovered ? 'block scale-100' : 'hidden scale-0'}`} size={25}/>
            <Image onMouseOut={() => setIsHovered(false)} onMouseOver={() => setIsHovered(true)} className={`w-full scale-100 transition-all duration-5000 ${isHovered ? 'scale-150' : 'scale-100' }`} alt='Weather Application Using NextJS Section' src={ MockImage }/>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsSection