import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6 animate-fadeIn">
          Sign Up
        </h2>

        
          <div className="relative mb-4 animate-slideIn">
            <input
              type="text"
              placeholder="username"
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
            />
          </div>
        <div className="relative mb-4">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
          />
        </div>

        {showPassword && (
          <div className="relative mb-4 animate-slideIn">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
            />
          </div>
        )}

        <button
          onClick={() => setShowPassword(true)}
          className="w-full bg-red-600 hover:bg-red-700 transition-all duration-300 text-white py-3 rounded-lg font-semibold"
        >
          {showPassword ? "Sign Up" : "Next"}
        </button>

        <p className="text-gray-400 text-sm mt-4 text-center">
          Already have an account?{" "}
          <NavLink to={"/signin"} className="text-red-500 hover:underline">
            Sign in
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Signup;
