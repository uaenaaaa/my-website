import React from 'react'
import Link from 'next/link'

const Links = ({}) => {
  return (
    <>
      <div className='flex flex-row justify-between item-center w-[35%]'>
        <Link href='/about'>About</Link>
        <Link href='/expertise'>Expertise</Link>
        <Link href='/contact'>Contact</Link>
      </div>
    </>
  )
}

export default Links