import React, { useEffect, useState } from "react";
import SlideMovies from "./SlideMovies";
import MulitiSlider from "./MulitiSlider";
import Footer from "../Landingpage/Footer";
import { useAuthStore } from "../store/authStore";
import { useContentStore } from "../store/content";
import { MOVIE_CATEGORY, TV_CATEGORY } from "../utils/constants";
import axios from "axios";
import LandingPage from "../Landingpage/LandingPage";
import NavBar from "./NavBar";
import ProfileDetails from "./ProfileSidePlanel";

function Home() {
  const [nav, setNav] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) setNav(true);
    else setNav(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { user } = useAuthStore();
  const { contentType } = useContentStore();
  const [isPanelOpen, setPanelOpen] = useState(false);
  const [isDarkMode, setIsDarkMOde] = useState(false);
  console.log('panelll--->',isPanelOpen)

  const category = contentType == "movie" ? MOVIE_CATEGORY : TV_CATEGORY;
  const name =
    contentType == "movie"
      ? ["Now Playing", "Top Rated ", "Popular", "Upcoming"]
      : ["Airing On Today", "Pupular", "Top Rated", "On The Air"];
  console.log("category--->", category);
  console.log("log from home user-->", user); //this render every state change of user wherever it may be
  return !user ? (
    <LandingPage />
  ) : (
    <div className="hmm w-full h-[100%] bg-gradient-to-br from-black to-blue-950">
      <header className=" ">
        {nav && <NavBar setIsOpen={() => setPanelOpen(true)} />}
      </header>
      {isPanelOpen && (
        <ProfileDetails
          isOpen={isPanelOpen}
           onToggleDarkMode={() => setIsDarkMOde(!isDarkMode)}
           isDarkMode={isDarkMode}
           onClose={() => setPanelOpen(false)}
        />
      )}

      {/* content show division  */}
      <div className=" h-[100%] w-[98%] mt-10 mx-auto">
        <SlideMovies />
      </div>

      <div className="mt-20 flex flex-col w-full mx-auto">
        {/* Popular Movies */}
        {category.map((item, index) => (
          <div
            key={index}
            className="  w-[95%] h-[60vh] mx-auto flex flex-col justify-evenly"
          >
            <div className=" flex justify-between py-3">
              <h2 className=" text-xl text-white font-semibold ">
                {name[index]}
              </h2>
              <button className=" mr-3 text-red-600">View All</button>
            </div>
            <MulitiSlider type={item} />
          </div>
        ))}
      </div>
      {/* Footer  */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
