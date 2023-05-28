import React from 'react'
import NavBar from '../components/NavigationBar/NavBar'
import NavBarSmall from '../components/NavigationBar/NavBarSmall'
import HeroSection from '../components/HeroSection'
import ProjectsSection from '../components/Projects/ProjectsSection'

const HomePage = ({}) => {
  return (
    <>
      <div className='w-full px-5 py-3 gap-5 flex flex-col items-center justify-center'>
        <NavBar />
        <NavBarSmall />
        <HeroSection />
        <ProjectsSection />
      </div>
    </>
  )
}

export default HomePage