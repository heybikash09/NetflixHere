import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Play } from "lucide-react";
import useGetTrendingContent from "../hooks/useGetTrendingContent";
import { ORIGINAL_IMG_BASE_URL } from "../utils/constants";

const arr = [
  "extraction.jpg",
  "extraction.jpg",
  "extraction.jpg",
  "extraction.jpg",
  "extraction.jpg",
];
function SlideMovies() {
  const { trendingContent } = useGetTrendingContent();
  const x = [{ name: "bk" }, { name: "dk" }, { name: "pk" }];
  console.log(x[0].name);
  // trendingContent.
  console.log(trendingContent);
  return (
    <div className="w-[95%] mx-auto h-full px-4 p-10 ">
      <Swiper
        loop={true} // Infinite Loop
        navigation={true} // Next/Prev Buttons
        pagination={{ clickable: true }} // Pagination Dots
        slidesPerView={1} // Show 6 slides at a time
        spaceBetween={10} // Spacing between slides
        modules={[Navigation, Pagination]}
        className="w-full h-[100%] "
      >
        {trendingContent.map((src, index) => (
          <SwiperSlide key={index}>
            <div className=" h-full bg-gradient-to-r from-black via-slate-700 to-slate-400">
              <img
                src={ORIGINAL_IMG_BASE_URL + src.backdrop_path}
                alt={`Slide ${index + 1}`}
                className="w-full h-full rounded-lg mix-blend-overlay"
              />
              <div className="  relative z-50 -top-96 py-5 flex flex-col gap-5 ml-20 text-white">
                <h2 className=" text-4xl lg:text-7xl font-bold">{src.title}</h2>
                <div className=" flex w-[60%] md:w-[30%] lg:w-[25%] text-lg lg:text-xl text-slate-300  font-semibold  justify-start gap-1">
                  <h2>{src.vote_average}(Imbd)</h2>
                  <span>|</span>
                  <li>PG-{src.vote_count}</li>
                </div>
                <div className="flex w-[20%] md:w-[20%] lg:w-[18%] text-xl text-slate-300  font-semibold  justify-start gap-2">
                <li>{src.release_date}</li>
                  <span>|</span>
                  
                </div>
                <p className=" w-[65%] hidden lg:flex lg:font-bold ">
                  {src.overview}
                </p>
                <button className=" h-12 text-base rounded-lg w-[30%] md:w-[20%] lg:w-[10rem] bg-red-600 flex justify-evenly items-center text-white font-bold hover:bg-red-700">
                  <h2>play Now</h2>
                  <Play className="ml-3 hidden md:flex" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SlideMovies;
