import React from "react";
import Student from "../assets/student.png";

const Collab = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
            <div className="flex lg:py-12">
              <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
          className="z-[10] w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px]"
                alt="image"
              />
            </div>
          </div>

          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="flex h-full items-center rounded-lg bg-gray-800 p-6 text-center text-white lg:pl-12 lg:text-left">
              <div className="lg:pl-12">
                <h2 className="mb-8 text-3xl font-bold">
                  No Tech Skills? No Problem
                </h2>
                <p className="mb-8 pb-2 lg:pb-0">
                  We want to empower you to use technology to improve the way
                  you live and work. 
                  
                  Spend your weekends learning to upgrade yourself, and spend your weekdays working for your respective employer and you will never suffer should you lose your job. If your current employer is not paying you more than GHC 5000/$56828, it’s time to upgrade yourself by learning a tech skill. Your skill will definitely get you one, or even enable you to start a business.
                </p>

                <div className="mx-auto mb-8 flex flex-col md:flex-row md:justify-around xl:justify-start">
                  <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="mr-2 h-5 w-5">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Best Experience
                  </p>

                  <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0 xl:mr-20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="mr-2 h-5 w-5">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Collaboration
                  </p>

                  <p className="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="mr-2 h-5 w-5">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Networking
                  </p>
                </div>

                <p>
                WHAT IS SO COOL ABOUT JOINING Skill Embassy? 

- Step into the role, collaborate as a team to build and launch a real product in the market - HECK YES!

- Gain REAL-WORLD EXPERIENCE!! - No boring case studies or theory

- Serendipitous connections and relationships with industry leaders

- Lifelong access to all future Product Accelerator workshops included with your membership

- Inside knowledge of what Hiring Managers look for
          
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collab;
