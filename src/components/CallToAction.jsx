import React from "react";

const CallToAction = () => {
  return (
    <div className="pb-12 mb-8 mt-24">
      <div class="w-full p- text-center bg-neutral p-4 sm:p-8" data-aos="fade-up">
        <h5 class="mb-2 text-3xl font-bold text-neutral-50">
          Ready to Change Your Life?
        </h5>
        <p class="mb-5 text-base text-neutral-100 sm:text-lg dark:text-gray-400">
          Take the next step & sign up to Skill Embassy.
        </p>
        <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <a
            href="https://nas.io/skillembassy"
            class="w-full sm:w-auto bg-neutral-100 hover:bg-neutral-200 rounded-sm inline-flex items-center justify-center px-12 py-4">
            <div class="text-left">
              <div class="-mt-1 font-sans text-sm text-neutral-900 font-semibold">Start Now</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
