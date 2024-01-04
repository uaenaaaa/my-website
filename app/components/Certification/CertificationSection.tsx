'use client'
import React from 'react'
import { certLists } from './CertificationsListPrevHome'

const CertificationSection = () => {
  return(
    <>
      <div className='
      w-full
      flex
      flex-col
      pb-3
      items-center'>
        <h1 className='
        text-left
        self-start
        font-bold
        text-xl
        lg:text-4xl'>Certifications & Badges</h1>
      </div>
      <div className='
      w-3/4
      grid
      grid-rows-3
      grid-cols-2
      md:grid-cols-3
      lg:grid-cols-3
      xl:grid-cols-3
      gap-5
      sm:gap-3
      justify-around
      '>
      {
        certLists.map((cert, index) => {
          return(
            <div key={index} className='
            flex
            flex-row
            justify-between
            p-2
            sm:p-1
            md:p-2
            lg:p-3
            xl:p-4
            items-center
            gap-5
            dark:bg-white
            bg-black
            rounded-md
            '>
                <div className='w-3/4
                flex
                justify-start
                items-start
                flex-col'>
                  <h1 className='
                  font-bold
                  dark:text-black
                  text-white
                  text-sm
                  md:text-md
                  lg:text-base
                  xl:text-lg
                  text-left
                  text-ellipsis'>{cert.title}</h1>
                  <p className='
                  dark:text-black
                  text-xs
                  text-white
                  text-left
                  '>{cert.description}</p>
                </div>

              <svg xlinkTitle='Go to certification link.' onClick={() => {window.open(cert.link, '_blank')}} className='w-[10%] cursor-pointer' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='dark:stroke-black stroke-white' d="M20 4L12 12M20 4V8.5M20 4H15.5M19 12.5V16.8C19 17.9201 19 18.4802 18.782 18.908C18.5903 19.2843 18.2843 19.5903 17.908 19.782C17.4802 20 16.9201 20 15.8 20H7.2C6.0799 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4 18.4802 4 17.9201 4 16.8V8.2C4 7.0799 4 6.51984 4.21799 6.09202C4.40973 5.71569 4.71569 5.40973 5.09202 5.21799C5.51984 5 6.07989 5 7.2 5H11.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )
        })
      }
      </div>
    </>
  )
}

export default CertificationSection
