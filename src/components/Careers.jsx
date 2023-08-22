import React from "react";
import Figma from "../assets/uxui.png";
import Facebook from "../assets/datascience.png";
import Vercel from "../assets/devops.png";
import Security from "../assets/security.png";
import TeamViewer from "../assets/teamviewer.png";
import Analytics from "../assets/analytics.png";

const careerData = [
  {
    imgUrl: Figma,
    careerTitle: "Product Design",
    platform: "Figma",
    text: "Learn the step by step method of creating, managing and growing successful products, directly from the leaders who have been there and done that.",
    tool: "Figma",
    skill: "Prototypes",
  },
  {
    imgUrl: Facebook,
    careerTitle: "Data Science",
    platform: "Big Query",
    text: "Do you want to enjoy the experience of developing and launching a social or human problem from idea to completion with your own designer, product manager, and software developer?",
    tool: "Python",
    skill: "Data Models",
  },
  {
    imgUrl: Vercel,
    careerTitle: "DevOps",
    platform: "AWS",
    text: "Learn the step by step method of creating, deploying and automating infrastructures directly from the leaders who have been there and done that.",
    tool: "CI/CD",
    skill: "Automation",
  },
  {
    imgUrl: Security,
    careerTitle: "Cybersecurity",
    platform: "Wireshark",
    text: "Explore the world of cybersecurity and learn how to protect organizations from cyber threats. Gain hands-on experience in identifying and mitigating security risks, and become a key player in safeguarding valuable data and systems.",
    tool: "Networks",
    skill: "Pen-Test",
  },
  {
    imgUrl: TeamViewer,
    careerTitle: "IT Support",
    platform: "TeamViewer",
    text: "Master the skills required to provide exceptional IT support to businesses and users. Learn how to troubleshoot hardware and software issues, set up networks, and ensure smooth IT operations for enhanced productivity.",
    tool: "RDP",
    skill: "Troubleshoot",
  },
  {
    imgUrl: Analytics,
    careerTitle: "Digital Marketing",
    platform: "Google Analytics",
    text: "Dive into the dynamic field of digital marketing and acquire the tools to reach and engage with the right audience. Unleash the potential of online advertising, social media, and content marketing to drive growth and success for businesses.",
    tool: "Insights",
    skill: "Analytics",
  },
];

const Careers = () => {
  return (
    <div className="container my-20 lg:my-[150px]">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">
        Our Career Change Courses
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {careerData.map((career) => (
            <div
              key={career.careerTitle}
              className="bg-white text-slate-600 hover:bg-gray-900 hover:text-white p-6 rounded-lg shadow-lg">
              <div className="flex gap-6 mb-6">
                <img
                  src={career.imgUrl}
                  className="text-black w-[50px]"
                  alt={career.careerTitle}
                />
                <div className="flex flex-col m">
                  <h1 className="font-bold text-xl">{career.careerTitle}</h1>
                  <p className="font-light">{career.platform}</p>
                </div>
              </div>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-200 mb-6">
                {career.text}
              </p>
              <div className="w-full border-[0.1px] border-slate-100 mb-6" />
              <div className="flex justify-between items-center font-semibold">
                <p className="bg-white bg-opacity-10 p-1">{career.tool}</p>
                <p>{career.skill}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Careers;
