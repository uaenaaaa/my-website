import React from 'react'
import Logo from '../Logo'
import Links from '../Links/Links'
import Socials from '../Socials/Socials'

const NavBar = () => {
  return (
    <>
      <div className='
      hidden
      lg:flex
      flex-row
      justify-between'>
        <Logo />
        <Links />
        <Socials />
      </div>
    </>
  )
}

export default NavBar