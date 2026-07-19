import React from 'react';

const focusAreas = [
  {
    title: 'Marketing and Sales',
    description:
      'Learn how to package up your knowledge and skills into something you can sell that nearly force people to take out their credit cards (even if you have the weirdest interests and skillset).',
  },
  {
    title: 'Customer Acquisition',
    description:
      'You can’t sell your products & services without people seeing them... learn how to automate your sales and close deals without a large social media following (even though you’ll learn how to grow one).',
  },
  {
    title: 'Free Distribution',
    description:
      'Understand how to build your own traffic sources (you don’t have a business if you don’t have traffic) so you don’t have to learn things like paid ads or other skill-heavy methods.',
  },
  {
    title: 'Mental Performance',
    description:
      'Reprogram your thoughts to serve you, understand and leverage your cognitive biases, and become a laser-focused machine (because modern society is good at throwing unimportant distractions your way).',
  },
  {
    title: 'Lifestyle Design',
    description:
      'Accomplish your 3-year goals in 3 months by implementing our 6-step process (so you can focus deeply, have radiating energy, and craft your perfect day).',
  },
];

export default function Guarantee() {
  return (
    <section id="guarantee-section" className="bg-black py-20 max-w-5xl mx-auto px-2 md:px-8 lg:px-8">
        <div className="text-center">
          <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
            How Do We Nearly Guarantee These Kinds Of Results?
          </h2>
          <p className="mt-6 text-xl text-slate-300 leading-relaxed">
            <strong>The 5 Key Focus Areas For Optimizing Your Workflow, Cultivating A Distraction-Free Mind, And Monetizing Your Skillset</strong>
            <br />
            <span className="block mt-4">
              <strong className="text-white">Entrepreneurs tend to focus on what they </strong>
              <em>think</em>
              <strong className="text-white"> will get them results. Not what&apos;s proven to get results.</strong>
            </span>
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {focusAreas.map((area, index) => (
            <div key={index} className="flex gap-4 rounded-3xl border border-white/10 bg-black/60 p-6">
              <div className="flex h-8 w-12 items-center justify-center rounded-3xl bg-amber-500 text-black text-lg font-bold">
                {index + 1}
              </div>
              <div>
                <p className="text-xl font-semibold text-white">{area.title}:</p>
                <p className="mt-2 text-slate-300 leading-7">{area.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 space-y-6 text-slate-300 text-lg leading-8">
          <p>
            <strong>If you haven’t noticed already, </strong>
            <em>this isn’t all about the money.</em>
          </p>
          <p>Money is great, don’t get me wrong.</p>
          <p>
            But if it is not built on the foundation of self-development, you will struggle to maintain your results (and quite possibly lose that “spark” of passion you started out with).
          </p>
          <p>Like a relationship.</p>
          <p>You can’t work on yourself until you meet a man/woman just to let yourself go for life.</p>
          <p>You must commit to betterment.</p>
          <p>
            This is what results in a flourishing relationship, and in our case <em>A flourishing business.</em>
          </p>
        </div>
      
    </section>
  );
}
