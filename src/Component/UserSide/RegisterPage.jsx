import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Logo from "../../assets/Logo.png"
function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    newsletter: false,
    terms: false
  });

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Section */}
      <div className="relative w-full md:w-5/12 bg-[#1e3a8a] p-8 md:p-8 text-white">
        <div className="mb-12">
         <img src={Logo} alt="" className='w-36' />
        </div>

        <div className="max-w-md mt-20">
          <h2 className="text-3xl font-semibold mb-4">HR Management Platform</h2>
          <p className="text-gray-200 mb-8 text-xl">
            Manage all employees, payrolls, and other human resource operations.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-md hover:bg-yellow-500 transition-colors">
              Learn More
            </button>
            <button className="border border-white px-6 py-2 rounded-md hover:bg-white/10 transition-colors flex items-center gap-2">
              Our Features
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Background image placeholder */}
        <div className="absolute inset-0 z-[-1] bg-cover bg-center opacity-20" 
             style={{backgroundImage: 'url(BACKGROUND_IMAGE_URL_HERE)'}}></div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-7/12 p-8 md:p-12 bg-white">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-[#1e3a8a] mb-2">Welcome to KRIS</h2>
          <p className="text-gray-600 mb-8">Register your account</p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#1e3a8a] mb-1">First Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#1e3a8a] mb-1">Last Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1e3a8a] mb-1">E-mail Address</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1e3a8a] mb-1">Phone Number</label>
              <input
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1e3a8a] mb-1">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1e3a8a] mb-1">Confirm Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="space-y-3">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm text-gray-600">Yes, I want to receive KRIS newsletters</span>
              </label>

              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-sm text-gray-600">
                  I agree to all the <a href="#" className="text-[#1e3a8a]">Terms</a>,{' '}
                  <a href="#" className="text-[#1e3a8a]">Privacy Policy</a>
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1e3a8a] text-white py-2 rounded-md hover:bg-blue-900 transition-colors"
            >
              Create Account
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <a href="#" className="text-[#1e3a8a] font-medium">
                Log In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;