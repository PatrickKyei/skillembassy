import React from "react";
import { FiMessageCircle, FiStar, FiBookOpen } from "react-icons/fi";

const messageItems = [
  {
    title: "Message from Patrick",
    description:
      "Continuous learning is the key to success in today’s world. Join us, learn with a community of enthusiasts.",
    icon: FiMessageCircle,
    meta: "Patrick · Community Lead",
  },
  {
    title: "Community Heroes",
    description:
      "We are creating a network of masterminds that would drive the future of work.",
    icon: FiStar,
    meta: "Peer support and impact",
  },
  {
    title: "Help Others Grow",
    description:
      "Join our group of community heroes making learning easy and fun at scale for newbies in the industry.",
    icon: FiBookOpen,
    meta: "Mentorship and growth",
  },
];

const Message = () => {
  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-3">
          {messageItems.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/90 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <div className="flex items-center justify-between pb-6">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-500/10 text-cyan-400 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  {item.meta && (
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-400">
                      {item.meta}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Message;
