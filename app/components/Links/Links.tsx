'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { RxDotFilled } from 'react-icons/rx'

const Links = ({}) => {
  const pathname = usePathname()
  const ActiveLink = (path: string): boolean => {
    return pathname === path
  }
  return (
    <>
      <div className='
      flex
      flex-row
      justify-start
      gap-5
      items-center
      w-full
      md:w-1/4
      xl:w-[15%]
      lg:w-[35%]'>
        <Link className={`${ActiveLink('/about') ? 'font-bold text-[#738FA7]' : 'font-medium'} text-xs flex flex-col justify-center items-center`} href='/about'>About <RxDotFilled className={`${ActiveLink('/about') ? 'opacity-100' : 'opacity-0'}`}/></Link>
        <Link className={`${ActiveLink('/expertise') ? 'font-bold text-[#738FA7]' : 'font-medium'} text-xs flex flex-col justify-center items-center`} href='/expertise'>Expertise <RxDotFilled className={`${ActiveLink('/expertise') ? 'opacity-100' : 'opacity-0'}`}/></Link>
        <Link className={`${ActiveLink('/contact') ? 'font-bold text-[#738FA7]' : 'font-medium'} text-xs flex flex-col justify-center items-center`} href='/contact'>Contact <RxDotFilled className={`${ActiveLink('/contact') ? 'opacity-100' : 'opacity-0'}`}/></Link>
      </div>
    </>
  )
}

export default Links