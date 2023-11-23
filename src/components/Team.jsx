import React from 'react';

const TeamMember = ({ name, role, imageUrl, company, location }) => {
  return (
    <div className="relative block rounded-sm p-4 bg-neutral-900">
      <div className="flex-row items-center lg:flex">
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-5/12 lg:pr-4">
          <img src={imageUrl} alt={name} className="mb-6 w-full rounded-sm lg:mb-0" />
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
          <h5 className="text-neutral-50 mb-2 text-lg font-bold">{name}</h5>
          <p className="mb-1 text-neutral-100 text-base">{role}</p>
          <p className="mb-1 text-purple-300 text-sm">{company}</p>
          <p className="mb-2 text-neutral-100 text-xs">{location}</p>
        </div>
      </div>
    </div>
  );
};

const TeamSection = ({ sectionTitle, teamMembers }) => {
  return (
    <div className="container my-18 mx-auto md:px-6">
      <section className="mb-14 text-left lg:text-left">
        <h2 className="text-neutral-100 mb-4 text-left text-2xl font-semibold">{sectionTitle}</h2>
        <div className="grid gap-2 md:grid-cols-3 xl:gap-x-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="mb-6 lg:mb-0">
              <TeamMember
                name={member.name}
                role={member.role}
                imageUrl={member.imageUrl}
                company={member.company}
                location={member.location}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const Team = () => {
  const advisoryTeamMembers = [
    {
      name: 'Martin Busas',
      role: 'Advisory Member',
      imageUrl: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.jpg',
      company: 'Snr Consultant - Trout',
      location: 'Germany',
    },
    {
      name: 'Patrick Kyei',
      role: 'Advisory Member',
      imageUrl: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.jpg',
      company: 'Snr PM - Klicks Africa',
      location: 'Ghana',
    },
    {
      name: 'Charles Obeng',
      role: 'Advisory Member',
      imageUrl: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.jpg',
      company: 'Snr Frontend Developer - Brij',
      location: 'Ghana',
    },
    // Add more advisory team members as objects in the advisoryTeamMembers array
  ];

  const communityAdvocatesMembers = [
    {
      name: 'Reuben Frimpong',
      role: 'Advocate',
      imageUrl: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.jpg',
      company: 'Fullstack Developer - BGL',
      location: 'Accra, Ghana',
    },
    // Add more community advocate team members as objects in the communityAdvocatesMembers array
  ];

  const productsOperationsMembers = [
    {
      name: 'Christiana Sunbabara',
      role: 'Product Operations',
      imageUrl: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.jpg',
      company: 'Community Facilitator',
      location: 'Ghana',
    },
    {
      name: 'Pearl Doe',
      role: 'General Operations',
      imageUrl: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.jpg',
      company: 'Lecturer - All Nations Uni.',
      location: 'Ghana',
    },
    // Add more product & operations team members as objects in the productsOperationsMembers array
  ];

  return (
    <div>
      <TeamSection sectionTitle="Advisory Team" teamMembers={advisoryTeamMembers} />
      <TeamSection sectionTitle="Community Advocates" teamMembers={communityAdvocatesMembers} />
      <TeamSection sectionTitle="Products & Operations" teamMembers={productsOperationsMembers} />
    </div>
  );
};

export default Team;
