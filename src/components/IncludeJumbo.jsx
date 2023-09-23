import React from "react";

const IncludeJumbo = () => {
  return (
    <div className="flex flex-col items-center my-20 font-poppins lg:my-[100px]">
      <div className="flex flex-col text-center gap-[30px] md:w-[700px]">
        <h1 className="font-bold text-gray-900 text-6xl md:text-6xl">
          Innovation, Empowerment, Diversity.
        </h1>
        <p className="font-semibold text-slate-500 mb-[40px]">
          We provide opportunities for everyone who might face physical or developmental limitations to get access to education by utilizing accessebility tools and assistive technologies that cater to individuals with disabilities.
          {" "}
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
          className="font-bold text-sm text-black border-[1px] border-black rounded-md underline-offset-auto py-[px] px-[20px] md:text-base hover:drop-shadow-xl">
          How it works ?
        </button>
      </div>
    </div>
  );
};

export default IncludeJumbo;
