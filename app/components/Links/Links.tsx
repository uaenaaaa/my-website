import React from 'react'
import Link from 'next/link'

const Links = ({}) => {
  return (
    <>
      <div className='flex flex-row justify-between item-center w-full md:w-1/4 xl:w-[15%] lg:w-[35%]'>
        <Link className='text-xs' href='/about'>About</Link>
        <Link className='text-xs' href='/expertise'>Expertise</Link>
        <Link className='text-xs' href='/contact'>Contact</Link>
      </div>
    </>
  )
}

export default Links