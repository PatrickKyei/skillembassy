import React from 'react';

const whoContent = [
  {
    text: "I'm convinced that the future of schooling will be done on the internet With creators as teachers…",
    className: '',
  },
  {
    text: "And each student can learn from those who align with their interests, worldview, and skill level until their needs inevitably change.",
    className: '',
  },
  {
    text: "Can you not see this happening already?",
    className: '',
  },
  {
    text: (
      <>
        People have <strong>lost trust in the traditional school system</strong> to secure their future. People are <strong>turning to creators to teach them</strong> valuable knowledge and skills.
      </>
    ),
    className: '',
  },
  {
    text: (
      <>
        The creators are <strong>attracting people with similar personalities</strong> for an optimal learning experience.
      </>
    ),
    className: '',
  },
  {
    text: (
      <>
        <strong>AI and automation are threatening labor jobs</strong> and enabling online businesses to do more with less employees.
      </>
    ),
    className: '',
  },
  {
    text: "People are realizing that the only way to secure their future is to acquire valuable skills, knowledge, and interests that they can pass down to others online.",
    className: '',
  },
  {
    text: "They aren't worried about becoming an influencer. They are dedicated to becoming a value creator.",
    className: '',
  },
  {
    text: (
      <>
        Have you not already learned from creators teaching things like <strong>marketing, sales, psychology, self-improvement, fitness, graphic design, video editing, photography, AI, woodworking, car building, no-code tools... or any other possible interest imaginable?</strong>
      </>
    ),
    className: '',
  },
  {
    text: "If you're on this page, there's a reason you got on this page, and it wasn't because you followed a paid ad to get here.",
    className: '',
  },
  {
    text: "You're here because you want to be here.",
    className: 'font-semibold',
  },
  {
    text: "We've gotten to a point in our own creator journey where we aren't really 'competing' with others. We are focused on building a software business.",
    className: '',
  },
  {
    text: "For that reason, we don't have anything to hide.",
    className: '',
  },
  {
    text: "You already have a writing, marketing, or creator business but aren't confident in the quality of your social media posts, newsletters, or content as a whole.",
    className: '',
  },
  {
    text: "We know the strategies that will help beginners turn this into their life's work.",
    className: '',
  },
  {
    text: "You don't have a system for turning ideas into content, subscribers, and sales that can be maintained with 1-2 hours a day. (Once systemized, you have free time to build more.)",
    className: '',
  },
  {
    text: "We are here to drop any and all knowledge we have related to the space so you can benefit from what we've learned.",
    className: '',
  },
];

export default function Who() {
  return (
    <section id="who-section" className="mt-20 scroll-mt-24 bg-black py-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* White Content Box */}
        <div className="bg-white p-12 text-left text-slate-900 shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
          <div className="space-y-6 text-[1.2rem] leading-relaxed">
            {whoContent.map((item, index) => (
              <p key={index} className={item.className}>
                {item.text}
              </p>
            ))}
          </div>
        </div>

        {/* Purple Button - Centered below the box */}
        <div className="mt-10 flex justify-center">
          <a
            href="#pricing-section"
            className="inline-block rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:brightness-110 active:scale-95"
          >
            Lock In Your Rate
          </a>
        </div>
      </div>
    </section>
  );
}