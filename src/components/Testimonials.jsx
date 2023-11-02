import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Hakeem from "../assets/hakeem.jpeg";
import Christiana from "../assets/christy.jpg";
import Emmanuel from "../assets/eunit.jpg";

const Testimonials = () => {
  const students = {
    student1: [
      {
        name: "Christiana Sunbabaara",
        description:
          "This is the best learning platform I have ever worked with. Everything is professional and done at ease.",
        company: "mPharma",
        image: Christiana,
      },
      {
        name: "Emmanuel Uchenna",
        description:
          "Nice coaching, good mentors and all round focused people at work. I am enjoying the journey.",
        company: "Spotify",
        image: Emmanuel,
      },
      {
        name: "Hakeem Adjei",
        description:
          "I enjoyed the service and the opportunity Skill Embassy offers. I think as a platform that is seeking to breach the gap and provide a solution helping potential professionals in tech find a foot or experience. Apart from communication concerns, I think it can help young individuals willing to contribute to a team build their case study.",
        company: "Accede",
        image: Hakeem,
      },
    ],
  };

  const [activeMentor, setActiveMentor] = useState(0);

  return (
    <div className="section pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div
          className="p-4"
          data-aos="fade-right"
          data-aos-duration="1000">
          <h3 className="text-5xl text-center font-semibold mb-4 text-neutral-50">
            Hear what our learners say{" "}
          </h3>
        </div>

        {/* Carousel */}
        <AliceCarousel
          autoPlay
          autoPlayInterval={4000} // Adjust the interval time as needed
          disableButtonsControls
          disableDotsControls
          keyboardNavigation
          infinite
          startIndex={activeMentor}
          onSlideChanged={(e) => setActiveMentor(e.item)}>
          {students.student1.map((student, index) => (
            <div
              key={index}
              className="pl-8 py-4 rounded-md bg-neutral-900">
              <p className="text-neutral-100 text-lg">
                {student.description} <br />
              </p>

              <div className="flex my-8 items-center">
                <img
                  src={student.image}
                  alt=""
                  className={`mx-1 rounded-full w-20 h-20 ${
                    activeMentor === index ? "border-neutral-100" : ""
                  }`}
                />
                <h3 className="font-bold text-neutral-50 text-lg ml-4">
                  {student.name}
                  <p className="font-semibold">{student.company}</p>
                </h3>
              </div>
            </div>
          ))}
        </AliceCarousel>
      </div>
    </div>
  );
};

export default Testimonials;
