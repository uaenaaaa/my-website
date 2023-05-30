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

        <div>
          <div>
            <h1>Contact</h1>
            <p className='flex items-center justify-center'>You have any inquiries? Feel free to <Link className='underline font-bold' href='mailto:froilanaquino1@gmail.com' target='_blank'></Link> me</p>
          </div>
          <div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus omnis ratione nulla cum sit assumenda aspernatur autem? Officia a fugit, necessitatibus autem veritatis voluptatibus non ipsum modi officiis quidem cumque minus nam at vitae sequi in distinctio! Laboriosam voluptates obcaecati voluptatibus unde itaque nemo eligendi magnam modi quisquam nostrum. Consectetur quas maxime voluptate asperiores iure, aliquam sint consequuntur saepe repudiandae reiciendis, pariatur consequatur voluptatem cum dolore explicabo? In a saepe quisquam facere eveniet, quae reiciendis quaerat distinctio cupiditate earum praesentium, harum, impedit nesciunt nemo? Dolores facilis qui cupiditate veritatis ea.
            </div>

            <div>
              <h1>My TechStack</h1>

              <div>
                <div className='grid place-content-center gap-2'>
                  <SiNextdotjs />
                  <p>NextJS</p>
                </div>

                <div>
                  <FaReact />
                  <p>ReactJS</p>
                </div>

                <div>
                  <SiMysql />
                  <p>MySQL</p>
                </div>

                <div>
                  <SiPostgresql />
                  <p>PostgreSQL</p>
                </div>

                <div>
                  <SiFirebase />
                  <p>Firebase</p>
                </div>

                <div>
                  <SiSupabase />
                  <p>Supabase</p>
                </div>

                <div>
                  <AiFillGithub />
                  <p>Github</p>
                </div>

                <div>
                  <SiTailwindcss />
                  <p>Tailwind CSs</p>
                </div>

                <div>
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