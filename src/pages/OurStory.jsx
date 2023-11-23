import React from "react";

import Navbar from "../components/Navbar";

import OurStoryJumbo from "../components/OurStoryJumbo";
import Team from "../components/Team";


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
       
       
        <Team/>
        
{/* <Identity /> */}
       
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default OurStory;
