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
    careerTitle: "Real team work",
    text: "Collaborate cross-discipline with your team, and work directly with real customers. Leverage each others skills, just like your usual product team.",
  
  },
  {
    imgUrl: Facebook,
    careerTitle: "Build connections",
    text: "Gather professional references and meet like-minded folks from various backgrounds. Network with industry leaders and professionals.",
   
  },
  {
    imgUrl: Vercel,
    careerTitle: "Real projects",
    text: "No more bolierplate projects or case studies. Put your theoretical knowledge to the test and ship a product of your own with real impact.",
   
  },
  {
    imgUrl: Security,
    careerTitle: "Support & accountability",
    text: "Our dedicated projects and discipline mentors will make sure youre on track. Along with check-ins, workshops, office hours and more.",
   
  },
 
];

const Benefits = () => {
  return (
    <div className="container my-20 lg:my-[150px]">
     
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {careerData.map((career) => (
            <div
              key={career.careerTitle}
              className="bg-neutral-900 text-neutral-100 hover:bg-gray-900 hover:text-white p-6 rounded-lg shadow-lg">
              <div className="flex gap-6 mb-6">
                <img
                  src={career.imgUrl}
                  alt={career.careerTitle}
                  style={{ width: '40px', height: '40px' }}
                />
                <div className="flex flex-col m">
                  <h1 className="font-bold text-xl">{career.careerTitle}</h1>
                </div>
              </div>
              <p className="text-lg font-normal text-neutal-500 dark:text-gray-200 mb-6">
                {career.text}
              </p>
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
