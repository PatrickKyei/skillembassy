import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center my-20 font-poppins lg:my-[150px]'>
        <div className='flex flex-col text-center gap-[15px] md:w-[600px]'>
            <h1 className='font-bold text-2xl md:text-4xl'>Kickstart Your Lucrative
Tech Career</h1>
            <p className='font-semibold text-slate-500 mb-[40px]'>Learn, build and launch an impactful product with your own product designer, product manager, software engineer and cloud engineer.</p>
        </div>
        <div className='flex justify-center mb-8 md:mb-[100px]'>
          <button
            type='button'
            className='font-bold bg-blue text-sm text-white border-[1px] py-[10px] px-[20px] rounded-full md:text-base hover:drop-shadow-xl'
          >
            Start Today
          </button>
          <button
            type='button'
            className='font-bold text-sm text-blue underline-offset-auto py-[5px] px-[20px] md:text-base hover:drop-shadow-xl'
          >
            How it works ?
          </button>
        </div>
    </div>
  )
}

export default Hero