import React from 'react'
// import Button from './components/Button'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import CTA from './components/CTA'
import Collab from './components/Collab'
import Careers from './components/Careers'
// import Advisor from './components/Advisor'
import Impact from './components/Impact'
import Testimonials from './components/Testimonials'
import ForBusiness from './components/ForBusiness'
import Faqs from './components/Faqs'
import CallToAction from './components/CallToAction'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import './App.css'


function App() {
  return (
    <div className='background-pattern mb-[0px]'>
      <div className='p-6 md:mx-[100px]'>
        <Navbar />
        <Hero />
        <CTA />
        <Benefits />
        <Careers />
        <Collab />
        <Impact />
        <Testimonials />
        <ForBusiness />
        <Faqs />
        <CallToAction />
        <Newsletter />
        <Footer />
      </div>
    </div>
  )
}

export default App
