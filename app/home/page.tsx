import React from 'react'
import NavBar from '../components/NavigationBar/NavBar'
import NavBarSmall from '../components/NavigationBar/NavBarSmall'

const HomePage = ({}) => {
  return (
    <>
    <div className='w-full px-5 py-3 flex justify-center'>
      <NavBar />
      <NavBarSmall />
    </div>
    </>
  )
}

export default HomePage