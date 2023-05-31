import Link from 'next/link'
import React from 'react'
import TechStack from '../components/TechStack/TechStack'

const About = () => {
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
        text-xl'>About</h1>
        <div className='flex flex-col w-full gap-5'>
          <div className='gap-5 flex flex-col'>
            <h1 className='font-medium text-sm'>Hi, I&apos;m Froilan Aquino, currently living in Bagong Silang, Caloocan City, Meytro Manila, Philippines! I&apos;m a full-stack developer/engineer, and I develop and leverage JavaScript, Python, and MySQL.</h1>
            <div>
              <h1 className='font-semibold'>Contact</h1>
              <p className='text-sm'>You have any inquiries? Feel free to <Link className='underline text-gray-400 font-bold' href='mailto:froilanaquino1@gmail.com' target='_blank'>contact</Link> me at:</p>
              <p className='text-sm'>froilanaquino1@gmail.com</p>
            </div>
          </div>
          <div className='w-full'>
            <div className='flex flex-col w-full gap-5'>
              <div className='w-full'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus omnis ratione nulla cum sit assumenda aspernatur autem? Officia a fugit, necessitatibus autem veritatis voluptatibus non ipsum modi officiis quidem cumque minus nam at vitae sequi in distinctio! Laboriosam voluptates obcaecati voluptatibus unde itaque nemo eligendi magnam modi quisquam nostrum. Consectetur quas maxime voluptate asperiores iure, aliquam sint consequuntur saepe repudiandae reiciendis, pariatur consequatur voluptatem cum dolore explicabo? In a saepe quisquam facere eveniet, quae reiciendis quaerat distinctio cupiditate earum praesentium, harum, impedit nesciunt nemo? Dolores facilis qui cupiditate veritatis ea.
              </div>
              <TechStack />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default About