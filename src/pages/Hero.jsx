import React from 'react'
import Figma from '../assets/figma.png'
import Facebook from '../assets/facebook.png'
import Vercel from '../assets/vercel.png'
import Cardhero from '../components/Cardhero'

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
            Explore Careers
          </button>
          <button
            type='button'
            className='font-bold text-sm text-blue underline-offset-auto py-[5px] px-[20px] md:text-base hover:drop-shadow-xl'
          >
            How it works ?
          </button>
        </div>
        <div className='flex flex-col gap-6'>
          <h1 className='font-semibold text-slate-600'>Career Paths</h1>
          <div className='flex flex-col gap-4 lg:flex-row'>
            <Cardhero 
              imgUrl={Figma}
              jobTitle='Product Design'
              platform='Figma'
              text='Learn the step by step method of creating, managing and growing successful products, directly from the leaders who have been there and done that.'
              tag='Figma'
              currency='Prototypes'
            />
            <Cardhero 
              imgUrl={Facebook}
              jobTitle='Data Science'
              platform='Big Query'
              text='Do you want to enjoy the experience of developing and launching a social or human problem from idea to completion with your own designer, product manager, and software developer?'
              tag='Python'
              currency='Data Models'
            />
            <Cardhero 
              imgUrl={Vercel}
              jobTitle='DevOps'
              platform='AWS'
              text='Learn the step by step method of creating, deploying and automating infrastructures directly from the leaders who have been there and done that.'
              tag='CI/CD'
              currency='Automation'
            />
          </div>
        </div>
    </div>
  )
}

export default Hero