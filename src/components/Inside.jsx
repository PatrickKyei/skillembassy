import React from 'react';

const insideItems = [
  {
    title: '7 Days To Genius',
    description: 'go from beginner to intermediate as a creator. 7 days of lessons on viral content creation, creating your niche of one, and monetizing your brand with your expertise.',
  },
  {
    title: 'The Strategy Library',
    description: 'A library of 80+ strategies, trainings, and templates for branding, content creation, and monetization that we\'ve been building up for 3 years.',
  },
  {
    title: 'Live Streams',
    description: 'monthly live streams where the founders give one piece of little-known advice that leads to growth or revenue. This is followed by discussing common creator traps and Q&A.',
  },
  {
    title: 'Monthly Challenges (Testing)',
    description: 'at the start of each month we will have a community-wide challenge for content writing, habit formation, and lever-moving tasks associated with being a creator so you are held accountable.',
  },
  {
    title: 'Monthly Templates',
    description: 'get 5 content templates each month so you can refine your ideas, build more authority, and grow faster.',
  },
  {
    title: 'Content Drops',
    description: 'we curate the best content we find (that have pulled in followers) so you can emulate them under your own brand. You don\'t need to worry about finding top performing ideas.',
  },
  {
    title: 'Questions & Forum',
    description: 'get help from our top educators (trained in our methods and systems) on any question you have relating to any skill or topic as a creator. Never feel lost on what needs to be done to see progress.',
  },
];

export default function Inside() {
  return (
    <section id="inside-section" className="mt-20 scroll-mt-24 bg-black py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300 font-medium mb-6">
            WHAT'S INSIDE?
          </p>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white leading-[1.05]">
            Everything We Know About Being A Creator In One Space
          </h2>
        </div>

        <div className="space-y-4">
          {insideItems.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-slate-900/40 border border-white/5 p-6 backdrop-blur-sm transition hover:bg-slate-900/50 hover:border-white/10"
            >
              <div className="flex gap-4">
                {/* Checkmark */}
                <div className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                  <svg
                    className="h-3 w-3 text-emerald-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}