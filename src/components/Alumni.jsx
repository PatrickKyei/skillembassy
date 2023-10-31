import React from "react";

// Define the image data as an array
const alumniImages = [
  {
    src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
    padding: 1,
  },
  {
    src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
    padding: 4,
  },
  {
    src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    padding: 4,
  },
  {
    src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
    padding: 1,
  },
  {
    src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
    padding: 0,
  },
  {
    src: "https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp",
    padding: 4,
  },
];

const ImageWrapper = ({ src, padding }) => (
  <div className={`w-full p-${padding} md:p-${2 * padding} sm:w-1/2 sm:p-${padding} md:w-1/2`}>
    <img
      alt="gallery"
      className="block h-full w-full rounded-md object-cover object-center"
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
