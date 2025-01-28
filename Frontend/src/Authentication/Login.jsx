import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {login,user}=useAuthStore()
  
const handleLogin=(e)=>{
  e.preventDefault()
  login({email,password})
  console.log('us-->',user)
if(user)navigate('/home')

}
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6 animate-fadeIn">
          Sign In
        </h2>
        <form action="" onSubmit={handleLogin}>
          <div className="relative mb-4">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
            />
          </div>
          <div className="relative mb-4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
            />
          </div>

          <button className="w-full bg-red-600 hover:bg-red-700 transition-all duration-300 text-white py-3 rounded-lg font-semibold">
            Sign In
          </button>
        </form>


        <p className="text-gray-400 text-sm mt-4 text-center">
          New to Netflix?
          <NavLink to={"/signup"} className="text-red-500 hover:underline">
            Signup now
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;
