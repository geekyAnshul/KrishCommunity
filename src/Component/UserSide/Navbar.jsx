import React from 'react'
import { Bell, MoreVertical } from 'lucide-react';
const Navbar = () => {
  return (
    <div>
          <header className="bg-white px-6 py-4 flex items-center justify-between border-b">
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
      </header>
    </div>
  )
}

export default Navbar