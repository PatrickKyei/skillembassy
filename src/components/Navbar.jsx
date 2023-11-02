import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdViewHeadline, MdClose } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full flex justify-between items-center bg-neutral-950 fixed top-0 py-4 z-50 px-12 bg-opacity-200">
        <div>
          <Link to="/" className="font-bold text-3xl text-neutral-50">
            Skill Embassy
          </Link>
        </div>
        
        {/* <div>
          <ul className="hidden text-neutral-50 w-full flex-row justify-center gap-5 md:flex">
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/business">Business</Link>
            </li>
            <li>
              <Link to="/inclusion">Inclusion</Link>
            </li>
            <li>
              <Link to="/ourstory">Our Story</Link>
            </li>
            <li>
              <Link to="/application">Application</Link>
            </li>
          </ul>
        </div> */}
        <div>
      
            <Link to="application">
            <button
              type="button"
              className="hidden text-purple-800 font-semibold bg-purple-100 text-base py-[10px] px-[30px] rounded-sm hover:drop-shadow-xl md:flex">
              Join Cohort
            </button>
            </Link>
        </div>
      </div>

      <div
        onClick={handleNav}
        className="flex items-center cursor-pointer md:hidden">
        {!nav ? (
          <MdClose className="text-white" size={30} />
        ) : (
          <MdViewHeadline className="text-white" size={30} />
        )}
      </div>

      {/*Mobie View*/}

      <div
        className={
          !nav
            ? "fixed flex flex-col items-center p-4 top-16 top-16 w-[100%] border-b-2 bg-wblue h-[250px] ease-in-out duration-300 z-10 md:hidden"
            : "fixed bottom-[-100%]"
        }>
        <div className="text-center bg-gray-900 bg-opacity-10 rounded w-[40%] shadow-black px-2 py-2.5">
        <Link to="application">
            <button
              type="button"
              className="hidden text-purple-800 font-semibold bg-purple-100 text-base py-[10px] px-[30px] rounded-sm hover:drop-shadow-xl md:flex">
              Join Cohort
            </button>
            </Link>
            
            </div>
        {/* <ul className="w-full flex text-neutral-950 flex-col py-6 px-4">
          <li>
            <Link to="/careers">Careers</Link>
          </li>
          <li>
            <Link to="/business">Business</Link>
          </li>
          <li>
            <Link to="/inclusion">Inclusion</Link>
          </li>
          <li>
            <Link to="/ourstory">Our Story</Link>
          </li>
          <li>
            <Link to="/application">Application</Link>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default Navbar;
