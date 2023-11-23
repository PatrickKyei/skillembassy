import React from "react";
import UX from "../assets/ux.png";
import Eng from "../assets/eng.png";
import Product from "../assets/product.png";
// import Branding from "../assets/product.png";


const Careers = () => {
  const careerData = [
    {
      title: "Product Management",
      description: "Develop critical thinking and repertoire to define a long-term strategy and engage all business stakeholders.",
      imageUrl: Product,
    },
    {
      title: "Software Engineering",
      description: "Experience working with your own designer and product manager to develop and launch a societal or human problem from inception to completion.",
      imageUrl: Eng,
    },
    {
      title: "UX/UI Design",
      description: "Want to know what it's like to take a product from conception to launch? Are you creating user personas, journeys, mockups, and other things?",
      imageUrl: UX,
    },
   
  ];

  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold text-neutral-100 mb-12">Our Career Change Courses</h2>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {careerData.map((career, index) => (
          <div
            key={index}
            className="block border border-neutral-700 bg-neutral-900"
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