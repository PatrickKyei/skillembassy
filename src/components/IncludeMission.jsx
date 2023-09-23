import React from "react";

const features = [
  {
    name: "Innovation.",
    description:
      "We foster diverse teams to collaborate and generate wide range of ideas, leading to more creative solutions and groundbreakinig innovations.",
  },
  {
    name: "Inclusion.",
    description:
      "We ensure everyone regardless of their background can participate in discussions, contribute ideas, and be part of the innovation process.",
  },
  {
    name: "Diversity.",
    description:
      "We embrace diverse cultures and backgrounds, removing geographical and physical boundaries to fuel creativity and problem-solving, resulting in more successful groundbreaking solutions.",
  },
];

export default function IncludeMission() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                We are advocates for Diversity
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                We recognise that innovation can only be advanced if we have
                people from diverse backgrounds. When businesses consist of
                people from the same backgrounds, they often leave diverse ideas
                and perspectives behind.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
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
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Inclusive Education"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            // width={2432}
            // height={1442}
          />
        </div>
      </div>
    </div>
  );
}
