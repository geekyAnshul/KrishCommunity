import React, { useState } from "react";
import { Bell, FileText, Key, Mail, PencilLine, Search } from "lucide-react";
// import Sidebar from "../Sidebar";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Sample employee data
const employeeData = {
  name: "John Doe Francis",
  department: "Design & Marketing",
  jobTitle: "UI / UX Designer",
  jobCategory: "Full time",
  avatarUrl:
    "https://img.freepik.com/premium-photo/confident-young-indian-man-standing-with-folded-arms-yellow-background_116547-74626.jpg",
  contactDetails: {
    phoneNumber1: "Phone Number 1",
    phoneNumber2: "Phone Number 2",
    email: "johndoe@gmail.com",
    state: "Phone Number 1",
    city: "Phone Number 2",
    address: "18 Junction site Lekki",
  },
  kinNext: {
    name: "Next of Kin 1",
    relationship: "Spouse",
    phoneNumber: "Phone Number 3",
    job: "React Developer",
  },
  education: {
    name: "RGPV",
    degree: "Bachelors Degree",
    field: "Computer Science",
    start: "01/01/1998",
    end: "01/01/2021",
  },
  jobDetails: {
    jobRole: "UI UX Designer",
    department: "Design & Marketing",
    lineManager: "Mr Domino's Pizza",
    responsibilities: [
      "Creating user-centered designs by understanding business requirements, and user feedback",
      "Creating user flows, wireframes, prototypes and mockups",
      "Translating requirements into style guides, design systems, design patterns and attractive user interfaces",
      "Designing UI elements such as input controls, navigational components and informational components",
      "Creating original graphic designs (e.g. images, sketches and tables)",
      "Identifying and troubleshooting UX problems (e.g. responsiveness)",
      "Collaborating effectively with product, engineering, and management teams",
      "Incorporating customer feedback, usage metrics, and usability findings into design in order to enhance user experience",
    ],
  },
  documents: [
    { name: "Signed Offer Letter", fileName: "Signed Offer Letter.pdf" },
    { name: "NYSC Certificate", fileName: "NYSC Certificate.pdf" },
    { name: "Guarantor's Form", fileName: "Guarantor's Form.pdf" },
    { name: "Degree Certificate", fileName: "Degree Certificate.pdf" },
    { name: "John Doe CV", fileName: "John Doe CV.pdf" },
    { name: "Birth Certificate", fileName: "Birth Certificate.pdf" },
  ],
};

