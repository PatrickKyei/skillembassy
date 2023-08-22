import React from "react";

const admissionSteps = [
  {
    stepNumber: 1,
    title: "Fill your Personal Info",
    description: "Fill in your personal information such as name and email.",
  },
  {
    stepNumber: 2,
    title: "Answer the Profile map",
    description:
      "Answer the profile map, so we can understand your professional status and send it to us.",
  },
  {
    stepNumber: 3,
    title: "Wait for Our Response",
    description:
      "We will carefully analyze your profile and expectations. With our team, we need 72 hours to give you an answer.",
  },
  {
    stepNumber: 4,
    title: "Prepare for your Cohort.",
    description:
      "Our Admission team will be in touch with preparations for the start of the cohort.",
  },
];

const AdmissionStep = ({ stepNumber, title, description }) => {
  return (
    <div className="w-full max-w-sm mx-auto mb-12 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex items-center justify-center w-8 h-16 ml-4 text-black text-2xl border border-gray-500 rounded-full shrink-0 font-bold">
        {stepNumber}
      </div>
      <div className="px-4 py-8">
        <h3 className="text-lg font-medium mb-2">{title}</h3>
        <p className="text-lg font-normal text-gray-700 dark:text-gray-200">
          {description}
        </p>
      </div>
    </div>
  );
};

const Admission = () => {
  return (
    <div className="my-12 w-full">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-4 items-center text-gray-900 dark:gray-900">
          How The Admission Process Works
        </h2>
        <p className="text-gray-700 text-lg dark:text-gray-400 mb-12 my-4">
          Joining our learning community and becoming a member of a smart team
          is simple. This basic steps will teach you how it works.
        </p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {admissionSteps.map((step) => (
          <AdmissionStep
            key={step.stepNumber}
            stepNumber={step.stepNumber}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Admission;
