import React, { useEffect, useState } from 'react';

const stats = [

{ number: '20,600+', label: 'Total Members' },

{ number: '2,000+', label: 'Learners' },

{ number: '85%', label: 'Confidence Boost' },

{ number: '90%', label: 'Satisfaction Rate' },

];

const programs = ['_Ai', '_Sales', '_Marketing', '_Writing'];

const Hero = () => {
  const [text, setText] = useState('');
  const [programIndex, setProgramIndex] = useState(0);
  const [phase, setPhase] = useState('waiting');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((value) => !value);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const currentProgram = programs[programIndex];
    let timeout = null;

    if (phase === 'waiting') {
      timeout = setTimeout(() => setPhase('typing'), 1400);
    } else if (phase === 'typing') {
      if (text === currentProgram) {
        setPhase('waitingDelete');
      } else {
        timeout = setTimeout(() => {
          setText(currentProgram.substring(0, text.length + 1));
        }, 120);
      }
    } else if (phase === 'waitingDelete') {
      timeout = setTimeout(() => setPhase('deleting'), 1400);
    } else if (phase === 'deleting') {
      if (text === '') {
        setProgramIndex((prev) => (prev + 1) % programs.length);
        setPhase('waiting');
      } else {
        timeout = setTimeout(() => {
          setText(currentProgram.substring(0, text.length - 1));
        }, 80);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, programIndex]);

  const scrollToPricing = () => {
    const section = document.getElementById('pricing-section');

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  

return (

<section className="relative overflow-hidden bg-black text-white">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.22),_transparent_25%),radial-gradient(circle_at_100%_50%,_rgba(16,185,129,0.16),_transparent_30%)]" />

<div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-24">

<div className="flex justify-center">
  <button
    type="button"
    onClick={scrollToPricing}
    className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-200 transition hover:bg-white/20"
  >
    2,000+ Community Members
  </button>
</div>

  

<div className="mt-10 text-center">
  <a href="https://web.facebook.com/groups/formasterminds" target="_blank" rel="noopener noreferrer">
<p className="mb-4 text-sm uppercase tracking-[0.4em] text-slate-400">A Community For Creators</p>
</a>
<h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">

Learn the future-proof skills

</h1>

<p className="mt-3 text-4xl font-bold tracking-tight text-cyan-400 sm:text-5xl md:text-6xl">
  <span className="inline-flex items-center gap-1">
    <span>{text}</span>
    <span className="text-cyan-400" aria-hidden="true">
      {showCursor ? (phase === 'waiting' ? '_' : '|') : ' '}
    </span>
  </span>
</p>

<p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base md:text-lg">

Turn Your Ideas & Interests Into Income, Optimize Your Workflow, & Build A High Energy Lifestyle. Go From Ideas To Execution.

</p>

  

<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

<a

href="https://selar.com/skillembassy-tiers"

target="_blank"

rel="noopener noreferrer"

className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition hover:bg-slate-100"

>

Join 500+ Creators

</a>


</div>

</div>

  

<div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-2xl shadow-violet-500/10 backdrop-blur-lg">

<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

{stats.map((item) => (

<div key={item.label} className="text-center">

<p className="text-3xl font-semibold text-white sm:text-5xl">{item.number}</p>

<p className="mt-2 text-sm text-slate-400">{item.label}</p>

</div>

))}

</div>

</div>

</div>

</section>

);

};

  

export default Hero;