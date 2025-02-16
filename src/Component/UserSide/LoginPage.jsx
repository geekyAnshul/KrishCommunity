import React, { useState } from 'react';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  return (
    <div className="flex flex-col-reverse md:flex-row min-h-screen">
      {/* Left Section - Login Form */}
      <div className="w-full md:w-5/12 p-8 md:p-12 bg-white">
        <div className="mb-12">
          <h1 className="text-2xl font-bold mb-2">KRIS</h1>
        </div>

        <div className="max-w-md">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-2">Login</h2>
          <p className="text-gray-600 mb-8">Login to your account.</p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#1e3a8a] mb-1">E-mail Address</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1e3a8a] mb-1">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-[#1e3a8a] hover:underline">
                Reset Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1e3a8a] text-white py-2 rounded-md hover:bg-blue-900 transition-colors"
            >
              Sign In
            </button>

            <p className="text-center text-sm text-gray-600">
              Don't have an account yet?{' '}
              <a href="#" className="text-[#1e3a8a] font-medium hover:underline">
                Join KRIS today.
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Right Section - Hero */}
      <div className="relative w-full md:w-7/12 bg-[#1e3a8a] p-8 md:p-12 text-white">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center opacity-50" 
            style={{backgroundImage: 'url(BACKGROUND_IMAGE_URL_HERE)'}}
          ></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Manage all <span className="text-yellow-400">HR Operations</span> from the comfort of your home.
            </h2>
            
            {/* Dots/Indicators */}
            <div className="flex gap-2 mt-8">
              <div className="w-8 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-8 h-2 bg-white/30 rounded-full"></div>
              <div className="w-8 h-2 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;