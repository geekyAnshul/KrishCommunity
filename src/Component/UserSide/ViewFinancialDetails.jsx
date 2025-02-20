import React from 'react'

const ViewFinancialDetails = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-lg font-bold mb-4">Financial Details</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Bank Name */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Bank Name</label>
        <input
          type="text"
          value="Access Bank"
          className="w-full p-3 bg-blue-100 rounded-lg border border-gray-300 outline-none"
          readOnly
        />
      </div>

      {/* Empty Space for Layout */}
      <div></div>

      {/* Account Number */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Account No</label>
        <input
          type="text"
          value="001101100"
          className="w-full p-3 bg-blue-100 rounded-lg border border-gray-300 outline-none"
          readOnly
        />
      </div>

      {/* Account Name */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Account Name</label>
        <input
          type="text"
          value="John Doe Smith"
          className="w-full p-3 bg-blue-100 rounded-lg border border-gray-300 outline-none"
          readOnly
        />
      </div>

      {/* Registered With */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Registered with</label>
        <input
          type="text"
          value="Stanbic IBTC"
          className="w-full p-3 bg-blue-100 rounded-lg border border-gray-300 outline-none"
          readOnly
        />
      </div>

      {/* Pension Number */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Pension Number</label>
        <input
          type="text"
          value="10111010101210101011"
          className="w-full p-3 bg-blue-100 rounded-lg border border-gray-300 outline-none"
          readOnly
        />
      </div>
    </div>

    {/* Update Button */}
    <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-lg font-medium shadow-md hover:bg-green-700 transition">
      Update Account Details
    </button>
  </div>
  )
}

export default ViewFinancialDetails
