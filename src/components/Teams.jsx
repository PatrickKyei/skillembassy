import React from 'react';
import Patrick from "../assets/patrick.png";
import Reuben from "../assets/reuben.png";
import Martin from "../assets/martin.png";
import Pearl from "../assets/pearl.png";




const TeamMember = ({ name, role, bio, avatarSrc }) => {
  return (
    <div className="items-center bg-neutral-950 rounded-lg shadow sm:flex">
      <a href="#">
        <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={avatarSrc} alt={`${name} Avatar`} />
      </a>
      <div className="p-4">
        <h3 className="text-xl font-bold tracking-tight text-neutral-100">
          <a href="#">{name}</a>
        </h3>
        <span className="text-neutral-200">{role}</span>
        <p className="mt-3 mb-4 font-light text-neutral-300">{bio}</p>
        <ul className="flex space-x-4 sm:mt-0">
          <li>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
          </li>
          {/* Include other social icons here */}
        </ul>
      </div>
    </div>
  );
};

const Teams = () => {
  const teamMembers = [
    {
      name: 'Patrick Kyei',
      role: 'Product Dev. Manager',
      bio: 'Bonnie drives the technical strategy of the flowbite platform and brand.',
      avatarSrc: Patrick,
    },
    {
      name: 'Martin Busas',
      role: 'CTO',
      bio: 'Jese drives the technical strategy of the flowbite platform and brand.',
      avatarSrc: Martin
    },
    {
      name: 'Pearl Doe',
      role: 'Senior Front-end Developer',
      bio: 'Michael drives the technical strategy of the flowbite platform and brand.',
      avatarSrc: Pearl
    },
    {
      name: 'Reuben Frimpong',
      role: 'Marketing & Sale',
      bio: 'Lana drives the technical strategy of the flowbite platform and brand.',
      avatarSrc: Reuben
    }
  ];

  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-neutral-100">Meet the Team</h2>
          <p className="font-light text-neutral-200 lg:mb-16 sm:text-xl">Explore the whole collection of open-source web components and elements built with the utility classes from Tailwind</p>
        </div>
        <div className="grid gap-4 mb-6 lg:mb-16 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
