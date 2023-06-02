import React from 'react'
import { 
  MySQL,
  NextJS,
  ReactJS,
  Postgresql,
  Firebase,
  Supabase,
  Github,
  TailWindCSS,
  Figma } from '../SVGModules/SVGModule'

const TechStack = () => {
  const TechStackName: string[] = ['NextJs', 'ReactJS', 'MySQL', 'Postgresql', 'Firebase', 'Supabase', 'GitHub', 'Tailwind CSS', 'Figma']
  const TechStackSVG = [
    {
      id: 1,
      component: <NextJS />
    },
    {
      id: 2,
      component: <ReactJS />
    },
    {
      id: 3,
      component: <MySQL />
    },
    {
      id: 4,
      component: <Postgresql />
    },
    {
      id: 5,
      component: <Firebase />
    },
    {
      id: 6,
      component: <Supabase />
    },
    {
      id: 7,
      component: <Github />
    },
    {
      id: 8,
      component: <TailWindCSS />
    },
    {
      id: 9,
      component: <Figma />
    }
  ]
  return (
    <>
      <div className='w-full flex gap-y-3 items-center flex-start flex-col justify-center'>
        <h1 className='font-semibold'>My TechStack</h1>
        <div className='grid w-full lg:w-full p-4 gap-7 lg:grid-cols-4 grid-cols-3'>
          {TechStackSVG.map((svg, index) => (
            <div className='grid bg-[#A47551] p-3 rounded-xl justify-center items-center' key={svg.id}>
              {svg.component}
              <p className='text-xs justify-self-end self-end'>{TechStackName[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default TechStack