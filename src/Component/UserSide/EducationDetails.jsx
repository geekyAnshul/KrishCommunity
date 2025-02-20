import React from "react";
import { Link } from "react-router-dom";

const EducationDetails = () => {
  return (
    <div className="border-black">
    <div className="flex min-h-screen bg-blue-50 ml-70">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-md p-4">
        <ul className="space-y-2">
          <li className="px-4 py-3 text-gray-700 bg-gray-100 rounded-md">Personal Details</li>
          <li className="px-4 py-3 text-gray-700 bg-gray-100 rounded-md">Contact Details</li>
          <li className="px-4 py-3 text-gray-700 bg-gray-100 rounded-md">Next of Kin Details</li>
          <li className="px-4 py-3 text-gray-700 bg-yellow-500 text-white rounded-md">Education Qualifications</li>
          <li className="px-4 py-3 text-gray-700 bg-gray-100 rounded-md">Guarantor Details</li>
          <li className="px-4 py-3 text-gray-700 bg-gray-100 rounded-md">Family Details</li>
          <li className="px-4 py-3 text-gray-700 bg-gray-100 rounded-md">Job Details</li>
          <li className="px-4 py-3 text-gray-700 bg-gray-100 rounded-md">Financial Details</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-10">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Academic Records / Academic Details</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Name of Institution</label>
              <input
                type="text"
                value="Babcock University"
                readOnly
                className="w-full p-2 bg-blue-100 rounded-md mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Department</label>
              <input
                type="text"
                value="Computer Dept"
                readOnly
                className="w-full p-2 bg-blue-100 rounded-md mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Course</label>
              <input
                type="text"
                value="Computer Science"
                readOnly
                className="w-full p-2 bg-blue-100 rounded-md mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Location</label>
              <input
                type="text"
                value="Ogun state, Nigeria"
                readOnly
                className="w-full p-2 bg-blue-100 rounded-md mt-1"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Start Date</label>
              <input
                type="text"
                value="01/01/1998"
                readOnly
                className="w-full p-2 bg-blue-100 rounded-md mt-1"
              />
            </div>
            <div>
              <label className="text-sm font-medium">End Date</label>
              <input
                type="text"
                value="01/01/2019"
                readOnly
                className="w-full p-2 bg-blue-100 rounded-md mt-1"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="text-sm font-medium">Description</label>
            <textarea
              readOnly
              className="w-full p-3 bg-blue-100 rounded-md mt-1"
              rows="4"
              value={`. Gathering and evaluating product requirements, in collaboration with product managers and developers.
. Illustrating design ideas using storyboards, process flows, and sitemaps.
. Designing graphic user interface pages and elements, like menus, tabs, and widgets.
. Designing wireframes, mockups, storyboards, and fully interactive prototype design.`}
            />
          </div>

          <button className="bg-green-600 w-full text-white px-10 py-2 rounded-lg shadow-md mt-4">
            Update
          </button>

          <Link to="/userprofile" className="mt-4 inline-block text-blue-600 underline">
            Go Back
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EducationDetails;