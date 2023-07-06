import React from 'react';
import { FaUsers, FaChartLine, FaMoneyBillAlt } from 'react-icons/fa';

const Impact = () => {
  return (
    <div className="flex flex-col items-center my-20">
      <h2 className="text-3xl font-semibold mb-8">Some numbers that matter</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="bg-white shadow-lg rounded-lg py-8 px-6 flex flex-col items-center">
          <FaUsers className="text-5xl mb-4 text-blue-500" />
          <h3 className="text-xl font-semibold mb-2">Users</h3>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis, risus eget suscipit feugiat.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg py-8 px-6 flex flex-col items-center">
          <FaChartLine className="text-5xl mb-4 text-green-500" />
          <h3 className="text-xl font-semibold mb-2">Growth</h3>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis, risus eget suscipit feugiat.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg py-8 px-6 flex flex-col items-center">
          <FaMoneyBillAlt className="text-5xl mb-4 text-yellow-500" />
          <h3 className="text-xl font-semibold mb-2">Revenue</h3>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis, risus eget suscipit feugiat.</p>
        </div>
      </div>
    </div>
  );
};

export default Impact;
