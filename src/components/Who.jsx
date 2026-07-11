import React from 'react';

const whoItems = [
  "You are writing and creating, but don't have a network of people like you to strategize, build, and grow with.",
  "You don't understand the ins-and-outs of growing an audience, packaging up the information in your head, and selling it via the infinite scale of the internet.",
  "You haven't started – and feel like all careers/business models are shallow, sleazy, and lack purpose.",
  "You have started — but struggle to create your own niche, grow a loyal audience, or create original content.",
  "You don't know what to write about on social media (so it gets shared and brings in likeminded people that want to buy your stuff).",
  "You have multiple interests but don't know how to talk about them all in an impactful way. You've been programmed to think you need to \"niche down.\"",
  "You already have a writing, marketing, or creator business but aren't confident in the quality of your social media posts, newsletters, or content as a whole.",
  "You don't know how to merge what you love doing with a profitable product or service (to earn a living from your life's work).",
  "You don't have a system for turning ideas into content, subscribers, and sales that can be maintained with 1-2 hours a day. (Once systemized, you have free time to build more.)",
  "You are sick and tired of learning skills that lead to nowhere — and that you don't see yourself doing for more than 10 years.",
  "You've gone through all of the free internet content on social media, branding, and online business but still can't seem to make things work.",
];

export default function Who() {
  return (
    <section id="who-section" className="mt-20 scroll-mt-24">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-violet-300">WHO'S IT FOR?</p>
        <h2 className="mt-6 text-5xl font-extrabold tracking-tight text-white sm:text-[4rem] leading-[1.02]">
          If You Are A Writer, Creator,
          <br />
          Founder Or Beginner...
        </h2>
      </div>

      <div className="mx-auto mt-12 max-w-3xl bg-white p-12 text-left text-slate-900 shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
        <h3 className="text-2xl font-semibold">This community is for you if:</h3>
        <div className="mt-8 space-y-6">
          {whoItems.map((item) => (
            <div key={item} className="flex gap-4">
              <div className="mt-2 h-3 w-3 flex-shrink-0 rounded-full bg-violet-300" />
              <p className="text-xl leading-9 font-medium text-left">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
