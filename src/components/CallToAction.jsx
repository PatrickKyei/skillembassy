import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="pb-12 mb-8 mt-24">
      <div class="w-full text-center bg-neutral p-4 sm:p-8" data-aos="fade-up">
        <h5 class="mb-2 text-2xl font-bold text-neutral-50">
          Ready to Change Your Life?
        </h5>
        <p class="mb-5 text-base text-neutral-100 sm:text-lg dark:text-gray-400">
          Try these next steps:{" "}
        </p>
        <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <Link to="application">
            <button
              type="button"
              className="font-bold bg-neutral-50 text-sm text-neutral-950 mx-[5px] py-[10px] px-[30px] rounded-sm md:text-base">
              Start Here
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
