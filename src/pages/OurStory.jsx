import React from "react";

import Navbar from "../components/Navbar";

import OurStoryJumbo from "../components/OurStoryJumbo";
import Community from "../components/Community";
import OurstorySolution from "../components/OurstorySolution";
import Timeline from "../components/Timeline";
import Team from "../components/Team";

import CallToAction from "../components/CallToAction";

import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

// import "./src/App.css";

function OurStory() {
  return (
    <div className="background-pattern mb-[0px] flex flex-col overflow-hidden">
      {/*  Site header */}
      <main className="p-8 md:mx[100px] grow">
      <Navbar />

      {/*  Page content */}
     
        {/*  Page sections */}
        <OurStoryJumbo/>
        <Community />
        <OurstorySolution />
        <Team/>
        <Timeline />
{/* <Identity /> */}
       
        <CallToAction />
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default OurStory;
