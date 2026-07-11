import React from 'react';

const traps = [
  {
    title: 'Trap 1) You are stuck in a loop of surface level advice, buying course after course... book after book to fix it, and still not making the progress you want.',
  },
  {
    title: 'Trap 2) You can’t find the "right" business model to commit to and are slowly handing over the few precious years of your life to the murderous shiny object syndrome.',
  },
  {
    title: 'Trap 3) You overwhelm yourself with tasks, get mentally paralyzed, and get very little done (while knowing you are capable of more). You don’t have direction, clarity, or "enough time in the day."',
  },
  {
    title: 'Trap 4) You feel like you aren’t ready to heavily monetize what you’ve learned (when people with baseline level skills are getting to 4-5 figures a matter of months).',
    note: 'What kind of skills? Writing, fitness, self-improvement, relationship dynamics, tech skills, marketing disciplines, and creative skills.',
  },
  {
    title: 'Trap 5) Your circle of friends, family, and acquaintances’ uninformed and pessimistic opinions are slowly draining your drive. They don’t seem interested in a better life.',
  },
  {
    title: 'Trap 6) You have little to no idea how to build a high-paying, sustainable one-person business. Just like the other 95% of "entrepreneurs" and "failed businesses" that call it quits after 2 weeks.',
  },
];

export default function Trap() {
  return (
    <section className="bg-black py-20 px-6 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-slate-950/95 p-10 shadow-[0_20px_80px_rgba(15,23,42,0.35)]">
        <div className="text-slate-200 text-lg leading-8 space-y-5">
          <p>
            To whoever has stumbled upon this page, For the rest of your valuable time here, I want you to do <strong>3 things</strong>:
          </p>
          <ol className="list-decimal list-inside space-y-3 pl-4">
            <li>
              <span className="italic">Be completely honest</span> with yourself about your recent progress.
            </li>
            <li>
              <span className="italic">Forget everything you have been told</span> about money, happiness, and a fulfilling lifestyle. <em>Especially</em> if it came from someone who has none of the above.
            </li>
            <li>
              Don’t be quick to deem something as "unrealistic." If the big numbers on this page scare you, you are drastically limiting yourself and have not experienced the possibility that the internet provides.
            </li>
          </ol>
          <p>
            Read to the end. Take us up on our seemingly outrageous guarantee. And <em>try not to laugh</em> at our enrollment price that people keep telling us to raise.
          </p>
          <p>
            <strong>Deal?</strong>
          </p>
          <p>
            <strong>First question</strong>: What is actually holding you back from enjoying even the most mundane moments of your life, creatively making money, and having an endless source of high-energy?
          </p>
          <p>
            Some people think it’s a lack of knowledge, some think it "runs in the family", and some even think it’s a scam because they took what an anonymous social media account said at face value.
          </p>
          <p>
            I think it’s because you’ve fallen into one of these traps:
          </p>

          <div className="space-y-6">
            {traps.map((trap, index) => (
              <div key={index} className="rounded-3xl border border-red-500/20 bg-red-500/10 p-6 shadow-[0_10px_40px_rgba(220,38,38,0.15)]">
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 flex-shrink-0 rounded-full bg-red-500 text-center text-xl font-bold leading-10 text-white">
                    !
                  </div>
                  <div>
                    <p className="text-base font-semibold text-white">{trap.title}</p>
                    {trap.note ? <p className="mt-3 text-sm text-slate-300">{trap.note}</p> : null}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-6">
            <p className="text-base font-semibold text-white">
              <strong>Bonus Trap - The Deadliest of Them All:</strong>
            </p>
            <p className="mt-4 text-slate-300 leading-8">
              Continuing to make little to no progress, get discouraged, <em>quit</em>, and repeat all over again until the worst happens... You become bitter, cynical, and pessimistic about growing yourself and your business (acting like it’s not the <em>only</em> worthwhile thing to pursue.)
            </p>
            <p className="mt-4 text-slate-300 leading-8">
              Know anybody like that? They aren’t fun to be around.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
