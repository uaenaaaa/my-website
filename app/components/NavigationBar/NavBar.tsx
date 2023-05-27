import React from 'react'
import Logo from '../Logo'
import Links from '../Links/Links'
import Socials from '../Socials/Socials'

const NavBar = () => {
  return (
    <>
      <div className='
      hidden
      md:flex
      w-full
      md:w-[95%]
      lg:w-[90%]
      xl:w-[80%]
      items-center
      flex-row
      justify-between
      '>
        <Logo />
        <Links />
        <Socials />
      </div>
    </>
  )
}

export default NavBar