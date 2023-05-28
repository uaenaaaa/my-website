import React from 'react'
import Image from 'next/image'
import MockImage from '../../../public/images/mock-image.png'

const ProjectsSection = () => {
  return (
    <>
      <div className='
      w-full
      flex
      flex-col
      justify-center
      items-center'>
        <h1 className='
        text-left
        self-start
        font-bold
        text-xl'>Projects</h1>

        <div className='
        flex
        justify-center
        items-center
        w-full'>
          <div className='w-3/4'>
            <h1>Weather App Using NextJS</h1>
            <Image className='w-full' alt='Weather Application Using NextJS Section' src={ MockImage }/>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsSection