import React from 'react';
import Classes from '../assets/classes.png'

const Role = () => {
  return (
    <div className="flex flex-col items-center my-20 font-poppins lg:my-[150px]">
      <div className="flex flex-col gap-6">
        <div className="max-w-full bg-white shadow-lg rounded-lg py-16 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3 p-10">
              <img
                src={Classes}
                alt="Hero Image"
                className="w-full object-cover rounded" 
              />
            </div>
            <div className="p-8 md:w-3/5 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-6">Step into a role. Work with a group with your own Product Manager, Developer and Designer.</h2>
              <p className="text-gray-700 leading-relaxed">
              We want to empower and trust students, just as they themselves, and the unique experiences they have brought about, to make an absolute difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Role;

