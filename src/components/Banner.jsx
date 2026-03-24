import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return isVisible ? (
    <div className="fixed bottom-2 left-0 right-0 z-50">
      <div className="container bg-white opacity-95 rounded-lg max-w-[1170px] mx-auto flex justify-center items-center border border-gray-200 shadow-lg">
        <section className="mb-0">
          <div className="py-2 text-center text-gray-900">
            
            <div className="flex items-center justify-center gap-3">
              <div className="font-bold text-sm text-neutral-100 mx-[5px] py-[10px] px-[30px] rounded-sm">
                 <a
                  href="https://paystack.shop/pay/skillembassy-membership"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-600"
                >Join</a> our vibrant community of learners and builders. 
               
              </div>
              <button className="bg-gray-200 p-1 rounded-full" onClick={handleDismiss}>
                <MdClose className="text-gray-700" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  ) : null;
};

export default Banner;