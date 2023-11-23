import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleToggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <div className="bg-neutral-950 border-b border-neutral-900 text-white p-4 fixed top-0 left-0 right-0 z-50">
      {/* Flex container for logo, hamburger, and button */}
      <div className="flex flex-col md:flex-row items-center justify-between md:space-x-4">
        {/* Logo and Hamburger menu icon for small screens */}
        <div className="flex items-center">
          <Link to="/" className="block text-xl font-bold mr-32 mb-0 mr-2 md:mr-0">
            SKILLEMBASSY
          </Link>
          
          {/* Hamburger menu icon for small screens */}
          <div className="md:hidden cursor-pointer">
            {isNavOpen ? (
              <MdClose onClick={handleToggleNav} className="text-white" size={30} />
            ) : (
              <MdMenu onClick={handleToggleNav} className="text-white" size={30} />
            )}
          </div>
        </div>

        {/* List of elements (visible on smaller screens) */}
        <ul className={`flex flex-col ${isNavOpen ? 'block' : 'hidden'} md:flex md:flex-row md:space-x-4 md:items-center`}>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/business">For Business</Link>
          </li>
          <li>
            <Link to="/inclusion">Inclusion</Link>
          </li>
          <li>
            <Link to="/ourstory">Our Story</Link>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
        </ul>

        {/* Button (visible on larger screens) */}
        <Link to="/application">
          <button
            className={`font-semibold rounded-sm bg-purple-100 text-purple-800 px-4 py-2 rounded-full mt-4 hidden md:block`}
          >
            Join Cohort
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
