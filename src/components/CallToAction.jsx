import React from "react";

const CallToAction = () => {
  return (
    <div className="pb-12 mb-8 mt-8">
      <div class="w-full p- text-center bg-white p-4 sm:p-8 dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up">
        <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Ready to Change Your Life?
        </h5>
        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Take the next step & sign up to Skill Embassy.
        </p>
        <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <a
            href="https://nas.io/skillembassy"
            class="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-12 py-4 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <div class="text-left">
              <div class="-mt-1 font-sans text-sm font-semibold">Start Now</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
