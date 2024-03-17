import React from "react";
import Teamwork from "../assets/teamwork.png";
import Network from "../assets/network.png";
import Projects from "../assets/projects.png";
import Support from "../assets/support.png";
import Accountability from "../assets/accountability.png";
import MVP from "../assets/mvp.png";

const careerData = [
  {
    imgUrl: Teamwork,
    careerTitle: "Teamwork",
    text: "Collaborate cross-discipline with your team, and work directly with real customers. Leverage each other's skills, just like your usual product team.",
  },
  {
    imgUrl: Network,
    careerTitle: "Network",
    text: "Gather professional references and meet like-minded folks from various backgrounds. Network with industry leaders and professionals.",
  },
  {
    imgUrl: Projects,
    careerTitle: "Project based",
    text: "Hands-on experience building real-world solutions with peers.",
  },
  {
    imgUrl: Support,
    careerTitle: "Support",
    text: "Our dedicated projects and discipline mentors will make sure you are on track.",
  },
  {
    imgUrl: Accountability,
    careerTitle: "Accountability",
    text: "Along with check-ins, workshops, office hours to keep you on the momentum.",
  },
  {
    imgUrl: MVP,
    careerTitle: "MVP",
    text: "Launch a real impactful project with real customers.",
  },
];

const Benefits = () => {
  return (
    <div id="benefits-section" className="container my-20 lg:my-[150px]">
      {" "}
      <h2 className="text-left mb-20 text-4xl font-bold text-neutral-100">
        Why is it so great?
      </h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {careerData.map((career) => (
          <div className="text-left border border-neutral-700 bg-neutral-900 text-neutral-100 hover:bg-gradient-to-r from-neutral-900 to-neutral-800 hover:text-white p-6 rounded-sm shadow-md">
            <div className="text-left mb-6">
              <img
                src={career.imgUrl}
                alt={career.careerTitle}
                className="h-6 w-6"
              />
            </div>

            <div className="text-left">
              <h1 className="font-bold text-xl">{career.careerTitle}</h1>
            </div>
            <p className="text-md font-normal text-neutral-100 my-2">
              {career.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
