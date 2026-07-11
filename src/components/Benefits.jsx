import React from 'react';

const courseTopics = [
  {
    title: 'Content Writing',
    description: 'become a freelance writer, ghostwriter, or social media manager. Learn how to create short or long form content for social media.',
  },
  {
    title: 'Audience Building',
    description: 'the one thing holding most businesses back from succeeding on social media.',
  },
  {
    title: 'Branding',
    description: 'become a brand designer or brand consultant. Learn how to make your brand stand out by leveraging your personality.',
  },
  {
    title: 'Newsletter Writing',
    description: 'become an email marketer, ghostwriter, or do guest posts in publications.',
  },
  {
    title: 'Lead Magnet Creation',
    description: 'help people build their email list and land clients.',
  },
  {
    title: 'Digital Marketing',
    description: 'understand promotions, audience nurturing, and product launches.',
  },
  {
    title: 'Offer Creation',
    description: 'Create digital product or service that sells (like freelancing, consulting, cohorts, courses, eBooks, and more).',
  },
  {
    title: 'Sales & Funnels',
    description: 'Learn the sales process and how to turn leads from cold to hot with qualification, emails, and manual outreach.',
  },
  {
    title: 'Copywriting',
    description: 'become a funnel builder, write landing pages, and use persuasion to make more sales.',
  },
  {
    title: 'Combine Them All',
    description: 'you can create irresistible offers that others can\'t compete with.',
  },
];

export default function Benefits() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tighter text-white leading-[1.05] text-center">
        What's Inside Skillembassy &amp; the Community Library?
      </h2>

      <p className="mt-6 text-xl text-slate-300 text-center max-w-3xl mx-auto leading-relaxed">
        These are the skills and topics you will learn in Skillembassy.{' '}
        <span className="font-medium text-white">
          You can use these to build your own business, or use them as topics and skills that you teach and sell (with enough practice).
        </span>
      </p>

      <div className="mt-12 space-y-8 text-left">
        {courseTopics.map((topic, index) => (
          <div key={index} className="flex gap-4">
            <div className="mt-2 h-3 w-3 flex-shrink-0 rounded-full bg-violet-400" />
            <div>
              <span className="text-[1.35rem] font-semibold text-white">
                {topic.title}
              </span>
              <span className="text-[1.35rem] font-medium text-slate-400 mx-2">–</span>
              <span className="text-[1.1rem] leading-relaxed text-slate-300">
                {topic.description}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-16 text-xl font-medium text-white text-center max-w-3xl mx-auto leading-relaxed">
        At Skillembassy, you will learn all of the skills that turn you into a future-proof creator (if you execute with consistency).
      </p>
    </div>
  );
}
