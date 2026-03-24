import React from 'react';

const userTypes = [
  {
    title: 'Creators',
    description: 'Write better newsletters, articles, scripts, and posts.',
  },
  {
    title: 'Writers',
    description: 'Find the right ideas when you need them for books & articles.',
  },
  {
    title: 'Marketers',
    description: 'Outline and draft emails, landing pages, and copywriting.',
  },
  {
    title: 'Teams',
    description: 'Collaborate on interconnected creative projects for innovative solutions.',
  },
  {
    title: 'Note-takers',
    description: 'Organize your digital life and have one place to save your ideas.',
  },
  {
    title: 'Students',
    description: 'Reference course material, take effective notes, and write compelling papers.',
  },
];

const Users = () => {
  return (
    <section className="w-full bg-neutral-950 py-24 px-4 md:px-8" id="users">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-neutral-100 mb-4 leading-tight">
            Used By Those Who Create Change{' '}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              With Words
            </span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {userTypes.map((user) => (
            <div
              key={user.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-12 text-center backdrop-blur-sm"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-100 mb-4">
                {user.title}
              </h3>
              <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                {user.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Users;
