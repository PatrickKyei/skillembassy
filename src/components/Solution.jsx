import React from "react";

const Solution = () => {
  return (
    <section className="">
      <div className="py-8 mx-auto max-w-screen-x lg:py-16">
        <div
          className="bg-neutral-900 hover:bg-gradient-to-r from-neutral-900 to-neutral-800 border border-neutral-700 rounded-sm p-8 md:p-12 mb-8"
          data-aos="fade-up">
          <a
            href="#"
            className="bg-yellow-200 text-neutral-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2">
            <svg
              className="w-2.5 h-2.5 mr-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18">
              <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
            </svg>
            The Opportunity
          </a>
          <h1 className="text-neutral-100 text-2xl font-bold mb-2">
            Earn with your mind not with your time
          </h1>
          <p className="text-md font-normal text-neutral-500 mb-6">
            You live in a time where you can create your own career, rather than
            be assigned one. It means that you are in charge of the career path
            you launch yourself into, the skills you learn to earn a creative
            income. This gives you the responsibility to quit your 9-5, do what
            you love, build and monetize your skills, make new friends and
            connections, grow a brand with a paying audience, spend more time
            with family and friends, work from anywhere with no locations
            barrier. Upgrade yourself by learning a high value skill. Your skill will land you a
            high paying job, or even enable you to start a business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8" data-aos="fade-right">
          <div className="bg-neutral-900 hover:bg-gradient-to-r from-neutral-900 to-neutral-800 border border-neutral-700 rounded-sm p-8 md:p-12">
            <a
              href="#"
              className="bg-rose-200 text-neutral-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2">
              <svg
                className="w-2.5 h-2.5 mr-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18">
                <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
              </svg>
              The Problem
            </a>
            <h2 className="text-neutral-100 text-2xl font-bold mb-2">
              Not living your full potential
            </h2>
            <p className="text-md font-normal text-neutral-500 mb-4">
              There's a gap between who you are now and who you want to be.
              Despite investing the time, energy and money the best version of
              you remains out of touch. "Don't be an example of a wasted potential. You must do whatever it takes to make it happen. - Samira Vivette"
            </p>
          </div>

          <div
            className="bg-neutral-900 hover:bg-gradient-to-l from-neutral-900 to-neutral-800 border border-neutral-700 rounded-sm p-8 md:p-12"
            data-aos="fade-left"
            data-aos-duration="1000">
            <a
              href="#"
              className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2">
              <svg
                className="w-2.5 h-2.5 mr-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                />
              </svg>
              Our Solution
            </a>
            <h2 className="text-neutral-100 text-2xl font-bold mb-2">
              Our approach is hands-on.
            </h2>
            <p className="text-md font-normal text-neutral-500 mb-4">
              Our mission is to inspire motivated individuals to solve
              real-world problems by utilizing technology to develop new
              solutions that address social issues. Our approach is hands-on.
              Our aim to foster a learning-by-doing atmosphere drives us to make
              the next big decision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
