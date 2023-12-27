import React from 'react'

export const metadata = {
  title: 'Contacts - Froilan | Software Engineer'
}

const Contacts = () => {
  
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
        self-start
        text-3xl
        md:text-[50px]
        lg:text-[70px]
        xl:text-[90px]'>Contact</h1>
        
        <div className='
        drop-shadow-2xl
        border-2
        bg-white
        p-5
        md:p-7
        lg:p-10
        rounded-2xl
        gap-5
        flex
        flex-col
        w-full'>
          <h3 className='
          font-bold
          text-xl
          md:text-3xl
          lg:text-4xl
          xl:text-5xl'>Let&apos;s Get in touch!</h3>
          <p>Feel at liberty to reach out to me via <a className='font-bold' href='mailto:froilanaquino1@gmail.com'>email</a>.</p>
          <p>froilanaquino1@gmail.com</p>
        </div>
        
      </div>
    </>
  )
}

export default Contacts