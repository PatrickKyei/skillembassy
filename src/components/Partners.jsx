import React from 'react';

const Partners = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 className="text-neutral-100 mb-16 text-4xl font-semibold">
        Powered by <u className="">reliable</u> companies
        </h2>

        <div className="grid items-center gap-6 md:grid-cols-2 lg:grid-cols-6">
          <div className="mb-12 lg:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/2.png"
              className="px-4 md:px-12"
              alt="Nasa - logo"
            />
          </div>

          <div className="mb-12 lg:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/1.png"
              className="px-6 md:px-12"
              alt="Amazon - logo"
            />
          </div>

          <div className="mb-12 lg:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/3.png"
              className="px-6 md:px-12"
              alt="Nike - logo"
            />
          </div>

          <div className="mb-12 lg:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/1.png"
              className="px-6 md:px-12"
              alt="Amazon - logo"
            />
          </div>

          <div className="mb-12 lg:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/1.png"
              className="px-6 md:px-12"
              alt="Amazon - logo"
            />
          </div>

          <div className="mb-12 lg:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/landing-page/4.png"
              className="px-6 md:px-12"
              alt="Ikea - logo"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
