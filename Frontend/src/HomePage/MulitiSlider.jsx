import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Heart, Play, Share } from "lucide-react";
import {Link} from 'react-router-dom'
import { useContentStore } from "../store/content";
import { ORIGINAL_IMG_BASE_URL } from "../utils/constants";
import axios from "axios";

function MulitiSlider({ type, content }) {
  if (content) console.log("content here -->", content);
  const [len, setLen] = useState(6);
  const [categoryContent, setCategoryContent] = useState([]);
  const { contentType } = useContentStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategoryContent = async () => {
      const res = await axios.get(`https://netflixhere.onrender.com/v1/${contentType}/${type}`);
      console.log(`${type}`, res.data.content);
      setCategoryContent(res.data.content.results);
      setLoading()
    };
    getCategoryContent();
  }, [type,contentType]);

  useEffect(() => {
    const handleSize = () => {
      // console.log(window.innerWidth)
      if (window.innerWidth > 1420) setLen(6);
      else if(window.innerWidth > 1250) setLen(5)
      else if (window.innerWidth > 1024) setLen(4);
      else if (window.innerWidth > 600) setLen(3);
      else setLen(2);
    };
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <>
    <div className="w-full h-full ">
      <Swiper
        loop={true} // Infinite Loop
        navigation={true} // Next/Prev Buttons
        // pagination={{ clickable: true }} // Pagination Dots
        slidesPerView={len} // Show 6 slides at a time
        spaceBetween={25} // Spacing between slides
        watchOverflow={false} // Prevents navigation from disappearing
        modules={[Navigation, Pagination]}
        className={`w-full h-full`}
      >
        {(content ? content : categoryContent).map((src, index) => (
          
          <SwiperSlide
            key={index}
            className="  hover:relative hover:z-50 flex justify-evenly"
          >
            <div className=" h-full w-full group rounded-2xl mt-12 transition ease-in-out duration-500  hover:scale-125  delay-200 ">
              <img
                src={ORIGINAL_IMG_BASE_URL + src.backdrop_path}
                alt={`Slide ${index + 1}`}
                className="w-full h-[80%] shadow-black rounded-2xl shadow-2xl"
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

                  <button  className="rounded-full bg-red-600 hover:bg-red-700  px-2 size-8">
                    <Link to={`/watch?id=${src.id}`}>
                      <Play color="white" className="size-4" />
                    </Link>
                  </button>
                </div>
                <div className=" flex flex-col justify-around ml-2 text-white">
                  <h2>{src.original_title}</h2>
                  <h2>{src.release_date}</h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div></>
    
  );
}

export default MulitiSlider;
