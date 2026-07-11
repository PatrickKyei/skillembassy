import React, { useState } from 'react';
import craig from '../assets/craig.jpg';
import evans from '../assets/evans.jpg';
import desiree from '../assets/desiree.jpg';
import fiveToNine from '../assets/5-9.jpg';

const testimonials = [
  {
    id: 3,
    name: "Craig Fletcher",
    role: "Wellness Coach",
    avatar: craig,
    rating: 5,
    quote: "After learning from Patrick Kyei and taking part in his Value Creator course, I’ve scaled my audience from 5k to nearly 15k in 90 days, started monetizing my Facebook presence, and landed a consultancy position with a local charity to write and manage their social media....",
  },

  {
    id: 1,
    name: "Evans Odoom",
    role: "Creator",
    avatar: evans,
    rating: 5,
    quote: "I would like to say a big thank you for the lessons and advice you shared with me on my FB growth. A few days after the chat with you, my follower count appeared. I'm currently sitting at 1.7k followers Thank you so much. God bless you...",
  },
  {
    id: 2,
    name: "5 to 9 Builder",
    role: "Coach",
    avatar: fiveToNine,
    rating: 5,
    quote: "I’ve learned a lot from following Patrick. Before, I used to struggle with what to post. Now I understand how to repurpose my content so I’m never stuck or silent.  He also broke down how to structure a post in a way that actually connects and keeps people reading. Patrick is the real deal. I joined his 7-day dare to post challenge and saw real movement. I grew from 2.5K to 2.6K followers by simply applying what he teaches. If you’ve been overthinking content or staying inconsistent, you might want to pay attention to what he’s doing....",
  },

  {
    id: 4,
    name: "Desire Sweet",
    role: "",
    avatar: desiree,
    rating: 5,
    quote: "I want to sincerely thank Mr. Patrick Kyei for being an incredible mentor. I’ve learned so much from him throughout this journey. He has a unique way of teaching that is both clear and easy to understand, which made the learning process more effective and enjoyable. What stood out the most is how helpful and genuinely supportive he is. He consistently kept us motivated, encouraged us to do our best, and made sure we were always on track. His guidance didn’t just teach me knowledge—it gave me confidence. Thank you, Mr. Patrick, for your time, your wisdom, and your heart for teaching....",
  },
];

const StarRating = ({ rating }) => (
  <div className="flex text-yellow-400">
    {[...Array(5)].map((_, i) => (
      <span key={i}>{i < rating ? '★' : '☆'}</span>
    ))}
  </div>
);

const truncateText = (text, limit = 160) => {
  if (!text) return '';
  if (text.length <= limit) return text;
  // remove trailing dots to avoid `.....`
  const trimmed = text.slice(0, limit).replace(/\.+$/,'');
  return trimmed + '...';
};

function TestimonialCard({ testimonial }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-zinc-900 rounded-3xl p-8 flex flex-col border border-zinc-800 hover:border-zinc-700 transition-all duration-300 group">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover ring-2 ring-zinc-700"
        />
        <div>
          <p className="font-semibold text-white text-lg">{testimonial.name}</p>
          <p className="text-zinc-400 text-sm">{testimonial.role}</p>
        </div>
      </div>

      <StarRating rating={testimonial.rating} />

      <p className="mt-6 text-zinc-300 leading-relaxed">
        {expanded ? testimonial.quote : truncateText(testimonial.quote, 160)}
      </p>

      {testimonial.quote && testimonial.quote.length > 160 ? (
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-8 text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1 group-hover:gap-2 transition-all self-start"
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      ) : null}
    </div>
  );
}

export default function Testimonials() {
  const [visibleCount, setVisibleCount] = useState(Math.min(12, testimonials.length));

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block rounded-full bg-zinc-800 px-6 py-1.5 text-sm font-medium tracking-widest text-white mb-4">
            LOVED BY CREATORS
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white leading-none">
            Real results from creators
            <br />
            <span className="text-emerald-400">who are inside Skillembassy.</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {testimonials.slice(0, visibleCount).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        {/* Load more */}
        {testimonials.length > visibleCount && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setVisibleCount(testimonials.length)}
              className="px-6 py-2 rounded-full bg-zinc-800 text-white hover:bg-zinc-700 transition"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}