import React, { useState } from "react";

const steps = [
  {
    id: 1,
    label: "The Problem",
    title: "The Reality of employment.",
    description:
      "Layoff and unemployment are increasingly common in today's economy. Traditional employment can no longer be the primary pathway to economic security for ambitious individuals. Population growth continues to outpace job creation. Automation steadily reduces labor demand. Public sector expansion is financially unsustainable. The gap between ambition and opportunity keeps widening.",
  },
  {
    id: 2,
    label: "The Opportunity",
    title: "Ai, Automation & Social Media.",
    description:
      "Technology, Ai and automation has democratized wealth creation for the individual. With the right skills and mindset, individuals can solve real-world problems, create value and build sustainable income to raise their standard of living.",
  },
  {
    id: 3,
    label: "Our Solution",
    title: "Our approach is hands-on.",
    description:
      "Our mission is to inspire motivated individuals to solve real-world problems by utilizing technology to develop new solutions that address social issues. Our approach is hands-on. Our aim to foster a learning-by-doing atmosphere drives us to make the next big decision."
  },
];

const Solution = () => {
  const [activeStep, setActiveStep] = useState(1);

  const renderRightContent = () => {
    if (activeStep === 2) {
      return (
        <div className="relative">
          <div className="rounded-[1.5rem] border border-white/10 bg-neutral-900/80 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
            <div className="grid gap-4">
              <div className="flex items-center justify-between text-neutral-400">
                <div className="text-xl font-semibold text-white">Discover</div>
                <div className="flex items-center gap-2">
                  <button className="rounded-full border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-300">All</button>
                  <button className="rounded-full border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-300">+ Add</button>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-neutral-950 p-4">
                <div className="h-32 rounded-3xl bg-neutral-900/80" />
                <div className="mt-4 flex items-center gap-3 text-sm text-neutral-400">
                  <span className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500" />
                  <div>
                    <p className="font-semibold text-white">Feel Behind? (Do This for 30 Days)</p>
                    <p className="text-xs text-neutral-500">Sahil Bloom · 173K views · 1mo</p>
                  </div>
                  <span className="ml-auto rounded-full bg-rose-500/10 px-2.5 py-1 text-xs text-rose-300">87×</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-8 top-12 w-72 rounded-[1.75rem] border border-white/10 bg-neutral-950/95 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <div className="mb-5 text-xs uppercase tracking-[0.35em] text-neutral-400">Boost</div>
            <div className="space-y-4">
              <div className="rounded-3xl bg-neutral-900/90 p-4">
                <p className="text-sm text-neutral-400 uppercase tracking-[0.2em] mb-2">A</p>
                <p className="font-semibold text-white">Headline Variations</p>
                <p className="mt-2 text-sm text-neutral-400">Brainstorm titles for your niche</p>
              </div>
              <div className="rounded-3xl bg-neutral-900/90 p-4">
                <p className="text-sm text-neutral-400 uppercase tracking-[0.2em] mb-2">⌾</p>
                <p className="font-semibold text-white">Break into Post Ideas</p>
                <p className="mt-2 text-sm text-neutral-400">Mine 10 short-post angles from this</p>
              </div>
              <div className="rounded-3xl bg-neutral-900/90 p-4 ring-1 ring-emerald-300/20">
                <p className="font-semibold text-white">Reverse Engineer</p>
                <p className="mt-2 text-sm text-neutral-400">Break down why it works</p>
              </div>
              <div className="rounded-3xl bg-neutral-900/90 p-4">
                <p className="font-semibold text-white">Replicate</p>
                <p className="mt-2 text-sm text-neutral-400">Use the structure yourself</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeStep === 3) {
      const chips = [
        "your curiosity and love for learning are your advantage",
        "the missing piece was a vessel",
        "the generalist emerges naturally from this triad",
        "your edge lies more in intersection than it does in expertise",
        "a perspective that only you can see",
        "be duped into believing the promise that specialization is what makes a human valuable",
        "self-education, self-interest, self-sufficiency",
        "the ultimate moat is an opinion",
        "everyone's niche is self-actualization",
        "plot your world domination",
        "monk mode",
        "the boring fundamentals",
        "there is no one right way",
        "everyone is right and everyone is wrong",
        "your ability to think is your greatest asset",
        "take back control of your life",
        "stop ignoring your inner voice",
        "the death of the expert",
      ];

      return (
        <div className="rounded-[1.5rem] border border-white/10 bg-neutral-900/80 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
          <div className="mb-5 text-sm uppercase tracking-[0.35em] text-neutral-400">Vocabulary</div>
          <p className="mb-6 text-sm leading-7 text-neutral-300">
            Phrases you actually say. Lift these from your own writing, not from how you think writing should sound.
          </p>
          <div className="flex flex-wrap gap-3">
            {chips.map((text, index) => (
              <span
                key={index}
                className="rounded-full border border-white/10 bg-neutral-950/80 px-4 py-2 text-sm text-neutral-200"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="rounded-[1.5rem] border border-white/10 bg-neutral-900/80 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between text-neutral-400 mb-6">
          <div className="text-xl font-semibold text-white">Discover</div>
          <div className="flex items-center gap-2">
            <button className="rounded-full border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-300">All</button>
            <button className="rounded-full border border-neutral-800 bg-neutral-950 px-3 py-2 text-sm text-neutral-300">+ Add</button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-neutral-950 p-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 to-lime-400" />
              <div>
                <p className="text-sm text-neutral-400">Mark Manson</p>
                <p className="text-xs text-neutral-500">@markmanson · 8d</p>
              </div>
            </div>
            <p className="text-sm leading-7 text-neutral-200">
              An underrated cheat code in life: being incredibly reliable. Show up on time. Do what you say you will. Own your mistakes. It goes so much further than you think.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-neutral-400">
              <span>19K</span>
              <span>3.2K</span>
              <span>164</span>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-neutral-950 p-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-10 w-10 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500" />
              <div>
                <p className="text-sm text-neutral-400">Kpaxs</p>
                <p className="text-xs text-neutral-500">@kpaxs · 20d</p>
              </div>
            </div>
            <p className="text-sm leading-7 text-neutral-200">
              Want to become high-agency? Stop assuming the world is rigid. It’s not. Your assumptions are. Agency is a ladder you climb one rung at a time, and most people are stuck at the bottom.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-neutral-400">
              <span>1.3K</span>
              <span>108</span>
              <span>11</span>
              <span>73K</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 text-neutral-100">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] items-start">
          <div className="relative">
            <div className="absolute left-0 top-8 h-[calc(100%-2rem)] w-0.5 bg-emerald-300/40"></div>
            <div className="space-y-6 pl-10 md:pl-14">
              {steps.map((step) => {
                const active = step.id === activeStep;
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setActiveStep(step.id)}
                    className="w-full text-left"
                  >
                    <div
                      className={`group relative overflow-hidden rounded-3xl border-l-4 px-6 py-5 transition ${
                        active
                          ? "border-emerald-300/90 bg-white/5"
                          : "border-transparent hover:bg-white/5"
                      }`}
                    >
                      <p className={`text-xs uppercase tracking-[0.35em] ${active ? "text-emerald-300" : "text-neutral-500"}`}>
                        {step.label}
                      </p>
                      <h3 className={`mt-3 text-3xl font-semibold ${active ? "text-white" : "text-neutral-200"}`}>
                        {step.title}
                      </h3>
                      {active && (
                        <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-300">
                          {step.description}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mx-auto w-full max-w-3xl rounded-[2rem] border border-white/10 bg-neutral-950/90 p-6 shadow-[0_45px_110px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <div className="rounded-[1.75rem] border border-white/10 bg-[#0c1014] p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-3 rounded-3xl bg-neutral-900/90 px-4 py-3">
                    <svg
                      className="h-5 w-5 text-neutral-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-4.35-4.35m1.35-4.65A7 7 0 1 0 3 9a7 7 0 0 0 14 0z"
                      />
                    </svg>
                    <span className="text-sm text-neutral-300">deep work</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-400">
                    <span className="rounded-full border border-neutral-800 bg-neutral-900/90 px-3 py-2">2 platforms</span>
                    <span>Last month</span>
                    <span className="rounded-full bg-emerald-400/10 px-3 py-2 text-emerald-300">10×</span>
                  </div>
                </div>
                {renderRightContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
