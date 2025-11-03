import { AlignJustify, Search, UserRoundPen, X } from "lucide-react";
import React, { useState } from "react";
import { useContentStore } from "../store/content";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

function HorizontalNavBar({ isOpen, onClose, setIsOpen }) {
  const { setContentType } = useContentStore();
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Get current path
  const [menuOpen, setMenuOpen] = useState(false);

  // Navigate to Home only if not already there
  const goToHome = () => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    setMenuOpen(false);
  };

  const goToMovies = () => {
    setContentType("movie");
    if (location.pathname !== "/") {
      navigate("/");
    }
    setMenuOpen(false);
  };

  const goToTvShows = () => {
    setContentType("tv");
    if (location.pathname !== "/") {
      navigate("/");
    }
    setMenuOpen(false);
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <div className="w-full bg-black/90 backdrop-blur-sm h-20 flex justify-between items-center fixed top-0 z-30 px-4 sm:px-8 lg:px-28 border-b border-gray-800">
        <Link to="/" className="focus:outline-none">
          <img
            src="./streamit.bmp"
            className="w-[8rem] md:w-[10rem] h-[2rem] md:h-[3rem] object-contain"
            alt="StreamIt Logo"
          />
        </Link>

        <ul className="hidden lg:flex gap-10 text-white text-lg font-medium">
          <li
            onClick={goToHome}
            className="cursor-pointer hover:text-red-500 transition-colors duration-200"
          >
            Home
          </li>
          <li
            onClick={goToMovies}
            className="cursor-pointer hover:text-red-500 transition-colors duration-200"
          >
            Movies
          </li>
          <li
            onClick={goToTvShows}
            className="cursor-pointer hover:text-red-500 transition-colors duration-200"
          >
            TV Shows
          </li>
        </ul>

        <div className="flex items-center gap-4 sm:gap-6">
          <Link to="/search" className="text-white hover:text-red-500 transition-colors">
            <Search className="w-6 h-6" />
          </Link>

          <button
            onClick={setIsOpen}
            aria-label="Open profile"
            className="hidden lg:block text-white hover:text-red-500 transition-colors"
          >
            <UserRoundPen className="w-9 h-9 p-2 rounded-full border border-gray-700 hover:border-red-500" />
          </button>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open mobile menu"
            className="lg:hidden text-white p-2 rounded-md hover:bg-gray-800"
          >
            <AlignJustify className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 top-0 right-0 w-64 h-full bg-gradient-to-b from-gray-900 to-black z-40 shadow-2xl transform transition-transform duration-300">
          <div className="flex justify-between items-center p-5 border-b border-gray-800">
            <span className="text-white text-xl font-bold">Menu</span>
            <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X className="text-red-500 w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col text-white mt-6 px-5 space-y-5">
            <button
              onClick={goToHome}
              className="text-left text-lg font-medium hover:text-red-500 transition-colors py-2"
            >
              Home
            </button>
            <button
              onClick={goToMovies}
              className="text-left text-lg font-medium hover:text-red-500 transition-colors py-2"
            >
              Movies
            </button>
            <button
              onClick={goToTvShows}
              className="text-left text-lg font-medium hover:text-red-500 transition-colors py-2"
            >
              TV Shows
            </button>
          </div>

          {user && (
            <div className="absolute bottom-6 left-0 right-0 px-5 text-center">
              <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-gray-700">
                <img
                  src={user.image || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&w=128&h=128&q=80"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white font-semibold truncate">{user.username}</h3>
              <p className="text-gray-400 text-sm truncate">{user.email}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default HorizontalNavBar;