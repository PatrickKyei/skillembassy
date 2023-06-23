import React from 'react';

import Header from '../sections/Header';
import PageIllustration from '../sections/PageIllustration';
// import Testimonials from '../sections/Testimonials';
// import Newsletter from '../sections/Newsletter';
import Banner from '../sections/Banner';
import Footer from '../sections/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        {/* <Testimonials />
        <Newsletter /> */}
      </main>

      <Banner />

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;