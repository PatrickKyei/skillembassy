import React from "react";
import Patrick from "../assets/patrick.png";
import Reuben from "../assets/reuben.png";
import Martin from "../assets/martin.png";
import Pearl from "../assets/pearl.png";
import George from "../assets/george.png";
import Christiana from "../assets/christiana-2.png";

const TeamMember = ({ name, role, bio, avatarSrc, socialLinks }) => {
  return (
    <div className="items-center bg-neutral-950 rounded-lg shadow sm:flex">
      {/* <a href="#"> */}
      <div>
        <img
          className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
          src={avatarSrc}
          alt={`${name} Avatar`}
        />
        </div>
      {/* </a> */}
      <div className="p-4">
        <h3 className="text-xl font-bold tracking-tight text-neutral-100">
          {name}
        </h3>
        <span className="text-neutral-200">{role}</span>
        <p className="mt-3 mb-4 font-light text-neutral-300">{bio}</p>
        <ul className="flex space-x-4 sm:mt-0">
          {socialLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.url}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Teams = () => {
  const teamMembers = [
    {
      name: "Patrick Kyei",
      role: "Accra, Ghana",
      // bio: "Patrick is a product development manager who has served on other teams as a project manager.",
      avatarSrc: Patrick,
      socialLinks: [
        {
          url: "https://www.linkedin.com/in/thepatrickkyei/",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                clipRule="evenodd"
              />
            </svg>
          ),
        },
      ],
    },
    {
      name: "Martin Bussas",
      role: "Frankfurt, Germany",
      // bio: "Patrick is a product development manager who has served on other teams as a project manager.",
      avatarSrc: Martin,
      socialLinks: [
        {
          url: "https://www.linkedin.com/in/martin-bussas-95a30020/",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                clipRule="evenodd"
              />
            </svg>
          ),
        },
      ],
    },
    {
      name: "Freda Selasie",
      role: "Accra, Ghana",
      // bio: "Patrick is a product development manager who has served on other teams as a project manager.",
      avatarSrc: Pearl,
      socialLinks: [
        {
          url: "https://www.linkedin.com/in/selasie-freda/",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                clipRule="evenodd"
              />
            </svg>
          ),
        },
      ],
    },
    {
      name: "Reuben Frimpong",
      role: "Accra, Ghana",
      // bio: "Patrick is a product development manager who has served on other teams as a project manager.",
      avatarSrc: Reuben,
      socialLinks: [
        {
          url: "https://www.linkedin.com/in/frimpongreuben/",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                clipRule="evenodd"
              />
            </svg>
          ),
        },
      ],
    },
    {
      name: "George Mavungu",
      role: "Kansas, US",
      // bio: "Patrick is a product development manager who has served on other teams as a project manager.",
      avatarSrc: George,
      socialLinks: [
        {
          url: "https://www.linkedin.com/in/georgemavungu/",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                clipRule="evenodd"
              />
            </svg>
          ),
        },
      ],
    },
    {
      name: "Christiana Sunbabaara",
      role: "Patiala, India",
      // bio: "Patrick is a product development manager who has served on other teams as a project manager.",
      avatarSrc: Christiana,
      socialLinks: [
        {
          url: "https://www.linkedin.com/in/christiana-sunbabaara-9a0769201/",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                clipRule="evenodd"
              />
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-neutral-100">
            Meet the Team
          </h2>
          <p className="font-light text-neutral-200 lg:mb-16 sm:text-xl">
          You're going to get practical experience from industry experts and that distinguishes you from everyone else.
          </p>
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
