import React from "react";

const Careers = () => {
  const careerData = [
    {
      title: "Card Title 1",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageUrl: "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
    },
    {
      title: "Card Title 2",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageUrl: "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
    },
    {
      title: "Card Title 3",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageUrl: "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
    },
    {
      title: "Card Title 4",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageUrl: "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
    },
    {
      title: "Card Title 5",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageUrl: "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
    },
    {
      title: "Card Title 6",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imageUrl: "https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg",
    },
  ];

  return (
    <div className="text-center">
      <h2 className="text-5xl font-semibold text-neutral-100 mb-8">Our Career Change Courses</h2>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {careerData.map((career, index) => (
          <div
            key={index}
            className="block rounded-sm bg-neutral-900"
          >
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img className="rounded-t-lg" src={career.imageUrl} alt={career.title} />
              <a href="#!">
                <div
                  className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                ></div>
              </a>
            </div>
            <div className="pt-2 pl-2">
              <h5 className="mb-2 font-medium leading-tight text-neutral-100">
                {career.title}
              </h5>
              <p className="mb-4 text-base text-neutral-100">
                {career.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;