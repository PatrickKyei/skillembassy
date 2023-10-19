import React from "react";

const Collab = () => {
  return (
    <div className="container my-24 mx-auto md:px-6" style={{ width: "100%" }}>
      <div className="relative w-full overflow-hidden" style={{ paddingTop: "56.25%" }}>
        <iframe
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
          src="https://www.youtube.com/embed/oEj9ZiorBKk?si=oO6U6VwTf8jXeMLV?enablejsapi=1&origin=https%3"
          allowFullScreen
          allow="fullscreen"
          title="Embedded YouTube Video"
          id="240632615"
        ></iframe>
      </div>
    </div>
  );
};

export default Collab;
