import React, { useState } from 'react';
import { PencilLine, FileText } from 'lucide-react';

// Define the types for our data
type EmployeeData = {
  name: string;
  department: string;
  jobTitle: string;
  jobCategory: string;
  avatarUrl: string;
  contactDetails: ContactDetails;
  jobDetails: JobDetails;
  documents: Document[];
};

type ContactDetails = {
  phoneNumber1: string;
  phoneNumber2: string;
  email: string;
  state: string;
  city: string;
  address: string;
};

type JobDetails = {
  jobRole: string;
  department: string;
  lineManager: string;
  responsibilities: string[];
};

type Document = {
  name: string;
  fileName: string;
};

// Sample employee data
const employeeData: EmployeeData = {
  name: "John Doe Francis",
  department: "Design & Marketing",
  jobTitle: "UI / UX Designer",
  jobCategory: "Full time",
  avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces&auto=format&q=80",
  contactDetails: {
    phoneNumber1: "Phone Number 1",
    phoneNumber2: "Phone Number 2",
    email: "johndoe@gmail.com",
    state: "Phone Number 1",
    city: "Phone Number 2",
    address: "18 Junction site Lekki"
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
      "Incorporating customer feedback, usage metrics, and usability findings into design in order to enhance user experience"
    ]
  },
  documents: [
    { name: "Signed Offer Letter", fileName: "Signed Offer Letter.pdf" },
    { name: "NYSC Certificate", fileName: "NYSC Certificate.pdf" },
    { name: "Guarantor's Form", fileName: "Guarantor's Form.pdf" },
    { name: "Degree Certificate", fileName: "Degree Certificate.pdf" },
    { name: "John Doe CV", fileName: "John Doe CV.pdf" },
    { name: "Birth Certificate", fileName: "Birth Certificate.pdf" }
  ]
};

function App() {
  const [activeMenu, setActiveMenu] = useState<string>("Job Details");
  const [showDocuments, setShowDocuments] = useState(false);

  const menuItems = [
    "Personal Details",
    "Contact Details",
    "Next of kin Details",
    "Education Qualifications",
    "Guarantor Details",
    "Family Details",
    "Job Details",
    "Financial Details"
  ];

  const renderDocuments = () => {
    return (
      <div className="space-y-8">
        <h2 className="text-xl font-semibold">Job Details / View Documents</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {employeeData.documents.map((doc, index) => (
            <div key={index} className="bg-[#F0F4FF] rounded-lg p-6 flex flex-col items-center space-y-4">
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
    );
  };

  const renderContent = () => {
    if (showDocuments) {
      return renderDocuments();
    }

    if (activeMenu === "Job Details") {
      return (
        <div className="space-y-8">
          <h2 className="text-xl font-semibold">View Job Details</h2>
          
          {/* Job Role Section */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Job Role</p>
            <h3 className="text-2xl font-semibold">{employeeData.jobDetails.jobRole}</h3>
          </div>

          {/* Department and Line Manager Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div>
              <p className="text-sm text-gray-600 mb-2">Department</p>
              <h3 className="text-2xl font-semibold">{employeeData.jobDetails.department}</h3>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Line Manager</p>
              <h3 className="text-2xl font-semibold">{employeeData.jobDetails.lineManager}</h3>
            </div>
          </div>

          {/* Job Description Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Job Description</h3>
            <p className="text-sm text-gray-800">Your responsibilities will include:</p>
            <ul className="list-disc pl-5 space-y-2">
              {employeeData.jobDetails.responsibilities.map((responsibility, index) => (
                <li key={index} className="text-sm text-gray-800">{responsibility}</li>
              ))}
            </ul>
          </div>

          {/* View Documents Button */}
          <div className="flex justify-center mt-8">
            <button 
              onClick={() => setShowDocuments(true)}
              className="bg-[#4CAF50] text-white px-8 py-3 rounded-lg hover:bg-[#45a049] transition-colors"
            >
              View Documents
            </button>
          </div>
        </div>
      );
    }

    if (activeMenu === "Contact Details") {
      return (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-black font-normal">Phone Number 1</label>
              <div className="w-full bg-[#F0F4FF] rounded-lg p-4">
                {employeeData.contactDetails.phoneNumber1}
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-black font-normal">Phone Number 2</label>
              <div className="w-full bg-[#F0F4FF] rounded-lg p-4">
                {employeeData.contactDetails.phoneNumber2}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-black font-normal">E-mail Address</label>
            <div className="w-full bg-[#F0F4FF] rounded-lg p-4">
              {employeeData.contactDetails.email}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-black font-normal">State of residence</label>
              <div className="w-full bg-[#F0F4FF] rounded-lg p-4">
                {employeeData.contactDetails.state}
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-black font-normal">City</label>
              <div className="w-full bg-[#F0F4FF] rounded-lg p-4">
                {employeeData.contactDetails.city}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-black font-normal">Residential Address</label>
            <div className="w-full bg-[#F0F4FF] rounded-lg p-4">
              {employeeData.contactDetails.address}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center max-w-md mx-auto">
        <img
          src={employeeData.avatarUrl}
          alt={employeeData.name}
          className="w-32 h-32 rounded-full bg-[#FFC107]"
        />
        
        <div className="text-center mt-6 space-y-4">
          <div>
            <p className="text-sm text-gray-600">Employee Name</p>
            <h2 className="text-xl font-semibold mt-1">{employeeData.name}</h2>
          </div>

          <div>
            <p className="text-sm text-gray-600">Department</p>
            <h3 className="text-xl font-semibold mt-1">{employeeData.department}</h3>
          </div>

          <div className="flex justify-between items-start pt-4">
            <div>
              <p className="text-sm text-gray-600">Job Title</p>
              <p className="font-semibold mt-1">{employeeData.jobTitle}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Job Category</p>
              <p className="font-semibold mt-1">{employeeData.jobCategory}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F0F4FF] p-4 md:p-8">
      {/* Breadcrumb */}
      <div className="text-sm mb-6">
        <p className="text-gray-700">Employee Mgmt / Employee Profile / JohnDoe</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Menu */}
        <div className="w-full md:w-64 bg-white rounded-lg p-2 h-fit">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveMenu(item);
                setShowDocuments(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm
                ${item === activeMenu ? 'bg-[#FFC107] font-medium' : 'bg-[#F0F4FF]'}
                ${index !== menuItems.length - 1 ? 'mb-2' : ''}
              `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Right Content */}
        <div className="flex-1 bg-white rounded-lg p-8 relative">
          {/* Edit Button */}
          <button className="absolute top-6 right-6 text-gray-600">
            <div className="flex items-center gap-2">
              <PencilLine size={20} />
              <span>Edit</span>
            </div>
          </button>

          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;