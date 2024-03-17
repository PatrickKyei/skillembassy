import React from "react";
import Commintro from "../assets/commintro.png";
import Grow from "../assets/grow.png";
import Innovate from "../assets/innovate.png";


// Project data array containing individual project details
const projectsData = [
  {
    imageUrl: Innovate,
    projectName: "Innovate",
  },
  {
    imageUrl: Commintro,
    projectName: "Empower",
  },
  {
    imageUrl: Grow,
    projectName: "Grow",
  },
  // Add more projects here in the same format
];

const CommWelcome = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <style>
          {`.zoom:hover img {
            transform: scale(1.1);
          }`}
        </style>
        <div>
          <h2 className="text-neutral-100 mb-8 text-center text-3xl font-bold">
            Now that you are here at Skill Embassy, you are part of us.
          </h2>
          {/* <p className="text-neutral-100 mb-12 text-center font-semibold">
            Now that you're here at Skill Embassy, you are part of us.
          </p> */}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
              data-te-ripple-init
              data-te-ripple-color="dark">
              <img
                src={project.imageUrl}
                className="w-full align-middle transition duration-300 ease-linear"
              />
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                  <div className="flex h-full items-end justify-start">
                    <h5 className="m-6 text-lg font-bold text-white">
                      {project.projectName}
                    </h5>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CommWelcome;
