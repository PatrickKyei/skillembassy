import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Solution from "../components/Solution";
import Who from "../components/Who";
import Results from "../components/Results";
import Inside from "../components/Inside";
import Testimonials from "../components/Testimonials";
import Funded from "../components/Funded";
import Benefits from '../components/Benefits';
import Trap from '../components/Trap';
import Membership from '../components/Membership';
import Featured from "../components/Featured";
import Pricing from "../components/Pricing";
import Offer from "../components/Offer";
import FAQ from "../components/FAQ";
import Guarantee from "../components/Guarantee";
import Footer from "../components/Footer";
import FinalOffer from "../components/FinalOffer";
import "../App.css";

function Home() {
  return (
    <div id="creator-central" className="min-h-screen bg-black text-white">
      <main className="mx-auto max-w-6xl px-4 py-0">
        <Banner />
        <Navbar />
        <Hero />
        <Solution />
        <Who />
        <Featured />
        <Results />
        <Inside />
        <Testimonials />
        <Funded />
        <Trap />
        <Benefits />
        <Membership />
        <Pricing />
        <Offer/>
        <FAQ />
        <Guarantee />
        <FinalOffer />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
