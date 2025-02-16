import React, { useState } from 'react';
import Logo from "../assets/Logo.png"
function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="min-h-screen bg-[#0011ce]   relative overflow-hidden">
    
      <div 
        className="absolute bg-[#0011ce] inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2021/05/working-on-plans-in-board-room-scaled.jpg)',
          filter: 'brightness(0.3)'
        }}
      ></div>

    <img src={Logo} alt="" className='w-36 z-20 absolute left-4 top-4'/>
      {/* Content */}
      <div className="relative  min-h-screen  flex flex-col items-center justify-center px-4">
        

        

        {/* Login Form */}
        <div className="w-full max-w-md z-50">
          <div className="text-center mb-8 z-50">
            <h1 className="text-3xl font-bold text-white mb-2">Login</h1>
            <p className="text-gray-300">Login to your account.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                E-mail Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-md bg-white"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-md bg-white"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-yellow-400 focus:ring-yellow-400"
                  checked={formData.rememberMe}
                  onChange={(e) => setFormData({...formData, rememberMe: e.target.checked})}
                />
                <span className="ml-2 text-sm text-white">Remember me</span>
              </label>
              <button
                type="button"
                className="text-sm text-white hover:text-yellow-400"
              >
                Reset Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-3 rounded-md font-medium hover:bg-yellow-500 transition-colors"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;