import React from "react";

import Navbar from "../components/Navbar";
import CommMission from "../components/CommMission";
import CommIntro from "../components/CommIntro";
import InclusionStory from "../components/InclusionStory";
// import CollabBusiness from "../components/CollabBusiness";
// import Volunteer from "../components/Volunteer";
import CommWelcome from "../components/CommWelcome";
// import Donate from "../components/Donate";
import Values from "../components/Values";
import Conduct from "../components/Conduct";
import Footer from "../components/Footer";

import "../App.css";

function Community() {
  return (
    <div className="mb-[0px] flex flex-col overflow-hidden">
      {/*  Site header */}
      <main className="p-8 md:mx[100px] grow">
        <Navbar />
        <CommMission />
        <CommIntro/>
        {/* <Volunteer/> */}
        {/* <CollabBusiness /> */}
        <CommWelcome />
        {/* <Donate/> */}
        <InclusionStory/>
        <Values />
        <Conduct />

        {/*  Page content */}
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Community;
