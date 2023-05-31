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
  const TechStackSVG: JSX.Element[] = [<NextJS />, <ReactJS />, <MySQL />, <Postgresql />, <Firebase />, <Supabase />, <Github />, <TailWindCSS />, <Figma />]
  return (
    <>
      <div className='w-full flex gap-y-3 flex-start flex-col justify-center'>
        <h1 className='font-semibold'>My TechStack</h1>
        <div className='grid w-full p-4 gap-7 grid-cols-3'>
          {TechStackSVG.map((svg, index) => (
            <div className='grid justify-center items-center' key={TechStackName[index]}>
              {svg}
              <p className='text-xs justify-self-end self-end'>{TechStackName[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default TechStack