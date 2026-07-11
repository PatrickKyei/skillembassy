import React, { useState } from 'react';

const faqs = [
  {
    q: 'How do I make the most of my monthly subscription?',
    a: 'Participate in discussions, challenges, Q&As, follow the roadmaps, and watch the trainings. If you do not participate, you will not get results (or your guarantee).',
  },
  {
    q: 'Will my monthly rate stay the same?',
    a: 'Yes, you will be locking in your price for the length that you are a member of Skillembassy. If you cancel and want to join again, you will have to pay the new rate. The price continues to increase as more gets added..Like a gym membership, this community is best used as a part of your life, not something you just join and quit when you think you need it. We want you to stay consistent for as long as you need us, then not feel as if you have to rejoin. Our goal is to get you to a place of self-sustenance quickly.',
  },
  {
    q: 'Do I Need Any Prior Experience?',
    a: 'The resource library is updated with the best strategies we have access to. Everything else is beginner friendly. If you are still wary, consider joining the Founding Members Tier for dedicated support..',
  },
  {
    q: 'Do I Need Followers To Make This Work?',
    a: 'No. Everyone who has hundreds of thousands of followers now started at zero. Especially those who didn\'t have any prior authority. Social media is now a viable career path. Even colleges are catching on and trying to add "influencer" courses. These will fail, because colleges aren\'t creators.',
  },
  {
    q: 'How Long Will It Take To Start Seeing Results?',
    a: 'Every. Single. Aspect. Of. Life. Is like a muscle. You will have to practice, put in the reps, and get better with time. However, we can be confident that you will be a more impactful creator than 80% of them from the start. It\'s not about the content itself. It\'s about readability, the structure of your writing, and your ability to connect with the reader. It\'s not about writing like Shakespeare.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq-section" className="mt-20 scroll-mt-24">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-violet-300">GOT QUESTIONS?</p>
        <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">We've Got Answers</h2>
      </div>
      <div className="mt-10 space-y-4">
        {faqs.map((faq, index) => (
          <div key={faq.q} className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-6">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between text-left text-lg font-semibold text-white"
              type="button"
            >
              {faq.q}
              <span className="text-violet-300">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && <p className="mt-5 text-base leading-7 text-slate-300">{faq.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
