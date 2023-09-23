import React from "react";
import Classes from "../assets/classes.png";

const CTA = () => {
  const stats = [
    { id: 1, name: "Global active learners", value: "2000+" },
    { id: 2, name: "Industry mentors", value: "50+" },
    { id: 3, name: "Organized events", value: "200+" },
  ];

  return (
    <div className="pb-8 my-8">
      <div className="flex flex-col lg:flex-row justify-between pb-12 items-center">
        <div
          className="w-full pr-12 pb-12"
          data-aos="fade-left"
          data-aos-duration="1000">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Step Into A Role
          </h2>
          <h3 className="text-lg text-gray-700 mb-4">
          Gain REAL-WORLD EXPERIENCE!! - No boring case studies or theory
          </h3>
          <p className="text-base text-gray-600 mb-4">
          Work with a group with your own Product Manager,
            Developer and Designer.

            We want to empower and trust students, just as they themselves, and
            the unique experiences they have brought about, to make an absolute
            difference.
          </p>
         
        </div>

        {/* Image */}
        <div className="w-full rounded-md" data-aos="fade-right">
          <img src={Classes} alt="CTA Image" className="w-full rounded-md" />
        </div>
      </div>

      {/* Stats */}
      <div
        className="flex flex-row justify-between rounded-md shadow-md w-full"data-aos="fade-up">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white py-8 sm:px-6 px-2 text-center mb-4 lg:mb-0 lg:mr-4">
            <dt className="order-first sm:text-5xl text-1xl font-semibold tracking-tight text-gray-900">
              {stat.value}
            </dt>
            <dd className="text-base leading-7 text-gray-600">{stat.name}</dd>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CTA;
