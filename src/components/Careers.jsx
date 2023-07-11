import React from 'react'
import Figma from '../assets/uxui.png'
import Facebook from '../assets/datascience.png'
import Vercel from '../assets/devops.png'
import Cardhero from './Cardhero'

const Careers = () => {
    return (
      <div className='flex flex-col items-center my-20 font-poppins lg:my-[150px]'>
         <div className='flex flex-col gap-6'>
          <h1 className='text-3xl font-semibold mb-6'>Career Paths</h1>
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

export default Careers