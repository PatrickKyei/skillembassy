import React from "react";

const About = () => {
  return (
    <section className="bg-white min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-9 h-9 bg-black rounded-xl flex items-center justify-center text-white text-xl font-bold">
            fb
          </div>
          <span className="text-2xl font-semibold text-neutral-900">Skillembassy Community</span>
        </div>

        {/* Back Button */}
        <a href="/" className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-700 mb-8">
          ← Back
        </a>

        {/* Main Title */}
        <h1 className="text-5xl font-bold text-neutral-900 mb-8">
          About Skillembassy
        </h1>

        {/* Main Description */}
        <div className="max-w-3xl text-lg text-neutral-700 leading-relaxed space-y-6">
          <p>
            Skillembassy is an execution-based community built for people who are ready to stop guessing and start earning with their creative mind.
          </p>
          <p>
            Inspired by the idea of serendipitous discovery, but focused entirely on technology topics. 
            No algorithms trying to keep you scrolling. No engagement metrics. Just genuine curiosity, 
            one article at a time.
          </p>
        </div>

        {/* Three Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          
          {/* Card 1: Random by design */}
          <div className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">🔀</div>
            <h3 className="text-xl font-semibold mb-3">Random by design</h3>
            <p className="text-neutral-600 leading-relaxed">
              No recommendations, no bias. Just serendipitous discovery of tech topics 
              you might never have searched for.
            </p>
          </div>

          {/* Card 2: Open content */}
          <div className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">📖</div>
            <h3 className="text-xl font-semibold mb-3">Open content</h3>
            <p className="text-neutral-600 leading-relaxed">
              Articles sourced from Wikipedia and other open knowledge bases, 
              maintained by contributors worldwide.
            </p>
          </div>

          {/* Card 3: Fast & clean */}
          <div className="bg-white border border-neutral-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-3">Fast & clean</h3>
            <p className="text-neutral-600 leading-relaxed">
              No ads, no personal data collected, no distractions. 
              Just a clean reading experience focused on the content.
            </p>
          </div>
        </div>

        {/* Topics Covered */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold mb-6">Topics covered</h2>
          
          <div className="flex flex-wrap gap-3">
            {[
              "Programming", "Web Dev", "Databases", "Networking", 
              "Security", "DevOps", "AI / ML", "Hardware", 
              "Operating Systems", "Mobile"
            ].map((topic, i) => (
              <span 
                key={i}
                className="inline-flex items-center gap-2 bg-neutral-100 hover:bg-neutral-200 transition-colors text-neutral-700 px-5 py-2.5 rounded-full text-sm font-medium"
              >
                {i === 0 && "💻"}
                {i === 1 && "🌐"}
                {i === 2 && "🗄️"}
                {i === 3 && "🔌"}
                {i === 4 && "🔒"}
                {i === 5 && "⚙️"}
                {i === 6 && "🤖"}
                {i === 7 && "🖥️"}
                {i === 8 && "🐧"}
                {i === 9 && "📱"}
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Open Source Section */}
        <div className="mt-20 bg-neutral-50 border border-neutral-100 rounded-3xl p-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">❤️</span>
            <h3 className="text-2xl font-semibold">Open source & free forever</h3>
          </div>
          <p className="text-neutral-600 leading-relaxed max-w-2xl">
            Discova.dev is a passion project built for the developer community. 
            No paywalls, no premium tiers. Just free knowledge discovery.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;