import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <div className="fixed bottom-2 left-0 right-0 z-50">
      <div className="container bg-neutral-950 opacity-95 rounded-lg max-w-[1170px] mx-auto flex justify-center items-center">
        <section className="mb-0">
          <div className="py-2 text-center text-neutral-100">
            
            <div className="flex items-center justify-center">
              <div className="font-bold text-sm text-neutral-100 mx-[5px] py-[10px] px-[30px] rounded-sm">
                We are launching to the public soon
              </div>
              <button className="bg-neutral-600 p-1 rounded-full" onClick={handleDismiss}>
                <MdClose className="text-white" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  ) : null;
};

export default Banner;