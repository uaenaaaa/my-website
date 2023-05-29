import Link from 'next/link'
import React from 'react'
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin
} from 'react-icons/ai'
import Toggler from '../Toggler/Toggler'

const Socials = ({}) => {
  return (
    <>
      <div className='flex flex-row md:w-1/4 lg:w-1/4 xl:w-[15%] w-full justify-between items-center'>
        <Link target='_blank' href='https://github.com/flcmm'><AiFillGithub size={25} /></Link>
        <Link target='_blank' href='https://instagram.com/frln_cm'><AiFillInstagram size={25} /></Link>
        <Link target='_blank' href='https://linkedin.com/in/froilan-aquino-8249a9192'><AiFillLinkedin size={25} /></Link>
        <Toggler />
      </div>
    </>
  )
}

export default Socials