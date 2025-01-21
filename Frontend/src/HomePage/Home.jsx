import { UserRoundPen } from "lucide-react";
import React from "react";
import SlideMovies from "./SlideMovies";
import MulitiSlider from "./MulitiSlider";
import Footer from "../Landingpage/Footer";

function Home() {
  
  return (
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
      {/* content show division  */}
      <div className=" h-[90%] w-[98%] mt-10 mx-auto">
        <SlideMovies />
      </div>

      <div className="mt-20 flex flex-col w-full mx-auto">
        {/* Popular Movies */}
        <div className="   mb-20 w-[95%] h-[60vh] mx-auto flex flex-col justify-evenly">
          <div className=" flex justify-between py-3">
            <h2 className=" text-xl text-white font-semibold ">
              Movies Recomended For You
            </h2>
            <button className=" mr-3 text-red-600">View All</button>
          </div>
          <MulitiSlider />  
        </div>

        {/* Special and Latest Movies */}
        <div className="   mb-20 w-[95%] h-[60vh] mx-auto flex flex-col justify-evenly ">
          <div className=" flex justify-between py-3">
            <h2 className=" text-xl text-white font-semibold ">
              Movies Recomended For You
            </h2>
            <button className=" mr-3 text-red-600">View All</button>
          </div>
          <MulitiSlider />
        </div>


        {/* Movies Recomended for you  */}
        <div className="   mb-20 w-[95%] h-[60vh] mx-auto flex flex-col justify-evenly ">
          <div className=" flex justify-between py-3">
            <h2 className=" text-xl text-white font-semibold ">
              Movies Recomended For You
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
