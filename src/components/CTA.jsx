import React from 'react';
import Classes from '../assets/classes.png';
import Image1 from '../assets/classes.png';
import Image2 from '../assets/classes.png';
import Image3 from '../assets/classes.png';



const CTA = () => {
  return (
    <div className='pb-12 my-12'>

      <div className="flex flex-col lg:flex-row justify-between pb-12 items-center">
      <div className="w-full pr-12 pb-12">
        <h2 className="text-3xl font-bold mb-4">Step Into A Role</h2>
        <h3 className="text-lg text-gray-700 mb-4">Step into a role. Work with a group with your own Product Manager, Developer and Designer.</h3>
        <p className="text-base text-gray-600 mb-4">We want to empower and trust students, just as they themselves, and the unique experiences they have brought about, to make an absolute difference..</p>
        <button className="px-6 py-3 bg-black text-white font-bold rounded">Appy Now →</button>
      </div>

        <div>
          <img src={Classes} alt="CTA Image" className="w-full rounded-md" />
        </div>

      </div>
      {/* 3 images */}

      <div className="flex justify-between">
        <div className="w-1/4 pr-4">
          <img src={Image1} alt="Image 1" className="w-full rounded-sm" />
        </div>
        <div className="w-1/2 px-4">
          <img src={Image2} alt="Image 2" className="w-full rounded-md" />
        </div>
        <div className="w-1/4 overflow-hidden pl-4">
          <img src={Image3} alt="Image 3" className="w-full rounded-md" />
        </div>
      </div>
      
    </div>
  );
};

export default CTA;
