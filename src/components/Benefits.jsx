import React from "react";
import {
  FiUsers,
  FiTool,
  FiLink,
  FiFolder,
  FiMap,
  FiBriefcase,
  FiCode,
  FiUser,
} from "react-icons/fi";

const benefitsData = [
  {
    icon: FiUsers,
    title: "Cohort Program",
    text: "Free three (3) months training program for newbies in tech.",
  },
  {
    icon: FiTool,
    title: "Workshop Labs",
    text: "Virtual hands-on learning experience with industry experts.",
  },
  {
    icon: FiLink,
    title: "Talent Network",
    text: "Matching organisations with potential job seekers.",
  },
  {
    icon: FiFolder,
    title: "Cohort Resources",
    text: "Learning resources from our instructors & mentors.",
  },
  {
    icon: FiMap,
    title: "Beyond Roadmap",
    text: "Open solution to provide learning insights, tips and ideas.",
  },
  {
    icon: FiBriefcase,
    title: "Open Job Listing",
    text: "Open digital job listing in tech for our community members.",
  },
  {
    icon: FiCode,
    title: "Open Projects",
    text: "Hands-on experience building real world solutions with peers.",
  },
  {
    icon: FiUser,
    title: "Startup Interns",
    text: "Our interns are ready to bring innovative ideas to your projects.",
  },
];

const Benefits = () => {
  return (
    <div id="benefits-section" className="container my-20 lg:my-[50px]">
      {/* <h2 className="text-left mb-20 text-4xl font-bold text-neutral-100">
        Why is it so great?
      </h2> */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {benefitsData.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="text-left border border-neutral-700 bg-neutral-900 text-neutral-100 hover:bg-gradient-to-r from-neutral-900 to-neutral-800 hover:text-white p-6 rounded-sm shadow-md"
            >
              <div className="text-left mb-6">
                <Icon className="h-6 w-6 text-white" />
              </div>

              <div className="text-left">
                <h1 className="font-bold text-xl">{item.title}</h1>
              </div>
              <p className="text-md font-normal text-neutral-100 my-2">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Benefits;
