import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase } from '@fortawesome/free-solid-svg-icons';

function Benefits () {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* First Section */}
      <div className="flex flex-col items-center justify-start p-4 bg-white shadow-lg rounded-lg">
        <FontAwesomeIcon icon={faUser} size="3x" className="text-gray-500" />
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-800">Real Team Work</h3>
          <p className="text-gray-600">Collaborate cross-discipline with your team, and work directly with real customers. Leverage each other's skills, just like your usual product team.</p>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col items-center justify-start p-4 bg-white shadow-lg rounded-lg">
        <FontAwesomeIcon icon={faBriefcase} size="3x" className="text-gray-500" />
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-800">Build Connections</h3>
          <p className="text-gray-600">Gather professional references and meet like-minded folks from various backgrounds. Network with industry leaders and professionals.</p>
        </div>
      </div>

      {/* Third Section */}
      <div className="flex flex-col items-center justify-start p-4 bg-white shadow-lg rounded-lg">
        <FontAwesomeIcon icon={faUser} size="3x" className="text-gray-500" />
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-800">Real Projects</h3>
          <p className="text-gray-600">No more bolierplate projects or case studies. Put your theoretical knowledge to the test and ship a product of your own with real impact</p>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="flex flex-col items-center justify-start p-4 bg-white shadow-lg rounded-lg">
        <FontAwesomeIcon icon={faBriefcase} size="3x" className="text-gray-500" />
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-800">Support & Accountability</h3>
          <p className="text-gray-600">Our dedicated projects and discipline mentors will make sure you're on track. Along with check-ins, workshops, office hours and more.</p>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
