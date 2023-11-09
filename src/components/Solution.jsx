import React from "react";

const Solution = () => {
  return (
    <section className="">
      <div className="py-8 mx-auto max-w-screen-x lg:py-16">
        <div
          className="bg-neutral-900 hover:bg-gradient-to-r from-neutral-900 to-neutral-800 border border-neutral-700 rounded-sm p-8 md:p-12 mb-8"
          data-aos="fade-up">
          <h1 className="text-neutral-100 text-2xl font-bold mb-2">
            We combine technology and creative problem solving
          </h1>
          <p className="text-lg font-normal text-neutral-500 mb-6">
            We are not doing anything new; rather, we are doing what everyone
            else does, just better. Learners are able to grasp and solve
            modern-day problems, break down futile societal constructs, and
            evolve toward a sustainable future by combining technology and
            creative problem solving.
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
              Problem
            </a>
            <h2 className="text-neutral-100 text-2xl font-bold mb-2">
              We inspire motivated individuals
            </h2>
            <p className="text-lg font-normal text-neutral-500 mb-4">
              It is difficult to break into and excel in technology. It's even
              more challenging if you're changing careers or don't have a
              traditional computer science degree. Our mission is to inspire motivated
              individuals to solve real-world problems by utilizing technology
              to develop new solutions that address social issues.
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
              Solution
            </a>
            <h2 className="text-neutral-100 text-2xl font-bold mb-2">
              Our approach is hands-on.
            </h2>
            <p className="text-lg font-normal text-neutral-500 mb-4">
              The never-ending pursuit of better solutions is central to all we
              do. We believe in the power of collaboration, hands-on learning,
              and creating a community where everyone can develop together. Our
              aim to foster a learning-by-doing atmosphere drives us to make the
              next big decision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
