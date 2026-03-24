import React from 'react';

const HeroImage = () => {
  return (
    <section className="w-full bg-neutral-950 py-20 px-4 md:px-8" id="hero-image">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-100 mb-6 leading-tight">
              Learn, Sell, & <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">Earn</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed">
              We instantly connect you to opportunities where knowledge becomes income. Build your personal brand while monetizing expertise.
            </p>
            <button className="bg-neutral-100 text-neutral-900 font-bold py-3 px-8 rounded-lg w-fit hover:bg-neutral-200 transition-colors">
              Get Started
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center order-1 lg:order-2">
            <div className="relative w-full max-w-md h-96 md:h-[500px] lg:h-[600px] bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl flex items-center justify-center">
              {/* Placeholder for image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <svg 
                  className="w-24 h-24 md:w-32 md:h-32 text-neutral-600 mb-4"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                  />
                </svg>
                <p className="text-neutral-400 text-sm md:text-base">Hero Image</p>
                <p className="text-neutral-500 text-xs mt-2">Upload your image here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
