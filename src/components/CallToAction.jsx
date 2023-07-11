import React from "react";

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center my-20">
      <div className="max-w-4xl w-full bg-white shadow-sm rounded-lg py-8 px-10 sm:py-10 sm:px-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-center">
          READY TO CHANGE YOUR LIFE?
        </h2>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-center">
          Take the next step & sign up to Skill Embassy.
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <a href="https://nas.io/skillembassy">
            <button className="px-6 py-3 bg-black text-white font-bold rounded">
              Sign Up Now →
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
