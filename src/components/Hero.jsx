import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center my-20 font-poppins lg:my-[100px]">
      <div className="flex flex-col text-center gap-[30px] md:w-[700px]">
        <h1 className="font-bold text-gray-900 text-6xl md:text-6xl">
          Kickstart Your Lucrative Tech Career 
        </h1>
        <p className="text-lg font-normal text-gray-700 dark:text-gray-400 mb-6">
          Learn, build and launch an impactful product with your own product
          designer, product manager, software engineer and cloud engineer.
        </p>
      </div>
      <div className="flex justify-center mb-8 md:mb-[10px]">
        <a href="https://nas.io/skillembassy">
          <button
            type="button"
            className="font-bold bg-gray-900 text-sm text-white mx-[10px] py-[10px] px-[30px] rounded-md md:text-base hover:drop-shadow-xl">
            Start Today
          </button>
        </a>

        <button
          type="button"
          className="font-bold text-sm text-gray-900 border-[1px] border-gray-900 rounded-md underline-offset-auto py-[px] px-[20px] md:text-base hover:drop-shadow-xl">
          How it works ?
        </button>
        
      </div>
    </div>
  );
};

export default Hero;
