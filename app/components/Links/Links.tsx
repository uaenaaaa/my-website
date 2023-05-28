'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Links = ({}) => {
  const pathname = typeof window != 'undefined' ? usePathname() : ''
  const ActiveLink = (path: string): boolean => {
    return pathname === path
  }
  return (
    <>
      <div className='flex flex-row gap-4 item-center w-full md:w-1/4 xl:w-[15%] lg:w-[35%]'>
        <Link className={`${ActiveLink('/about') ? 'font-bold' : 'text-xs'}`} href='/about'>About</Link>
        <Link className={`${ActiveLink('/expertise') ? 'font-bold' : 'text-xs'}`} href='/expertise'>Expertise</Link>
        <Link className={`${ActiveLink('/contact') ? 'font-bold' : 'text-xs'}`} href='/contact'>Contact</Link>
      </div>
    </>
  )
}

export default Links