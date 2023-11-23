import React from "react";

// Project data array containing individual project details
const projectsData = [
  {
    imageUrl: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg",
    projectName: "Hollywood exhibition",
  },
  {
    imageUrl: "https://mdbcdn.b-cdn.net/img/new/standard/city/044.jpg",
    projectName: "Genius Loci",
  },
  {
    imageUrl: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg",
    projectName: "Hollywood exhibition",
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
            Innnovate. Empower. Grow
          </h2>
          <p className="text-neutral-100 mb-12 text-center font-semibold">
            Now that you're here at Skill Embassy, you are part of us. This
            booklet will introduce you to the important inside story of the
            brand so you can keep 'em in mind while you work. Now go forth and do us proud. 
          </p>
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
              <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                  <div className="flex h-full items-end justify-start">
                    <h5 className="m-6 text-lg font-bold text-white">
                      {project.projectName}
                    </h5>
                  </div>
                </div>
                <div>
                  <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"></div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CommWelcome;
