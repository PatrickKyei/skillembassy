import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

import "../App.css";

function AboutPage() {
  return (
    <div className="mb-[0px] flex flex-col overflow-hidden">
      <main className="p-8 md:mx[100px] grow">
        <Navbar />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
