import React, {useState} from 'react'
import { IoBookSharp } from "react-icons/io5";

const SickLeave = () => {

    const [formData, setFormData] = useState({
        startDate: "",
        endDate: "",
        duration: "60",
        resumptionDate: "",
        reason: "",
        file: null,
        reliefOfficer: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };

  return (
    <>
      <div>
      <div className="min-h-screen bg-blue-100 flex items-center justify-center p-4">
        {/* <div>Dashboard>Apply for Leave>Sick Leave</div> */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
          <h2 className="text-2xl font-semibold flex text-center justify-center items-center gap-2">
            <IoBookSharp className="w-6 h-6" />
            Leave Application
          </h2>
          <p className="text-gray-600  text-center justify-center">
            Fill the required fields below to apply for annual leave.
          </p>
          <form onSubmit={handleSubmit} className="mt-4">
            <label className="block text-gray-700">Leave Type</label>
            <input
              className="w-full p-1 bg-gray-100 rounded mt-1 bg-gray-200"
              value="Sick Leave"
              disabled
            />
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-gray-700">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  className="w-full p-1  rounded bg-gray-200"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-gray-700">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  className="w-full p-1 rounded bg-gray-200"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-gray-700">Duration</label>
                <input
                  type="number"
                  name="duration"
                  className="w-full p-1 rounded bg-gray-200"
                  value={formData.duration}
                  readOnly
                />
              </div>
              <div>
                <label className="block text-gray-700">Resumption Date</label>
                <input
                  type="date"
                  name="resumptionDate"
                  className="w-full p-1 rounded  bg-gray-200"
                  onChange={handleChange}
                />
              </div>
            </div>

            <label className="block text-gray-700 mt-4">Reason for leave</label>
            <textarea
              name="reason"
              className="w-full p-1  rounded bg-gray-200"
              onChange={handleChange}
            ></textarea>

            <label className="block text-gray-700 mt-4">
              Attach handover document (pdf, jpg, docx)
            </label>
            <input
              type="file"
              className="w-full p-1  rounded bg-gray-200"
              onChange={handleFileChange}
            />

            <label className="block text-gray-700 mt-4 ">
              Choose Relief Officer
            </label>
            <select
              name="reliefOfficer"
              className="w-full p-1   rounded bg-gray-200"
              onChange={handleChange}
            >
              <option value="">Select your relief officer</option>
              <option value="Officer 1">Officer 1</option>
              <option value="Officer 2">Officer 2</option>
            </select>

            <div className="flex justify-between mt-6">
              <button
                type="submit"
                className="bg-green-600 text-white px-10 py-1 rounded ml-35"
              >
                Submit
              </button>
              <button
                type="reset"
                className="border border-red-500 text-red-500 px-10 py-1 rounded mr-25"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default SickLeave
