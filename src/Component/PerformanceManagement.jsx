import React, { useState } from "react";
import { Book, ArrowLeft, Search, Bell, Key, Mail } from "lucide-react";
import Sidebar from "./Sidebar";
import { IoBookSharp } from "react-icons/io5";
import performance from "../assets/performance.png";
import { Filter, Download, MoreHorizontal } from "lucide-react";
import { SlCallIn } from "react-icons/sl";

function PerformanceManagement() {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedAction, setSelectedAction] = useState({
    id: "",
    action: null,
  });

  const [leavePlanName, setLeavePlanName] = useState("");
  const [duration, setDuration] = useState("");
  const [leaveRecall, setLeaveRecall] = useState(false);
  const [leaveBonus, setLeaveBonus] = useState(false);
  const [bonusPercentage, setBonusPercentage] = useState("");
  const [leaveAllocation, setLeaveAllocation] = useState("");
  const [reasonForRecall, setReasonForRecall] = useState("");

  const handleLeavePlanNameChange = (event) => {
    setLeavePlanName(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleLeaveRecallChange = (event) => {
    setLeaveRecall(event.target.checked);
  };

  const handleLeaveBonusChange = (event) => {
    setLeaveBonus(event.target.checked);
  };

  const handleBonusPercentageChange = (event) => {
    setBonusPercentage(event.target.value);
  };

  const handleLeaveAllocationChange = (event) => {
    setLeaveAllocation(event.target.value);
  };

  const handleReasonForRecallChange = (event) => {
    setReasonForRecall(event.target.value);
  };


  const [isModalOpen, setisModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    employeeName: "John Dore",
    department: "Sales and Marketing",
    startDate: "2022-04-22",
    endDate: "2022-04-27",
    daysRemaining: 3,
    newResumptionDate: "",
    reliefOfficer: "James Dory",
  });

  const handleInitiateRecall = () => {
    console.log("Recall initiated with data:", formData);
    setIsOpen(false);
  };

  const handleClick = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log("Form submitted:", {
      leavePlanName,
      duration,
      leaveRecall,
      leaveBonus,
      bonusPercentage,
      leaveAllocation,
      reasonForRecall,
    });
  };


  const leaveData = [
        {
          id: "1",
          name: "John Steven Doe",
          Title: "Make 400 Billion Naira",
          KPIWeight: "5",
          targetDate: "28/04/2022",
        },
        {
          id: "2",
          name: "Alice Johnson",
          Title: "Expand Business to 5 Countries",
          KPIWeight: "7",
          targetDate: "15/06/2023",
        },
        {
          id: "3",
          name: "Michael Smith",
          Title: "Increase Market Share by 20%",
          KPIWeight: "6",
          targetDate: "10/09/2023",
        },
        {
          id: "4",
          name: "Sarah Williams",
          Title: "Launch New Product Line",
          KPIWeight: "8",
          targetDate: "01/12/2022",
        },
        {
          id: "5",
          name: "David Brown",
          Title: "Improve Customer Retention by 15%",
          KPIWeight: "5",
          targetDate: "20/03/2024",
        },
        {
          id: "6",
          name: "Emily Davis",
          Title: "Reduce Operational Costs by 10%",
          KPIWeight: "6",
          targetDate: "05/07/2023",
        },
        {
          id: "7",
          name: "Robert Wilson",
          Title: "Enhance Employee Productivity by 12%",
          KPIWeight: "7",
          targetDate: "30/11/2022",
        },
        {
          id: "8",
          name: "Jessica Miller",
          Title: "Increase Annual Revenue by 50%",
          KPIWeight: "9",
          targetDate: "18/08/2023",
        }
      
      
  ];
  const [activeTab, setActiveTab] = useState("");
  const handleActionSelect = (id, action) => {
    setSelectedAction({ id, action });
  };

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


  {/* The Above code is the copy pasted code for navbar and the side bar   */}



        <div className="ml-44 bg-blue-50 p-6">
          <div className="flex items-center gap-3 mb-6">
           
            <h1 className="text-xl font-bold">Performance Management</h1>
          </div>

         

          <div className="grid grid-cols-2  lg:grid-cols-5 gap-4 mb-6">
            <button
              onClick={() => setActiveTab("targetSetup")}
              className={`py-4 px-6 rounded-full text-center transition-colors ${
                activeTab === "targetSetup"
                  ? "bg-yellow-500 text-white"
                  : "bg-white text-black"
              }`}
            >
             Target Setup
            </button>
            <button
              onClick={() => setActiveTab("targets")}
              className={`py-4 px-6 rounded-full text-center transition-colors ${
                activeTab === "targets"
                  ? "bg-yellow-500 text-white"
                  : "bg-white text-black"
              }`}
            >
             Targets
            </button>
            <button
              onClick={() => setActiveTab("Appraisals")}
              className={`py-4 px-6 rounded-full text-center transition-colors ${
                activeTab === "Appraisals"
                  ? "bg-yellow-500 text-white"
                  : "bg-white text-black"
              }`}
            >
              Appraisals
            </button>

            <button
              onClick={() => setActiveTab("Settings")}
              className={`py-4 px-6 rounded-full text-center transition-colors ${
                activeTab === "Settings"
                  ? "bg-yellow-500 text-white"
                  : "bg-white text-black"
              }`}
            >
             Settings
            </button>

            <button
              onClick={() => setActiveTab("Reports")}
              className={`py-4 px-6 rounded-full text-center transition-colors ${
                activeTab === "Reports"
                  ? "bg-yellow-500 text-white"
                  : "bg-white text-black"
              }`}
            >
             Reports
            </button>
          </div>


   {/* the bootom part of the code and logical part of the code  */}



          <div>
            {activeTab === "targetSetup" && (
             <div className="space-y-6 bg-white p-8 rounded-2xl w-full">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <label className="block text-black font-medium text-lg">
                 Title
                 </label>
                 <input
                   type="text"
                   className="w-full text-zinc-800 text-lg outline-none border-none bg-blue-50 rounded-lg p-4"
                   placeholder=""
                 />
               </div>
               <div className="space-y-2">
                 <label className="block text-black font-medium text-lg">
                 KPI Weight
                 </label>
                 <input
                   type="text"
                   className="w-full text-zinc-800 text-lg outline-none border-none bg-blue-50  rounded-lg p-4"
                   placeholder=""
                 />
               </div>
             </div>

            
               <div className="space-y-2">
                 <label className="block text-black font-medium text-lg">
                 Description
                 </label>
                 <input
                   type="text"
                   className="w-full text-zinc-800 text-lg outline-none border-none bg-blue-50  rounded-lg p-4"
                   placeholder=""
                 />
               </div>
               <div className="space-y-2">
                 <label className="block text-black font-medium text-lg">
                 Employees
                 </label>
                 <input
                   type="text"
                   className="w-full text-zinc-800 text-lg outline-none border-none bg-blue-50  rounded-lg p-4"
                   placeholder=""
                 />
               </div>
            

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="space-y-2">
                 <label className="block text-black font-medium text-lg">
                 Start Date
                 </label>
                 <input
                   type="date"
                   className="w-full text-zinc-800 text-lg outline-none border-none bg-blue-50 rounded-lg p-4"
                   placeholder=""
                 />
               </div>
               <div className="space-y-2">
                 <label className="block text-black font-medium text-lg">
                 End Date
                 </label>
                 <input
                   type="date"
                   className="w-full text-zinc-800 text-lg outline-none border-none bg-blue-50  rounded-lg p-4"
                   placeholder=""
                 />
               </div>
             </div>
           </div>
            )}


             {activeTab === "targets" && (
                          <div className="bg-white rounded-lg shadow-sm">
                            {/* Header */}
                            <div className="p-6 flex justify-between items-center border-b">
                              <h2 className="text-xl font-semibold">Manage Targets</h2>
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
                              <table className="w-full">
                                <thead className="bg-gray-50">
                                  <tr>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                                      Name(s)
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                                    Title(s)
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                                    KPI Weight
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                                    Target Date
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                                      Actions
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                  {leaveData.map((leave) => (
                                    <tr key={leave.id} className="hover:bg-gray-50">
                                      <td className="px-6 py-4 text-sm text-gray-900">
                                        {leave.name}
                                      </td>
                                      <td className="px-6 py-4 text-sm text-gray-900">
                                        {leave.Title}
                                      </td>
                                      <td className="px-6 py-4 text-sm text-gray-900">
                                        {leave. KPIWeight}
                                      </td>
                                      <td className="px-6 py-4 text-sm text-gray-900">
                                        {leave.targetDate}
                                      </td>
                                      
                                      <td className="px-6 py-4 text-sm">
                                        <div className="relative">
                                          <button
                                            onClick={() =>
                                              setSelectedAction((prev) => ({
                                                id: prev.id === leave.id ? "" : leave.id,
                                                action: null,
                                              }))
                                            }
                                            className="px-4 py-1 bg-[#1a237e] text-white rounded-md flex items-center gap-2"
                                          >
                                            Actions
                                            <MoreHorizontal className="w-4 h-4" />
                                          </button>
            
                                          {selectedAction.id === leave.id && (
                                            <div className="absolute right-0 mt-2 w-48 bg-[#1a237e] text-white rounded-md shadow-lg z-10 border">
                                              {[
                                                "Edit KPI Goals",
                                                "Initiate KPI",
                                                "Delete KPI",
                                              ].map((action) => (
                                                <button
                                                  key={action}
                                                  onClick={() => {
                                                    handleActionSelect(leave.id, action);
                                                    handleSubmit();
                                                  }}
                                                  className="block w-full text-left px-4 py-2 text-sm text-white  hover:text-zinc-300"
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
                        )}

           

           

            {activeTab === "" && (
              <div className="bg-blue-900 flex justify-between items-center text-white rounded-3xl pl-10 pr-20 py-20 relative overflow-hidden">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                  Stay Updated on  <br />
                    <span className="text-yellow-400"> Employees KPI’s</span>
                  </h2>
                 
                </div>
                <div>
                  <img src={performance} alt="" className="w-full h-60 object-cover" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformanceManagement;
