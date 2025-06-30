import { AlignJustify, Search, UserRoundPen, X } from "lucide-react";
import React, { useState } from "react";
import { useContentStore } from "../store/content";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
function HorizontalNavBar({ isOpen, onClose, setIsOpen }) {
  const { setContentType } = useContentStore();
  const {  user } = useAuthStore();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="w-full bg-black opacity-90 h-20 flex justify-between items-center fixed z-30 px-4 sm:px-8 lg:px-28">
        {/* Logo */}
        <img
          src="./streamit.bmp"
          className="w-[8rem] md:w-[10rem] h-[2rem] md:h-[3rem]"
          alt="StreamIt Logo"
        />

        {/* Navigation Links (Large Screens) */}
        <ul className="hidden lg:flex gap-28 text-white text-lg items-center">
          <li className="cursor-pointer hover:text-red-600">Home</li>
          <li
            className="cursor-pointer hover:text-red-600"
            onClick={() => {
              setContentType("movie");
              navigate("/");
            }}
          >
            Movies
          </li>
          <li
            className="cursor-pointer hover:text-red-600"
            onClick={() => {
              setContentType("tv");
              navigate("/");
            }}
          >
            TV Shows
          </li>
          <li className="cursor-pointer hover:text-red-600">Sports</li>
        </ul>

        {/* Right-side Icons */}
        <div className="flex items-center gap-4 sm:gap-7">
          <Link to="/search">
            <Search className="text-red-600 cursor-pointer hover:text-red-600" />
          </Link>

          {/* Profile Icon on md+ */}
          <UserRoundPen
            onClick={setIsOpen}
            className="ring-2 rounded-full w-9 h-9 p-2 text-red-600 hidden lg:flex cursor-pointer"
          />

          {/* Hamburger Icon on mobile */}
          <AlignJustify
            onClick={() => setMenuOpen(true)}
            className="w-9 h-9 p-1 text-red-600 lg:hidden cursor-pointer"
          />
        </div>
      </div>

      {/* Slide-in Mobile Drawer */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-gradient-to-br from-black to-blue-950 z-40 shadow-lg transition-all duration-300">
          <div className="flex justify-between items-center p-4 text-white">
            <p className="text-xl font-semibold">Menu</p>
            <X
              className="cursor-pointer text-red-600"
              onClick={() => setMenuOpen(false)}
            />
          </div>
          <div className="flex flex-col text-white gap-4 px-6 pt-4 text-lg">
            <p className="cursor-pointer hover:text-red-600" onClick={() => setMenuOpen(false)}>
              Home
            </p>
            <p
              className="cursor-pointer hover:text-red-600"
              onClick={() => {
                setContentType("movie");
                navigate("/");
                setMenuOpen(false);
              }}
            >
              Movies
            </p>
            <p
              className="cursor-pointer hover:text-red-600"
              onClick={() => {
                setContentType("tv");
                navigate("/");
                setMenuOpen(false);
              }}
            >
              TV Shows
            </p>
            <p className="cursor-pointer hover:text-red-600" onClick={() => setMenuOpen(false)}>
              Sports
            </p>
            <hr className="my-2 border-gray-600" />
            <div className="text-center h-28">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold dark:text-white">
                {user.username}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default HorizontalNavBar;
