import React, { useState } from "react";

const Identity = () => {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div
      className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      data-aos="fade-up">
      <ul
        className="flex flex-wrap justify-center text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
        id="defaultTab"
        data-tabs-toggle="#defaultTabContent"
        role="tablist">
        <li className="mr-2">
          <button
            id="about-tab"
            data-tabs-target="#about"
            type="button"
            role="tab"
            aria-controls="about"
            aria-selected={activeTab === "about"}
            className={`inline-block p-4 rounded-tl-lg ${
              activeTab === "about"
                ? "text-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500"
                : "hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            }`}
            onClick={() => handleTabClick("about")}>
            An Inclusive Community
          </button>
        </li>
        <li className="mr-2">
          <button
            id="services-tab"
            data-tabs-target="#services"
            type="button"
            role="tab"
            aria-controls="services"
            aria-selected={activeTab === "services"}
            className={`inline-block p-4 ${
              activeTab === "services"
                ? "text-blue-600 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500"
                : "hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            }`}
            onClick={() => handleTabClick("services")}>
            We empower product Teams
          </button>
        </li>
        <li className="mr-2">
          <button
            id="statistics-tab"
            data-tabs-target="#statistics"
            type="button"
            role="tab"
            aria-controls="statistics"
            aria-selected={activeTab === "statistics"}
            className={`inline-block p-4 ${
              activeTab === "statistics"
                ? "text-blue-600 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500"
                : "hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            }`}
            onClick={() => handleTabClick("statistics")}>
            Our ultimate Goal
          </button>
        </li>
      </ul>
      <div id="defaultTabContent">
        <div
          className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 ${
            activeTab === "about" ? "block" : "hidden"
          }`}
          id="about"
          role="tabpanel"
          aria-labelledby="about-tab">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white">
            Powering innovation & trust at 200,000+ companies worldwide
          </h2>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
            We go to great lengths to ensure that all students and collaborators
            are respected. We advocate for fairness and opportunity. Skill
            Embassy strives to include all stakeholders in decision-making
            processes that impact their lives.
          </p>
        </div>

        <div
          className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 ${
            activeTab === "services" ? "block" : "hidden"
          }`}
          id="services"
          role="tabpanel"
          aria-labelledby="services-tab">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Powering innovation & trust at 200,000+ companies worldwide
          </h2>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
            We empower you learn , upskill and launch successful products.
          </p>
        </div>

        <div
          className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800 ${
            activeTab === "statistics" ? "block" : "hidden"
          }`}
          id="statistics"
          role="tabpanel"
          aria-labelledby="statistics-tab">
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Powering innovation & trust at 200,000+ companies worldwide
          </h2>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
            Our ultimate goal is to empower technologists from all backgrounds
            to succeed within the tech industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Identity;
