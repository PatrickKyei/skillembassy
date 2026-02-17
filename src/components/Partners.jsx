import React from 'react';

import Google from "../assets/google.png";
import Figma from "../assets/figma.png";
import Github from "../assets/github.png";
import Canva from "../assets/canva.png";
import Miro from "../assets/miro.png";
import Trello from "../assets/trello.png";
import Facebook from "../assets/facebook.png";



const partnerData = [
  {
    src: Google,
    alt: 'Google - logo',
  },
  {
    src: Figma,
    alt: 'Figma - logo',
  },
  {
    src: Github,
    alt: 'Github - logo',
  },
  { src: Canva,
  alt: 'Canva-logo'},
  {src: Trello,
  alt: 'Trello-logo'},
  {src: Miro,
  alt: 'Miro-logo'},
    {src: Facebook,
  alt: 'Facebook-logo'},
  // Add more partner data as needed
];

const Partners = () => {
  // duplicate the list to create a seamless scrolling loop
  const doubled = [...partnerData, ...partnerData];

  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-24 text-center">
        <h2 className="text-neutral-100 mb-8 text-4xl font-semibold">Powered by</h2>

        <div className="overflow-hidden">
          <div
            className="partner-track flex items-center"
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            role="list"
          >
            {doubled.map((partner, index) => (
              <div key={index} className="flex-shrink-0 w-1/6 flex justify-center items-center py-6 md:py-8">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="h-20 md:h-24 lg:h-28 px-6 md:px-8 transition-all duration-300 filter grayscale hover:grayscale-0 object-contain max-w-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* inline styles for the scrolling animation */}
        <style>{`\
          .partner-track { \n\
            width: max-content;\n\
            animation: scroll 30s linear infinite;\n\
          }\n\
          .partner-track:hover { animation-play-state: paused; }\n\
          @keyframes scroll {\n\
            0% { transform: translateX(0); }\n\
            100% { transform: translateX(-50%); }\n\
          }\n\
        `}</style>
      </section>
    </div>
  );
};

export default Partners;
