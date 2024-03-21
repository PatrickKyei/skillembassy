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
              href="https://www.youtube.com/@skillembassy_"
              className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2">
               <svg
              className="w-2.5 h-2.5 mr-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 14">
              <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
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
              Watch Live workshops
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForBusiness;
