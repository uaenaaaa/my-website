import React from 'react'
import Ping from '../components/Ping'

export const metadata = {
  title: 'Expertise - Froilan | Software Engineer',
  description: 'Personal Website of Froilan',
}

const Expertise = ({}) => {
  return (
    <>
      <div className='
      w-[95%]
      md:w-[90%]
      lg:w-[80%]
      xl:w-[70%]
      flex
      flex-col
      gap-10
      justify-start
      items-start'>
        <h1 className='
        font-bold
        text-3xl
        pb-1
        text-left
        lg:font-extrabold
        md:text-[50px]
        lg:text-[70px]
        xl:text-[90px]'>Expertise</h1>
        <div className='
        w-full
        flex
        flex-col
        '>
          <div className='
          w-full
          relative'>
            <div className='
            bg-white
            drop-shadow-2xl
            rounded-lg
            w-full
            p-5'>
              <h1 className='text-black'>I am an expert in the field of information and communication technology (ICT), and I love it. I earned my NC-II license in 2021 while I was a senior in high school, demonstrating my proficiency in this area. I developed my skills in a variety of concentrations while focusing on my specialty strand in ICT. In order to provide outstanding visual content, I started dabbling in the field of visual graphic design in grade 11. I concentrated on computer hardware and networking in grade 12, learning useful skills for configuring and managing computer systems. I maintained a stellar academic record during the course of the two years, earning an average grade of 92. With such an amazing history, I am sure that I will be able to contribute my creativity, technical expertise, and commitment to any ICT/IT project I embark on.</h1>
            </div>
            <Ping />
          </div>
        </div>
      </div>
    </>
  )
}

export default Expertise