function UpdateProfile() {
  const menuItems = [
    "Personal Details",
    "Contact Details",
    "Next of kin Details",
    "Education Qualifications",
    "Guarantor Details",
    "Family Details",
    "Job Details",
    "Financial Details",
  ];

  const [activeTab, setActiveTab] = useState("personalDetails");

  const [isOpen, setisOpen] = useState(false);

  const navigate = useNavigate();

  const accounts = [
    {
      accountNumber: "0001100101",
      name: "John Doe",
      bank: "GTBank",
      type: "Savings Account",
    },
    {
      accountNumber: "0001100101",
      name: "Doe Johnn",
      bank: "GTBank",
      type: "Savings Account",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50 flex">
      {/* <Sidebar /> */}

      <div
        className={`flex-1 ${
          isOpen ? "ml-64" : "ml-20"
        } transition-all duration-300`}
      >
        <div className="bg-white p-4 flex items-center justify-c">
          <div className="flex items-center gap-4 flex-1 ml-84">
            <div className="relative flex-1 max-w-xl">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <select className="h-full bg-[#1a237e] text-white px-4 rounded-l-md">
                  <option>All Candidates</option>
                  <option>Two Candidates</option>
                  <option>five Candidates</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-44 ml-4 pr-10 py-2 border rounded-md"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                4
              </span>
            </div>
            <div className="bg-yellow-400 p-2 rounded-full">
              <Key className="w-5 h-5" />
            </div>
            <div className="relative">
              <Mail className="w-6 h-6 text-green-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                2
              </span>
            </div>
          </div>
        </div>

        <div className="ml-44 bg-blue-50 p-6">
          <div className="text-sm mb-6 ml-2">
            <p className="text-gray-700 font-semibold text-xl">
              Employee Mgmt / Employee Profile / JohnDoe
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mr-70">
            <div className="w-full md:w-80 bg-white rounded-2xl p-4 h-fit">
              <button
                onClick={() => setActiveTab("personalDetails")}
                className={`w-full text-left px-6 py-4 rounded-lg text-lg mb-4 ${
                  activeTab === "personalDetails"
                    ? "bg-[#FFC107] font-medium"
                    : "bg-[#F0F4FF]"
                }`}
              >
                Personal Details
              </button>
              <button
                onClick={() => setActiveTab("contactDetails")}
                className={`w-full text-left px-6 py-4 rounded-lg text-lg mb-4 ${
                  activeTab === "contactDetails"
                    ? "bg-[#FFC107] font-medium"
                    : "bg-[#F0F4FF]"
                }`}
              >
                Contact Details
              </button>
              <button
                onClick={() => setActiveTab("nextkin")}
                className={`w-full text-left px-6 py-4 rounded-lg text-lg mb-4 ${
                  activeTab === "nextkin"
                    ? "bg-[#FFC107] font-medium"
                    : "bg-[#F0F4FF]"
                }`}
              >
                Next of kin Details
              </button>

              <button
                onClick={() => setActiveTab("educationQualifications")}
                className={`w-full text-left px-6 py-4 rounded-lg text-lg mb-4 ${
                  activeTab === "educationQualifications"
                    ? "bg-[#FFC107] font-medium"
                    : "bg-[#F0F4FF]"
                }`}
              >
                Education Qualifications
              </button>

              <button
                onClick={() => setActiveTab("gurarantorDetails")}
                className={`w-full text-left px-6 py-4 rounded-lg text-lg mb-4 ${
                  activeTab === "gurarantorDetails"
                    ? "bg-[#FFC107] font-medium"
                    : "bg-[#F0F4FF]"
                }`}
              >
                Guarantor Details
              </button>

              <button
                onClick={() => setActiveTab("family")}
                className={`w-full text-left px-6 py-4 rounded-lg text-lg mb-4 ${
                  activeTab === "family"
                    ? "bg-[#FFC107] font-medium"
                    : "bg-[#F0F4FF]"
                }`}
              >
                Family Details
              </button>

              <button
                onClick={() => setActiveTab("jobDetails")}
                className={`w-full text-left px-6 py-4 rounded-lg text-lg mb-4 ${
                  activeTab === "jobDetails"
                    ? "bg-[#FFC107] font-medium"
                    : "bg-[#F0F4FF]"
                }`}
              >
                Job Details
              </button>
              <button
                onClick={() => setActiveTab("Financial")}
                className={`w-full text-left px-6 py-4 rounded-lg text-lg mb-4 ${
                  activeTab === "Financial"
                    ? "bg-[#FFC107] font-medium"
                    : "bg-[#F0F4FF]"
                }`}
              >
                Financial Details
              </button>
            </div>

            {activeTab === "personalDetails" && (
              <div className="flex-1 bg-white rounded-2xl p-10 relative">
                <button className="absolute top-6 right-6 text-gray-600">
                  <div className="flex flex-col items-center gap-2">
                    <FaEdit className="text-2xl text-zinc-600 font-semibold " />
                    <span>Edit</span>
                  </div>
                </button>

                <div className="flex flex-col items-center max-w-md mx-auto">
                  <img
                    src={employeeData.avatarUrl}
                    alt={employeeData.name}
                    className="w-32 h-32 rounded-full object-cover  bg-[#FFC107]"
                  />

                  <div className="text-center mt-8 space-y-4">
                    <div>
                      <p className="text-base text-gray-600">Employee Name</p>
                      <h2 className="text-2xl font-semibold mt-4">
                        {employeeData.name}
                      </h2>
                    </div>

                    <div>
                      <p className="text-base text-gray-600 mt-8">Department</p>
                      <h3 className="text-2xl font-semibold mt-4">
                        {employeeData.department}
                      </h3>
                    </div>

                    <div className="flex justify-between gap-28 items-start pt-10">
                      <div>
                        <p className="text-base text-gray-600">Job Title</p>
                        <p className="font-semibold text-2xl mt-4">
                          {employeeData.jobTitle}
                        </p>
                      </div>
                      <div>
                        <p className="text-base  text-gray-600">Job Category</p>
                        <p className="font-semibold text-2xl mt-4">
                          {employeeData.jobCategory}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "contactDetails" && (
              <div className="space-y-6 bg-white p-8 rounded-2xl md:w-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-black font-medium text-lg">
                      Phone Number 1
                    </label>
                    <input
                      type="text"
                      className="w-full text-zinc-800 text-lg outline-none border-none bg-blue-50 rounded-lg p-4"
                      placeholder={employeeData.contactDetails.phoneNumber1}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-black font-medium text-lg">
                      Phone Number 2
                    </label>
                    <input
                      type="text"
                      className="w-full text-zinc-800 text-lg outline-none border-none bg-blue-50  rounded-lg p-4"
                      placeholder={employeeData.contactDetails.phoneNumber2}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-black font-medium text-lg">
                    E-mail Address
                  </label>
                  <input
                    type="text"
                    className="w-full text-zinc-800 text-lg outline-none border-none bg-blue-50  rounded-lg p-4"
                    placeholder={employeeData.contactDetails.email}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-black font-medium text-lg">
                      State of residence
                    </label>
                    <input
                      type="text"
                      className="w-full text-zinc-800 text-lg outline-none border-none bg-blue-50  rounded-lg p-4"
                      placeholder={employeeData.contactDetails.state}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-black font-medium text-lg">
                      City
                    </label>
                    <input
                      type="text"
                      className="w-full text-zinc-800 text-lg outline-none border-none bg-blue-50  rounded-lg p-4"
                      placeholder={employeeData.contactDetails.city}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-black font-medium text-lg">
                    Residential Address
                  </label>
                  <textarea
                    cols={100}
                    rows={5}
                    name=""
                    id=""
                    className="w-full text-zinc-400 text-lg outline-none border-none bg-blue-50  rounded-lg p-2"
                    value={employeeData.contactDetails.address}
                  ></textarea>
                </div>
                <div className="bg-green-600 w-35 ml-60 text-black px-10 py-1 rounded-lg shadow-md">
                  <button>Update</button>
                </div>
              </div>
            )}

            {activeTab === "nextkin" && (
              <div className="space-y-6 bg-white p-8 rounded-2xl md:w-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-black font-medium text-lg">
                      Next of kin name
                    </label>
                    <input
                      type="text"
                      className="w-full text-zinc-800 text-lg outline-none border-none bg-blue-50 rounded-lg p-4"
                      placeholder={employeeData.kinNext.name}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-black font-medium text-lg">
                      Job / Occupation
                    </label>
                    <input
                      type="text"
                      className="w-full text-zinc-800 text-lg outline-none border-none bg-blue-50  rounded-lg p-4"
                      placeholder={employeeData.kinNext.job}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-black font-medium text-lg">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="w-full text-zinc-800 text-lg outline-none border-none bg-blue-50  rounded-lg p-4"
                      placeholder={employeeData.kinNext.phoneNumber}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-black font-medium text-lg">
                      Relationship
                    </label>
                    <input
                      type="text"
                      className="w-full text-zinc-800 text-lg outline-none border-none bg-blue-50  rounded-lg p-4"
                      placeholder={employeeData.kinNext.relationship}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-black font-medium text-lg">
                    Residential Address
                  </label>
                  <textarea
                    cols={100}
                    rows={5}
                    name=""
                    id=""
                    className="w-full text-zinc-400 text-lg outline-none border-none bg-blue-50  rounded-lg p-4"
                    value={employeeData.contactDetails.address}
                  ></textarea>
                </div>

                <div className="bg-green-600 w-35 ml-60 text-black px-10 py-1 rounded-lg shadow-md">
                  <button>Update</button>
                </div>
              </div>
            )}

            {activeTab === "educationQualifications" && (
              <div className="space-y-6 bg-white p-8 rounded-2xl md:w-3xl">
                <div class="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
                  {/* <!-- Academic Records --> */}
                  <p class="text-lg font-bold mb-4">Academic Records</p>

                  <div class="bg-blue-100 p-4 rounded-lg mb-3">
                    <h3 class="font-bold">Leicester University</h3>
                    <p class="text-sm text-gray-600">
                      B.Sc in Computer Science,{" "}
                      <span class="font-medium">May 2014 - May 2018</span>
                    </p>
                  </div>

                  <div class="bg-blue-100 p-4 rounded-lg mb-6">
                    <h3 class="font-bold">English College</h3>
                    <p class="text-sm text-gray-600">
                      W.A.S.S.C.E.,{" "}
                      <span class="font-medium">February 2006 - June 2012</span>
                    </p>
                  </div>

                  {/* <!-- Professional Qualifications --> */}
                  <h2 class="text-lg font-bold mb-4">
                    Professional Qualifications
                  </h2>

                  <div class="bg-blue-100 p-4 rounded-lg mb-3">
                    <h3 class="font-bold">CCNA Certification</h3>
                    <p class="text-sm text-gray-600">
                      at New Horizons,{" "}
                      <span class="font-medium">May 2019 - September 2021</span>
                    </p>
                  </div>

                  <div class="bg-blue-100 p-4 rounded-lg mb-3">
                    <h3 class="font-bold">Google UI / UX Certification</h3>
                    <p class="text-sm text-gray-600">
                      at Google Inc.,{" "}
                      <span class="font-medium">
                        September 2021 - September 2022
                      </span>
                    </p>
                  </div>

                  <div class="bg-blue-100 p-4 rounded-lg">
                    <h3 class="font-bold">Web Developer</h3>
                    <p class="text-sm text-gray-600">
                      at Google Inc.,{" "}
                      <span class="font-medium">May 2019 - September 2021</span>
                    </p>
                    <ul class="list-disc list-inside text-gray-600 text-sm mt-2">
                      <li>
                        Collaborated with teammates to deliver valuable features
                        meeting business and customer needs.
                      </li>
                    </ul>
                  </div>
                  <div
                    className="bg-green-600 w-70 ml-85 text-black px-10 py-1 rounded-lg shadow-md mt-3"
                    onClick={() => setActiveTab("viewEducationDetails")}
                  >
                    <button>View Academic Details</button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "viewEducationDetails" && (
                <div className="border-black w-full">
                <div className="flex min-h-screen bg-blue-50 ml-70 w-full ml-1">
                  {/* Sidebar */}
                 
            
                  {/* Main Content */}
                  <div >
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
                    </div>
                  </div>
                </div>
                </div>
            )}


            {activeTab === "gurarantorDetails" && (
              <div className="space-y-6 bg-white p-8 rounded-2xl md:w-3xl ">
                <h1 className="text-xl font-semibold text-black mb-8">
                  Guarantor Details
                </h1>

                <div
                  onClick={() => setActiveTab("guarantor")}
                  className="bg-blue-50 rounded-2xl px-8 py-8 cursor-pointer "
                >
                  <h1 className="font-semibold text-lg text-zinc-700">
                    Mr Johnnie Walker Deep
                  </h1>
                  <p className="text-base  text-zinc-600 mt-2 ">
                    Head of Design Team, Microsoft Inc - 090 500 500 6000
                  </p>
                </div>

                <div
                  onClick={() => setActiveTab("guarantor")}
                  className="bg-blue-50 w-full rounded-2xl mt-8 px-8 py-8 cursor-pointer "
                >
                  <h1 className="font-semibold text-lg text-zinc-700">
                    Miss Walkie Talkie
                  </h1>
                  <p className="text-base  text-zinc-600 mt-2 ">
                    Human Resources Manager , Apple Inc - 090 400 400 4848{" "}
                  </p>
                </div>
              </div>
            )}

            {activeTab === "guarantor" && (
              <div className="space-y-6 bg-white p-8 rounded-2xl md:w-3xl ">
                <h1 className="text-xl font-semibold text-black mb-8">
                  {" "}
                  View Guarantor Details
                </h1>

                <div className="space-y-2">
                  <label className="block text-black font-medium text-lg">
                    Guarantor’s Name
                  </label>
                  <input
                    type="text"
                    className="w-full text-zinc-800 text-lg outline-none border-none bg-blue-50  rounded-lg p-4"
                    placeholder="Babcock University"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-black font-medium text-lg">
                    Job title / Occupation
                  </label>
                  <input
                    type="text"
                    className="w-full text-zinc-800 text-lg outline-none border-none bg-blue-50  rounded-lg p-4"
                    placeholder="Babcock University"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-black font-medium text-lg">
                    Phone No
                  </label>
                  <input
                    type="text"
                    className="w-full text-zinc-800 text-lg outline-none border-none bg-blue-50  rounded-lg p-4"
                    placeholder="090 500 500 6000"
                  />
                </div>
                <div className="bg-green-600 w-35 ml-60 text-black px-10 py-1 rounded-lg shadow-md">
                  <button>Update</button>
                </div>
              </div>
            )}

            {activeTab === "family" && (
              <div className="space-y-6 bg-white p-8 rounded-2xl md:w-3xl  ">
                <h1 className="text-xl font-semibold text-black mb-8">
                  Family Details
                </h1>

                <div
                  onClick={() => setActiveTab("families")}
                  className="bg-blue-50 rounded-2xl px-8 py-8 cursor-pointer "
                >
                  <h1 className="font-semibold text-lg text-zinc-700">
                    Mr Johnnie Walker Deep
                  </h1>
                  <p className="text-base  text-zinc-600 mt-2 ">
                    Relationship : Brother | Phone No : 090 300 540 9888
                  </p>
                  <p className="text-base  text-zinc-600 mt-1 ">
                    Address: 333 Adeniyi Street Victoria Island, Lagos
                  </p>
                </div>

                <div
                  onClick={() => setActiveTab("families")}
                  className="bg-blue-50 w-full rounded-2xl mt-8 px-8 py-8 cursor-pointer "
                >
                  <h1 className="font-semibold text-lg text-zinc-700">
                    Miss Walkie Talkie
                  </h1>
                  <p className="text-base  text-zinc-600 mt-2 ">
                    Relationship : Brother | Phone No : 090 300 540 9888
                  </p>
                  <p className="text-base  text-zinc-600 mt-1">
                    Address: 333 Adeniyi Street Victoria Island, Lagos
                  </p>
                </div>
              </div>
            )}

            {activeTab === "families" && (
              <div className="space-y-6 bg-white p-8 rounded-2xl md:w-3xl ">
                <h1 className="text-xl font-semibold text-black mb-8">
                  {" "}
                  View Family Details
                </h1>

                <div className="space-y-2">
                  <label className="block text-black font-medium text-lg">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full text-zinc-800 text-lg outline-none border-none bg-blue-50  rounded-lg p-4"
                    placeholder="Babcock University"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-black font-medium text-lg">
                      Relationship
                    </label>
                    <input
                      type="text"
                      className="w-full text-zinc-800 text-lg outline-none border-none bg-blue-50  rounded-lg p-4"
                      placeholder="Brother"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-black font-medium text-lg">
                      Phone No
                    </label>
                    <input
                      type="text"
                      className="w-full text-zinc-800 text-lg outline-none border-none bg-blue-50  rounded-lg p-4"
                      placeholder="090 500 500 6000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-black font-medium text-lg">
                    Residential Address
                  </label>
                  <textarea
                    cols={100}
                    rows={5}
                    name=""
                    id=""
                    className="w-full text-zinc-400 text-lg outline-none border-none bg-blue-50  rounded-lg p-4"
                    value={employeeData.contactDetails.address}
                  ></textarea>
                </div>
                <div className="bg-green-600 w-35 ml-70 text-black px-10 py-1 rounded-lg shadow-md">
                  <button>Update</button>
                </div>
              </div>
            )}

            {activeTab === "jobDetails" && (
              <div className="space-y-8 bg-white p-8 rounded-2xl">
                <h2 className="text-xl font-semibold">View Job Details</h2>

                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Job Role</p>
                  <h3 className="text-2xl font-semibold">
                    {employeeData.jobDetails.jobRole}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Department</p>
                    <h3 className="text-2xl font-semibold">
                      {employeeData.jobDetails.department}
                    </h3>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Line Manager</p>
                    <h3 className="text-2xl font-semibold">
                      {employeeData.jobDetails.lineManager}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-center">
                    Job Description
                  </h3>
                  <p className="text-sm text-gray-800">
                    Your responsibilities will include:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    {employeeData.jobDetails.responsibilities.map(
                      (responsibility, index) => (
                        <li key={index} className="text-sm text-gray-800">
                          {responsibility}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="flex  mt-4">
                  <button
                    onClick={() => setActiveTab("uploadDocuments")}
                    className="bg-blue-900 w-[280px] ml-4 text-white px-10 py-3 rounded-lg shadow-md mt-3"
                  >
                    Upload Documents
                  </button>
                  <button
                    onClick={() => setActiveTab("viewDocuments")}
                    className=" text-black px-5 py-1 border border-green-700 rounded-lg hover:bg-[#45a049] transition-colors  ml-5"
                  >
                    View Documents
                  </button>
                </div>
              </div>
            )}

            {activeTab === "uploadDocuments" && (
               <div className="flex items-center justify-center min-h-screen bg-gray-100">
               <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl m-0 p-0">
                 <h2 className="text-lg font-bold mb-4">Job Details / Upload Documents</h2>
         
                 {/* Upload Fields */}
                 {[
                   "Upload Offer Letter",
                   "Upload NYSC Certificate",
                   "Upload Guarantor’s Form",
                   "Upload Degree Certificate",
                   "Upload Birth Certificate",
                 ].map((label, index) => (
                   <div key={index} className="mb-4">
                     <label className="text-sm font-medium">{label}</label>  
                     <div className="flex items-center mt-1 bg-blue-100 rounded-md">
                       <input
                         type="text"
                         value=""
                         readOnly
                         className="w-full p-3 bg-transparent"
                         placeholder="No file chosen"
                       />
                       <button className="bg-yellow-500 text-black px-15 py-3 rounded font-semibold">
                         Upload
                       </button>
                     </div>
                   </div>
                 ))}
         
                 {/* Upload Documents Button */}
                 <button className="w-full bg-blue-900 text-white px-6 py-3 rounded-md font-semibold mt-4">
                   Upload Documents
                 </button>
               </div>
             </div>
            )}

            {activeTab === "viewDocuments" && (
              <div className="space-y-8 bg-white p-8 rounded-2xl md:w-3xl ">
                <h2 className="text-xl font-semibold">
                  Job Details / View Documents
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {employeeData.documents.map((doc, index) => (
                    <div
                      key={index}
                      className="bg-[#F0F4FF] rounded-lg p-6 flex flex-col items-center space-y-4"
                    >
                      <FileText size={48} className="text-black" />
                      <p className="text-sm text-center">{doc.name}</p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center mt-8">
                  <button className="bg-[#4CAF50] text-white px-8 py-3 rounded-lg hover:bg-[#45a049] transition-colors">
                    Download ALL (Zip)
                  </button>
                </div>
              </div>
            )}

            {activeTab === "Financial" && (
              <div className="space-y-6 bg-white p-8 rounded-2xl md:w-3xl ">
                <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md">
                  <h2 className="text-lg font-bold mb-3">Financial Details</h2>

                  {/* Account Details */}
                  {accounts.map((account, index) => (
                    <div
                      onClick={() => setActiveTab("financial-details")}
                      key={index}
                      className="bg-blue-100 p-4 rounded-lg mb-3"
                    >
                      <p className="font-bold">
                        {account.accountNumber} |{" "}
                        <span className="font-semibold">{account.name}</span>
                      </p>
                      <p className="text-gray-600">
                        {account.bank} | {account.type}
                      </p>
                    </div>
                  ))}
 

         {activeTab === "financial-details" && (
          <h1>hiiii</h1>
         )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;
