import React from "react";
import Hakeem from "../assets/hakeem.jpeg";
import Christiana from "../assets/christy.jpg";
import Emmanuel from "../assets/eunit.jpg";

const testimonials = [
  {
    id: 1,
    name: 'Christiana Sunbabaara',
    image: Christiana,
    testimonial: 'This is the best learning platform I have ever worked with. Everything is professional and done at ease.',
  },
  {
    id: 2,
    name: 'Emmanuel Uchenna',
    image: Emmanuel,
    testimonial: 'Nice coaching, good mentors and all round focused people at work. I am enjoying the journey.',
  },
  {
    id: 3,
    name: 'Hakeem Adjei',
    image: Hakeem,
    testimonial: 'I enjoyed the service and the opportunity Skill Embassy offers. I think as a platform that is seeking to breach the gap and provide a solution helping potential professionals in tech find a foot or experience. Apart from communication concerns, I think it can help young individuals willing to contribute to a team build their case study.',
  },
  // Add more testimonial objects as needed
];

function Testimonials() {
  return (
    <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center py-5">
      <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-3xl md:text-3xl font-bold mb-5 text-black font-poppins">What our learners s say</h1>
            <h3 className="text-xl mb-5 font-light font-poppins">Don't take our word for it.</h3>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-black ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-black ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-black"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-black ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-black ml-1"></span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full mx-auto rounded-lg bg-white font-poppins border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src={testimonial.image} alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm font-poppins text-gray-600">{testimonial.name}</h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                    {testimonial.testimonial}
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
