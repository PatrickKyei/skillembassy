import React, { useState, useEffect } from "react";
import countriesData from "../utils/countries.json";
import timezonesData from "../utils/timezones.json";




const Form = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Gender: "Choose Gender*",
    Experience: "What is your experience level*",
    CareerPath: "Select Career Path*",
    HavePC: "Do you have a computer?*",
    Phone: "",
    Country: "",
    Timezone: "",
    Participation: "",
    OpportunitySource: "How did you hear about us?*",
    Newsletter: "Subscribe for more updates?*",
    Terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const getCountries = () => {
    return countriesData.map((country) => (
      <option key={country.code} value={country.name}>
        {country.name}
      </option>
    ));
  };



  const getTimezones = () => {
    return timezonesData.map((timezone) => (
      <option key={timezone.abbreviation} value={timezone.name}>
        {timezone.name}
      </option>
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyXJNFPnmQxSFJYPbVJN2N7sL2leqi3skoqESbhbNTR93XwDQ9VsGbhWTE8fKgG7Y8y3g/exec";
    const formDataToSend = new FormData();

    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    // Log the form data
    // console.log('Form Data:', formData);

    fetch(scriptURL, { method: "POST", body: formDataToSend })
    .then((response) => {
      alert("Thank you! your form is submitted successfully.");
      // Redirect to the homepage after a successful submission
      window.location.href = "https://skillembassy.org"; // Replace with your homepage URL
    })
    .catch((error) => {
      console.error("Error!", error.message);
    });
  };

  return (
    <form className="mt-12 p-4 bg-neutral-100" onSubmit={handleSubmit}>
      <div className="flex flex-col items-center my-2 font-poppins lg:my-[100px]">
        <div className="flex flex-col text-center gap-[10px] md:w-[700px] mx-auto">
          <h1 className="font-bold text-2xl text-neutral-900 md:text-5xl">
            Join the next Cohort
          </h1>
          <p className="text-neutral-900 mb-[5px]">
            Learn, build, and launch impactful products with industry experts.
          </p>
        </div>
      </div>
      <div className="grid gap-6 mb-6 px-4 md:grid-cols-2">
        <div>
          <input
            name="Name"
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Name*"
            required
            value={formData.Name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="Email"
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email*"
            required
            value={formData.Email}
            onChange={handleChange}
          />
        </div>
        <div>
          <select
            name="Gender"
            id="gender"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.Gender}
            onChange={handleChange}>
            <option value="Choose Gender*">Choose Gender*</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Undisclosed">Do not Disclose</option>
          </select>
        </div>
        <div>
          <select
            name="Experience"
            id="experience"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.Experience}
            onChange={handleChange}>
            <option value="What is your experience level*">
              What is your experience level*
            </option>
            <option value="Novice">Novice</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        <div>
          <select
            name="CareerPath"
            id="career"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.CareerPath}
            onChange={handleChange}>
            <option value="Select Career Path*">Select Career Path*</option>
            <option value="Product School">Product School</option>
            <option value="Software Development">Software Development</option>
            <option value="Cloud Engineering">Cloud Engineering</option>
          </select>
        </div>
        <div>
          <select
            name="HavePC"
            id="pc"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.HavePC}
            onChange={handleChange}>
            <option value="Do you have a computer?*">
              Do you have a computer?*
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div>
          <input
            name="Phone"
            type="tel"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Phone Number"
            required
            value={formData.Phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <select
            name="Country"
            id="country"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.Country}
            onChange={handleChange}>
            <option value="">Select country*</option>
            {getCountries()}
          </select>
        </div>

{/* <div>
          <input
            name="Country"
            type="textarea"
            id="country"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your country*"
            required
            value={formData.Country}
            onChange={handleChange}
          />
        </div> */}

        <div>
          <select
            name="Timezone"
            id="timezone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.Timezone}
            onChange={handleChange}>
            <option value="">Select timezone*</option>
            {getTimezones()}
          </select>
        </div>

        {/* <div>
          <input
            name="Timezone"
            type="textarea"
            id="timezone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your timezone*"
            required
            value={formData.Timezone}
            onChange={handleChange}
          />
        </div> */}

        <div>
          <input
            name="Participation"
            type="textarea"
            id="reason"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Reason for participation"
            required
            value={formData.Participation}
            onChange={handleChange}
          />
        </div>
        <div>
          <select
            name="OpportunitySource"
            id="social"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.OpportunitySource}
            onChange={handleChange}>
            <option value="How did you hear about us?*">
              How did you hear about us?*
            </option>
            <option value="email">Email</option>
            <option value="website">Website</option>
            <option value="social">Social media</option>
            <option value="family">Family or friend</option>
          </select>
        </div>
        <div>
          <select
            name="Newsletter"
            id="subscribe"
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={formData.Newsletter}
            onChange={handleChange}>
            <option value="Subscribe for more updates?*">
              Subscribe for more updates?*
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>
      <div className="px-4 flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            name="Terms"
            id="terms"
            type="checkbox"
            required
            checked={formData.Terms}
            onChange={handleChange}
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
          />
        </div>
        <label
          htmlFor="terms"
          className="ml-2 text-sm font-medium text-neutral-800">
          I agree with the{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-500">
            terms and conditions
          </a>
          .
        </label>
      </div>
      <div className="flex items-center px-4">
        <button
          type="submit"
          className="text-neutral-100 bg-neutral-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
