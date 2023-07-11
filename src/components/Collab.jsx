import React from "react";

const Collab = () => {
  return (
    <div className="w-full pb-12 mb-12">
      <div className="flex flex-col md:flex-row w-full max-w-[70rem]">
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="image"
            className="w-full h-auto rounded-md object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-8">
          <h2 className="text-blue-gray-700 text-4xl font-bold mb-4">
            No Tech Skills? No Problem.
          </h2>
          <h4 className="text-blue-gray-700 text-2xl font-bold mb-2">
            We want to empower you to use technology to improve the way you live
            and work.
          </h4>
          <p className="text-gray-600 mb-8">
            Maybe like you, you want to learn how to edit your documents, reply
            emails, or set up your business online. Technology has the power to
            make everyone's life better.
          </p>
          <a href="#" className="inline-block">
            <button
              type="button"
              className="font-bold bg-black text-sm text-white mx-[10px] py-[10px] px-[30px] rounded-md md:text-base hover:drop-shadow-xl">
              Start Today
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Collab;
