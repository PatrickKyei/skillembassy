import React from "react";

const CollabWithUs = () => {
  return (
    <div className="pb-12 mb-8 mt-8 border-b border-gray-200">
      <div
        class="w-full p- text-center bg-white p-4 sm:p-8 dark:bg-gray-800 dark:border-gray-700"
        data-aos="fade-up">
        <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          Collaborate with Us
        </h5>

        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
          Complete the form below to get started with Collaborating with us.{" "}
        </p>
        <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSd0zncZoISB8ZpnT_jdhlcjPERzscpF7UoJfzSFP66dPGL_Qw/viewform?embedded=true"
            width="640"
            height="1261"
            frameborder="0"
            marginheight="0"
            marginwidth="0">
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default CollabWithUs;
