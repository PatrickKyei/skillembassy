import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const questions = [
  {
    title: 'What do you want to build first?',
    prompt: 'Pick the option that feels closest to your next move.',
    options: [
      { value: 'content', label: 'A content business that grows with audience trust' },
      { value: 'service', label: 'A service business that helps people get results' },
      { value: 'product', label: 'A digital product or software business' },
      { value: 'brand', label: 'A personal brand that leads to opportunities' },
    ],
  },
  {
    title: 'What kind of work feels most energizing?',
    prompt: 'Choose the mode you naturally enjoy most.',
    options: [
      { value: 'content', label: 'Writing, talking, teaching, and sharing ideas' },
      { value: 'service', label: 'Solving problems for clients and customers' },
      { value: 'product', label: 'Building systems, tools, and offers' },
      { value: 'brand', label: 'Creating a visible identity and reputation' },
    ],
  },
  {
    title: 'What do you want your work to unlock?',
    prompt: 'This helps us shape the path around your goals.',
    options: [
      { value: 'brand', label: 'Freedom, influence, and a trusted audience' },
      { value: 'service', label: 'Income quickly through solving real problems' },
      { value: 'product', label: 'Scalable leverage and recurring revenue' },
      { value: 'content', label: 'A long-term education business and thought leadership' },
    ],
  },
];

const resultMap = {
  content: {
    title: 'The Creator-Led Education Path',
    summary:
      'You are best suited to building authority through content, teaching, and audience-led offers.',
    steps: [
      'Start publishing one clear insight per day.',
      'Turn your best ideas into a newsletter or short-form content system.',
      'Package your experience into a low-ticket offer before building anything big.',
    ],
  },
  service: {
    title: 'The Service-Based Growth Path',
    summary:
      'You thrive when you can solve specific problems and turn that into a premium service.',
    steps: [
      'Pick a narrow audience with a painful problem.',
      'Offer a fast, clear transformation with a defined outcome.',
      'Use case studies and referrals to grow without wasting time.',
    ],
  },
  product: {
    title: 'The Productized Operator Path',
    summary:
      'You are wired to build systems, tools, and digital products that scale beyond your time.',
    steps: [
      'Validate one problem through interviews and feedback.',
      'Build a simple MVP and sell before overbuilding.',
      'Use your audience and customer insight to create a product that compounds.',
    ],
  },
  brand: {
    title: 'The Personal Brand Path',
    summary:
      'You are meant to become the visible face of a movement, reputation, or category.',
    steps: [
      'Develop a sharp point of view and repeatable narrative.',
      'Create a consistent publishing rhythm around your expertise.',
      'Turn attention into offers, partnerships, and opportunities.',
    ],
  },
};

function Pathfinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  // Assessment counter: starts at 99 on 2026-07-23 and increases by 2 every 3 days
  const initialAssessCount = 99;
  const assessStartDate = new Date('2026-07-23T00:00:00Z');
  const [assessCount, setAssessCount] = useState(() => {
    const now = new Date();
    const days = Math.floor((now - assessStartDate) / (1000 * 60 * 60 * 24));
    const increments = Math.floor(days / 3) * 2;
    return initialAssessCount + increments;
  });

  useEffect(() => {
    const id = setInterval(() => {
      const now = new Date();
      const days = Math.floor((now - assessStartDate) / (1000 * 60 * 60 * 24));
      const increments = Math.floor(days / 3) * 2;
      setAssessCount(initialAssessCount + increments);
    }, 60 * 1000); // recalc every minute
    return () => clearInterval(id);
  }, []);

  const currentQuestion = questions[step];

  const result = useMemo(() => {
    if (!submitted) return null;

    const counts = answers.reduce(
      (acc, answer) => {
        acc[answer] += 1;
        return acc;
      },
      { content: 0, service: 0, product: 0, brand: 0 }
    );

    const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
    return resultMap[top];
  }, [answers, submitted]);

  const handleSelect = (value) => {
    const nextAnswers = [...answers, value];

    if (step < questions.length - 1) {
      setAnswers(nextAnswers);
      setStep(step + 1);
      return;
    }

    setAnswers(nextAnswers);
    setSubmitted(true);
  };

  const resetPathfinder = () => {
    setStep(0);
    setAnswers([]);
    setSubmitted(false);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/pathfinder.pdf';
    link.download = 'Pathfinder.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <header className="border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-lg font-semibold tracking-[0.3em] text-white uppercase">
            Skillembassy
          </Link>
          <Link to="/" className="rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10">
            Back home
          </Link>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-700/30 via-slate-950 to-cyan-600/20 p-8 shadow-2xl shadow-violet-950/30 md:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-violet-400/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-violet-200">
                Skillembassy Pathfinder
              </div>
              <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                Find the path that fits your future.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Many people lose months learning the wrong skills. Answer a few honest questions and we’ll point you toward the path most aligned with your strengths, interests, and goals.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => window.scrollTo({ top: document.getElementById('pathfinder')?.offsetTop || 0, behavior: 'smooth' })}
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
                >
                  Start the pathfinder
                </button>
                <Link
                  to="/"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
                >
                  Explore the community
                </Link>
              </div>
              <p className="mt-6 text-sm text-slate-400">~5 minutes · No sign-up required</p>
              <div className="mt-4 flex justify-center md:justify-start">
                <button className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white-900 shadow-md">
                  <span className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse shadow-sm" />
                  <span>{assessCount.toLocaleString()} assessments taken</span>
                </button>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-6 backdrop-blur">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  ['Career clarity', 'Choose a direction with less guesswork'],
                  ['Future-ready skills', 'Learn the right things for where work is going'],
                  ['Clear next steps', 'Get a practical week-one plan'],
                  ['Built for creators', 'Turn your interests into leverage and income'],
                ].map(([title, description]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="font-semibold text-white">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pathfinder" className="rounded-[2rem] border border-white/10 bg-white p-6 text-slate-900 shadow-2xl shadow-black/20 sm:p-8 lg:p-10">
          {!submitted ? (
            <>
              <div className="flex items-center justify-between text-sm text-slate-500">
                <p className="font-semibold uppercase tracking-[0.3em] text-violet-600">Pathfinder quiz</p>
                <p>
                  Step {step + 1} of {questions.length}
                </p>
              </div>
              <div className="mt-4 h-2 w-full rounded-full bg-slate-200">
                <div
                  className="h-2 rounded-full bg-violet-600 transition-all"
                  style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                />
              </div>

              <h2 className="mt-8 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                {currentQuestion.title}
              </h2>
              <p className="mt-3 text-lg leading-8 text-slate-600">{currentQuestion.prompt}</p>

              <div className="mt-8 grid gap-3">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => handleSelect(option.value)}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-left text-base font-medium text-slate-800 transition hover:border-violet-400 hover:bg-violet-50"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="space-y-6">
              <div className="rounded-3xl border border-violet-200 bg-violet-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-600">Your recommended path</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">{result.title}</h2>
                <p className="mt-4 text-lg leading-8 text-slate-700">{result.summary}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {result.steps.map((stepText, index) => (
                  <div key={stepText} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Step {index + 1}</p>
                    <p className="mt-2 text-base leading-7 text-slate-700">{stepText}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleDownload}
                  className="rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
                >
                  Download Pathfinder
                </button>
                <button
                  onClick={resetPathfinder}
                  className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Try again
                </button>
                <Link
                  to="/"
                  className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Join Skillembassy
                </Link>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Pathfinder;
