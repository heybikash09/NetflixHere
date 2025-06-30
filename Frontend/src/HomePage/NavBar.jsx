import { AlignJustify, Search, UserRoundPen } from "lucide-react";
import React, { useState } from "react";
import { useContentStore } from "../store/content";
import { Link, useNavigate } from "react-router-dom";

function NavBar({ setIsOpen, setNavOpen }) {
  const { setContentType } = useContentStore();
  const navigate = useNavigate();
  return (
    <>
      <div className=" w-full bg-black gap-4 h-20 flex justify-between items-center fixed z-30 ">
        <img
          src="./streamit.bmp"
          className=" w-[8rem] md:w-[10rem] md:h-[3] h-[2rem] lg:ml-28"
          alt=""
        />
        <div className=" justify-evenly lg:flex hidden gap-16 list-none items-center text-white text-xl ml-80 lg:ml-54">
          <li>Home</li>
          <li
            onClick={() => {
              setContentType("movie");
              navigate("/");
            }}
            className=" selection:bg-red-800"
          >
            movies
          </li>
          <li
            onClick={() => {
              setContentType("tv");
              navigate("/");
            }}
          >
            Tv_shows
          </li>
          <li>sports</li>
        </div>
        <div className=" flex  justify-center items-center gap-7 mr-10 lg:mr-20 md:mr-12 ">
          <Link to={"/search"}>
            <button>
              <Search color="red" />
            </button>
          </Link>
          <button onClick={setIsOpen} className="hidden sm:flex">
            <UserRoundPen className="ring-2 rounded-full w-9 h-9 p-2 text-red-600" />
          </button>

          <button onClick={() => setNavOpen(true)} className="md:hidden bg-green-400">
            <AlignJustify className="rounded-ld w-9 h-9 p-1 text-red-600"  />
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
