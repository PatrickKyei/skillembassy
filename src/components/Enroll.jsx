import React from 'react';

export default function Enroll() {
  return (
    <>
      {/* Heading Section - Black Background */}
      <section className="bg-black py-16 md:py-20 px-4 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-violet-300 mb-6">ENROLL TODAY</p>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Receive A Lifelong Network & Education For The Future Of work
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
            Certainty in a time of uncertainty.
          </p>
        </div>
      </section>

      {/* Content Section - Black Background with White Card */}
      <section className="bg-black py-16 md:py-4 px-4 md:px-8">
        <div className="mx-auto max-w-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 md:p-10 lg:p-12">
          <div className="space-y-6 text-xl md:text-lg leading-relaxed text-slate-800">
            <p>Remember, we are not training you into a job.</p>
            <p>We are giving you the tools to create your own career.</p>
            <p>Meaning, social media as a digital society cannot get "saturated."</p>
            <p>Traditional schools create the illusion that you get to choose your own path.</p>
            <p>But you end up getting trained into the same few (and outdated) jobs available in the old economy.</p>
            
            <p className="font-semibold text-slate-900 pt-4">We've built Skillembassy to be the first-of-its-kind.</p>
            <p>You get to choose your own path, have a network that helps you grow, and have opportunities come to you as you name gets spread.</p>
            
            <p className="font-semibold text-slate-900 pt-4">Another thing:</p>
            <p>Remember that this is a personalized service.</p>
            <p>While saturation in the new economy is rare, our program is limited in how many we can help.</p>
            <p>We don't want to take on more than our team can handle.</p>
          </div>
        </div>
      </section>
    </>
  );
}
