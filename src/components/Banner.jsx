import React, { useState } from "react";
import { MdClose } from "react-icons/md";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <div className="container mt-8 mx-2">
      <section className="mb-12">
        <div className="items-center justify-between py-4 px-8 text-center text-neutral-100 md:flex md:text-left">
          <div className="mb-4 flex flex-wrap items-center justify-center md:mb-0 md:justify-start">
           
            <strong className="mr-1">Application for the next cohort is opened</strong>
          </div>
          <div className="flex items-center justify-center">
            <a className="mr-4 inline-block px-6 font-medium uppercase text-neutral-100 transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.05),0_4px_18px_0)]"
              href="#!" role="button" data-te-ripple-init data-te-ripple-color="light">Apply Here</a>
            <button className="bg-neutral-600 p-1 rounded-full" onClick={handleDismiss}>
              <MdClose className="text-white" />
            </button>
          </div>
        </div>
      </section>
    </div>
  ) : null;
};

export default Banner;
