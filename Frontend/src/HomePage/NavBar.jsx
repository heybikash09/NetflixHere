import { AlignJustify, Search, UserRoundPen } from "lucide-react";
import React from "react";
import { useContentStore } from "../store/content";
import { Link } from "react-router-dom";

function NavBar() {
  const { setContentType, contentType } = useContentStore();
  console.log("content type-->", contentType);
  return (
    <>
      <div className=" w-full bg-black opacity-90 gap-4 h-20 flex justify-between items-center fixed z-30 ">
        <img
          src=".\netflix-logo.png"
          className=" w-[8rem] md:w-[10rem] md:h-[3] h-[2rem] lg:ml-28"
          alt=""
        />
        <div className=" justify-evenly lg:flex hidden gap-16 list-none items-center text-white text-xl ml-80 lg:ml-44">
          <li>Home</li>
          <li
            onClick={() => {
              setContentType("movie");
            }}
            className=" selection:bg-red-800"
          >
            movies
          </li>
          <li
            onClick={() => {
              setContentType("tv");
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
          <button>
            <UserRoundPen className=" ring-2 rounded-full w-9 h-9 p-2 text-red-600 hidden sm:flex" />
            <AlignJustify className="  rounded-ld w-9 h-9 p-1 text-red-600 sm:hidden" />
            <div className="hidden text-white w-64 h-64 absolute right-16 top-1 bg-gradient-to-br from-black to-blue-950 rounded-bl-2xl">
              <div className=" flex justify-start gap-6 items-center">
                <UserRoundPen className=" ring-2 ring-blue-600 rounded-full w-7 h-7 p-2 box-content text-red-600 hidden sm:flex ml-4 mt-4" />
                <p className=" mt-4 text-xl font-bold">Name</p>
              </div>
              <div>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
