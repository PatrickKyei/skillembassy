import React from "react";
import GDG from "../assets/gdgmeetup.jpg";
import ATTARA from "../assets/alcattara.jpg";
import WHC from "../assets/womencode.jpg";
import ADJ from "../assets/adjoa.jpg";
import WM from "../assets/women.jpg";
import NT from "../assets/interact.jpg";
// import NT from "../assets/interact.jpg";
// import NT from "../assets/interact.jpg";




// Define the image data as an array
const alumniImages = [
  {
    src: WM,
    padding: 1,
  },
  {
    src: NT,
    padding: 4,
  },
  {
    src: WHC,
    padding: 4,
  },
  {
    src: ADJ,
    padding: 1,
  },
  {
    src: ATTARA,
    padding: 0,
  },
  {
    src: GDG,
    padding: 4,
  },
];

const ImageWrapper = ({ src, padding }) => (
  <div className={`w-full p-${padding} md:p-${2 * padding} sm:w-1/2 sm:p-${padding} md:w-1/2`}>
    <img
      alt="gallery"
      className="block h-full w-full object-cover object-center transition-all duration-300 rounded-lg blur-sm hover:blur-none filter grayscale hover:grayscale-0"
      src={src}
    />
  </div>
);

const Alumni = () => {
  return (
    <div className="my-12 w-full">
      <div className="flex flex-col items-center">
        <h2 className="text-5xl font-semibold mt-8 items-center text-neutral-100">
          Alumni
        </h2>
        <div className="container mx-auto py-2 lg:pt-24">
          <div className="-m-1 flex flex-wrap md:-m-2">
            {alumniImages.map((image, index) => (
              <ImageWrapper key={index} src={image.src} padding={image.padding} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
