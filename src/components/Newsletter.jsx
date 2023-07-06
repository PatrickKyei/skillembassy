import React from 'react';

function Newsletter() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* CTA box */}
        <div className="relative bg-blue py-10 px-8 md:py-16 md:px-12" data-aos="fade-up">

          {/* Background illustration */}
          <div className="absolute right-0 top-0 -ml-40 pointer-events-none" aria-hidden="true">
          </div>

          <div className="relative flex flex-col lg:flex-row justify-between items-center">

            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 text-white mb-2">Stay in the loop</h3>
              <p className="text-purple-200 text-lg">Join our newsletter to get top news before anyone else.</p>
            </div>

            {/* CTA form */}
            <form className="w-full lg:w-1/2">
  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
    <input
      type="email"
      className="w-full appearance-none blue-700 border border-blue-500 focus:border-blue-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-blue-400"
      placeholder="Your best email…"
      aria-label="Your best email…"
    />
    <button
      type="submit"
      className="btn text-blue bg-white hover:bg-white shadow px-4 py-3 rounded-sm"
    >
      Subscribe
    </button>
  </div>
  {/* Success message */}
  {/* <p className="text-center lg:text-left lg:absolute mt-2 opacity-75 text-sm">Thanks for subscribing!</p> */}
</form>


          </div>

        </div>

      </div>
    </div>
  );
}

export default Newsletter;