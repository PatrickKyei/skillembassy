import React from "react";

const Donate = () => {
  return (
    <div className="pb-12 mb-8 mt-8">
      <div
        class="w-full p- text-center bg-neutral-950 p-4 sm:p-8"
        data-aos="fade-up">
        <h5 class="mb-2 text-3xl font-bold text-neutral-100">
          I just want to donate
        </h5>

        <p class="mb-5 text-base text-neutral-300 sm:text-lg">
          When you donate to Skill Embassy you help people learn new skills and
          provide for thier families. You also help us create new resources for
          you to use to expand your own technology skills. Your $50 donation will
          provide 250 hours of learning to people around the world each month.{" "}
        </p>
        <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <a
            href="https://paystack.com/pay/donate-skillembassy"
            class="w-full sm:w-auto bg-neutral-300 hover:bg-neutral-200 text-neutral-900 rounded-md inline-flex items-center justify-center px-12 py-4">
            <div class="text-left">
              <div class="-mt-1 font-sans text-sm font-semibold">
                Donate Now
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Donate;
