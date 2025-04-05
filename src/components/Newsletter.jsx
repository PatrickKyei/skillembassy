import React from "react";

const Newsletter = () => {
  return (
    <div id="newsletter-section">
      <div className="mx-auto px-0 sm:px-0">
        {/* CTA box */}
        <div
          className="relative bg-neutral py-10 px-0 md:py-16 md:px-12"
          data-aos="fade-up"
        >
          <div className="relative flex flex-col lg:flex-row justify-between items-center">
            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 text-neutral-100 font-extrabold mb-2">Stay in the loop</h3>
              <p className="text-neutral-300 text-lg">
                Receive one deep dive on business, digital mastery, and the future of work in your inbox each week. Join our newsletter to get top news before anyone else.
              </p>
            </div>

            {/* CTA form */}
            <div className="column is-left">
              <iframe
                src="https://patrickkyei.substack.com/embed"
                width="480"
                height="150"
                style={{ border: "1px solid #000000", background: "black" }}
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
