import { UserRoundPen } from "lucide-react";
import React from "react";
import SlideMovies from "./SlideMovies";
import MulitiSlider from "./MulitiSlider";
import Footer from "../Landingpage/Footer";
import { useAuthStore } from "../store/authStore";
import Signup from "../Authentication/Signup";
import { Navigate } from "react-router-dom";

function Home() {
  const {user,logout}=useAuthStore()
  console.log('log from home user-->',user)
  return (!user?<Navigate to={'/signup'} />:
    <div className="hmm w-full h-screen bg-black">
      <header>
        <div className=" w-full bg-purple-600 h-16 flex justify-evenly items-center absolute hidden">
          <img src=".\netflix-logo.png" className=" w-[10%] h-[50%]" alt="" />

          <div className=" flex justify-evenly gap-20 list-none items-center text-xl ml-72">
            <li>Home</li>
            <li>Latest</li>
            <li>about</li>
            <li>contacts</li>
          </div>
          <div className=" flex  justify-center items-center gap-3 ">
            <input type="text" className=" h-9 rounded-xl" />
            <button>
              <UserRoundPen className=" ring-2" />
            </button>
          </div>
        </div>
      </header>

      <button className=" text-white rounded-xl bg-red-600 p-3"  onClick={logout}>Logout</button>
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
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
