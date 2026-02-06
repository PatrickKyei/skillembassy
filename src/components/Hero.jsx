import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById('benefits-section');
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-center my-20 font-poppins lg:my-[130px]">
      <div className="flex flex-col text-center gap-[5px] md:w-[800px]">
        <div>
          <a
           href='https://nas.io/skillembassy' // href="https://t.me/+ZsN7Vniy77UwMTY0"
            target="_blank"
            className="bg-neutral-800 text-neutral-400 text-xs font-medium inline-flex items-center px-2.5 py-0.4 rounded-md mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-7 text-neutral-400">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2a5 5 0 0 0-5 5 5 5 0 0 0 5 5 5 5 0 0 0 5-5 5 5 0 0 0-5-5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 15v2a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-2"
              />
            </svg>
            2000+ Community Members
          </a>
        </div>
        <h1 className="font-semibold text-3xl text-neutral-100 md:text-5xl my-8">
          Build once. Earn More. Enjoy Life.
        </h1>
        <p className="text-lg text-neutral-100 mb-[40px]">
          Learn, build and launch an impactful product. Earn with your Mind not with your Time.
        </p>
      </div>

      <div className="flex justify-left mb-8 md:mb-[10px]">
        <Link to="#">
          <button
            type="button"
            className="font-bold bg-neutral-50 text-sm text-neutral-950 mx-[5px] py-[10px] px-[30px] rounded-sm md:text-base hover:drop-shadow-xl">
            Programmes
          </button>
        </Link>
        <button
          type="button"
          className="font-bold text-sm text-neutral-50 border-[1px] border-neutral-500 rounded-sm py-[10px] px-[20px] md:text-base"
          onClick={scrollToBenefits}>
          How it works?
        </button>
      </div>
    </div>
  );
};

// Hero 2

export default Hero;

// import React, { useState, useEffect } from "react";
// import { Link, Route, Routes } from "react-router-dom";
// import ClassesDesktop from "../assets/classes-desktop.png";
// import ClassesMobile from "../assets/classes-mobile.png";

// const Hero = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkWindowSize = () => {
//       setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
//     };

//     // Add a listener to check window size on resize
//     window.addEventListener("resize", checkWindowSize);

//     // Initial check
//     checkWindowSize();

//     // Clean up the listener on unmount
//     return () => {
//       window.removeEventListener("resize", checkWindowSize);
//     };
//   }, []);

//   return (
//     <div className="flex flex-col lg:flex-row items-center my-20 font-poppins lg:my-[100px]">
//       {/* Left Column (Content) */}
//       <div className="w-full lg:w-[40%] flex flex-col text-left gap-[30px] md:w-[700px]">
//         <h1 className="font-bold text-neutral-50 text-4xl md:text-6xl">
//           Kickstart Your Lucrative Tech Career
//         </h1>
//         <p className="text-lg font-normal text-neutral-100 dark:text-gray-400 mb-6">
//           Gain REAL - WORLD EXPERIENCE!! - No boring case studies or theory
//         </p>

//         {/* <div className="flex justify-left mb-8 md:mb-[10px]">
//           <a href="https://nas.io/skillembassy">
//             <button
//               type="button"
//               className="font-bold bg-neutral-50 text-sm text-neutral-950 mx-[5px] py-[10px] px-[30px] rounded-sm md:text-base hover:drop-shadow-xl"
//             >
//               Start Today
//             </button>
//           </a>

//           <a href="https://calendly.com/skillembassy-advisor">
//             <button
//               type="button"
//               className="font-bold text-sm text-neutral-50 border-[1px] border-gray-200 rounded-sm underline-offset-auto py-[10px] px-[20px] md:text-base hover:drop-shadow-xl"
//             >
//               How it works?
//             </button>
//           </a>
//   </div> */}
//         <div className="flex justify-left mb-8 md:mb-[10px]">
//           <Link to="application">
//             <button
//               type="button"
//               className="font-bold bg-neutral-50 text-sm text-neutral-950 mx-[5px] py-[10px] px-[30px] rounded-sm md:text-base hover:drop-shadow-xl">
//               Start Today
//             </button>
//           </Link>

//           <a href="https://calendly.com/skillembassy-advisor">
//             <button
//               type="button"
//               className="font-bold text-sm text-neutral-50 border-[1px] border-gray-200 rounded-sm underline-offset-auto py-[10px] px-[20px] md:text-base hover:drop-shadow-xl">
//               How it works?
//             </button>
//           </a>
//         </div>
//       </div>

//       {/* Right Column (Image) */}
//       <div className="w-full lg:w-[70%]">
//         <img
//           src={isMobile ? ClassesMobile : ClassesDesktop}
//           alt="Your Image"
//           className="w-full h-auto lg:w-auto lg:h-auto lg:block mx-auto" // Adjust image size for different screen sizes
//         />
//       </div>
//     </div>
//   );
// };

// export default Hero;
