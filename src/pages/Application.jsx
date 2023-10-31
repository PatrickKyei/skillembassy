import React from "react";

import Navbar from "../components/Navbar";
import Form from "../components/Form";

import Footer from "../components/Footer";

import "../App.css";

function Application() {
  return (
    <div className="mb-[0px] flex flex-col overflow-hidden">
      {/*  Site header */}
      <main className="p-8 md:mx[100px] grow">
        <Navbar />

        <Form />

        {/*  Page content */}

        
        
    
  
        
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Application;
