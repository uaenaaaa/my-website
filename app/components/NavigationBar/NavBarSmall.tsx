import React from 'react'
import Logo from '../Logo'
import Links from '../Links/Links'
import Socials from '../Socials/Socials'

const NavBarSmall = () => {
  return (
    <>
      <div className='
        flex
        flex-row
        items-start
        justify-between
        w-full
        px-1
        md:hidden
      '>
        <div className='
          flex
          flex-col
          w-[70%]
          gap-2
        '>
          <Logo />
          <Links />
        </div>
        <div className='
          w-[35%]
          flex
          justify-center
          items-center
        '>
          <Socials />
        </div>
      </div>
    </>
  )
}

export default NavBarSmall