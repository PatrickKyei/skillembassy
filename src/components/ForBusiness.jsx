import React from 'react';
import {FaPhone} from 'react-icons/fa'
import Classes from '../assets/classes.png'

const ForBusiness = () => {
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
              <h2 className="text-2xl font-semibold mb-6">DEVELOP DIGITAL TALENT IN YOUR COMPANY</h2>
              <p className="text-gray-700 leading-relaxed">
              Accelerate the pace of your company's digital evolution with training that makes your team more agile, collaborative and innovative.              </p>
              <div className='flex py-8'>
              <button className="flex items-center mt-4 sm:mt-0 bg-blue hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ml-2">
            <FaPhone className="mr-2" />
            TALK TO US
          </button>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForBusiness;

