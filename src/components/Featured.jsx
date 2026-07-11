import React from 'react';
import craigLeft from '../assets/craig-left.png';
import craigRight from '../assets/craig-right.png';

export default function Featured() {
  return (
    <section id="featured-section" className="mt-24 scroll-mt-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="relative flex items-center justify-center gap-8">
          {/* Left card */}
          <div className="absolute left-0 -translate-x-8 hidden md:block">
            <div className="group relative w-52 transform -rotate-6 rounded-xl bg-slate-900/70 p-3 shadow-2xl transition-transform duration-300 hover:scale-105">
              <img src={craigLeft} alt="Craig left" className="h-36 w-full overflow-hidden rounded-lg object-cover" />
              <div className="mt-3 text-sm text-slate-300">Sometimes I wonder if a midlife crisis is simply...</div>
              <div className="mt-2 text-xs text-slate-500">1.1K views · 1mo ago</div>
            </div>
          </div>



          {/* Center content */}
          <div className="max-w-3xl text-center">
            <div className="inline-block rounded-full bg-slate-800/40 px-3 py-1 text-xs tracking-wider text-slate-400">CASE IN POINT</div>
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              <span className="block text-white">He grew from 5k to 15k.</span>
              <span className="block text-emerald-300">In 90 Days</span>
            </h2>

            <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
              That rarely happens, but when you have a community of creators who are all learning and strategizing, it becomes much easier to grow your audience and monetize your skills.
            </p>

            <blockquote className="mt-8 italic text-slate-400">“After learning from Patrick Kyei and taking part in his Value Creator course, I’ve scaled my audience from 5k to nearly 15k in 90 days, started monetizing my Facebook presence, and landed a consultancy position with a local charity to write and manage their social media.”</blockquote>

            <div className="mt-6 text-sm text-slate-500">— Craig Fletcher</div>
          </div>

          {/* Right card */}
          <div className="absolute right-0 translate-x-8 hidden md:block">
            <div className="group relative w-52 transform rotate-6 rounded-xl bg-slate-900/70 p-3 shadow-2xl transition-transform duration-300 hover:scale-105">
              <img src={craigRight} alt="Craig right" className="h-36 w-full overflow-hidden rounded-lg object-cover" />
              <div className="mt-3 text-sm text-slate-300">I used to smoke weed every day and drink a litre of ...</div>
              <div className="mt-2 text-xs text-slate-500">3.8K views · 9mo ago</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
