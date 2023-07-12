import React, { useState } from 'react';
import mentor1Image from '../assets/hakeem.jpeg';
import mentor2Image from '../assets/christy.jpg';
import mentor3Image from '../assets/christy.jpg';
import mentor4Image from '../assets/christy.jpg';

const Mentors = () => {
  const mentors = {
    mentor1: [
      {
        name: 'Edith Akati',
        title: 'Product Manager',
        company: 'mPharma',
        image: mentor1Image,
      },
      {
        name: 'Diego Martins',
        title: 'Senior Product Designer',
        company: 'Spotify',
        image: mentor2Image,
      },
      {
        name: 'Frank Arkhurst Odoom',
        title: 'Principal Software Consultant',
        company: 'Accede',
        image: mentor3Image,
      },
      {
        name: 'Davide Marchisio',
        title: 'Senior Product Manager',
        company: 'One Insurance Ltd.',
        image: mentor4Image,
      },
    ],
  };

  const [activeMentor, setActiveMentor] = useState(null);

  return (
    <div className="section pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="p-8 bg-gray-800 rounded-md">
          <h3 className="text-3xl font-medium mb-8 text-white">
            Our Mentors from Renowned Industries
          </h3>
          <p className="text-white">
            Our dedicated projects and discipline mentors will make sure you're on track.
            Along with check-ins, workshops, office hours, and more.
          </p>
          <a
            href="https://forms.gle/1u4vGT93avTTxWEd8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-8 flex items-center text-black bg-white px-6 py-3 rounded-md">
              <span className="mr-2">JOIN AS A MENTOR</span>
              <i className="el-icon-user"></i>
            </button>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {mentors.mentor1.map((mentor, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setActiveMentor(index)}
              onMouseLeave={() => setActiveMentor(null)}
            >
              <img
                src={mentor.image}
                alt=""
                className="rounded-full w-12 h-12 mr-3 cursor-pointer"
              />
              {activeMentor === index && (
                <div className="absolute p-2 bg-white rounded-lg shadow-lg top-0 left-0 mt-[-1.25rem] ml-[-1.25rem]">
                  <h3 className="font-bold text-lg">{mentor.name}</h3>
                  <p className="text-gray-500">
                    {mentor.title} <br />
                    <span className="font-semibold">{mentor.company}</span>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentors;
