import React from 'react';

import Google from "../assets/google.png";
import Figma from "../assets/figma.png";
import Github from "../assets/github.png";
import Canva from "../assets/canva.png";
import Miro from "../assets/miro.png";
import Trello from "../assets/trello.png";



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
  // Add more partner data as needed
];

const Partners = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 className="text-neutral-100 mb-16 text-4xl font-semibold">Powered by</h2>

        <div className="grid items-center gap-2 grid-cols-2 md:grid-cols-2 lg:grid-cols-6">
          {partnerData.map((partner, index) => (
            <div key={index} className="mb-0 lg:mb-0">
              <img
                src={partner.src}
                className="px-6 md:px-12"
                alt={partner.alt}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Partners;
