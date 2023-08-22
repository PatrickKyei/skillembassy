import React from "react";

import Navbar from "../components/Navbar";

import Jumbo from "../components/Jumbo";
import Solution from "../components/Solution";
// import Identity from "../components/Identity";
import CollabBusiness from "../components/CollabBusiness";
import CollabWithUs from "../components/CollabWithUs";
import Donate from "../components/Donate";

import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

// import "./src/App.css";

function Business() {
  return (
    <div className="background-pattern mb-[0px] flex flex-col overflow-hidden">
      {/*  Site header */}
      <main className="p-8 md:mx[100px] grow">
        <Navbar />

        {/*  Page content */}

        {/*  Page sections */}
        <Jumbo />
        <Solution />
        {/* <Identity /> */}
        <CollabBusiness />
<CollabWithUs />
        <Donate />
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Business;
