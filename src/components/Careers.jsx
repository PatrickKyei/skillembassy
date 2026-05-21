import React, { useRef } from "react";
import UX from "../assets/careers/modernEntrepreneur.png";
import Brand from "../assets/careers/digitalMastery.png";
import Digital from "../assets/digital.png";
import Graphic from "../assets/graphic.png";

const careerData = [
  {
    title: "Brand voice",
    label: "New custom voice",
    imageUrl: Brand,
    tagline: "Train AI on the intricacies of your voice.",
    body:
      "Build your personal voice or custom voices in a guided chat, or by pasting links to your content. Then brainstorm, test ideas, or get feedback in that voice.",
    badge: "Create voice",
  },
  {
    title: "Validated ideas",
    label: "Discover post winners",
    imageUrl: UX,
    tagline: "Find validated ideas to write about, on any platform.",
    body:
      "Search 1M+ high-performing posts in your niche across X, YouTube, Instagram, TikTok, LinkedIn, and Substack. Sort by views, format, or outlier multiplier.",
    badge: "Study ideas",
  },
  {
    title: "Creator content",
    label: "Study top feeds",
    imageUrl: Digital,
    tagline: "Study any creator's top content, add them to lists.",
    body:
      "Pick any creator and slice their feed by views, outlier multiplier, or format. Save the wins straight into a list you can pull back open later.",
    badge: "Add to list",
  },
  {
    title: "Viral templates",
    label: "Use a viral board",
    imageUrl: Graphic,
    tagline: "Start with a viral board template for guidance.",
    body:
      "Pick from viral YouTube, X, and Reels templates. Chat alongside them to have Eden guide you through writing your own posts and scripts.",
    badge: "Open template",
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
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Everything you need to write content people love <span className="text-emerald-300">(that doesn't feel fake.)</span>
          </h2>
          <p className="max-w-3xl text-base text-neutral-300 sm:text-lg">
            Explore the workflow suite that helps you study the right examples, map them into your own work, and turn them into templates that actually convert.
          </p>
        </div>

        <div className="relative mt-12">
          <div className="absolute right-0 top-0 flex gap-3">
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
                className="min-w-[320px] max-w-[420px] shrink-0 rounded-[2rem] border border-white/10 bg-neutral-950 shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
              >
                <div className="relative h-80 overflow-hidden rounded-t-[2rem] bg-neutral-900">
                  <img
                    src={career.imageUrl}
                    alt={career.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/95 via-neutral-950/10 to-transparent" />
                  <div className="absolute inset-x-0 top-4 px-5">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neutral-200">
                        {career.label}
                      </span>
                      <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-neutral-100 transition hover:bg-black/60">
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 p-6">
                  <div className="rounded-3xl bg-neutral-900/80 p-4 text-sm text-neutral-300 ring-1 ring-white/10">
                    <p className="font-semibold text-white">{career.tagline}</p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-white">{career.title}</h3>
                    <p className="text-sm leading-7 text-neutral-300">{career.body}</p>
                  </div>
                  <div className="flex items-center justify-between rounded-3xl bg-neutral-900/80 px-4 py-3 text-sm text-neutral-200 ring-1 ring-white/10">
                    <span>{career.badge}</span>
                    <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-emerald-300">View</span>
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
