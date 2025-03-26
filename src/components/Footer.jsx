import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="py-12 md:py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="text-neutral-50">
                Skillembassy empowers and prepares creators and builders in the digital economy for the future of work.
              </div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
              {/* 2nd block */}
              {/* <div className="text-sm">
                <h6 className="text-purple-300 font-medium mb-1">Careers</h6>
                <ul>
                  <li className="mb-1">
                    <a
                      href="https://nas.io/skillembassy"
                      className="text-neutral-200 hover:text-neutral-50 transition duration-150 ease-in-out">
                      Software Development
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="https://nas.io/skillembassy"
                      className="text-neutral-200 hover:text-neutral-50 transition duration-150 ease-in-out">
                      Product Management
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="https://nas.io/skillembassy"
                      className="text-neutral-200 hover:text-neutral-50 transition duration-150 ease-in-out">
                      Product Design
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="https://nas.io/skillembassy"
                      className="text-neutral-200 hover:text-neutral-50 transition duration-150 ease-in-out">
                      Cybersecurity
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="https://nas.io/skillembassy"
                      className="text-neutral-200 hover:text-neutral-50 transition duration-150 ease-in-out">
                      Data Science
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="https://nas.io/skillembassy"
                      className="text-neutral-200 hover:text-neutral-50 transition duration-150 ease-in-out">
                      DevOps
                    </a>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              {/* <div className="text-sm">
                <h6 className="text-purple-300 font-medium mb-1">Quick Links</h6>
                <ul>
                  <li className="mb-1">
                    <a
                      href="#"
                      className="text-neutral-100 hover:text-neutral-50 transition duration-150 ease-in-out">
                      About skillembassy
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="https://open.spotify.com/show/0RNznL55q6ryo6EIqTjGkn"
                      className="text-neutral-200 hover:text-neutral-50 transition duration-150 ease-in-out">
                      Podcasts
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="#"
                      className="text-neutral-200 hover:text-neutral-50 transition duration-150 ease-in-out">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="#"
                      className="text-neutral-200 hover:text-neutral-50 transition duration-150 ease-in-out">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div> */}

              {/* 4th block */}
              {/* <div className="text-sm">
                <h6 className="text-purple-300 font-medium mb-1">Contact Us</h6>
                <ul>
                  <li className="mb-1">
                    <a
                      href="#"
                      className="text-neutral-100">
                      We’re 100% remote but send mail here:
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="#"
                      className="text-neutral-400">
                      skill@skillembassy.org +44 345 678 903
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      href="#"
                      className="text-neutral-400 hover:text-neutral-50 transition duration-150 ease-in-out">
                      Schenkendorfstrasse 7 34119 Kassel, Germany
                    </a>
                  </li>
                </ul>
              </div> }*/}
            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <a
                  href="https://www.linkedin.com/company/skillembassy/"
                  className="flex justify-center items-center text-neutral-100 hover:text-neutral-50 hover:bg-neutral-800 rounded-full transition duration-150 ease-in-out"
                  aria-label="Linkedin">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="w-6 h-6 fill-current"
                  />
                </a>
              </li>
              <li className="ml-4">
                <a
                  href="https://web.facebook.com/skillembassy/"
                  className="flex justify-center items-center text-neutral-100 hover:text-neutral-50 hover:bg-neutral-800 rounded-full transition duration-150 ease-in-out"
                  aria-label="Facebook">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="w-6 h-6 fill-current"
                  />
                </a>
              </li>
              {/* <li className="ml-4">
                <a
                  href="https://instagram.com/skillembassy/"
                  className="flex justify-center items-center text-neutral-100  hover:text-neutral-50 hover:bg-neutral-800 rounded-full transition duration-150 ease-in-out"
                  aria-label="Instagram">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="w-6 h-6 fill-current"
                  />
                </a>
              </li> */}
              {/* <li className="ml-4">
                <a
                  href="https://twitter.com/skillembassy"
                  className="flex justify-center items-center text-neutral-100 hover:text-neutral-50 hover:bg-neutral-800 rounded-full transition duration-150 ease-in-out"
                  aria-label="Twitter">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="w-6 h-6 fill-current"
                  />
                </a>
              </li> */}
            </ul>

            {/* Attribution */}
            <div className="text-sm text-neutral-50">
              <p>©  {currentYear} Skillembassy. All rights reserved.</p>
              <p>
                Privacy and 
                <a
                  href="#"
                  class=""
                  data-te-toggle="tooltip"
                  title="This website is intended to provide general information about Skillembassy.org, its products and services. They are not intended to provide professional advice or instructions regarding the products and services sold. For special inquiries about the products and services, please contact Skillembassy.org directly. We strive to provide you with accurate and up-to-date information. However, Skillembassy.org cannot be held liable for damages related to this information. Therefore, we do not assume any warranty or guarantee, either expressly or implicitly, and make no representations whatsoever with regard to the correctness and completeness of the information provided or referred to. Any use of our website is at the user's own risk. Neither Skillembassy.org nor any other party involved in the production, provision, design and maintenance of the entire Internet offer or individual parts thereof is liable in any way for any direct, indirect, fault-based or no-fault damage caused due to access to the website , the use, the impossibility of using the Internet offer from Skillembassy.org We reserve the right to change the content of this website without prior notice whenever we deem it appropriate. Liability does not arise from this.">
                  {" "}
                  Terms
                </a> {" "}of use
              </p>

           {/* Imprints */}
           <div className="mt-4">
                <p>Skillembassy, Schenkendorfstrasse 7</p>
                <p>34119 KASSEL, GERMANY</p>
                <p>Phone: +49 561 810497-11</p>
                <p>E-mail: martin@skillembassy.de</p>
                <p>Authorised to represent: Patrick Kyei, Martin Bussas</p>
                <p>Data Protection Officer: Reuben Frimpong</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
