

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Briefcase,
  Users2,
  FileText,
  UserCog,
  CalendarRange,
  BarChart3,
  Wallet,
  LogOut
} from 'lucide-react';
import { 
     Bell,
    Search ,Key,Mail
  } from 'lucide-react';
import { HiMenuAlt1 } from 'react-icons/hi';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 ">
      <div className={`fixed h-full bg-[#1a1f37] text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'}`}>

        <div className="flex justify-center">
          {isOpen && <img src={Logo} alt="" className='w-28' />}
        </div>

       
        <div className="px-4 py-2 mt-2 flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-500">
            <img 
              src="https://th.bing.com/th/id/OIP.bXEk89A3liOQfWJad1SKvAHaHq?w=588&h=609&rs=1&pid=ImgDetMain" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          {isOpen && (
            <div>
              <h3 className="font-medium text-base">KRIS Admin</h3>
              <p className="text-xs text-gray-400">Admin</p>
            </div>
          )}
        </div>

       
        <div className="mt-4 px-2">
          <p className="px-4 text-sm text-gray-400 mb-1">{isOpen ? 'Features' : ''}</p>
          <div className="space-y-1 ">

            
            <NavLink 
              to="/" 
              className={({ isActive }) => `flex items-center px-4  py-2 rounded-md ${isActive ? 'bg-yellow-500 text-black' : 'hover:bg-gray-800'}`}
            >
              <LayoutDashboard className="w-5 h-5" />
              {isOpen && <span className="ml-3 font-normal ">Dashboard</span>}
            </NavLink>

            
            <NavLink 
              to="/messages"
              className={({ isActive }) => `flex items-center px-4 py-2 rounded-md ${isActive ? 'bg-yellow-500 text-black' : 'hover:bg-gray-800'}`}
            >
              <MessageSquare className="w-5 h-5" />
              {isOpen && (
                <>
                  <span className="ml-3 font-normal">Messages</span>
                  <span className="absolute right-4 bg-red-500 text-xs px-1.5 rounded-full">14</span>
                </>
              )}
            </NavLink>

          </div>
        </div>

       
        <div className="mt-4 px-2">
          <p className="px-4 text-sm text-gray-400 mb-1">{isOpen ? 'Recruitment' : ''}</p>
          <div className="space-y-1 ">
            {[
              { to: '/jobs', icon: <Briefcase className="w-5 h-5" />, label: 'Jobs' },
              { to: '/candidates', icon: <Users2 className="w-5 h-5" />, label: 'Candidates' },
              { to: '/resumes', icon: <FileText className="w-5 h-5" />, label: 'Resumes' },
            ].map((item, index) => (
              <NavLink 
                key={index} 
                to={item.to} 
                className={({ isActive }) => `flex items-center px-4 py-2 rounded-md ${isActive ? 'bg-yellow-500 text-black' : 'hover:bg-gray-800'}`}
              >
                {item.icon}
                {isOpen && <span className="ml-3">{item.label}</span>}
              </NavLink>
            ))}
          </div>
        </div>

       
        <div className="mt-4 px-2">
          <p className="px-4 text-sm text-gray-400 mb-1">{isOpen ? 'Organization' : ''}</p>
          <div className="space-y-1 ">
            {[
              { to: '/employee-management', icon: <UserCog className="w-5 h-5 " />, label: 'Employee Management' },
              { to: '/leave-management', icon: <CalendarRange className="w-5 h-5" />, label: 'Leave Management' },
              { to: '/performance-management', icon: <BarChart3 className="w-5 h-5 " />, label: 'Performance Management' },
            ].map((item, index) => (
              <NavLink 
                key={index} 
                to={item.to} 
                className={({ isActive }) => `flex items-center px-4 py-2 rounded-md ${isActive ? 'bg-yellow-500 text-black' : 'hover:bg-gray-800'}`}
              >
                {item.icon}
                {isOpen && <span className="ml-3">{item.label}</span>}
              </NavLink>
            ))}
          </div>
        </div>

       
        <div className="mt-4 px-2">
          <p className="px-4 text-sm text-gray-400 mb-1">{isOpen ? 'KRIS Pay' : ''}</p>
          <NavLink 
            to="/payroll-management"
            className={({ isActive }) => `flex items-center px-4 py-2 rounded-md ${isActive ? 'bg-yellow-500 text-black' : 'hover:bg-gray-800'}`}
          >
            <Wallet className="w-5 h-5" />
            {isOpen && <span className="ml-3">Payroll Management</span>}
          </NavLink>
        </div>

       
        <div className="absolute bottom-4 w-full px-4">
          <button className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 rounded-md">
            <LogOut className="w-5 h-5" />
            {isOpen && <span>Log Out</span>}
          </button>
        </div>

       
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -right-10 top-6 bg-yellow-500 p-1 rounded"
        >
          <HiMenuAlt1 />
        </button>
      </div>'
     
    </div>
  );
}

export default Sidebar;
