import Link from 'next/link'
import React from 'react'
import TechStack from '../components/TechStack/TechStack'

export const metadata = {
  title: 'About | Froilan | Software Engineer',
  description: 'Personal Website of Froilan',
}

const About = () => {
  return (
    <>
      <div className='
      w-[95%]
      md:w-[90%]
      lg:w-[80%]
      xl:w-[70%]
      flex
      flex-col
      gap-y-10
      justify-start
      items-start'>
        <h1 className='
        font-bold
        text-3xl
        lg:font-extrabold
        md:text-[50px]
        lg:text-[70px]
        xl:text-[90px]'>About</h1>
        <div className='flex flex-col lg:flex-row w-full gap-5'>
          <div className='gap-5 flex lg:w-1/4 flex-col'>
            <h1 className='font-semibold text-sm'>Hi, I&apos;m Froilan Aquino, currently living in Bagong Silang, Caloocan City, Metro Manila, Philippines! I&apos;m a full-stack developer/engineer, I develop and leverage JavaScript, Python, and MySQL, and i am a technology enthusiast.</h1>
            <div>
              <h1 className='font-bold text-2xl'>Contact</h1>
              <p className='text-sm'>You have any inquiries? Feel free to <Link className='underline text-gray-400 font-bold' href='mailto:froilanaquino1@gmail.com' target='_blank'>contact</Link> me at:</p>
              <p className='text-sm'>froilanaquino1@gmail.com</p>
            </div>
          </div>
          <div className='w-full'>
            <div className='flex flex-col w-full gap-5'>
              <div className='
                w-full
                flex
                flex-col
                gap-3'>
                <h1>
                  I develop applications using Javascript frameworks and libraries like React and also use the React&apos;s Framework Next.js, like this website. I used Next.js to create this website. I also used Supabase as my database and Firebase for my authentication. I&apos;m currently getting my bachelor&apos;s degree in Information Technology and will finish in 2025. To sum up, my learning modalities are not limited to school classes; I also attend online sessions at the Google Developer Students Club to learn something new and seek opportunities for my career.
                </h1>
                <h1>
                In my self-taught programmer session, I used platforms like YouTube and freecodecamp to and at the same time learning UI/UX design since I&apos;m also interested in designing. I also used Udemy, EdX, Coursera, and a like to learn something new and to add to my knowledge of programming. I also used platforms like Medium and Dev.to to read articles about programming and learn something new. I also used platforms like Stackoverflow and GitHub to read questions and learn something new. Right now, I&apos;m currently planning on getting certified in the Google UI/UX certification program through Coursera.
                </h1>
                <h1>
                  When I&apos;m not coding, I&apos; reading English books to hone my proficiency and expand my vocabulary. I also watch emerging technology-related videos to keep myself up-to-date with the latest technology trends.
                </h1>
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