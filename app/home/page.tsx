import React from 'react'
import HeroSection from '../components/HeroSection'
import ProjectsSection from '../components/Projects/ProjectsSection'

const HomePage = ({}) => {
  return (
    <>
      <div className='
      w-[95%]
      md:w-[90%]
      gap-y-10
      flex
      pt-5
      flex-col
      items-center
      justify-center'>
        <HeroSection />
        <ProjectsSection />
      </div>
    </>
  )
}

export default HomePage