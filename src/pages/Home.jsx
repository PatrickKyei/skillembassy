import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import CTA from "../components/CTA";
import Collab from "../components/Collab";
import Careers from "../components/Careers";
import Admission from "../components/Admission";
import Mentors from "../components/Mentors";
import Testimonials from "../components/Testimonials";
import ForBusiness from "../components/ForBusiness";
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

        {/*  Page content */}

        <Hero />
        <CTA />
        <Benefits />
        <Collab />
        <Careers />
        <Admission/>
        <Mentors />
        <Testimonials />
        <ForBusiness />
        <Faqs />
        <Partners/>
        <CallToAction />
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
