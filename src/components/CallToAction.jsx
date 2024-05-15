import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="pb-12 mb-8 mt-24">
      <div
        className="w-full text-center bg-neutral p-4 sm:p-8"
        data-aos="fade-up">
        <h5 className="mb-2 text-3xl font-bold text-neutral-100">
          Ready to Change Your Life?
        </h5>
        <p className="mb-5 text-base text-neutral-100 sm:text-lg">
          Try these next steps:{" "}
        </p>
        <div className="flex flex-col items-center">
          {" "}
          {/* Center vertically */}
          {/* <Link to="application"> */}
            <button
              type="button"
              className="bg-neutral-50 items-center rounded-md flex flex-row px-2 mx-[5px] py-2 drop-shadow-lg">
              <svg className="pr-4"
                xmlns="http://www.w3.org/2000/svg"
                height="2em"
                viewBox="0 0 448 512">
                <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
              </svg>

              <div className="grid grid-rows-2">
                <p className="text-left font-bold text-sm text-neutral-950 py-[2px] rounded-sm md:text-base">
                  Fill the form
                </p>
                <p className="font text-left text-sm text-neutral-950 py-[2px] rounded-sm md:text-base">
                  Join our community forum
                </p>
              </div>
            </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
