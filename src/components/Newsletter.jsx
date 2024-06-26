import React, { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Your Google Sheets script URL
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyoo3AuqVUWNX5YrpzhE4BZCqdukprZXxu0_knLiDzSzgSo7thveWiDLhzMBQyBp9gU/exec";

    // Prepare data to send to Google Sheets
    const formDataToSend = new FormData();
    formDataToSend.append("Email", email);

    setLoading(true);

    // Submit the form data
    fetch(scriptURL, { method: "POST", body: formDataToSend })
      .then((response) => {
        if (response.ok) {
          alert("Thank you for subscribing!");
          setEmail(""); // Clear the email input field after successful submission
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(""); // Clear error message when email changes
  };

  return (
    <div id="newsletter-section">
      <div className="mx-auto px-0 sm:px-0">
        {/* CTA box */}
        <div
          className="relative bg-neutral py-10 px-0 md:py-16 md:px-12"
          data-aos="fade-up"
        >
          {/* Background illustration */}
          <div
            className="absolute right-0 top-0 -ml-40 pointer-events-none"
            aria-hidden="true"
          ></div>

          <div className="relative flex flex-col lg:flex-row justify-between items-center">
            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 text-neutral-100 mb-2">Stay in the loop</h3>
              <p className="text-neutral-300 text-lg">
                Receive one deep dive on business, digital mastery, and the future of work in your inbox each week. Join our newsletter to get top news before anyone else.
              </p>
            </div>

            {/* CTA form */}
            <form className="w-full lg:w-1/2" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                <input
                  type="email"
                  className={`w-full appearance-none border border-neutral-500 focus:border-neutral-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-neutral-900 placeholder-neutral-400 ${error ? 'border-red-500' : ''}`}
                  placeholder="Your best email…"
                  aria-label="Your best email…"
                  value={email}
                  onChange={handleEmailChange}
                  disabled={loading} // Disable input during submission
                />
                <button
                  type="submit"
                  className="btn text-black bg-neutral-50 hover:bg-neutral-100 shadow px-4 py-3 rounded-sm"
                  disabled={loading} // Disable button during submission
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
