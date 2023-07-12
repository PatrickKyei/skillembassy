// import React from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import Benefits from './components/Benefits'
// import CTA from './components/CTA'
// import Collab from './components/Collab'
// import Careers from './components/Careers'
// import Mentors from './components/Mentors'
// import Testimonials from './components/Testimonials'
// import ForBusiness from './components/ForBusiness'
// import Faqs from './components/Faqs'
// import CallToAction from './components/CallToAction'
// import Newsletter from './components/Newsletter'
// import Footer from './components/Footer'
// import './App.css'

// function App() {
//   return (
//     <div className='background-pattern mb-[0px]'>
//       <div className='p-6 md:mx-[100px]'>
//         <Navbar />
//         <Hero />
//         <CTA />
//         <Benefits />
//         <Careers />
//         <Collab />
//         <Mentors />
//         <Testimonials />
//         <ForBusiness />
//         <Faqs />
//         <CallToAction />
//         <Newsletter />
//         <Footer />
//       </div>
//     </div>
//   )
// }

// export default App

import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "aos/dist/aos.css";

import AOS from "aos";

import Home from "./pages/Home";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
