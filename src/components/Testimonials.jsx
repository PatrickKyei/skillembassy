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
    <div className="min-w-screen min-h-screen flex items-center justify-center py-5">
      <div className="w-full border-t border-b border-gray-200 px-1 py-16 md:py-24 text-neurtal-50">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto" data-aos="fade-up">
            <h1 className="text-3xl md:text-3xl font-bold mb-5 text-neutral-50">Don't take our word for it.</h1>
            <h3 className="text-x text-neutral-50 l mb-5">Hear why learners like you love our full learning experience.</h3>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-neutral-50 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-neutral-50 ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-neutral-200"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-neutral-200 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-neutral-200 ml-1"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" data-aos="fade-up" data-aos-duration="1000">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full mx-auto rounded-sm bg-neutral border border-neutral-100 p-5 text-neutral-50 mb-6">
                <div className="flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-neutral-100">
                    <img src={testimonial.image} alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-neutral-50">{testimonial.name}</h6>
                  </div>
                </div>
                <div className="w-full">
                  <p>
                    <span className="text-lg leading-none italic font-bold text-neutral-50 mr-1">"</span>
                    {testimonial.testimonial}
                    <span className="text-lg leading-none italic font-bold text-neutral-50 ml-1">"</span>
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
