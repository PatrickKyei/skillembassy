import React from "react";
import Student from "../assets/student.png"

const Collab = () => {
  return (
    <div className="w-full pb-12 mb-12 border-t border-gray-200">
      <div className="flex py-12 flex-col md:flex-row w-full max-w-[70rem]" data-aos="fade-up">
        <div>
          <img
            src={Student}
            alt="image"
            className="w-full h-auto rounded-md object-cover"
          />
        </div>
        <div className="flex flex-col justify-center sm:p-8 pl-1 pt-8">
          <h2 className="text-gray-900 text-3xl font-bold mb-4">
            No Tech Skills? No Problem.
          </h2>
          <h4 className="text-gray-700 text-xl font-bold mb-2">
            We want to empower you to use technology to improve the way you live
            and work.
          </h4>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
            Maybe like you, you want to learn how to manage your documents, reply
            emails, or set up your business online. Technology has the power to
            make everyone's life better.
          </p>
          <a href="https://nas.io/skillembassy" className="inline-block">
            <button
              type="button"
              className="font-bold bg-gray-900 text-sm text-white mx-[1px] py-[10px] px-[30px] rounded-md md:text-base hover:drop-shadow-xl">
              Start Today
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Collab;