import React from 'react'
import Logo from '../Logo'
import Links from '../Links/Links'
import Socials from '../Socials/Socials'
import Button from '../Button'

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
          flex-col
          justify-center
          items-end
          gap-5
        '>
          <Socials />
          <Button className='rounded-lg w-3/4 text-white text-[7px] bg-black p-1' text='My Projects'/>
        </div>
      </div>
    </>
  )
}

export default NavBarSmall