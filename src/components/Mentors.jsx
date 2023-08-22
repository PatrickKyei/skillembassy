import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import mentor1Image from "../assets/mentors/edith.png";
import mentor2Image from "../assets/mentors/diego.png";
import mentor3Image from "../assets/mentors/frank.png";
import mentor4Image from "../assets/mentors/davide.png";
import mentor5Image from "../assets/mentors/martin.png";
import mentor6Image from "../assets/mentors/may.png";
import mentor7Image from "../assets/mentors/evans.png";
import mentor8Image from "../assets/mentors/amit.png";
import mentor9Image from "../assets/mentors/adam.png";
import mentor10Image from "../assets/mentors/newton.png";
import mentor11Image from "../assets/mentors/taylor.png";
import mentor12Image from "../assets/mentors/shraddha.png";
import mentor13Image from "../assets/mentors/lilia.png";
import mentor14Image from "../assets/mentors/jackie.png";
import mentor15Image from "../assets/mentors/jose.png";

const Mentors = () => {
  const mentors = {
    mentor1: [
      {
        name: "Edith Akati",
        title: "Product Manager",
        company: "mPharma",
        image: mentor1Image,
      },
      {
        name: "Diego Martins",
        title: "Senior Product Designer",
        company: "Spotify",
        image: mentor2Image,
      },
      {
        name: "Frank Arkhurst Odoom",
        title: "Principal Software Consultant",
        company: "Accede",
        image: mentor3Image,
      },
      {
        name: "Davide Marchisio",
        title: "Senior Product Manager",
        company: "One Insurance Ltd.",
        image: mentor4Image,
      },
      {
        name: "Martin Busas",
        title: "Senior Software Engineer",
        company: "Trout.",
        image: mentor5Image,
      },
      {
        name: "May Chin",
        title: "Principal Product Manager",
        company: "ZALORA Group",
        image: mentor6Image,
      },
      {
        name: "Evans Frimpong",
        title: "Software Engineer",
        company: "Waya",
        image: mentor7Image,
      },
      {
        name: "Amit Baliga",
        title: "Senior Program Manager",
        company: "Microsoft",
        image: mentor8Image,
      },
      {
        name: "Adam Van Lente",
        title: "CTO",
        company: "MikMak",
        image: mentor9Image,
      },
      {
        name: "Newton Ikhariale",
        title: "Director of Engineering",
        company: "Teachable",
        image: mentor10Image,
      },
      {
        name: "Taylor Hunt",
        title: "Senior Product Designer",
        company: "CashApp",
        image: mentor11Image,
      },
      {
        name: "Shraddha Bandaru",
        title: "Product Designer",
        company: "Berkshire Hathaway Specialty Insurance",
        image: mentor12Image,
      },
      {
        name: "Lilia Gorbachik",
        title: "Product Manager",
        company: "Intermedia Cloud Communications",
        image: mentor13Image,
      },
      {
        name: "Jackie Jiménez ",
        title: "Senior Software Engineer",
        company: "GitHub",
        image: mentor14Image,
      },
      {
        name: "José Manuel",
        title: "Senior Software Enineer",
        company: "Certainly",
        image: mentor15Image,
      },
    ],
  };

  const [activeMentor, setActiveMentor] = useState(0);

  return (
    <div className="section pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div
          className="p-8 bg-gray-800 rounded-md"
          data-aos="fade-right"
          data-aos-duration="1000">
          <h3 className="text-3xl font-medium mb-8 text-white">
            Our Mentors from Renowned Industries
          </h3>
          <p className="text-white">
            Our dedicated projects and discipline mentors will make sure you're
            on track. Along with check-ins, workshops, office hours, and more.
          </p>
          <a
            href="https://forms.gle/eXz54VWYu1N2fQoq8"
            target="_blank"
            rel="noopener noreferrer">
            <button className="mt-8 flex items-center text-gray-900 bg-white px-6 py-3 rounded-md">
              <span className="mr-2">JOIN AS A MENTOR</span>
              {/* <i className="el-icon-user"></i> */}
            </button>
          </a>
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
          {mentors.mentor1.map((mentor, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-md shadow-lg text-center">
              <img
                src={mentor.image}
                alt=""
                className={`mx-auto rounded-full w-20 h-20 mb-4 border-4 border-transparent ${
                  activeMentor === index ? "border-gray-500" : ""
                }`}
              />
              <h3 className="font-bold text-lg">{mentor.name}</h3>
              <p className="text-gray-500 text-sm">
                {mentor.title} <br />
                <span className="font-semibold">{mentor.company}</span>
              </p>
            </div>
          ))}
        </AliceCarousel>
      </div>
    </div>
  );
};

export default Mentors;
