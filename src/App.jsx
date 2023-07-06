import React from 'react'
// import Button from './components/Button'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ExampleComponent from './components/Benefits'
import Role from './components/Role'
import Collab from './components/Collab'
import Careers from './components/Careers'
import Advisor from './components/Advisor'
import Impact from './components/Impact'
import Testimonials from './components/Testimonials'
import ForBusiness from './components/ForBusiness'
import Faqs from './components/Faqs'
import CallToAction from './components/CallToAction'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'


function App() {
  return (
    <div className='bg-wblue mb-[0px]'>
      <div className='p-6 md:mx-[100px]'>
        <Navbar />
        <Hero />
        <Role />
        <ExampleComponent />
        <Careers />
        <Collab />
        <Advisor />
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
