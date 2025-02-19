import React, { useState } from 'react';
import {
  LayoutDashboard,
  MessageSquare,
  Briefcase,
  Users2,
  User,
  BookOpen,
  FileText,
  UserCog,
  CalendarRange,
  BarChart3,
  Wallet,
  LogOut,
  Bell,
  Key,
  Mail,
  Search,
  MoreVertical,
  Eye,
  Download
} from 'lucide-react';
import { FaFlagCheckered } from "react-icons/fa6";
import Sidebar from './Sidebar';

function MainSection() {
  const [isOpen, setIsOpen] = useState(true);




  return (
    <div className="min-h-screen bg-blue-50 flex">

      <Sidebar />

      <div className={`flex-1 ${isOpen ? 'ml-64' : 'ml-20'} transition-all duration-300`}>

        <div className="bg-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1 ml-20">
            <div className="relative flex-1 max-w-xl">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <select className="h-full bg-[#1a237e] text-white px-4 rounded-l-md">
                  <option className='cursor-pointer'>All Candidates</option>
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
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">4</span>
            </div>
            <div className="bg-yellow-400 p-2 rounded-full">
              <Key className="w-5 h-5" />
            </div>
            <div className="relative">
              <Mail className="w-6 h-6 text-green-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">2</span>
            </div>
          </div>
        </div>


        {/* here comes the main section the main section*/}

        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-yellow-400 p-6 rounded-lg flex items-center justify-between">
              <div>
                <h3 className="text-4xl font-semibold">138</h3>
                <p>Messages</p>
              </div>
              <MessageSquare className="w-12 h-12" />
            </div>
            <div className="bg-[#1a237e] text-white p-6 rounded-lg flex items-center justify-between">
              <div>
                <h3 className="text-4xl font-semibold">50</h3>
                <p>Jobs</p>
              </div>
              <Briefcase className="w-12 h-12" />
            </div>
            <div className="bg-green-600 text-white p-6 rounded-lg flex items-center justify-between">
              <div>
                <h3 className="text-4xl font-semibold">100</h3>
                <p>Candidates</p>
              </div>
              <Users2 className="w-12 h-12" />
            </div>
            <div className="bg-gray-800 text-white p-6 rounded-lg flex items-center justify-between">
              <div>
                <h3 className="text-4xl font-semibold">50</h3>
                <p>Resumes</p>
              </div>
              <FileText className="w-12 h-12" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6  "> 
            <div className="bg-yellow-400 p-6 rounded-lg flex items-center justify-between">  
              <div>
                <h3 className="text-4xl font-semibold">200</h3>
                <p>Employee</p>
              </div>
              <User  className="w-12 h-12" />
            </div>
            <div className="bg-[#1a237e] text-white p-6 rounded-lg flex items-center justify-between">
              <div>
                <h3 className="text-4xl font-semibold">20</h3>
                <p>Leaves</p>
              </div>
              <BookOpen className="w-12 h-12" />
            </div>
            <div className="bg-green-600 text-white p-6 rounded-lg flex items-center justify-between">
              <div>
                <h3 className="text-4xl font-semibold">200</h3>
                <p>Payrolls</p>
              </div>
              <FaFlagCheckered  className="w-12 h-12" />
            </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-white rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Applied Jobs</h2>
                <MoreVertical className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                {[
                  { company: 'Access Bank', role: 'Sales Executive', logo: 'AB', time: '20mins ago' },
                  { company: 'Paystack', role: 'User Experience Designer', logo: 'PS', time: '10mins ago' },
                  { company: 'T-Pay', role: 'Product Manager', logo: 'TP', time: '5mins ago' }
                ].map((job, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded bg-gray-200 flex items-center justify-center">
                        {job.logo}
                      </div>
                      <div>
                        <h3 className="font-semibold">{job.role}</h3>
                        <p className="text-sm text-gray-500">{job.company}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400">{job.time}</span>
                  </div>
                ))}
              </div>
            </div>


            <div className="bg-white rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Employees</h2>
                <MoreVertical className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                {[
                  { name: 'John Doe', role: 'Product Manager', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop' },
                  { name: 'Ginna Loe', role: 'Sales Executive', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop' },
                  { name: 'John Dore', role: 'UI UX Designer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop' }
                ].map((employee, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <img src={employee.img} alt={employee.name} className="w-10 h-10 rounded-full" />
                      <div>
                        <h3 className="font-semibold">{employee.name}</h3>
                        <p className="text-sm text-gray-500">Role: {employee.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-1 bg-green-100 text-green-600 rounded">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1 bg-blue-100 text-blue-600 rounded">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>


            <div className="bg-white rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Candidates</h2>
                <MoreVertical className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                {[
                  { name: 'John Doe', role: 'Product Manager', score: 90, img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop' },
                  { name: 'Ginna Loe', role: 'Sales Executive', score: 30, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop' },
                  { name: 'James Foe', role: 'Product Manager', score: 88, img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop' }
                ].map((candidate, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <img src={candidate.img} alt={candidate.name} className="w-10 h-10 rounded-full" />
                      <div>
                        <h3 className="font-semibold">{candidate.name}</h3>
                        <p className="text-sm text-gray-500">Applied for: {candidate.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {candidate.score > 0 ? (
                        <span className="px-2 py-1 rounded-full text-sm">
                          <h1 className='text-lg font-medium'>ATS Score </h1>
                          <h1 className={`${candidate.score > 75 ? "bg-green-500 text-white" : "bg-red-500 text-white"} rounded-full w-8 h-6 flex justify-center  items-center pt-[2px]`}>{candidate.score}</h1>
                        </span>

                      ) : candidate.time ? (
                        <span className="text-sm text-gray-400">{candidate.time}</span>
                      ) : null}
                      <Eye className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* April Payrolls,the data is the d*/}
            <div className="bg-white rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">April Payrolls</h2>
                <MoreVertical className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                {[
                  { name: 'John Doe', amount: 'N500,000', status: 'Paid', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop' },
                  { name: 'Ginna Loe', amount: 'N150,000', status: 'Processing', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop' },
                  { name: 'James Foe', amount: 'Processing', status: 'Processing', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop' }
                ].map((payroll, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <img src={payroll.img} alt={payroll.name} className="w-10 h-10 rounded-full" />
                      <div>
                        <h3 className="font-semibold">{payroll.name}</h3>
                        <p className="text-sm text-gray-500">Salary Amount: {payroll.amount}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${payroll.status === 'Paid'
                      ? 'bg-green-100 text-green-600'
                      : 'bg-yellow-100 text-yellow-600'
                      }`}>
                      {payroll.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;