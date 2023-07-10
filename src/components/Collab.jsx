import React from 'react';
import Classes from '../assets/classes.png'

const Collab = () => {
  return (
    <div className="flex flex-col items-center my-20 font-poppins lg:my-[150px]">
      <div className="flex flex-col gap-6">
        <div className="max-w-full bg-white rounded-lg py-16 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/3 p-10">
              <img
                src={Classes}
                alt="Hero Image"
                className="w-full object-cover rounded" 
              />
            </div>
            <div className="p-8 md:w-3/5 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-6">Collaborate with us</h2>
              <p className="text-gray-700 leading-relaxed">
              We have the ability to shape the next generation of innovators and thinkers. Let us collaborate to create, impact, and develop the next generation of engineers, managers and designers.
              </p>
              <div className='flex py-8'>
              <button
            type='button'
            className='font-bold bg-blue text-sm text-white border-[1px] py-[15px] px-[20px] rounded-full md:text-base hover:drop-shadow-xl' >
            Learn More
          </button>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collab;

