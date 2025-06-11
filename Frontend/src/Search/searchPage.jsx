import React, { useEffect, useState } from "react";
import { Search, Film, Tv, Users, Play, SearchCheck } from "lucide-react";
import axios from "axios";
import { ORIGINAL_IMG_BASE_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useContentStore } from "../store/content";

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  // const [activeCategory, setActiveCategory] = useState("movie");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchContent, setSearchContent] = useState([]);
  const { setContentType, contentType } = useContentStore();
  console.log("activeCategory-->", contentType);
  const handleSearch = async (e) => {
    e.preventDefault();
    // Handle search logic here
    try {
        const res = await axios.get(
          `https://netflixhere.onrender.com/api/v1/search/${contentType}/${searchQuery}`
        );
        setSearchContent(res.data.content);
      // setSearchQuery("");
    } catch (error) {
      console.log("error in search content fetch--->", error.message);
    }
  };
  const handleSearchHistory = async (ctgry) => {
    console.log("handleSearchHistory");
    try {
      if(ctgry==''){
      const res = await axios.get(`https://netflixhere.onrender.com/api/v1/search/history`);
      setSearchContent(res.data.content);}
    } catch (error) {
      console.log("error in search content fetch--->", error.message);
    }
  };
  console.log("movieee-->", searchContent);
  const categories = [
    { id: "movie", label: "Movies", icon: <Film className="w-4 h-4" /> },
    { id: "tv", label: "TV Shows", icon: <Tv className="w-4 h-4" /> },
    { id: "person", label: "People", icon: <Users className="w-4 h-4" /> },
    {
      id: "",
      label: "History",
      icon: <SearchCheck className="w-4 h-4" />,
    },
  ];
  return (
    <>
      <div className="h-screen bg-black text-white bg-gradient-to-br from-black to-blue-950">
        {/* Header */}
        <header className="bg-gradient-to-b from-black/80 to-transparent p-4">
          <div className="max-w-5xl mx-auto">
            <form onSubmit={handleSearch} className="relative">
              <div
                className={`relative transition-all duration-300 ${
                  isSearchFocused ? "ring-2 ring-red-600" : ""
                }`}
              >
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  placeholder="Search for movies, TV shows, people..."
                  className="w-full bg-[#141414] text-white pl-12 pr-4 py-3 rounded-md focus:outline-none"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </form>

            {/* Category Tabs */}
            <div className="flex space-x-1 mt-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => { 
                    setContentType(category.id);
                    setSearchContent([])
                    handleSearchHistory(category.id)
                    
                  }}
                  className={`flex items-center px-6 py-2 rounded-full text-sm font-medium transition-colors
                  ${
                    contentType === category.id
                      ? "bg-red-600 text-white"
                      : "bg-[#141414] text-gray-300 hover:bg-[#1f1f1f]"
                  }`}
                >
                  {category.icon}
                  <span className="ml-2">{category.label}</span>
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Results Section */}
        <main className="w-[90%] min-h-[60%] mx-auto p-4 mt-6 ">
          {searchContent?.length !== 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
              {contentType != ""
                ? searchContent?.map((item, index) => (
                    <div
                      key={index}
                      className="bg-[#141414] rounded-md overflow-hidden hover:ring-2 hover:ring-blue-800 transition-all duration-300 ease-in-out w-full relative h-96 group hover:scale-105 hover"
                    >
                      <img
                        src={
                          contentType == "person"
                            ? ORIGINAL_IMG_BASE_URL + item.profile_path
                            : ORIGINAL_IMG_BASE_URL + item.backdrop_path
                        }
                        alt="Example"
                        className="w-full h-72 object-cover"
                      />
                      <Link to={`/watch?id=${item.id}`}>
                        <Play className=" group-hover:flex hidden size-7 bg-red-600 p-2 box-content absolute rounded-full top-56 left-[80%]" />
                      </Link>
                      <div className="p-4 bg-gradient-to-r from-slate-950 to-blue-950 h-full">
                        <h3 className="font-semibold text-white">
                          {contentType == "movie" ? item.title : item.name}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          {contentType == "movie"
                            ? item.release_date
                            : item.first_air_date}
                        </p>
                      </div>
                    </div>
                  ))
                : searchContent?.map((item, index) => (
                    <div
                      key={index}
                      className="bg-[#141414] rounded-md overflow-hidden hover:ring-2 hover:ring-blue-800 transition-all duration-300 ease-in-out w-full relative h-28 group hover:scale-105 "
                    >
                      <div className="p-4 bg-gradient-to-r from-slate-950 to-blue-950 h-full flex">
                        <div className=" flex flex-col w-full justify-center h-full">
                          <h3 className="font-semibold text-white">
                            {item.title}
                          </h3>
                          <h3 className="font-semibold text-white">
                            {item.searchType}
                          </h3>
                          <p className="text-sm text-gray-400 mt-1">
                            {item.createdAt}
                          </p>
                        </div>
                        <img src={ORIGINAL_IMG_BASE_URL+item.image} alt="" />
                      </div>
                    </div>
                  ))}

              {/* FOR SEARCH HISTORY */}
            </div>
          ) : (
            <div className="text-center text-gray-400 mt-20">
              <Search className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-xl">
                Start searching to discover amazing content
              </p>
            </div>
          )}
        </main>
      </div>
    </>
  );
}

export default SearchPage;
