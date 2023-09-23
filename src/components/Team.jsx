import React from 'react';

const Team = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 className="mb-12 text-3xl font-bold">
          Meet our <u className="text-primary dark:text-primary-400">incredible</u> team
        </h2>

        <div className="lg:gap-xl-12 grid gap-x-6 md:grid-cols-3 xl:grid-cols-4">
          {/* Team Member 1 */}
          <div className="mb-12">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.jpg"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20"
              alt=""
              style={{ maxWidth: '100px' }}
            />

            <p className="mb-2 font-bold">John Doe</p>
            <p className="text-neutral-500 dark:text-neutral-300">Co-founder</p>
          </div>

          {/* Team Member 2 */}
          <div className="mb-12">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/5.jpg"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20"
              alt=""
              style={{ maxWidth: '100px' }}
            />

            <p className="mb-2 font-bold">Lisa Ferrol</p>
            <p className="text-neutral-500 dark:text-neutral-300">Web designer</p>
          </div>

          {/* Team Member 3 */}
          <div className="mb-12">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg"
              className="mx-auto mb-4 rounded-full shadow-lg dark:shadow-black/20"
              alt=""
              style={{ maxWidth: '100px' }}
            />
            <p className="mb-2 font-bold">Maria Smith</p>
            <p className="text-neutral-500 dark:text-neutral-300">
              Senior consultant
            </p>
          </div>
          
          {/* Add more team members as needed */}
        </div>
      </section>
    </div>
  );
};

export default Team;
