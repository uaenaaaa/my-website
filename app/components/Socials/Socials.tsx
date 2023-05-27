import Link from 'next/link'
import React from 'react'
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineLinkedin
} from 'react-icons/ai'
import Toggler from '../Toggler/Toggler'

const Socials = ({}) => {
  return (
    <>
      <div className='flex flex-row w-1/4 justify-between items-center'>
        <Link target='_blank' href='https://github.com/flcmm'><AiFillGithub/></Link>
        <Link target='_blank' href='https://instagram.com/frln_cm'><AiFillInstagram /></Link>
        <Link target='_blank' href='www.linkedin.com/in/froilan-aquino-8249a9192'><AiOutlineLinkedin /></Link>
        <Toggler />
      </div>
    </>
  )
}

export default Socials