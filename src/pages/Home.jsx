import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
// import HeroImage from "../components/HeroImage";
// import KeyFeatures from "../components/KeyFeatures";
// import Users from "../components/Users";
// import About from "../components/About";
import Partners from "../components/Partners";
import Benefits from "../components/Benefits";
// import PainPoints from "../components/PainPoints";
// import CTA from "../components/CTA";
import Values from "../components/Values";
import Careers from "../components/Careers";
import Impacts from "../components/Impacts";
import Strategies from "../components/Strategies";
import Solution from "../components/Solution";
import Video from "../components/Video";
import Message from "../components/Message";
// import Testimonials from "../components/Testimonials";
// import Interview from "../components/Interview";
// import Teams from "../components/Teams";
// import Faqs from "../components/Faqs";
import CallToAction from "../components/CallToAction";
// import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import "../App.css";

function Home() {
  return (
    <div className="mb-[0px] flex flex-col">
      {/*  Site header */}
      <main className="pt-0 px-8 md:mx[100px] grow">
        <Banner />
        <Navbar />

        {/*  Page content */}
        <Hero />

        <Solution/>
        {/* <About /> */}
        {/* <HeroImage /> */}
        {/* <KeyFeatures /> */}
        {/* <Users /> */}
        {/* <CTA /> */}
        {/* <PainPoints/> */}
        <Partners />
        <Benefits />
        <Video />
        <Values />
        <Careers />
        <Impacts />
        <Strategies />
        <Message />
        {/* <Testimonials /> */}
        {/* <Interview /> */}
        {/* <Teams /> */}
        {/* <Faqs /> */}
        <CallToAction />
        {/* <Newsletter /> */}
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
