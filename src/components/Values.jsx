import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice, faLink, faHandshake } from "@fortawesome/free-solid-svg-icons";

// Reusable sub-component for individual value blocks
const ValueBlock = ({ icon, title, description }) => (
  <div className="mb-12 lg:mb-0">
    <div className="block h-full rounded-sm bg-neutral-950 hover:bg-gradient-to-r from-neutral-950 to-neutral-800">
      <div className="flex justify-center">
        <div className="-mt-8 inline-block rounded-full bg-neutral-950 p-4 text-primary shadow-md">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h5 className="mb-4 text-neutral-100 text-lg font-semibold">{title}</h5>
        <p className="text-neutral-100">{description}</p>
      </div>
    </div>
  </div>
);

const Values = () => {
  const valueData = [
    {
      title: "What Drives Us",
      description:
        "People are made up of many skills, and we are here to help shape it.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-7 h-7 text-cyan-500">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 13a4 4 0 100-8 4 4 0 000 8z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 21v-2a4 4 0 00-3-3.87"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 9L6.00001 9"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M18 9L18.0001 9"
          />
        </svg>
      ),
    },
    {
      title: "Community",
      description:
        "Over-communicate, ask for input, share ideas, give everyone ownership.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="green"
          className="h-7 w-7">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>
      ),
    },
    {
      title: "Co-create",
      description: "Take what you learned and apply it to the next thing.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-7 h-7 text-yellow-300">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Respect",
      description: "Respect one another. Treat everyone with the same respect.",
      icon: (
        <FontAwesomeIcon
        icon={faHandshake}
        style={{ color: "gray", fontSize: "1.5em" }} // Adjust color and size as needed
      />
      ),
    },
    {
      title: "Collaborate",
      description:
        "Split difficult tasks into simpler ones, then work together to complete them faster.",
      icon: (
        <FontAwesomeIcon
        icon={faLink}
        style={{ color: "orange", fontSize: "1.5em" }} // Adjust color and size as needed
      />
      ),
    },
    {
      title: "Prioritize",
      description:
        "Develop specialised skills, so that the best person for each task can do it better and faster.",
      icon: (
        <FontAwesomeIcon
        icon={faDice}
        style={{ color: "red", fontSize: "1.5em" }} // Adjust color and size as needed
      />      ),
    },
  ];

  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <div className="grid  lg:grid-cols-3 gap-y-12 lg:gap-x-12">
          {valueData.map((value, index) => (
            <ValueBlock key={index} {...value} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Values;
