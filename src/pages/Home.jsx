import React from "react";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import CTA from "../components/CTA";
import Collab from "../components/Video";
import Careers from "../components/Careers";
import Admission from "../components/Alumni";
import Solution from "../components/Solution";
import Testimonials from "../components/Testimonials";
import ForBusiness from "../components/Interview";
import Faqs from "../components/Faqs";
import CallToAction from "../components/CallToAction";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import "../App.css";

function Home() {
  return (
    <div className="mb-[0px] flex flex-col overflow-hidden">
      {/*  Site header */}
      <main className="p-8 md:mx[100px] grow">
        <Navbar />

        {/*  Page content */}
<Banner />
        <Hero />
        <CTA />
        <Benefits />
        <Collab />
        <Partners />
        <Careers />
        <Admission/>
        <Solution/>
        <ForBusiness />
        <Testimonials />
        <Faqs />
        <CallToAction />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
