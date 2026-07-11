import React from "react";

function FinalOffer() {
  return (
    <section className="mt-20 mb-20 text-center">
      <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Final Offer</p>
      <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        Lock In Your Rate Before Price Increases
      </h2>
      <div className="mt-8 flex justify-center">
        <a
          href="#pricing-section"
          className="inline-flex rounded-full bg-violet-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-500"
        >
          Lock In Your Rate
        </a>
      </div>
    </section>
  );
}

export default FinalOffer;
