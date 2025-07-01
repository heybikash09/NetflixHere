import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Download, Heart, Plus, Share2, Tv } from "lucide-react";
import MulitiSlider from "./MulitiSlider";
import { MOVIE_CATEGORY, TV_CATEGORY } from "../utils/constants";
import Footer from "../Landingpage/Footer";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useContentStore } from "../store/content";
import { useAuthStore } from "../store/authStore";
import NavBar from "./NavBar";
import PulseBiping from "./PulseBiping";
import { ENV_VARS } from "../envVar";

const name = ["Movies Recomended For You", "Related Movies", "Upcoming"];
function WatchPage() {
  const location = useLocation();
  console.log("location-->", location);

  const { user } = useAuthStore();
  console.log("user-->", user);
  const [trailer, setTrailer] = useState([]);
  const [loading, setLoading] = useState(true);
  const [contentDetails, setContentDetails] = useState({});
  const [similarContent, setSimilarContent] = useState();
  const { contentType } = useContentStore();
  const movies =
    contentType == "movie"
      ? MOVIE_CATEGORY.slice(1, 4)
      : TV_CATEGORY.slice(1, 4);
  const [id, setId] = useState();

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

  //  For seting the video and going to top view
  useEffect(() => {
    const getID = () => {
      const { searchParams } = new URL(document.location);
      const id = searchParams.get("id");
      setId(id);
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Optional for smooth scrolling
      });
      console.log("id-->", id);
    };
    getID();
  }, [contentType, location, id]);

  // For trailer
  useEffect(() => {
    const getTrailer = async () => {
      try {
        console.log("Just started !!");
        const res = await axios.get(`${ENV_VARS.BACKEND_URL}/api/v1/${contentType}/${id}/trailer`);
        // const res = await axios.get(`hapi/v1/${contentType}/${id}/trailer`);
        if (contentType == "movie") setTrailer(res.data.content);
        else setTrailer(res.data.content.results);
        console.log(contentType, "-->trailer-->", res.data.content);
      } catch (error) {
        if (error.message.includes("404")) setTrailer([]);
        console.log(error.message);
      }
    };
    getTrailer();
  }, [contentType, id]);

  // for similar content
  useEffect(() => {
    const getSimilarContent = async () => {
      try {
        const res = await axios.get(`${ENV_VARS.BACKEND_URL}/api/v1/${contentType}/${id}/similar`);
        setSimilarContent(res.data.content.results);
        console.log("similar-->", res.data.content.results);
      } catch (error) {
        if (error.message.includes("404")) setSimilarContent([]);
      }
    };
    getSimilarContent();
  }, [contentType, id]);

  // For Content Details
  useEffect(() => {
    const getContentDetails = async () => {
      try {
        const res = await axios.get(`${ENV_VARS.BACKEND_URL}/api/v1/${contentType}/${id}/details`);
        // const res = await axios.get(`api/v1/${contentType}/${id}/details`);
        setContentDetails(res.data.content);
        console.log("contentDetails-->", res.data.content);
      } catch (error) {
        if (error.message.includes("404")) setSimilarContent([]);
      } finally {
        setLoading(false);
      }
    };
    getContentDetails();
  }, [contentType, id]);

  // For Youtube response

  return (
    <>
      {nav && <NavBar />}

      <div className="h-[100%] w-full mx-auto p-6 space-y-12 bg-slate-900 text-white">
        {/* Movie Player Section */}
        {loading ? (
          <PulseBiping/>
        ) : (
          <div className="w-[95%] mx-auto h-[90vh]   rounded-xl overflow-hidden aspect-video">
            <ReactPlayer
              controls={true}
              width={"100%"}
              height={"100%"}
              url={`https://www.youtube.com/watch?v=${trailer[0]?.key}`}
            ></ReactPlayer>
          </div>
        )}

        {/* Movie Details Section */}
        <div className="p-8 text-red-300 rounded-2xl shadow-lg bg-gradient-to-br from-black to-blue-950">
          <h1 className="text-5xl font-extrabold mb-4 ">
            {contentType == "movie"
              ? contentDetails.original_title
              : contentDetails.original_name}
          </h1>
          <h1 className="text-xl font-bold mb-4 flex justify-start gap-5">
            {contentDetails.genres?.map((gen, ind) => (
              <li key={ind}>{gen.name}</li>
            ))}
          </h1>
          {/* all function like share download add */}
          <div className=" flex gap-7 list-none">
            <li className=" rounded-full bg-gray-500 p-1 box-border">
              <Share2
                fill="red"
                color="red"
                className=" bg-white rounded-full p-1.5 box-border hover:bg-gray-400"
              />{" "}
            </li>
            <li className=" rounded-full bg-gray-500 p-1.5 box-border hover:bg-gray-400">
              <Heart
                fill="red"
                color="red"
                className=" bg-white rounded-full p-1.5 box-border hover:bg-gray-400"
              />{" "}
            </li>
            <li className=" rounded-full bg-gray-500 p-1.5 box-border">
              <Plus
                fill="red"
                color="red"
                className=" bg-white rounded-full p-1.5 box-border hover:bg-gray-400"
              />{" "}
            </li>
            <li className=" rounded-full bg-gray-500 p-1.5 box-border">
              <Download
                fill="red"
                color="red"
                className=" bg-white rounded-full p-1.5 box-border hover:bg-gray-400"
              />{" "}
            </li>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Directed by: Christopher Nolan
          </p>

          {/* Description  */}
          <div className=" my-10 w-full h-[100%]  rounded-xl overflow-hidden">
            <div className=" flex gap-8 text-xl text-white bg-gray-700 p-4 justify-center list-none font-semibold">
              <li className=" bg-gray-700">Descriptino</li>
              <li>Rate and Review</li>
              <li>Source</li>
            </div>
            <div className=" w-[80%] mx-auto text-xl font-semibold">
              {contentDetails.overview}
            </div>
          </div>

          <p className="text-lg text-red-300 leading-relaxed">
            A skilled thief is given a chance at redemption if he can
            successfully plant an idea inside a target's subconscious.
          </p>
          <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-indigo-700 focus:ring focus:ring-indigo-500">
            Watch Now
          </button>
        </div>

        {/* Similar Movies  */}
        <div className="mt-20 flex flex-col w-full mx-auto">
          <div className=" mb-5 w-[95%] h-[60vh] mx-auto flex flex-col justify-evenly">
            <div className=" flex justify-between py-3">
              <h2 className=" text-xl text-white font-semibold ">
                Similar Movies
              </h2>
              <button className=" mr-3 text-red-600">View All</button>
            </div>
            <MulitiSlider content={similarContent} />
          </div>
        </div>

        {/*'top_rated','popular','upcoming' */}
        <div className="mt-20 flex flex-col w-full mx-auto">
          {movies.map((item, index) => (
            <div
              key={index}
              className=" mb-5 w-[95%] h-[60vh] mx-auto flex flex-col justify-evenly"
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

        <Footer />
      </div>
    </>
  );
}

export default WatchPage;
