import React, { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your Google Sheets script URL
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyrTkM30X7TVqCa6RgK-HiP-cGgdT__brMW6lbxNNX1hAk74lVC-dP-AlgQHQ5s2rs7/exec";
    
    // Prepare data to send to Google Sheets
    const formDataToSend = new FormData();
    formDataToSend.append("Email", email);

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
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div id="newsletter-section">
      <div className="mx-auto px-0 sm:px-0">
        {/* CTA box */}
        <div
          className="relative bg-neutral py-10 px-0 md:py-16 md:px-12"
          data-aos="fade-up">
          {/* Background illustration */}
          <div
            className="absolute right-0 top-0 -ml-40 pointer-events-none"
            aria-hidden="true"></div>

          <div className="relative flex flex-col lg:flex-row justify-between items-center">
            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 text-neutral-100 mb-2">Stay in the loop</h3>
              <p className="text-neutral-300 text-lg">
                Join our newsletter to get top news before anyone else.
              </p>
            </div>

            {/* CTA form */}
            <form className="w-full lg:w-1/2" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                <input
                  type="email"
                  className="w-full appearance-none border border-blue-500 focus:border-blue-300 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-neutral-900 placeholder-blue-400"
                  placeholder="Your best email…"
                  aria-label="Your best email…"
                  value={email}
                  onChange={handleEmailChange}
                />
                <button
                  type="submit"
                  className="btn text-black bg-white hover:bg-white shadow px-4 py-3 rounded-sm">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
