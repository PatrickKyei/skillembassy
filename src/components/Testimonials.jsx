import React from 'react';
import {FaUser, FaCode, FaPalette } from 'react-icons/fa'
import user1 from '../assets/patrick.jpg';
import user2 from '../assets/patrick.jpg';
import user3 from '../assets/patrick.jpg';

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      image: user1,
      name: 'John Doe',
      description: 'Product Manager',
      testimonial:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan urna at arcu interdum, id tincidunt mauris fermentum.',
      icon: <FaUser />,
    },
    {
      id: 2,
      image: user2,
      name: 'Jane Smith',
      description: 'Software Developer',
      testimonial:
        'Sed nec mi nec est tincidunt sollicitudin eu vitae urna. Pellentesque eget massa ullamcorper, pellentesque risus et, tempor sem.',
      icon: <FaCode />,
    },
    {
      id: 3,
      image: user3,
      name: 'Alex Johnson',
      description: 'Product Designer',
      testimonial:
        'Nulla tempor, lectus nec sollicitudin auctor, eros lorem aliquet metus, non malesuada sapien justo eget diam. Curabitur quis lorem ac ligula consequat condimentum.',
      icon: <FaPalette />,
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="py-6 px-4">
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                <div className="flex items-center text-gray-600">
                  {testimonial.icon}
                  <p>{testimonial.description}</p>
                </div>
              </div>
            </div>
            <p className="text-gray-700">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
