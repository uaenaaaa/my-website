import React from 'react'
import NavBar from '../components/NavigationBar/NavBar'
import NavBarSmall from '../components/NavigationBar/NavBarSmall'
import HeroSection from '../components/HeroSection'

const HomePage = ({}) => {
  return (
    <>
      <div className='w-full px-5 py-3 flex flex-col justify-center'>
        <NavBar />
        <NavBarSmall />
        <HeroSection />
      </div>
    </>
  )
}

export default HomePage