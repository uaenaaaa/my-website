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
            rounded-lg
            w-full
            p-5'>
              <h1 className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cupiditate obcaecati natus. Eligendi labore est culpa, maiores minus accusantium sunt. Officia laborum ipsa laudantium vel quasi quas deserunt unde laboriosam ad recusandae praesentium nam culpa mollitia molestias iste, quod placeat optio inventore? Id laboriosam reiciendis officiis tempore? Neque, aliquid? Cumque.</h1>
            </div>
            <Ping />
          </div>
        </div>
      </div>
    </>
  )
}

export default Expertise