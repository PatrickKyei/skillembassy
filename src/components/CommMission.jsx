import React from "react";
import COMM from "../assets/comm.png";


const features = [
  {
    name: "Upcoming Events:",
    description:
      "Stay Tuned for our upcoming Events.",
  },
  // {
  //   name: "Community",
  //   description:
  //     "Over-communicate, ask for input, share ideas, give everyone ownership.",
  // },
  // {
  //   name: "Diversity.",
  //   description:
  //     "We embrace diverse cultures and backgrounds, removing geographical and physical boundaries to fuel creativity and problem-solving, resulting in more successful groundbreaking solutions.",
  // },
];

export default function CommMission() {
  return (
    <div className="overflow-hidden bg-neutral-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-100 sm:text-4xl">
                Join the Community
              </p>
              <p className="mt-6 text-lg leading-8 text-neutral-400">
                We are advocates for Diversity. We recognise that innovation can only be advanced if we have
                people from diverse backgrounds. When businesses consist of
                people from the same backgrounds, they often leave diverse ideas
                and perspectives behind.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-neutral-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-8">
                    <dt className="inline font-semibold text-purple-300">
                      {/* <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" /> */}
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src= {COMM}
            alt="Community Photo"
            className="w-[28rem] max-w-none rounded-md sm:w-[42rem] md:-ml-4 lg:-ml-0"
            // width={2432}
            // height={1442}
          />
        </div>
      </div>
    </div>
  );
}
