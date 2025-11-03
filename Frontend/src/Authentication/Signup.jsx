import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { searchParams } = new URL(document.location);
  const emailValue = searchParams.get("email");
  const [email, setEmail] = useState(emailValue ?? "");
  // const navigate = useNavigate();
  const { signup } = useAuthStore();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("sign up start")
    const formData = {
      username: username,
      email: email,
      password: password,
    };
    console.log("Data-->", formData);
    signup(formData)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-center mb-6 animate-fadeIn">
          Sign Up
        </h2>
 
        <form action="" onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
            />
          </div>

          <div className="relative mb-4 animate-slideIn">
            <input
              type="text"
              placeholder="username"
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* {showPassword && ( */}
          <div className="relative mb-4 animate-slideIn">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* )}  */}

          <button
            // onClick={() =>setShowPassword(true)}
            className="w-full bg-red-600 hover:bg-red-700 transition-all duration-300 text-white py-3 rounded-lg font-semibold"
          >
            {/* {showPassword ? "Sign Up" : "Next"} */}
            Sign Up
          </button>
        </form>

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
