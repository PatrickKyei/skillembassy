const ForBusiness = () => {
  return (
    <div className="w-full pb-12 mb-12" data-aos="fade-up" data-aos-duration="1000">
    <div className="flex flex-col md:flex-row w-full max-w-[60rem]">
      <div>
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
          alt="image" 
          className="w-full h-auto rounded-md object-cover"
        />
      </div>
      <div className="flex flex-col justify-center sm:p-8 pl-1 pt-8">
        <h2 className="text-gray-900 text-4xl font-bold mb-4">For Businesses.</h2>
        <h4 className="text-gray-700 text-2xl font-bold mb-2">
          Develop Digital Talent In Your Company
        </h4>
        <p className="text-lg font-normal text-gray-500 dark:text-gray-200 mb-8">
          Accelerate the pace of your company's digital evolution with training that makes your team more agile, collaborative and innovative.
        </p>
        <a href="#" className="inline-block">
          <button
            type='button'
            className='font-bold bg-gray-900 text-sm text-white mx-[1px] py-[10px] px-[30px] rounded-md md:text-base hover:drop-shadow-xl'
          >
            Start Today
          </button>
        </a>
      </div>
    </div>
    </div>
  );
}

export default ForBusiness;
