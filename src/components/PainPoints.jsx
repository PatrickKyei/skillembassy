import React from "react";
import Struggle from "../assets/sad.png";
import Gap from "../assets/gap.png";
import Trends from "../assets/trends.png";
import Brain from "../assets/brain.png";
import Inconsistent from "../assets/inconsistent-2.png";
import Group from "../assets/group.png";

const careerData = [
  {
    imgUrl: Struggle,
    careerTitle: "Teamwork",
    text: "You struggle to find a structured and effective path to acquire the skills to launch your career in the digital economy.",
  },
  {
    imgUrl: Gap,
    careerTitle: "Network",
    text: "You feel you have the  knowledge but you find a gap between theory and practical implementation which makes it feel like an uphill battle.",
  },
  {
    imgUrl: Trends,
    careerTitle: "Project based",
    text: "You find it  intimidating and challenging to keep up with the latest tools and trends necessary to launch your online business.",
  },
  {
    imgUrl: Brain,
    careerTitle: "Support",
    text: "You are faced with decision paralysis. You fear making the wrong choices or investing time in the wrong skills, therefore stuck on where to begin.",
  },
  {
    imgUrl: Inconsistent,
    careerTitle: "Accountability",
    text: "You know there are a lot other paid courses but feel like they are all the same (and aren't sure which you can confidently invest your money in).",
  },
  {
    imgUrl: Group,
    careerTitle: "MVP",
    text: "You are looking for a community of like-minded individuals to establish a strong network that provides support, insights, and collaboration opportunities.",
  },
];

const PainPoints = () => {
  return (
    <div className="container my-20 lg:my-[150px]">
      <h2 className="text-center mb-5 text-4xl font-bold text-neutral-100">
        There's no substitute for doing your own work.
      </h2>
      <p className="text-lg text-neutral-100 text-center mb-[40px] lg:px-[240px]">
"Sensible people get paid for doing what they enjoy doing." - Alan Watts       {/* Gain REAL - WORLD EXPERIENCE!! - No boring case studies or theory */}
      </p>
      <div className="grid grid-cols-1 gap-0 lg:grid-cols-3">
        {careerData.map((career) => (
          <div className="text-left border border-neutral-700 bg-neutral-900 text-neutral-100 hover:bg-gradient-to-r from-neutral-900 to-neutral-800 hover:text-white p-6 rounded-sm shadow-md">
            <div className="text-left mb-6">
              <img
                src={career.imgUrl}
                alt={career.careerTitle}
                className="h-6 w-6"
              />
            </div>

            {/* <div className="text-left">
              <h1 className="font-bold text-xl">{career.careerTitle}</h1>
            </div> */}
            <p className="text-md font-normal text-neutral-100 my-2">
              {career.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PainPoints;
