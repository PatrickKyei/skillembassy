import React from "react";
import Product from "../assets/product.png";
import Engineering from "../assets/devops.png";
import DevOps from "../assets/devops.png";
import Branding from "../assets/product.png";


const Careers = () => {
  const careerData = [
    {
      title: "Product School",
      description: "Develop critical thinking and repertoire to define a long-term strategy and engage all business stakeholders.",
      imageUrl: Product,
    },
    {
      title: "School of Engineering",
      description: "Experience working with your own designer and product manager to develop and launch a societal or human problem from inception to completion?",
      imageUrl: Engineering,
    },
    {
      title: "DevOps School",
      description: "Collaborate with a Product Manager and Designer and software developer, branstorm as well as translate mockups and specs into working code",
      imageUrl: DevOps,
    },
    {
      title: "Branding & Marketing",
      description: "Be responsible for buidling and maintaining relationship with customers as well as generate ROI to the organization.",
      imageUrl: Branding,
    },
   
  ];

  return (
    <div className="text-center">
      <h2 className="text-5xl font-semibold text-neutral-100 mb-8">Our Career Change Courses</h2>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {careerData.map((career, index) => (
          <div
            key={index}
            className="block bg-neutral-900"
          >
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
            >
              <img className="" src={career.imageUrl} alt={career.title} />
              <a href="#!">
                <div
                  className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                ></div>
              </a>
            </div>
            <div className="pt-4 pl-2">
              <h5 className="my-4 mx-2 font-medium leading-tight text-purple-300 text-left">
                {career.title}
              </h5>
              <p className="my-6 mx-2 text-base text-neutral-100 text-left">
                {career.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;