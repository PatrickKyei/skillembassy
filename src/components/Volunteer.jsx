import React from "react";

const VolunteerCard = ({ title, imageUrl, description }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <img
          className="rounded-t-lg"
          src={imageUrl}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-neutral-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

const Volunteer = () => {
  const volunteerItems = [
    {
      title: 'Women In Tech',
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
    },
    {
      title: 'Inclusive Education',
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      description: 'We provide access to education by utilizing accessibility tools and assistive technologies that cater to individuals with disabilities.'
    },
    {
      title: '1000 Pledge',
      imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      description: 'Explore how AI is transforming various industries and learn about its potential impact on business operations.'
    }
    // Add more volunteer items as needed
  ];

  return (
    <div className="grid mt-12 gap-4 md:grid-cols-1 lg:grid-cols-3">
      {volunteerItems.map((item, index) => (
        <div key={index}>
          <VolunteerCard
            title={item.title}
            imageUrl={item.imageUrl}
            description={item.description}
          />
        </div>
      ))}
    </div>
  );
};

export default Volunteer;