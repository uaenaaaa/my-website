import Link from 'next/link'
import React from 'react'
import {
  SiFirebase,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiSupabase,
  SiTailwindcss
} from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { CgFigma } from 'react-icons/cg'

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
        <div>
          <h1>Hi, I'm Froilan Aquino, currently living in Bagong Silang, Caloocan City, Manila, Philippines! I'm a full-stack developer/engineer, and I develop and leverage JavaScript, Python, and MySQL.</h1>
        </div>

        <div className='w-full'>
          <div>
            <h1>Contact</h1>
            <p className='flex items-center justify-center'>You have any inquiries? Feel free to <Link className='underline font-bold' href='mailto:froilanaquino1@gmail.com' target='_blank'></Link> me</p>
          </div>
          <div>
            <div className='w-full'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus omnis ratione nulla cum sit assumenda aspernatur autem? Officia a fugit, necessitatibus autem veritatis voluptatibus non ipsum modi officiis quidem cumque minus nam at vitae sequi in distinctio! Laboriosam voluptates obcaecati voluptatibus unde itaque nemo eligendi magnam modi quisquam nostrum. Consectetur quas maxime voluptate asperiores iure, aliquam sint consequuntur saepe repudiandae reiciendis, pariatur consequatur voluptatem cum dolore explicabo? In a saepe quisquam facere eveniet, quae reiciendis quaerat distinctio cupiditate earum praesentium, harum, impedit nesciunt nemo? Dolores facilis qui cupiditate veritatis ea.
            </div>

            <div className='w-full flex gap-y-3 flex-start flex-col justify-center'>
              <h1 className='font-medium'>My TechStack</h1>

              <div className='grid w-full grid-cols-3'>
                <div className='flex flex-col justify-center items-center gap-3'>
                  <SiNextdotjs />
                  <p className='text-md'>NextJS</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-3'>
                  <FaReact />
                  <p>ReactJS</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-3'>
                  <SiMysql />
                  <p>MySQL</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-3'>
                  <SiPostgresql />
                  <p>PostgreSQL</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-3'>
                  <SiFirebase />
                  <p>Firebase</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-3'>
                  <SiSupabase />
                  <p>Supabase</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-3'>
                  <AiFillGithub />
                  <p>Github</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-3'>
                  <SiTailwindcss />
                  <p>Tailwind CSS</p>
                </div>

                <div className='flex flex-col justify-center items-center gap-3'>
                  <CgFigma />
                  <p>Figma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About