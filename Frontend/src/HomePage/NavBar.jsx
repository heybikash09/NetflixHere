import { AlignJustify, Search, UserRoundPen } from "lucide-react";
import React from "react";
import { useContentStore } from "../store/content";
import { Link, useLocation } from "react-router-dom";

function NavBar({ setIsOpen, setNavOpen }) {
  const { setContentType } = useContentStore();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleMovieClick = () => {
    setContentType("movie");
  };

  const handleTvClick = () => {
    setContentType("tv");
  };

  return (
    <div className="w-full bg-black/90 backdrop-blur-sm h-20 flex justify-between items-center px-4 lg:px-8 fixed top-0 z-30 border-b border-gray-800">
      {/* Logo */}
      <Link to="/" className="focus:outline-none">
        <img
          src="./streamit.bmp"
          className="w-[8rem] h-auto md:w-[10rem]"
          alt="StreamIt Logo"
        />
      </Link>

      {/* Navigation Links - Desktop */}
      <ul className="hidden lg:flex gap-10 list-none items-center">
        <li>
          <Link
            to="/"
            className={`text-white text-xl font-medium transition-all duration-200 hover:text-red-500 ${
              isActive("/") ? "text-red-500 font-bold" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={handleMovieClick}
            className={`text-white text-xl font-medium transition-all duration-200 hover:text-red-500 ${
              isActive("/") && useContentStore.getState().contentType === "movie"
                ? "text-red-500 font-bold"
                : ""
            }`}
          >
            Movies
          </Link>
        </li>
        <li>
          <Link
            to="/"
            onClick={handleTvClick}
            className={`text-white text-xl font-medium transition-all duration-200 hover:text-red-500 ${
              isActive("/") && useContentStore.getState().contentType === "tv"
                ? "text-red-500 font-bold"
                : ""
            }`}
          >
            TV Shows
          </Link>
        </li>
      </ul>

      {/* Right Icons */}
      <div className="flex items-center gap-5">
        <Link to="/search" className="text-white hover:text-red-500 transition-colors">
          <Search size={24} />
        </Link>

        <button
          onClick={setIsOpen}
          aria-label="Open profile"
          className="hidden sm:flex text-white hover:text-red-500 transition-colors"
        >
          <UserRoundPen className="w-9 h-9 p-2 rounded-full border border-gray-700 hover:border-red-500 transition-colors" />
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setNavOpen(true)}
          aria-label="Open navigation"
          className="md:hidden text-white p-2 rounded-md hover:bg-gray-800"
        >
          <AlignJustify size={24} />
        </button>
      </div>
    </div>
  );
}

export default NavBar;