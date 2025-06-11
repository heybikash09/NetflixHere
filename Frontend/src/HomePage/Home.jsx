import React, { useEffect, useState } from "react";
import SlideMovies from "./SlideMovies";
import MulitiSlider from "./MulitiSlider";
import Footer from "../Landingpage/Footer";
import { useAuthStore } from "../store/authStore";
import { useContentStore } from "../store/content";
import { MOVIE_CATEGORY, TV_CATEGORY } from "../utils/constants";
import LandingPage from "../Landingpage/LandingPage";
import NavBar from "./NavBar";
import ProfileDetails from "./ProfileSidePlanel";

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPanelOpen, setPanelOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { user } = useAuthStore();
  const { contentType } = useContentStore();

  const categories = contentType === "movie" ? MOVIE_CATEGORY : TV_CATEGORY;
  const sectionTitles =
    contentType === "movie"
      ? ["Now Playing", "Top Rated", "Popular", "Upcoming"]
      : ["Airing Today", "Popular", "Top Rated", "On The Air"];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!user) return <LandingPage />;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black to-blue-950">
      {/* Navbar */}
      {isScrolled && <NavBar setIsOpen={() => setPanelOpen(true)} />}

      {/* Profile Panel */}
      {isPanelOpen && (
        <ProfileDetails
          isOpen={isPanelOpen}
          isDarkMode={isDarkMode}
          onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
          onClose={() => setPanelOpen(false)}
        />
      )}

      {/* Slide Section */}
      <div className="w-full px-2 sm:px-4 md:px-8 mt-8 sm:mt-10 md:mt-12">
        <SlideMovies />
      </div>

      {/* Category Sliders */}
      <div className="flex flex-col gap-12 mt-8 sm:mt-10 md:mt-12 w-full px-2 sm:px-4 md:px-8">
        {categories.map((type, index) => (
          <section key={type} className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl sm:text-2xl text-white font-semibold">
                {sectionTitles[index]}
              </h2>
              <button className="text-red-600 text-sm sm:text-base">View All</button>
            </div>
            <MulitiSlider type={type} />
          </section>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
