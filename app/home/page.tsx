import React from 'react'
import HeroSection from '../components/HeroSection'
import ProjectsSection from '../components/Projects/ProjectsSection'

const HomePage = ({}) => {
  return (
    <>
      <div className='w-full md:w-[90%] gap-5 flex flex-col items-center justify-center'>
        <HeroSection />
        <ProjectsSection />
      </div>
    </>
  )
}

export default HomePage