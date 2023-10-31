import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Home from "./pages/Home";
import Business from "./pages/Business";
import Inclusion from "./pages/Inclusion";
import OurStory from "./pages/OurStory";
import Application from "./pages/Application";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      // disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <div className="container-main">
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="careers" element={<Courses />} /> */}

          <Route path="business" element={<Business />} />
          <Route path="inclusion" element={<Inclusion />} />
          <Route path="ourstory" element={<OurStory />} />
          <Route path="application" element={<Application />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
