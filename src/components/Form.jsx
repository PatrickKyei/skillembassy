import React from "react";

const Form = () => {
  return (
    <form className="mt-12 p-4 bg-neutral-100"
    method="POST"
    action="https://script.google.com/macros/s/AKfycbyXJNFPnmQxSFJYPbVJN2N7sL2leqi3skoqESbhbNTR93XwDQ9VsGbhWTE8fKgG7Y8y3g/exec">
      <div className="flex flex-col items-center my-2 font-poppins lg:my-[100px]">
          <div className="flex flex-col text-center gap-[10px] md:w-[700px] mx-auto">
            <h1 className="font-bold text-2xl text-neutral-900 md:text-5xl">
              Join the next Cohort
            </h1>
            <p className="text-neutral-900 mb-[5px]">
              Learn, build and launch an impactful products with industry experts.
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
          />
        </div>
        <div>
          <input
          Name="Email"
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email*"
            required
          />
        </div>
        <div>
          <select
          Name="Gender"
            id="gender"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose Gender*</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Undisclosed">Do not Disclose</option>
          </select>
        </div>

        <div>
          <select
          Name="Experience"
            id="experience"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>What is your experience level*</option>
            <option value="Novice">Novice</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        <div>
          <select
          Name="Career-Path"
            id="career"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Select Career Path*</option>
            <option value="Product School">Product School</option>
            <option value="Software Development">Software Development</option>
            <option value="Cloud Engineering">Cloud Engineering</option>
          </select>
        </div>
        <div>
          <select
          Name="Have-PC?"
            id="pc"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Do you have a computer?*</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div>
          <input
          Name="Phone"
            type="tel"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Phone Number"
            // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            required
          />
        </div>

        <div>
          <select
          Name="Country"
            id="country"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Select country*</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div>
          <select
          Name="State"
            id="state"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Select state*</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div>
          <input
          Name="Participation"
            type="textarea"
            id="reason"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Reason for participation"
            required
          />
        </div>

        <div>
          <select
          Name="Opportunity-Source"
            id="social"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>How did you hear about us?*</option>
            <option value="email">Email</option>
            <option value="website">Website</option>
            <option value="social">Social media</option>
            <option value="family">Family or friend</option>
          </select>
        </div>

        <div>
          <select
          Name="Newsletter?"
            id="subscribe"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Subscribe for more updates?*</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>

      <div className="px-4 flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
          Name="Terms"
            id="terms"
            type="checkbox"
            value="Yes"
            value="No"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            required
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
      <div className="flex items-center px-4 ">
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
