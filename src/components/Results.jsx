import React from "react";

const strategyItems = [
  { title: "Scenario Based Learning" },
  { title: "Project Based Learning" },
  { title: "Mentoring & Coaching" },
  { title: "Workshop Sessions" },
  { title: "Self-Paced Learning" },
];

const Strategies = () => {
  return (
    <section className="bg-neutral-950 py-16 px-4 md:px-6" id="strategies">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-neutral-400">
          Our Learning Strategies
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {strategyItems.map((item, index) => (
            <div
              key={item.title}
              className={`rounded-[32px] border border-white/10 bg-neutral-900/90 p-8 text-left shadow-[0_18px_60px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 ${
                index === strategyItems.length - 1 ? "sm:col-span-2" : ""
              }`}
            >
              <h3 className="text-2xl font-semibold text-white">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Strategies;