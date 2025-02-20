import React from "react";

const UploadDocuments = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
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
  );
};

export default UploadDocuments;
