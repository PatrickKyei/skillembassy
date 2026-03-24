import React from 'react';

const featureItems = [
  {
    title: 'Easy Withdrawal',
    description: 'Receive your payments instantly into your local bank account.',
    emoji: '💸',
  },
  {
    title: 'eLearning Platform',
    description: 'Get access to study in a better learning environment while tracking your progress.',
    emoji: '🖥️',
  },
  {
    title: 'Link Shortener',
    description: 'Shorten your affiliate or product links from your dashboard using our in-built product link shortener.',
    emoji: '🔗',
  },
  {
    title: 'Live Feed',
    description: 'Engage, network and connect with like-minded individuals.',
    emoji: '💬',
  },
];

const KeyFeatures = () => {
  return (
    <section className="w-full bg-neutral-950 py-16 px-4 md:px-8" id="key-features">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {featureItems.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 text-center shadow-[0_4px_24px_rgba(0,0,0,0.25)] hover:border-neutral-700 hover:shadow-lg transition-all duration-250"
          >
            <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full border border-dashed border-emerald-400 text-2xl">{feature.emoji}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
