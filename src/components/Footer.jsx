import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="text-gray-800">
                Skill Embassy empowers and prepares product managers, product
                designers, and software developers for success within the tech
                industry.
              </div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-black font-medium mb-1">Careers</h6>
                <ul>
                  <li className="mb-1">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-black transition duration-150 ease-in-out">
                      Software Development
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-black transition duration-150 ease-in-out">
                      Product Management
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-black transition duration-150 ease-in-out">
                      Product Design
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-black transition duration-150 ease-in-out">
                      Cybersecurity
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-black transition duration-150 ease-in-out">
                      Data Science
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-black transition duration-150 ease-in-out">
                      DevOps
                    </a>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="text-black font-medium mb-1">Help</h6>
                <ul>
                  <li className="mb-1">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-black transition duration-150 ease-in-out">
                      About skill embassy
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-black transition duration-150 ease-in-out">
                      Podcasts
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-black transition duration-150 ease-in-out">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-black transition duration-150 ease-in-out">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="text-black font-medium mb-1">Contact Us</h6>
                <ul>
                  <li className="mb-1">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-black transition duration-150 ease-in-out">
                      We’re 100% remote but send mail here:
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-black transition duration-150 ease-in-out">
                      skill@skillembassy.org +44 345 678 903
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-black transition duration-150 ease-in-out">
                      SchenkendorfstraÃŸe 7 34119 Kassel, Germany
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <a
                  href="#"
                  className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-gray-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Twitter">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="w-8 h-8 fill-current"
                  />
                </a>
              </li>
              <li className="ml-4">
                <a
                  href="#"
                  className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-gray-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Github">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="w-8 h-8 fill-current"
                  />
                </a>
              </li>
              <li className="ml-4">
                <a
                  href="#"
                  className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-gray-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Github">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="w-8 h-8 fill-current"
                  />
                </a>
              </li>
              <li className="ml-4">
                <a
                  href="#"
                  className="flex justify-center items-center text-white bg-gray-800 hover:text-gray-100 hover:bg-gray-600 rounded-full transition duration-150 ease-in-out"
                  aria-label="Github">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="w-8 h-8 fill-current"
                  />
                </a>
              </li>
            </ul>

            {/* Attribution */}
            <div className="text-sm text-black">
              <p>© 2023 Skill Embassy. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
