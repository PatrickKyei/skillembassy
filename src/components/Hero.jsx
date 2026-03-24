import React, { useState } from 'react';

const Hero = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
        { id: 'ai', label: 'Ai', icon: '📚' },
    { id: 'sales', label: 'Sales', icon: '💻' },
    { id: 'digital marketing', label: 'Digital Marketing', icon: '🌐' },
    { id: 'branding', label: 'Branding', icon: '🗄️' },
    { id: 'networking', label: 'Networking', icon: '🔗' },
    { id: 'writing', label: 'Writing', icon: '🔐' },
    { id: 'mini', label: 'Mini Importation', icon: '⚙️' },
    { id: 'speaking', label: 'Public Speaking', icon: '🤖' },
    { id: 'design', label: 'Graphic Design', icon: '⚡' },
    { id: 'affiliate marketing', label: 'Affiliate Marketing', icon: '💾' },
    { id: 'monetization', label: 'Monetization', icon: '📱' },
  ];

  const stats = [
    { number: '100+', label: 'Contents' },
    { number: '∞', label: 'Templates' },
    { number: 'Free', label: 'Cost' },
    { number: 'Zero', label: 'Ads' },
  ];

  const scrollToBenefits = () => {
    const benefitsSection = document.getElementById('benefits-section');
    if (benefitsSection) {
      benefitsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiscover = () => {
    console.log(`Discovering articles in category: ${activeCategory}`);
    scrollToBenefits();
  };

  return (
    <div className="flex flex-col items-center py-16 md:py-32 px-4 font-poppins">
      {/* Curated Badge */}
      <div className="mb-8">
        <a
          href="https://paystack.shop/pay/skillembassy-membership"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 text-xs font-medium px-3 py-1.5 rounded-full border border-emerald-500/20 hover:text-white transition-colors duration-200"
        >
          <span className="relative w-2 h-2">
            <span className="absolute inset-0 block rounded-full bg-emerald-400 opacity-70 animate-ping"></span>
            <span className="relative block w-2 h-2 rounded-full bg-emerald-400"></span>
          </span>
          200+ Community Members
        </a>
      </div>

      {/* Main Heading */}
      <div className="text-center max-w-4xl mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-neutral-100 mb-4">
          Work Less. Earn More.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Enjoy Life.
        </h2>
      </div>

      {/* Subtitle */}
      <p className="text-center text-neutral-300 text-lg md:text-xl max-w-2xl mb-16">
        Earn While You Learn. Earn With Your Mind.
      </p>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-5xl">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
              activeCategory === category.id
                ? 'bg-neutral-100 text-neutral-900'
                : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
            }`}>
            {category.label}
          </button>
        ))}
      </div>

      

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <p className="text-3xl md:text-4xl font-bold text-neutral-100 mb-1">
              {stat.number}
            </p>
            <p className="text-neutral-400 text-sm md:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* How it works hint */}
      <div className="mt-16 pt-16 border-t border-neutral-700 text-center">
        <p className="text-neutral-400 text-sm mb-4">How it works</p>
        <div className="flex justify-center gap-2">
          <svg
            className="w-5 h-5 text-neutral-500 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

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
