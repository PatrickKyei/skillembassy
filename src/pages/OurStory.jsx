import React from "react";

import Navbar from "../components/Navbar";

import Jumbo from "../components/Jumbo";
import Solution from "../components/Solution";
import Collab from "../components/Collab";
import Identity from "../components/Identity";

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
        <Jumbo/>
        <Solution />
        <Collab />
<Identity />
       
        <CallToAction />
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default OurStory;
