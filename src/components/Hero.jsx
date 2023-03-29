import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-[66px] mx-[48px]'>
        <button className='bg-specialGreen rounded-full text-primary font-light text-xs px-[17px] py-[4px]'>
            Get account of $59
        </button>
        <h1 className='text-2xl font-semibold text-primary text-center leading-10'>
            Manage the team everyone wants to be on
        </h1>
        <p className='text-secondary text-center leading-6 my-4'>
            Simple platform that lets you master what great managers do best, as develop trust, collaborate, and drive team performance.
        </p>
        <input className='rounded-md border-specialBlue border py-[18px] placeholder:text-center text-center text-secondary w-full' type="email" placeholder='name@yourcompany.com'/>
        <button className='bg-specialPurple hover:bg-white hover:border hover:border-secondary hover:text-secondary text-white rounded-md py-[18px] my-2 text-center w-full'>Try it free</button>
    </div>
  )
}

export default Hero