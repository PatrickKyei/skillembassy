import React from "react";
import Commintro from "../assets/commintro.png";

const CommIntro = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        {/* <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/154.jpg')] h-[500px]"></div> */}
        {/* <img
          src={Commintro}
          alt="Community Introduction"
          className="object-cover w-full h-full"
        /> */}
        <div className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden" style={{ paddingTop: "56.25%" }}>
      <iframe
        className="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full"
        src="https://www.youtube.com/embed/oEj9ZiorBKk?si=oO6U6VwTf8jXeMLV?enablejsapi=1&origin=https%3"
        allowFullScreen
        // data-gtm-yt-inspected-2340190_699="true"
        id="240632615"
        title="Embedded Video"
      ></iframe>
    </div>
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="text-center">
            <div className="mt-[-170px] block rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] md:py-16 md:px-12">
              <h1 className="text-neutral-100 mb-16 text-xs tracking-tight md:text-3xl xl:text-3xl">
                The platfrom thrives on the power on community! We
                are committed to nurting and empowering your success. Your
                support enables us to keep the momentum going. Join us in building a brighter future for Aspiring
                Product Teams!
              </h1>
              <a
              className="font-bold bg-neutral-50 text-sm text-neutral-950 mx-[5px] py-[10px] px-[30px] rounded-sm md:text-base hover:drop-shadow-xl"
                data-te-ripple-init
                data-te-ripple-color="light"
                href="#!"
                role="button">
                Pledge Support
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommIntro;
