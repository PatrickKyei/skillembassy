import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import Benefits from "../components/Benefits";
// import PainPoints from "../components/PainPoints";
// import CTA from "../components/CTA";
// import Values from "../components/Values";
// import Careers from "../components/Careers";
// import Impacts from "../components/Impacts";
// import Solution from "../components/Solution";
// import Video from "../components/Video";
// import Testimonials from "../components/Testimonials";
// import Interview from "../components/Interview";
// import Teams from "../components/Teams";
// import Faqs from "../components/Faqs";
// import CallToAction from "../components/CallToAction";
// import Partners from "../components/Partners";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import "../App.css";

function Home() {
  return (
    <div className="mb-[0px] flex flex-col overflow-hidden">
      {/*  Site header */}
      <main className="p-8 md:mx[100px] grow">
        <Navbar />
        <Banner/>

        {/*  Page content */}
        <Hero />
        {/* <Partners /> */}
        {/* <CTA /> */}
        {/* <Solution />
        <PainPoints/>
        <Video />
        <Benefits />
        <Careers />
        <Impacts/>
        <Testimonials />
        <Interview />
        <Teams />
        <Faqs />
        <Values/> */}
        {/* <CallToAction /> */}
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
