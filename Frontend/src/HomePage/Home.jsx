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

function Home(){
const [nav,setNav]=useState(false)
  const handleScroll = () => {
    if(window.scrollY>0)
      setNav(true)
    else setNav(false)
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const { user, logout } = useAuthStore();
  // useContentStore
  // const {setContentType}=useContentStore()
  // setContentType('movie')
  const {contentType}=useContentStore()
  const category = contentType=='movie'?MOVIE_CATEGORY:TV_CATEGORY;
  const name =contentType=='movie'?["Now Playing", "Top Rated ", "Popular", "Upcoming"]:["Airing On Today", "Pupular", "Top Rated", "On The Air"];
  console.log("category--->", category);
// const [trailer,setTrailer]=useState([])
  
 
  // useEffect(()=>{
  //   const getTrailer=async ()=>{
  //     try {
  //       const res= await axios.get(`api/v1/${contentType}/939243/trailer`)
  //     setTrailer(res.data.content)
  //     console.log('trailer-->',res.data)
  //     } catch (error) {
  //       if(error.message.includes('404'))
  //         setTrailer([])
  //     }
  //   };
  //   getTrailer();
  // },[contentType])

  console.log("log from home user-->", user); //this render every state change of user wherever it may be
  return !user ? (
    <LandingPage/>
  ) : (
    <div className="hmm w-full h-[100%] bg-gradient-to-br from-black to-blue-950">
      <header className=" ">
       {nav && <NavBar/>}
      </header>

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
