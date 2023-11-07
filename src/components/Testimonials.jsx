// import React, { useState } from "react";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
import Hakeem from "../assets/hakeem.jpg";
import Christiana from "../assets/christiana.png";
import Emmanuel from "../assets/eunit.png";



import React from "react";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Emmanuel Uchenna",
      role: "Software Developer",
      image: Emmanuel,
      text:
        "Nice coaching, good mentors and all round focused people at work. I am enjoying the journey.",
    },
    {
      name: "Christiana Sunbabaara",
      role: "Software Developer",
      image: Christiana,
      text:
        "This is the best learning platform I have ever worked with. Everything is professional and done at ease.",
    },
    {
      name: "Hakeem Adjei",
      role: "UX Designer",
      image: Hakeem,
      text:
        "I enjoyed the service and the opportunity Skill Embassy offers.",
    },
  ];

  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 className="mb-12 pb-4 text-center text-3xl font-bold text-neutral-100">What our Students Say</h2>

        <div className="grid gap-6 md:grid-cols-3 xl:gap-x-12">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="mb-6 lg:mb-0">
              <div className="relative block rounded-md border border-neutral-700 bg-neutral-900 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                <div className="flex">
                  <div className="relative mx-4 -mt-4 w-full overflow-hidden rounded-md bg-cover bg-no-repeat shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                    <img src={testimonial.image} className="w-full" alt={testimonial.name} />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                      </div>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="mb-2 text-lg font-bold text-neutral-100">{testimonial.name}</h5>
                  <h6 className="mb-4 font-medium text-primary text-neutral-100">
                    {testimonial.role}
                  </h6>
                  <p className="text-neutral-100">{testimonial.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

