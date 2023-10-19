import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center my-20 font-poppins lg:my-[100px]'>
        <div className='flex flex-col text-center gap-[30px] md:w-[700px]'>
            <h1 className='font-bold text-2xl text-neutral-100 md:text-5xl'>Kickstart Your Lucrative
Tech Career</h1>
            <p className='font-semibold text-neutral-100 mb-[40px]'>Learn, build and launch an impactful product with your own product designer, product manager, software engineer and cloud engineer.</p>
        </div>

<div className="flex justify-left mb-8 md:mb-[10px]">
          <a href="https://nas.io/skillembassy">
            <button
              type="button"
              className="font-bold bg-neutral-50 text-sm text-neutral-950 mx-[5px] py-[10px] px-[30px] rounded-md md:text-base hover:drop-shadow-xl"
            >
              Start Today
            </button>
          </a>

          <a href="https://calendly.com/skillembassy-advisor">
            <button
              type="button"
              className="font-bold text-sm text-neutral-50 border-[1px] border-gray-200 rounded-md underline-offset-auto py-[10px] px-[20px] md:text-base hover:drop-shadow-xl"
            >
              How it works?
            </button>
          </a>
        </div>
      </div>
  )
}

export default Hero