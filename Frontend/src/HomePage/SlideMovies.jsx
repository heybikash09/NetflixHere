import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Play } from "lucide-react";

const arr = [
  "stranger-things-sm.png",
  "stranger-things-sm.png",
  "stranger-things-sm.png",
  "stranger-things-sm.png",
];
function SlideMovies() {
  return (
    <div className="w-full h-full px-4 p-10 ">
      <Swiper
        loop={true} // Infinite Loop
        navigation={true} // Next/Prev Buttons
        pagination={{ clickable: true }} // Pagination Dots
        slidesPerView={1} // Show 6 slides at a time
        spaceBetween={10} // Spacing between slides
        modules={[Navigation, Pagination]}
        className="w-full h-[100%]"
      >
        {arr.map((src, index) => (
          <SwiperSlide key={index}>
            <div className=" h-full ">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full rounded-lg"
              />
              <div className="  relative z-50 -top-96 py-5 flex flex-col gap-5 ml-20 text-white">
                <h2 className=" text-3xl">Name</h2>
                <div className=" flex w-[40%] md:w-[20%] bg-red-500 justify-around">
                  <h2>rating</h2>
                  <h2>imbd</h2>
                </div>
                <div className="flex w-[40%] md:w-[20%] bg-red-500 justify-around">
                  <h2>duration</h2>
                  <h2>date</h2>
                </div>
                <p className=" w-[40%] hidden md:flex ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores repellat sint neque odio id fugit iusto minima dolor
                  reprehenderit maxime?Lorem ipsum dolor,
                </p>
                <button className=" h-12 text-base rounded-lg w-[30%] md:w-[16%] bg-red-600 flex justify-center items-center text-white font-bold ml-4">
                  <h2>play Now</h2>
                  <Play className="ml-3" />
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
