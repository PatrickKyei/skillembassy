import React from "react";

const CallToAction = () => {
  return (
    <section className="py-20 px-6 sm:px-8 lg:px-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center rounded-[2rem] border border-white/10 bg-neutral-950/90 p-10 text-center shadow-[0_40px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-white/5 shadow-sm">
          <svg viewBox="0 0 64 64" className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 24l12-12 12 12M32 12v40" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <h2 className="max-w-3xl text-4xl font-semibold leading-tight text-neutral-100 sm:text-5xl">
          Build Once. Earn More. Enjoy Life.
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg">
          Join our community of motivated individuals who are learning the skills to create value, solve real-world problems, and build sustainable income.
        </p>

        <button
          type="button"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-slate-700 px-8 py-4 text-base font-semibold text-white shadow-[0_20px_60px_rgba(16,185,129,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_25px_90px_rgba(16,185,129,0.18)]"
        >
          Start Today
          <span className="ml-3 text-xl">→</span>
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
