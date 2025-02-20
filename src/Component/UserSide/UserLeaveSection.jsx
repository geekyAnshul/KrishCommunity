import React, { useState } from "react";
import { Book, ArrowLeft, Search, Bell, Key, Mail } from "lucide-react";
// import Sidebar from "../Sidebar";
import { IoBookSharp } from "react-icons/io5";
import Leave from "../../assets/Leave.png";
import { Filter, Download, MoreHorizontal } from "lucide-react";
import { SlCallIn } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

function UserLeaveSection() {
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

  const navigate = useNavigate();

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

  const leavesData = [
    {
      leavePlan: "Maternity",
      duration: 60,
      recall: "No / No",
      actions: "Actions",
    },
    { leavePlan: "Sick", duration: 14, recall: "No / Yes", actions: "Actions" },
    {
      leavePlan: "Compassionate",
      duration: 30,
      recall: "No / No",
      actions: "Actions",
    },
    { leavePlan: "Exam", duration: 20, recall: "No / No", actions: "Actions" },
    {
      leavePlan: "Paternity",
      duration: 60,
      recall: "No / No",
      actions: "Actions",
    },
    {
      leavePlan: "Casual",
      duration: 10,
      recall: "Yes / No",
      actions: "Actions",
    },
    { leavePlan: "Exam", duration: 20, recall: "No / No", actions: "Actions" },
  ];

  const leaveData = [
    {
      id: "1",
      name: "John Steven Doe",
      duration: 5,
      startDate: "22/04/2022",
      endDate: "28/04/2022",
      type: "Sick",
      reason: "Personal",
    },
    {
      id: "2",
      name: "Barry Jhayson",
      duration: 7,
      startDate: "22/04/2022",
      endDate: "30/04/2022",
      type: "Exam",
      reason: "Examination",
    },
    {
      id: "3",
      name: "Tiwa Cavage",
      duration: 120,
      startDate: "22/04/2022",
      endDate: "28/06/2022",
      type: "Maternity",
      reason: "Child Care",
    },
    {
      id: "4",
      name: "John Steven Doe",
      duration: 5,
      startDate: "22/04/2022",
      endDate: "28/04/2022",
      type: "Sick",
      reason: "Personal",
    },
    {
      id: "5",
      name: "John Steven Doe",
      duration: 5,
      startDate: "22/04/2022",
      endDate: "28/04/2022",
      type: "Sick",
      reason: "Personal",
    },
    {
      id: "6",
      name: "John Steven Doe",
      duration: 5,
      startDate: "22/04/2022",
      endDate: "28/04/2022",
      type: "Sick",
      reason: "Personal",
    },
    {
      id: "7",
      name: "John Steven Doe",
      duration: 5,
      startDate: "22/04/2022",
      endDate: "28/04/2022",
      type: "Sick",
      reason: "Personal",
    },
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
    <div className="bg-blue-50 p-10">
      <div className=" bg-white p-4 pl-6 flex justify-between items-center mb-6 rounded-lg">
        Dashboard Apply for Leave{" "}
      </div>

      <div className=" bg-white p-4 pl-6  mb-6 rounded-lg">
        <div className="flex items-center gap-3 mb-6">
          <IoBookSharp className="w-6 h-6" />
          <h1 className="text-xl font-bold">Leave Application</h1>
        </div>

        <div className="grid grid-cols-2  lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-blue-900 flex items-center gap-2 rounded-xl p-4">
            <div className="bg-white h-24 w-24 rounded-full text-6xl flex justify-center items-center">
              60
            </div>
            <div className="ml-6 text-center">
              <h2 className="text-white text-xl font-semibold">Annual Leave</h2>
              {/* <button
                                onClick={() => setActiveTab("leaveHistory")}
                                className={` px-6   transition-colors ${activeTab === "leaveHistory"
                                    ? "bg-yellow-500 text-white rounded-3xl p-1 w-36"
                                    : "bg-yellow-500 text-white rounded-3xl p-1 w-36"
                                    }`}
                            >
                                Apply
                            </button> */}

              <button
                onClick={() => navigate("/apply-leave")}
                className="bg-yellow-500 text-white rounded-3xl p-1 w-36 transition-colors"
              >
                Apply
              </button>
            </div>
          </div>

          <div className="bg-blue-900 flex items-center gap-2 rounded-xl p-4">
            <div className="bg-white h-24 w-24 rounded-full text-6xl flex justify-center items-center">
              20
            </div>
            <div className="ml-6 text-center">
              <h2 className="text-white text-xl font-semibold">Sick Leave</h2>
              {/* <button
                onClick={() => setActiveTab("leaveSettings")}
                className={` px-6   transition-colors ${
                  activeTab === "leaveSettings"
                    ? "bg-yellow-500 text-white rounded-3xl p-1 w-36"
                    : "bg-yellow-500 text-white rounded-3xl p-1 w-36"
                }`}
              >
                Apply
              </button> */}

              <button
                onClick={() => navigate("/apply-sickleave")}
                className="bg-yellow-500 text-white rounded-3xl p-1 w-36 transition-colors"
              >
                Apply
              </button>
            </div>
          </div>

          <div className="bg-blue-900 flex items-center gap-2 rounded-xl p-4">
            <div className="bg-white h-24 w-24 rounded-full text-6xl flex justify-center items-center">
              60
            </div>
            <div className="ml-6 text-center">
              <h2 className="text-white text-xl font-semibold">
                Maternity Leave
              </h2>
              {/* <button
                onClick={() => setActiveTab("leaveRecall")}
                className={` px-6   transition-colors ${
                  activeTab === "leaveRecall"
                    ? "bg-yellow-500 text-white rounded-3xl p-1 w-36"
                    : "bg-yellow-500 text-white rounded-3xl p-1 w-36"
                }`}
              >
                Apply
              </button> */}

              <button
                onClick={() => navigate("/apply-maternityleave")}
                className="bg-yellow-500 text-white rounded-3xl p-1 w-36"
              >
                Apply
              </button>
            </div>
          </div>

          {/* <button
                        onClick={() => setActiveTab("reliefOfficers")}
                        className={`py-4 px-6 rounded-xl text-center transition-colors ${activeTab === "reliefOfficers"
                            ? "bg-yellow-500 text-white"
                            : "bg-blue-900 text-white"
                            }`}
                    >
                        Relief Officers
                    </button> */}

          <div className="bg-blue-900 flex items-center gap-2 rounded-xl p-4">
            <div className="bg-white h-24 w-24 rounded-full text-6xl flex justify-center items-center">
              30
            </div>
            <div className="ml-6 text-center">
              <h2 className="text-white text-1xl font-semibold">
                Compassionate Leave
              </h2>
              {/* <button
                onClick={() => setActiveTab("reliefOfficers")}
                className={` px-6   transition-colors ${
                  activeTab === "reliefOfficers"
                    ? "bg-yellow-500 text-white rounded-3xl p-1 w-36"
                    : "bg-yellow-500 text-white rounded-3xl p-1 w-36"
                }`}
              >
                Apply
              </button> */}

              <button
                onClick={() => navigate("/apply-compassionateleave")}
                className="bg-yellow-500 text-white rounded-3xl p-1 w-36"
              >
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* the bootom part of the code and logical part of the code  */}

        <div>
          {activeTab === "leaveSettings" && (
            <div className="flex gap-5 w-full bg-blue-50 max-h-screen">
              <div className="w-1/2 bg-white px-8 py-10 rounded-3xl shadow-xl shadow-zinc-200">
                <h2 className="text-2xl font-semibold mb-8">
                  Create Leave Settings
                </h2>
                <form onSubmit={handleClick}>
                  <div className="flex justify-between items-center ">
                    <div className="mb-8">
                      <label
                        htmlFor="leavePlanName"
                        className="block text-xs text-gray-600 font-semibold mb-2"
                      >
                        Leave Plan Name
                      </label>
                      <input
                        type="text"
                        id="leavePlanName"
                        value={leavePlanName}
                        onChange={handleLeavePlanNameChange}
                        className="shadow appearance-none text-sm  rounded w-full py-3 px-8 text-gray-700 bg-blue-50 leading-tight outline-none "
                        placeholder="Enter leave plan name"
                        required
                      />
                    </div>
                    <div className="mb-8">
                      <label
                        htmlFor="duration"
                        className="block text-xs text-gray-600 font-semibold mb-2"
                      >
                        Duration
                      </label>
                      <input
                        type="text"
                        id="duration"
                        value={duration}
                        onChange={handleDurationChange}
                        className="shadow appearance-none text-sm rounded w-full py-3 px-8 text-gray-700 bg-blue-50 leading-tight outline-none "
                        placeholder="Enter duration"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="leaveAllocation"
                      className="block text-xs text-gray-600 font-semibold mb-2"
                    >
                      Do you want to activate Leave Recall for this plan?
                    </label>
                    <select
                      id="leaveAllocation"
                      value={leaveAllocation}
                      onChange={handleLeaveAllocationChange}
                      className="shadow appearance-none rounded w-full text-sm py-3 px-8 text-gray-700 bg-blue-50 leading-tight outline-none"
                      required
                    >
                      <option value="">Select option from dropdown</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  <div className="flex justify-between items-center ">
                    <div className="mb-6">
                      <label
                        htmlFor="leavePlanName"
                        className="block text-xs text-gray-600 font-semibold mb-2"
                      >
                        Would you like to activate leave bonus
                      </label>
                      <select className="shadow appearance-none text-sm rounded w-full py-3 px-8 text-gray-700 bg-blue-50 leading-tight outline-none ">
                        <option value="">Select option from dropdown</option>
                        <option value="">Select option from dropdown 2</option>
                        <option value="">Select option from dropdown 3</option>
                      </select>
                    </div>
                    <div className="mb-8">
                      <label
                        htmlFor="duration"
                        className="block text-xs text-gray-600 font-semibold mb-2"
                      >
                        How much percentage of leave bonus?
                      </label>
                      <input
                        type="text"
                        id="duration"
                        value={duration}
                        onChange={handleDurationChange}
                        className="shadow appearance-none text-sm rounded w-full py-3 px-5 text-gray-700 bg-blue-50 leading-tight outline-none "
                        placeholder="Percentage (%)"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-8">
                    <label
                      htmlFor="leaveAllocation"
                      className="block text-xs text-gray-600 font-semibold mb-2"
                    >
                      Select Leave Allocation
                    </label>
                    <select
                      id="leaveAllocation"
                      value={leaveAllocation}
                      onChange={handleLeaveAllocationChange}
                      className="shadow appearance-none rounded w-full text-sm py-3 px-8 text-gray-700 bg-blue-50 leading-tight outline-none"
                      required
                    >
                      <option value="senior">Senior Level</option>
                      <option value="junior">Junior Level</option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="reason"
                      className="block text-xs text-gray-600 font-semibold mb-2"
                    >
                      Reason for Recall
                    </label>
                    <textarea
                      name="reason"
                      id="reason"
                      cols="30"
                      rows="3"
                      className="shadow appearance-none text-sm rounded w-full py-3 px-8 text-gray-700 bg-blue-50 leading-tight outline-none "
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-green-600 w-full hover:bg-green-700 mt-4 text-white font-semibold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                  >
                    create
                  </button>
                </form>
              </div>

              {/* doosra form  */}

              <div className="w-1/2 bg-white px-8 py-10 rounded-3xl shadow-xl shadow-zinc-200">
                <div className="flex justify-between items-center  ">
                  <h2 className="text-xl font-semibold mb-4">
                    Manage Leave Settings
                  </h2>

                  <div className="text-gray-500">
                    <span className="cursor-pointer">...</span>
                  </div>
                </div>
                <table className="w-full table-auto  text-left rounded-2xl">
                  <thead className="bg-blue-50 text-black font-semibold rounded-2xl ">
                    <tr className="rounded-2xl ">
                      <th className=" p-3 rounded-tl-2xl  text-md font-medium text-gray-900">
                        Leave Plan
                      </th>
                      <th className="p-3  text-md font-medium text-gray-900">
                        Duration(s)
                      </th>
                      <th className="p-3 text-md font-medium text-gray-900">
                        Recall / Autorenew
                      </th>
                      <th className="p-3 rounded-tr-2xl  text-md font-medium text-gray-900">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {leavesData.map((leave, index) => (
                      <tr key={index} className="mt-6">
                        <td className="p-3  mt-6">{leave.leavePlan}</td>
                        <td className="p-3 mt-6">{leave.duration}</td>
                        <td className="p-3 mt-6">{leave.recall}</td>
                        <td className="p-3 mt-6">
                          <button className="bg-blue-900 px-4 py-1 text-white rounded-sm">
                            {leave.actions}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "leaveRecall" && (
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 flex justify-between items-center border-b">
                <h2 className="text-xl font-semibold">
                  Ongoing Leave Applications
                </h2>
                <div className="flex gap-4"></div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                        Name(s)
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                        Duration(s)
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                        Start Date
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                        End Date
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                        Reason(s)
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
                          {leave.duration}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {leave.startDate}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {leave.endDate}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {leave.type}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {leave.reason}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <div className="relative">
                            <button
                              onClick={() => setisModalOpen(true)}
                              className="px-4 py-1 bg-red-500 text-white rounded-md flex items-center gap-2"
                            >
                              Recall
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  {isModalOpen && (
                    <div className="fixed inset-0 bg-[#00000060]  flex justify-center items-center">
                      <div className="bg-white p-8 rounded-3xl shadow-lg w-[600px] scale-100 transition-transform">
                        <SlCallIn className="text-2xl " />
                        <h2 className="text-lg font-semibold mb-2 mt-6">
                          Leave Recall
                        </h2>
                        <p className="text-sm text-gray-600 mb-4">
                          Fill in the required details to recall this employee
                        </p>
                        <div className="space-y-3">
                          <div>
                            <label className="block text-sm text-zinc-600 font-medium">
                              Employee Name
                            </label>
                            <input
                              type="text"
                              value={formData.employeeName}
                              disabled
                              className="w-full px-3 text-zinc-500 py-2 border rounded-lg bg-blue-50 border-none outline-none "
                            />
                          </div>
                          <div>
                            <label className="block text-sm text-zinc-600 font-medium">
                              Department
                            </label>
                            <input
                              type="text"
                              value={formData.department}
                              disabled
                              className="w-full px-3 py-2 text-zinc-500 border rounded-lg bg-blue-50 border-none outline-none "
                            />
                          </div>
                          <div className="flex items-center justify-between  gap-4 w-full ">
                            <div>
                              <label className="block text-sm text-zinc-600 font-medium">
                                Start Date
                              </label>
                              <input
                                type="date"
                                value={formData.startDate}
                                disabled
                                className="w-full px-3 py-2 text-zinc-500 border rounded-lg bg-blue-50 border-none outline-none "
                              />
                            </div>
                            <div>
                              <label className="block text-sm text-zinc-600 font-medium">
                                End Date
                              </label>
                              <input
                                type="date"
                                value={formData.endDate}
                                disabled
                                className="w-full px-3 py-2 border text-zinc-500 rounded-lg bg-blue-50 border-none outline-none "
                              />
                            </div>
                          </div>
                          <div className="flex gap-4 justify-between w-full  items-center ">
                            <div>
                              <label className="block text-sm text-zinc-600 font-medium">
                                Days Remaining
                              </label>
                              <input
                                type="number"
                                value={formData.daysRemaining}
                                disabled
                                className="w-full px-3 py-2 border text-zinc-500 rounded-lg bg-blue-50 border-none outline-none "
                              />
                            </div>

                            <div>
                              <label className="block text-sm text-zinc-600 font-medium">
                                New Resumption Date
                              </label>
                              <input
                                type="date"
                                value={formData.newResumptionDate}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    newResumptionDate: e.target.value,
                                  })
                                }
                                className="w-full px-3 py-2 border text-zinc-500 bg-blue-50 outline-none border-none rounded-lg"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-sm text-zinc-600 font-medium">
                              Relief Officer(s)
                            </label>
                            <input
                              type="text"
                              value={formData.reliefOfficer}
                              disabled
                              className="w-full text-zinc-500 px-3 py-2 border rounded-lg bg-blue-50 border-none outline-none "
                            />
                          </div>
                        </div>
                        <div className="flex justify-between mt-8">
                          <button
                            onClick={handleInitiateRecall}
                            className="px-4 py-4 font-semibold   bg-green-700 text-white rounded-lg w-full mr-2"
                          >
                            Initiate Recall
                          </button>
                          <button
                            onClick={() => setisModalOpen(false)}
                            className="px-4 py-4 font-semibold border-2 border-red-500 text-red-500  rounded-lg w-full"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </table>
              </div>
            </div>
          )}

          {activeTab === "reliefOfficers" && (
            <div className="p-4 border rounded bg-gray-100">
              <h2 className="text-lg font-bold">Relief Officers</h2>
              <p className="text-sm">
                Assign a relief officer to manage workload during leave.
              </p>
              <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">
                Assign Officer
              </button>
            </div>
          )}

          {activeTab === "" && (
            <div className="bg-white rounded-lg shadow-sm">
              {/* Header */}
              <div className="p-6 flex justify-between items-center border-b">
                <h3 className="font-semibold">Leave History</h3>
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
                        Duration(s)
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                        Start Date
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                        End Date
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                        Type
                      </th>
                      <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                        Reason(s)
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
                          {leave.duration}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {leave.startDate}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {leave.endDate}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {leave.type}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {leave.reason}
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
                                  "Approve",
                                  "Decline",
                                  "View Details",
                                  "Extension",
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
        </div>
      </div>
    </div>
  );
}

export default UserLeaveSection;
