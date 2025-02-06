import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Eye, Play } from "lucide-react";
import { ORIGINAL_IMG_BASE_URL } from "../utils/constants";
import { useContentStore } from "../store/content";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import PulseMainVideo from "./pulseMainVideo";

function SlideMovies() {
  const [loading, setLoading] = useState(true);
  const { contentType } = useContentStore();
  const [trendingContent, setTrendingContent] = useState([]);
  useEffect(() => {
    const getTrendingContent = async () => {
      setLoading(true);
      const res = await axios.get(`api/v1/${contentType}/trending`);
      console.log("res-->", res.data);
      setTrendingContent(res.data.content.results);
      setLoading(false);
    };
    getTrendingContent();
  }, [contentType]);
  // trendingContent.
  console.log(trendingContent);
  return (
    <>
      {loading ? (
        <PulseMainVideo />
      ) : (
        <div className="w-[95%] mx-auto h-screen px-4 p-10  ">
          <Swiper
            loop={true} // Infinite Loop
            navigation={true} // Next/Prev Buttons
            pagination={{ clickable: true }} // Pagination Dots
            slidesPerView={1} // Show 6 slides at a time
            spaceBetween={10} // Spacing between slides
            modules={[Navigation, Pagination]}
            className=" w-full h-[50%]  lg:h-full rounded-2xl"
          >
            {trendingContent.map((src, index) => (
              <SwiperSlide key={index}>
                <div className=" h-full bg-gradient-to-r from-black via-slate-700 to-slate-400">
                  <img
                    src={ORIGINAL_IMG_BASE_URL + src.backdrop_path}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full rounded-lg mix-blend-overlay"
                  />
                  <div className=" absolute z-50 w-full top-[18%] lg:top-[30%] py-5 flex flex-col gap-5 ml-20 text-white">
                    <h2 className=" text-4xl lg:text-6xl font-bold">
                      {contentType == "movie" ? src.title : src.original_name}
                    </h2>
                    <div className=" flex w-[60%] md:w-[30%] lg:w-[25%] text-lg lg:text-xl text-slate-300  font-semibold  justify-start gap-1">
                      <h2>{src.vote_average}(Imbd)</h2>
                      <span>|</span>
                      <li className=" flex  justify-center items-center">
                        {<Eye className=" mt-1" />}-{src.vote_count}
                      </li>
                    </div>
                    <div className="flex w-[20%] md:w-[20%] lg:w-[18%] text-xl text-slate-300  font-semibold  justify-start gap-2">
                      <li>
                        {contentType == "movie"
                          ? src.release_date
                          : src.first_air_date}
                      </li>
                      <span>|</span>
                    </div>
                    <p className=" w-[65%] hidden lg:flex lg:font-bold ">
                      {src.overview}
                    </p>
                    <button className=" h-12 text-base rounded-lg w-[30%] md:w-[20%] lg:w-[10rem] bg-red-600 flex justify-center items-center text-white font-bold hover:bg-red-700">
                      <h2>play Now</h2>
                      <Link to={`/watch?id=${src.id}`}>
                        <Play className="ml-3 hidden md:flex" />
                      </Link>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
}

export default SlideMovies;
