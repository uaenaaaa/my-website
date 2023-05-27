import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <>
      <div className='flex flex-col justify-start start w-full sm:w-[20%]'>
        <Link href='/' className='font-bold text-lg lg:text-xl'>Froilan</Link>
        <p className='font-normal text-xs lg:text-sm'>Software Engineer</p>
      </div>
    </>
  )
}

export default Logo