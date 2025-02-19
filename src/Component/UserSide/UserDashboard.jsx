import React from 'react';
import { Bell, MoreVertical, CalendarDays } from 'lucide-react';
import Navbar from './Navbar';
import userprofile from '../../assets/UserProfile.png';
import arrow from '../../assets/arrow.png';
import { IoMdArrowDropdown } from "react-icons/io";


function UserDashboard() {
  return (
    <div className="min-h-screen bg-[#E3EDF9]">
      {/* Header */}
      {/* <header className="bg-white px-6 py-4 flex items-center justify-between border-b">
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-bold">KRIS</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-blue-900 font-medium">Dashboard</a>
            <a href="#" className="text-gray-500">Requests</a>
            <a href="#" className="text-gray-500">Payroll</a>
            <a href="#" className="text-gray-500">Company</a>
            <a href="#" className="text-gray-500">Extras</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Bell className="w-6 h-6 text-gray-600" />
          <div className="w-8 h-8 rounded-full bg-gray-200"></div>
        </div>
      </header> */}
      <Navbar />

      {/* Main Content */}
      <main className="p-6">
        <h2 className="text-xl font-semibold mb-6">Dashboard</h2>

        {/* Profile Card */}
        <div className="bg-[#1e3a8a] text-white p-8 rounded-lg mb-6 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="w-20 h-20 rounded-full bg-gray-300 border-2 border-white">
              <img src={userprofile} className="w-full h-full object-cover " alt="" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-blue-200">UI / UX Designer & UX Writer</p>
            </div>
          </div>
          <div className='flex justify-between items-center mr-24 space-x-8'>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-md">
              Edit Profile
            </button>
            <div className="flex items-center space-x-2 w-44 h-20 -mt-10">
              <img src={arrow} alt="" className='h-32' />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-4 mb-6">
          {['Apply for Leave', 'KPI Goals', 'Take Appraisal', 'View Payslip', 'Update Profile', 'Events'].map((action) => (
            <button
              key={action}
              className="bg-white px-4 py-2 rounded-full text-sm shadow-3xl  hover:bg-[#c6d4fb] cursor-pointer "
               onClick={()=>{
                if(action === 'Apply for Leave'){
                  window.location.href = '/leave-application'
                }
               }} >
              {action}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Leave Days */}
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Available Leave Days</h3>
              <MoreVertical className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Annual Leave</span>
                  <span>10 of 10 day(s)</span>
                </div>
                <div className="h-5 bg-blue-900 rounded-full"></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Sick Leave</span>
                  <span>0 of 10 day(s)</span>
                </div>
                <div className="h-5 bg-gray-200 rounded-full"></div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Compassionate Leave</span>
                  <span>8 of 8 day(s)</span>
                </div>
                <div className="h-5 w-3/4 bg-blue-900 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* To-dos */}
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">To-dos</h3>
              <MoreVertical className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-2">
              {[
                'Complete Onboarding Document Upload',
                'Follow up on clients on documents',
                'Design wireframes for UX',
                'Create case study for next IT project',
                'Follow up on clients on documents'
              ].map((todo, index) => (
                <div key={index} className="bg-blue-50 p-3 rounded-md text-sm flex justify-between">
                  {todo}
                  <IoMdArrowDropdown className='mr-10 size-5' />
                </div>
              ))}
            </div>
          </div>

          {/* Announcements */}
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Announcement(s)</h3>
              <MoreVertical className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-2">
              {[
                'Welcome JH Hizon - We have a new staff joining us',
                'Send-off to Project Manager - Kindly gather at the meeting hall',
                'Marriage Alert',
                'Office Space Update'
              ].map((announcement, index) => (
                <div key={index} className="bg-blue-50 p-3 rounded-md text-sm flex justify-between">
                  {announcement}
                  <IoMdArrowDropdown className='mr-10 size-5' />
                </div>
              ))}
            </div>
          </div>

          {/* Pay slip breakdown */}
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">April Pay slip breakdown</h3>
              <MoreVertical className="w-5 h-5 text-gray-400" />
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-500 ">
                  <th className="text-left py-2">Earnings</th>
                  <th className="text-right">Amount</th>
                  <th className="text-right">Deductions</th>
                  <th className="text-right">Total</th>
                </tr>
              </thead>
              <tbody className=''>
                <tr>
                  <td className="py-2">Basic Wage</td>
                  <td className="text-right">150,000</td>
                  <td className="text-right">-35,000</td>
                  <td className="text-right">120,000</td>
                </tr>
                <tr>
                  <td className="py-2">Tax</td>
                  <td className="text-right">15,000</td>
                  <td className="text-right">-3,000</td>
                  <td className="text-right">12,000</td>
                </tr>
                <tr>
                  <td className="py-2">Pension</td>
                  <td className="text-right">15,000</td>
                  <td className="text-right">-3,000</td>
                  <td className="text-right">12,000</td>
                </tr>
                <tr className="font-semibold">
                  <td className="py-2">Total Earnings</td>
                  <td className="text-right">150,000</td>
                  <td className="text-right">-35,000</td>
                  <td className="text-right">114,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Birthdays */}
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Birthdays</h3>
              <MoreVertical className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-3">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="flex items-center justify-between bg-[#E3EDF9] p-2 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className=" bg-gray-200 rounded-full">
                      <CalendarDays className='object-cover flex items-center text-center justify-center' />
                    </div>
                    <span className="text-sm ">JH Hizon's Day - April 25th</span>
                  </div>
                  <div className='shadow-black-3xl'>

                    <button className="bg-yellow-400 text-sm px-3 py-1 rounded-md shadow-3xl mr-6">
                      Send Wishes
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Appraisal */}
          <div className="bg-white p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Performance Appraisal</h3>
              <MoreVertical className="w-5 h-5 text-gray-400" />
            </div>
            <div className="h-48 flex items-end space-x-3">
              {[7, 6, 5, 8, 7, 6, 5, 4, 7, 5, 4, 6].map((height, index) => (
                <div
                  key={index}
                  className="flex-1 bg-blue-900 rounded-t"
                  style={{ height: `${height * 10}%` }}
                ></div>
              ))}
            </div>
            <div className="text-center text-lg mt-4 font-bold">January - April 2022</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default UserDashboard;