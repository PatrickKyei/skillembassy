import React from "react";

import Navbar from "../components/Navbar";

import IncludeJumbo from "../components/CommunityHero";
import IncludeMission from "../components/CommMission";
import Volunteer from "../components/Volunteer";
import InclusionStory from "../components/InclusionStory";

import Timeline from "../components/Timeline";
import Footer from "../components/Footer";

function Inclusion() {
  return (
    <div className="background-pattern mb-[0px] flex flex-col overflow-hidden">
      {/*  Site header */}
      <main className="p-8 md:mx[100px] grow">
        <Navbar />

        {/*  Page content */}

        {/*  Page sections */}
        <IncludeJumbo />
        <IncludeMission />
        <InclusionStory />
        <Volunteer />
        <Timeline />

        {/* <CallToAction /> */}
        {/* <Newsletter /> */}
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Inclusion;
