import React, { useRef } from "react";

const careerData = [
  {
    title: "Content Marketing",
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 6h12" strokeLinecap="round" />
        <path d="M6 10h12" strokeLinecap="round" />
        <path d="M6 14h8" strokeLinecap="round" />
        <path d="M8 18h8" strokeLinecap="round" />
        <path d="M17 7l4-4" strokeLinecap="round" />
        <path d="M15 9l6-6" strokeLinecap="round" />
      </svg>
    ),
    tagline: "Turn your ideas into content that attracts attention and converts.",
    body:
      "Build compelling content systems that grow your audience, boost engagement, and drive real revenue.",
    badge: "Create consistently",
    features: [
      "Story frameworks that convert",
      "Social, blog, and email content flows",
      "Repeatable systems for daily output",
    ],
  },
  {
    title: "Mental Monetization",
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 text-blue-300" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3a6 6 0 0 0-6 6c0 2.5 1.5 4.7 3.6 5.6L10 22h4l.4-7.4A6.002 6.002 0 0 0 18 9a6 6 0 0 0-6-6Z" />
        <path d="M12 11v6" strokeLinecap="round" />
        <path d="M10 13h4" strokeLinecap="round" />
      </svg>
    ),
    tagline: "Convert your expertise into paid offers and recurring income.",
    body:
      "Learn to identify market-ready ideas, package them as premium products, and sell your knowledge with confidence.",
    badge: "Monetize ideas",
    features: [
      "Rapid idea-to-offer mapping",
      "Pricing, launches, and high-ticket positioning",
      "Sales messaging built for trust and conversions",
    ],
  },
  {
    title: "Affiliate Marketing",
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 text-pink-300" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7 12h4" strokeLinecap="round" />
        <path d="M13 12h4" strokeLinecap="round" />
        <path d="M11 8l4 4-4 4" strokeLinecap="round" />
        <path d="M7 5l-3 3 3 3" strokeLinecap="round" />
        <path d="M17 14l4 3-4 3" strokeLinecap="round" />
      </svg>
    ),
    tagline: "Earn commissions from products and services without building your own offer.",
    body:
      "Master affiliate funnels, partner outreach, and traffic strategies that generate scalable commissions.",
    badge: "Launch affiliate",
    features: [
      "High-converting affiliate funnel blueprints",
      "Sponsor and partner outreach tactics",
      "Tracking, scaling, and repeatable launches",
    ],
  },
  {
    title: "Autopilot Sales",
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 text-yellow-300" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 8h16" strokeLinecap="round" />
        <path d="M12 8v12" strokeLinecap="round" />
        <path d="M8 12l4-4 4 4" strokeLinecap="round" />
        <path d="M8 16h8" strokeLinecap="round" />
      </svg>
    ),
    tagline: "Build automated sales systems that close deals while you sleep.",
    body:
      "Discover the step-by-step framework for ads, funnels, and follow-up flows that turn cold traffic into recurring customers.",
    badge: "Automate sales",
    features: [
      "High-converting funnel sequences",
      "Automated follow-up and retargeting",
      "Scale revenue with minimal manual work",
    ],
  },

    {
    title: "Online Importation",
    icon: (
      <svg viewBox="0 0 24 24" className="h-10 w-10 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 7h16v10H4z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 7l5-4 5 4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 13v4" strokeLinecap="round" />
        <path d="M9 16h6" strokeLinecap="round" />
      </svg>
    ),
    tagline: "Learn how to source, ship, and sell imported products profitably.",
    body:
      "Master the full importation process from supplier sourcing and customs to retail-ready fulfillment.",
    badge: "Start importing",
    features: [
      "Find profitable international suppliers",
      "Navigate customs, duties and compliance",
      "Launch high-margin import products fast",
    ],
  },
];

const Careers = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -520 : 520,
      behavior: "smooth",
    });
  };

  return (
    <section id="careers-section" className="py-16 px-6 md:px-12 lg:px-20 text-neutral-100">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 text-center lg:text-left">
          <p className="text-sm uppercase tracking-[0.35em] text-purple-300">Careers & creative workflows</p>
          <div className="inline-flex flex-col items-center gap-3 lg:items-start">
            <div className="rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-emerald-300">
              Flat 45% off on one challenge
            </div>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              Everything you need to succeed in the digital economy
            </h2>
          </div>
          <p className="max-w-3xl text-base text-neutral-300 sm:text-lg">
            Learn the systems, tools and courses designed for creators, coaches, and founders.
            Each program is built to help you launch faster, write smarter, and earn more.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="absolute right-0 top-0 z-10 flex gap-3">
            <button
              type="button"
              onClick={() => scroll("left")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-neutral-950/90 text-neutral-200 transition hover:bg-neutral-900"
              aria-label="Scroll left"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-neutral-950/90 text-neutral-200 transition hover:bg-neutral-900"
              aria-label="Scroll right"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          <div
            ref={scrollRef}
            className="mt-6 flex gap-6 overflow-x-auto pb-4 pr-2 scroll-smooth sm:pb-6 hide-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {careerData.map((career, index) => (
              <article
                key={index}
                className="min-w-[320px] max-w-[420px] shrink-0 overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-950/90 shadow-[0_30px_120px_rgba(0,0,0,0.35)]"
              >
                <div className="rounded-t-[2rem] bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 px-6 py-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white/5 ring-1 ring-white/10">
                      {career.icon}
                    </div>
                    <span className="inline-flex rounded-full bg-purple-300/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-purple-200">
                      {career.badge}
                    </span>
                  </div>
                  <h3 className="mt-6 text-3xl font-semibold text-white">{career.title}</h3>
                  <p className="mt-4 text-sm text-neutral-300">{career.tagline}</p>
                </div>

                <div className="space-y-5 border-t border-white/10 px-6 py-7">
                  <p className="text-neutral-300">{career.body}</p>
                  <div className="space-y-3">
                    {career.features.map((feature, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3 text-sm text-neutral-300">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-sm uppercase tracking-[0.25em] text-neutral-400">Course preview</span>
                    <button
                      type="button"
                      className="rounded-full bg-emerald-400 px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-emerald-300"
                    >
                      Enroll now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
