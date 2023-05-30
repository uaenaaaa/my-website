import React from 'react'
import {
  AiFillDribbbleCircle,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillPhone
} from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import { CgFigma } from 'react-icons/cg'

const Contacts = () => {
  
  return (
    <>
      <div className='
      w-[95%]
      md:w-[90%]
      flex
      flex-col
      gap-y-5
      justify-center
      items-center'>
        <h1 className='
        font-bold
        text-xl'>My Contacts</h1>
        <div className='
        w-full
        flex
        flex-col'>
          <div className='
          justify-start
          flex
          flex-col
          w-full
          gap-y-2'>
            <h1 className='font-semibold'>Phones & Socials</h1>
            <div className='
            flex
            flex-col
            w-full
            justify-start
            gap-y-2'>
              <div className='
              flex
              flex-row
              w-full
              justify-start
              items-center
              gap-x-3'>
                <AiFillPhone />
                <h1>- +639060162213</h1>
              </div>
              <div className='
              flex
              flex-row
              w-full
              justify-start
              items-center
              gap-x-3'>
                <FaDiscord />
                <h1>- @frln_cm #2835</h1>
              </div>
              <div className='
              flex
              flex-row
              w-full
              justify-start
              items-center
              gap-x-3'>
                <AiFillLinkedin />
                <h1>- @froilan-aquino-8249a9192</h1>
              </div>
              <div className='
              flex
              flex-row
              w-full
              justify-start
              items-center
              gap-x-3'>
                <AiFillInstagram />
                <h1>- @frln_cm</h1>
              </div>
            </div>
          </div>
        </div>

        <div className='
          justify-start
          flex
          flex-col
          w-full
          gap-y-2'>
          <h1 className='font-semibold'>My Designs</h1>
          <div className='
            flex
            flex-col
            w-full
            justify-start
            gap-y-2'>
            <div className='
              flex
              flex-row
              w-full
              justify-start
              items-center
              gap-x-3'>
              <CgFigma />
              <h1>Figma - @frln</h1>
            </div>
          </div>
        </div>

        <div className='
          justify-start
          flex
          flex-col
          w-full
          gap-x-3'>
          <h1 className='font-semibold'>My Work&apos;s source code</h1>
          <div className='
          flex
          flex-row
          w-full
          justify-start
          items-center
          gap-x-3'>
            <AiFillGithub />
            <h1>GitHub - @flcmm</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacts