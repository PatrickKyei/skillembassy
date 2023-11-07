import React from "react";

const Stats = () => {
  const stats = [
    { id: 1, name: "Global active learners", value: "2000+" },
    { id: 2, name: "Industry mentors", value: "50+" },
    { id: 3, name: "Organized events", value: "200+" },
  ];

  return (
    <div className="pb-8 my-8">
      

      {/* Stats */}
      <div
        className="flex flex-row justify-between rounded-md shadow-md w-full"data-aos="fade-up">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="py-8 sm:px-6 px-2 text-center mb-4 lg:mb-0 lg:mr-4">
            <dt className="order-first sm:text-8xl text-1xl font-semibold tracking-tight text-neutral-50">
              {stat.value}
            </dt>
            <dd className="text-base leading-7 text-neutral-50">{stat.name}</dd>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
