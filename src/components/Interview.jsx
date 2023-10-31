import Interview from "../assets/interview.png";

const ForBusiness = () => {
  return (
    <div
      className="w-full pb-12 mb-12"
      data-aos="fade-up"
      data-aos-duration="1000">
      <div className="flex flex-col md:flex-row w-full max-w-[80rem]">
        <div>
          <img
            src={Interview}
            alt="image"
            className="w-full h-auto rounded-md object-cover"
          />
        </div>

        <div className="flex flex-col justify-center sm:p-8 pl-1 pt-8">
          <div>
            <a
              href="#"
              className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2">
              <svg
                className="w-2.5 h-2.5 mr-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                />
              </svg>
              Youtube
            </a>
          </div>

          <h4 className="text-neutral-100 text-2xl font-bold mb-2">
            From security guard to a senior software engineer{" "}
          </h4>
          <p className="text-lg font-normal text-neutral-400 mb-4">
            Watch Interviews featuring amazing people and their tech career
            stories, how technology is shaping our world. If you are someone who
            wants to make a switch to a particular industry, get inspired and
            land your dream job!{" "}
          </p>
          <div className="flex flex-row sm:pb-4 pt-2">
            <p className="text-sm font-normal text-neutral-400 mr-4">Jose</p>

            <p className="text-sm font-normal text-neutral-400">
              Senior Software Engineer
            </p>
          </div>
          <a href="https://youtu.be/oAPBFh9birk?si=PcWPKg0SA2aWAzJw" className="inline-block pt-4">
            <button
              type="button"
              className="font-bold bg-purple-100 text-sm text-purple-800 mx-[1px] py-[10px] px-[30px] rounded-sm md:text-base hover:drop-shadow-xl">
              Watch Live session
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForBusiness;
