import { AlignJustify, LogOut, User2, UserRoundPen } from "lucide-react";
import React from "react";
import SlideMovies from "./SlideMovies";
import MulitiSlider from "./MulitiSlider";
import Footer from "../Landingpage/Footer";
import { useAuthStore } from "../store/authStore";
import Signup from "../Authentication/Signup";
import { Navigate } from "react-router-dom";
import { useContentStore } from "../store/content";

function Home() {
  const { user, logout } = useAuthStore();
  // useContentStore
  // const {setContentType}=useContentStore()
  // setContentType('movie')
  console.log("log from home user-->", user);
  return !user ? (
    <Navigate to={"/signup"} />
  ) : (
    <div className="hmm w-full h-screen bg-black">
      <header className=" ">
        <div className=" w-full bg-black opacity-80 gap-4 h-16 flex justify-between items-center fixed z-30 ">
          <img src=".\netflix-logo.png" className=" w-[8rem] md:w-[10rem] md:h-[3] h-[2rem] lg:ml-28" alt="" />
          <div className=" justify-evenly lg:flex hidden gap-16 list-none items-center text-white text-xl ml-80 lg:ml-44">
            <li>Home</li>
            <li>categories</li>
            <li>movies</li>
            <li>sports</li>
          </div>
          <div className=" flex  justify-center items-center gap-3 mr-10 lg:mr-20 md:mr-12 ">
            <input
              type="text"
              className=" h-7 rounded-lg bg-slate-600 pl-4 text-white placeholder:text-red-500 outline-none"
              placeholder="   search.."
            />
            <button>
              <UserRoundPen className=" ring-2 rounded-full w-9 h-9 p-2 text-red-600 hidden sm:flex" />
              <AlignJustify className="  rounded-ld w-9 h-9 p-1 text-red-600 sm:hidden"/>
            </button>
          </div>
        </div>
      </header>

      {/* content show division  */}
      <div className=" h-[90%] w-[98%] mt-10 mx-auto">
        <SlideMovies />
      </div>

      <div className="mt-20 flex flex-col w-full mx-auto">
        {/* Popular Movies */}
        <div className="   mb-20 w-[95%] h-[60vh] mx-auto flex flex-col justify-evenly">
          <div className=" flex justify-between py-3">
            <h2 className=" text-xl text-white font-semibold ">
              Popular Movies
            </h2>
            <button className=" mr-3 text-red-600">View All</button>
          </div>
          <MulitiSlider />
        </div>

        {/* Special and Latest Movies */}
        <div className="   mb-20 w-[95%] h-[60vh] mx-auto flex flex-col justify-evenly ">
          <div className=" flex justify-between py-3">
            <h2 className=" text-xl text-white font-semibold ">
              Special and Latest Movies
            </h2>
            <button className=" mr-3 text-red-600">View All</button>
          </div>
          <MulitiSlider />
        </div>

        {/* Movies Recomended for you  */}
        <div className="   mb-20 w-[95%] h-[60vh] mx-auto flex flex-col justify-evenly ">
          <div className=" flex justify-between py-3">
            <h2 className=" text-xl text-white font-semibold ">
              Movies Recomended for you
            </h2>
            <button className=" mr-3 text-red-600">View All</button>
          </div>
          <MulitiSlider />
        </div>
      </div>
      {/* Footer  */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
