import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    if (activeStep !== 2) return;

    const scriptId = "twitter-wjs";
    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load();
    }
  }, [activeStep]);

  const renderRightContent = () => {
    if (activeStep === 2) {
      return (
        <div className="relative">
            <div className="grid gap-4">
              <div className="flex items-center justify-between text-neutral-400">
                <div className="text-xl font-semibold text-white">Human Potential</div>
              
              </div>
              <div className="rounded-3xl border border-white/10 bg-neutral-950 p-4">
                <div className="rounded-3xl bg-neutral-900/70 p-4 text-sm leading-6 text-neutral-200">
                  <blockquote className="twitter-tweet">
                    <p lang="en" dir="ltr">
                      You as a single person have more power today than a 20 person company of the past. The internet gave you the ability to learn anything. Social media gave you the leverage to reach anyone. AI is giving you the ability to create almost anything. Please don&apos;t waste it.
                    </p>
                    — Dan Koe (@thedankoe) <a href="https://x.com/thedankoe/status/1946955771176276293">September 27, 2023</a>
                  </blockquote>
                </div>
                
                <div className="mt-4 flex items-center gap-3 text-sm text-neutral-400">
                  
                </div>
              </div>
            
          </div>

        
        </div>
      );
    }

    if (activeStep === 3) {
      const chips = [
        "curiosity-based learning",
        "hands-on application",
        "community-driven growth",
        "mentorship and guidance",
        "real-world problem solving",
        "collaboration and networking",
        "continuous feedback and improvement",
        "experiential learning",
        "monthly live training",
        "Real time discussions and support",
        "action articles and resources",


      ];

      return (
        <div className="rounded-[1.5rem] border border-white/10 bg-neutral-900/80 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
          <div className="mb-5 text-sm uppercase tracking-[0.35em] text-neutral-400">Modern Approach</div>
          <p className="mb-6 text-sm leading-7 text-neutral-300">
            Using real strategies that came from years of iteration, refinement, and testing.
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
          <div className="text-xl font-semibold text-white">Job Search</div>
       
        </div>
        <div className="grid gap-4 md:grid-cols-0">
          
          <div className="rounded-3xl border border-white/10 bg-neutral-950 p-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-10 w-10 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500" />
              <div>
                <p className="text-sm text-neutral-400">Jireh</p>
                <p className="text-xs text-neutral-500">@jireh_001 · 20d</p>
              </div>
            </div>
            <p className="text-sm leading-7 text-neutral-200">
Sometimes I sit down and ask myself, what is really wrong with me?
I’m almost 27. I’m a nurse, still waiting to be posted, still job hunting. I was working as a home care nurse but I’m currently home. I live with my sister. I help with the house chores, take care of her daughters, run errands, do everything I can. From the outside, it may look like I don’t have problems. But inside, I feel stuck. Like my life is on pause while everyone else is moving forward.
I want to work. I want to earn my own money. I want to rent my own small place and start building my life. I don’t want to feel like I’m serving everyone while my own dreams are waiting.            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-neutral-400">
              <span>1.3K</span>
              <span>238</span>
              <span>11</span>
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

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  
                  
                </div>
                {renderRightContent()}
              </div>
            </div>
          </div>
      
    </section>
  );
};

export default Solution;