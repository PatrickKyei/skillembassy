import React from 'react';
import { FaPhone } from 'react-icons/fa';

const Advisor = () => {
  return (
    <div className="flex flex-col items-center my-20">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg py-8 px-10 sm:py-10 sm:px-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-center">
          WE OFFER A WIDE VARIETY OF PROGRAMS AND COURSES BUILT ON ADAPTIVE CURRICULUM
        </h2>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6 text-center">
          SPEAK TO A LEARNING ADVISOR
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center">
          <button className="flex items-center mt-4 sm:mt-0 bg-blue hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2">
            <FaPhone className="mr-2" />
            SCHEDULE A 1:1 CALL
          </button>
          <button className="flex items-center mt-4 sm:mt-0 bg-blue hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ml-2">
            <FaPhone className="mr-2" />
            JOIN A Q&A SESSION
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advisor;
