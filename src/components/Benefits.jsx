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
    text: "Launch a real impactful project with real customers",
  },
];

const Benefits = () => {
  return (
    <div className="container my-20 lg:my-[150px]">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {careerData.map((career) => (
          <div
            className="align-center text-center bg-neutral-900 text-neutral-100 hover:bg-gray-900 hover:text-white p-6 rounded-sm shadow-md">

            <div className="justify-content-center mb-6">
              <img
                src={career.imgUrl}
                alt={career.careerTitle}
                style={{ width: '40px', height: '40px' }}
                className="mx-auto"
              />
            </div>

            <div className="text-center">
              <h1 className="font-bold text-xl">{career.careerTitle}</h1>
            </div>
            <p className="text-md font-normal text-neutral-100 my-6">
              {career.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
