import React from "react";

const tiers = [
  {
    title: "Monthly",
    price: "$4.99/month",
    sub: "",
    perks: ["Creator Course", "Strategy Library", "Monthly challenges", "Monthly templates"],
    link: "https://paystack.shop/pay/skillembassy-t1",
  },
  {
    title: "Yearly",
    price: "$199/year",
    sub: "Best long-term value",
    perks: ["Everything in monthly", "Contributor perks", "Full library access"],
    featured: true,
    link: "https://paystack.shop/pay/skillembassy-t2",
  },
  {
    title: "Lifetime",
    price: "$499 one time",
    sub: "Founding members get exclusive perks",
    perks: ["Lifetime access", "Early access to new courses", "Real-time personalized help"],
    link: "https://paystack.shop/pay/skillembassy-t3",
  },
];

const CallToAction = () => {
  return (
    <section id="pricing-section" className="py-20 px-2 md:px-12 lg:px-20 overflow-hidden">
      <div className="mx-auto max-w-7xl rounded-[1rem] border border-white/10 bg-neutral-950/90 p-10 md:p-16 shadow-[0_40px_120px_rgba(0,0,0,0.45)] overflow-hidden">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Join Skillembassy</p>
          <h2 className="mt-6 text-5xl md:text-6xl font-bold text-white">You have 3 options.</h2>
          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Choose the membership that fits your pace. Whether you want to dip in monthly or commit for the long run, Skillembassy is built to help you grow.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {tiers.map((tier) => (
            <a
              key={tier.title}
              href={tier.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`block min-w-0 rounded-[2rem] border p-8 md:p-10 transition cursor-pointer ${tier.featured ? "border-cyan-400/60 bg-gradient-to-b from-cyan-500/15 to-cyan-600/5 shadow-[0_20px_60px_rgba(34,211,238,0.15)]" : "border-white/10 bg-black/50 hover:border-white/20 hover:bg-black/70"}`}
            >
              <p className="text-sm uppercase tracking-[0.25em] text-neutral-400">{tier.title}</p>
              <p className="mt-5 text-3xl md:text-4xl font-bold text-white">{tier.price}</p>
              <p className="mt-3 text-sm text-neutral-400">{tier.sub}</p>
              <ul className="mt-8 space-y-4 text-sm">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3 text-neutral-300">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-400/70" />
                    {perk}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>

        <div id="cta-section" className="mt-14 flex flex-col items-center text-center">
          <a
            href="https://paystack.shop/pay/skillembassy-t1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-600 px-8 py-4 text-base font-semibold text-white shadow-[0_20px_60px_rgba(34,211,238,0.25)] transition hover:translate-y-[-2px] hover:shadow-[0_25px_70px_rgba(34,211,238,0.3)]"
          >
            Get Inside Today
          </a>
          <p className="mt-5 text-sm text-neutral-400">Cancel anytime. Lock in your rate today.</p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;