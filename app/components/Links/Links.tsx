'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Links = ({}) => {
  const pathname = usePathname()
  const ActiveLink = (path: string): boolean => {
    return pathname === path
  }
  return (
    <>
      <div className='flex flex-row justify-between items-center w-full md:w-1/4 xl:w-[15%] lg:w-[35%]'>
        <Link className={`${ActiveLink('/about') ? 'font-semibold' : 'font-regular'} text-xs`} href='/about'>About</Link>
        <Link className={`${ActiveLink('/expertise') ? 'font-semibold' : 'font-regular'} text-xs`} href='/expertise'>Expertise</Link>
        <Link className={`${ActiveLink('/contact') ? 'font-semibold' : 'font-regular'} text-xs`} href='/contact'>Contact</Link>
      </div>
    </>
  )
}

export default Links