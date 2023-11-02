import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import CTA from "../components/CTA";
import Collab from "../components/Video";
import Careers from "../components/Careers";
import Alumni from "../components/Alumni";
import Solution from "../components/Solution";
import Testimonials from "../components/Testimonials";
import ForBusiness from "../components/Interview";
import Faqs from "../components/Faqs";
import CallToAction from "../components/CallToAction";
import Partners from "../components/Partners";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import "../App.css";

function Home() {
  return (
    <div className="mb-[0px] flex flex-col overflow-hidden">
      {/*  Site header */}
      <main className="p-8 md:mx[100px] grow">
        <Navbar />
        {/* <Banner/> */}

        {/*  Page content */}
        <Hero />
        {/* <CTA /> */}
        {/* <Benefits /> */}
        {/* <Collab /> */}
        {/* <Partners /> */}
        {/* <Careers /> */}
        {/* <Alumni/> */}
        {/* <Solution/> */}
        {/* <ForBusiness /> */}
        {/* <Testimonials /> */}
        {/* <Faqs /> */}
        {/* <CallToAction /> */}
        {/* <Newsletter /> */}
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
