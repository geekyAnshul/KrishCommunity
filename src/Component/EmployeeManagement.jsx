
import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { Bell, Download, Filter, Key, Mail, MoreHorizontal, Search } from 'lucide-react'
import { IoBookSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const EmployeeManagement = () => {
    const[isOpen,setisOpen] = useState(false)
    const navigate = useNavigate()
    const leaveData = [
        {
          id: "2",
          name: "Alice Johnson",
          dept: "Development",
          JobTitle: "Frontend Developer",
          startDate: "15/06/2021",
          Category: "Full Time",
          Gender: "Female",
        },
        {
          id: "3",
          name: "Michael Smith",
          dept: "Marketing",
          JobTitle: "SEO Specialist",
          startDate: "12/11/2020",
          Category: "Part Time",
          Gender: "Male",
        },
        {
          id: "4",
          name: "Sophia Davis",
          dept: "HR",
          JobTitle: "HR Manager",
          startDate: "01/03/2019",
          Category: "Full Time",
          Gender: "Female",
        },
        {
          id: "5",
          name: "David Wilson",
          dept: "Development",
          JobTitle: "Backend Developer",
          startDate: "20/09/2022",
          Category: "Full Time",
          Gender: "Male",
        },
        {
          id: "6",
          name: "Emma Brown",
          dept: "Finance",
          JobTitle: "Financial Analyst",
          startDate: "05/07/2018",
          Category: "Full Time",
          Gender: "Female",
        },
        {
          id: "7",
          name: "James Anderson",
          dept: "Support",
          JobTitle: "Customer Support Executive",
          startDate: "10/01/2023",
          Category: "Part Time",
          Gender: "Male",
        },
        {
          id: "8",
          name: "Olivia Martinez",
          dept: "Design",
          JobTitle: "Graphic Designer",
          startDate: "30/08/2021",
          Category: "Full Time",
          Gender: "Female",
        }
      ]
      

       const [selectedAction, setSelectedAction] = useState({
          id: "",
          action: null,
        });
   
      const handleSubmit = () => {
        if (selectedAction.action && selectedAction.id) {
          console.log(
            `Action ${selectedAction.action} submitted for ID: ${selectedAction.id}`
          );
    
          setSelectedAction({ id: "", action: null });
        }
      };



  return (
    <div className="min-h-screen bg-blue-50 flex">
      <Sidebar />

      <div
        className={`flex-1 ${
          isOpen ? "ml-64" : "ml-20"
        } transition-all duration-300`}
      >
        <div className="bg-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1 ml-64">
            <div className="relative flex-1 max-w-xl">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <select className="h-full bg-[#1a237e] text-white px-4 rounded-l-md">
                  <option>All Candidates</option>
                  <option>Two Candidates</option>
                  <option>fve Candidates</option>
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
          <div className="flex items-center gap-3 mb-6">
            
            <h1 className="text-xl font-semibold">Dashboard / Employee Management</h1>
          </div>

          <div className="bg-white rounded-lg shadow-sm">
                {/* Header */}
                <div className="p-6 flex justify-between items-center border-b">
                  <h2 className="text-xl font-semibold">Employee Management</h2>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-gray-600">
                      <Filter className="w-4 h-4" />
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md">
                      <Download className="w-4 h-4" />
                      Export
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Name</th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Department</th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Job Title</th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Start Date</th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Category</th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Gender</th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {leaveData.map((employee) => (
          <tr key={employee.id} className="hover:bg-gray-50">
            <td className="px-6 py-4 text-sm text-gray-900">{employee.name}</td>
            <td className="px-6 py-4 text-sm text-gray-900">{employee.dept}</td>
            <td className="px-6 py-4 text-sm text-gray-900">{employee.JobTitle}</td>
            <td className="px-6 py-4 text-sm text-gray-900">{employee.startDate}</td>
            <td className="px-6 py-4 text-sm text-gray-900">{employee.Category}</td>
            <td className="px-6 py-4 text-sm text-gray-900">{employee.Gender}</td>
            <td className="px-6 py-4 text-sm">
              <div className="relative">
                <button
                  onClick={() =>
                    setSelectedAction((prev) => ({
                      id: prev.id === employee.id ? "" : employee.id,
                      action: null,
                    }))
                  }
                  className="px-4 py-1 bg-[#1a237e] text-white rounded-md flex items-center gap-2"
                >
                  Actions
                  <MoreHorizontal className="w-4 h-4" />
                </button>

                {selectedAction.id === employee.id && (
        <div className="absolute right-0 mt-2 w-48 bg-[#1a237e] text-white rounded-md shadow-lg z-10 border">
          {["View Profile", "Edit Profile"].map((action) => (
            <button
              key={action}
              onClick={() =>
                action === "View Profile"
                  ? navigate("/employee-details") // ✅ Correct usage
                  : navigate("/edit-profile") // ✅ Handle "Edit Profile"
              }
              className="block w-full text-left px-4 py-2 text-sm text-white hover:text-zinc-300"
            >
              {action}
            </button>
          ))}
        </div>
      )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
                </div>
              </div>

        </div>
    </div>

    </div>
  )
}

export default EmployeeManagement