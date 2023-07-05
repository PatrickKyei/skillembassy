import React from 'react'
// import Button from './components/Button'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ExampleComponent from './components/Benefits'
import Role from './components/Role'
import Collab from './components/Collab'
import Careers from './components/Careers'

function App() {
  return (
    <div className='bg-wblue mb-[1000px]'>
      <div className='p-6 md:mx-[150px]'>
        <Navbar />
        <Hero />
        <Role />
        <ExampleComponent />
        <Careers />
        <Collab />
      </div>
    </div>
  )
}

export default App
