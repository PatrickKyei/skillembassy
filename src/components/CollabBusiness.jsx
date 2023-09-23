import React from "react";

const posts = [
  {
    id: 1,
    title: "Become a Sponsor",
    description:
      "Directly assist a student in gaining the chance to learn or sponsor one of our programs targeted at empowering individuals to obtain a job that will allow them to care for themselves and their family.",

  },
  {
    id: 2,
    title: "Become our Partner",
    description:
      "We encourage you to join us in creating the finest environment possible for learners to get real-world work experience and be prepared for the job market.",
  },
  {
    id: 3,
    title: "Hire from or Talent Pool",
    description:
      "Hire from our talent pool of candidates who will help your firm in growing and achieving its long-term goals.",
  },
  // More posts...
];

const CollabBusiness = () => {
  return (
    <div className="container mx-auto px-4 border-t border-gray-200">
      {/* First Row */}
      <div className="my-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-900 mb-4">
          How to Collaborate
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-700">
          You can help the excellent cause we're working on in a variety of
          ways. Join us as we develop excellent talent to drive innovation
          forward.{" "}
        </p>
      </div>

      {/* Second Row */}

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-8 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-8 mb-8">
              <div className="group relative">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="mt-5 text-lg font-normal text-gray-700 dark:text-gray-200">
                  {post.description}
                </p>
              </div>
              
              <div className="py-3"></div>
<a
            href="#"
            className="text-gray-500 border border-gray-500 inline-flex justify-center items-center py-2.5 px-5  font-medium text-center rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Collaborate
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>

            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollabBusiness;
