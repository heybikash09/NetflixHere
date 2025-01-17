import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Heart, Play, Share } from "lucide-react";

const images = [
  "stranger-things-sm.png",
  "stranger-things-sm.png",
  "stranger-things-sm.png",
  "stranger-things-sm.png",
  "stranger-things-sm.png",
  "stranger-things-sm.png",
  "stranger-things-sm.png",
  "stranger-things-sm.png",
  "stranger-things-sm.png",
  "stranger-things-sm.png",
];
function MulitiSlider() {
  const [len,setLen]=useState(6)
  useEffect(()=>{
    const handleSize=()=>{
      // console.log(window.innerWidth)
      if(window.innerWidth>1420)
        setLen(6)
      else if(window.innerWidth>1024)
        setLen(5)
      else if(window.innerWidth>600)
        setLen(3)
      else setLen(2)
    }
    window.addEventListener('resize',handleSize);
    return ()=>window.removeEventListener('resize',handleSize);
  },[])
  return (
    <div className="w-full h-full ">
      <Swiper
        loop={true} // Infinite Loop
        navigation={true} // Next/Prev Buttons
        // pagination={{ clickable: true }} // Pagination Dots
        slidesPerView={len} // Show 6 slides at a time
        spaceBetween={30} // Spacing between slides
        watchOverflow={false} // Prevents navigation from disappearing
        modules={[Navigation, Pagination]}
        className={`w-full h-full`}
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className="  hover:relative hover:z-50 flex justify-evenly"
          >
            <div className=" h-full w-full group rounded-lg mt-12 transition ease-in-out duration-500  hover:scale-125  delay-200">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-[70%]"
              />
              <div className=" relative -top-24 left-0 w-full opacity-0 delay-200 group-hover:opacity-100 transition ease-in-out duration-500">
                <div className=" flex justify-around">
                  <div className=" mr-4 flex gap-2">
                    <button className=" rounded-full ring-white ring-1 hover:bg-red-600 px-1.5 size-6">
                      <Share color="white" className=" size-3" />
                    </button>
                    <button className="rounded-full ring-white ring-1 hover:bg-red-600 px-1.5 size-6">
                      <Heart color="white" className=" size-3" />
                    </button>
                  </div>

                  <button className="rounded-full bg-red-600 hover:bg-red-700  px-2 size-8">
                    <Play color="white" className="size-4" />
                  </button>
                </div>
                <div className=" flex flex-col justify-around ml-2 text-white">
                  <h2>Name</h2>
                  <h2>Duration</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MulitiSlider;
