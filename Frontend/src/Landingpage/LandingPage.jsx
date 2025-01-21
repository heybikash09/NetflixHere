// import NavLink from "react-router-dom"
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
function LandingPage() {
  const navigate=useNavigate()
  return (
    //First Section
    <>
      <div className=" flex-col min-h-screen bg-black">
        <div className="land_bg h-screen w-full flex-col justify-center items-center">
          <nav className=" flex flex-row justify-around items-center">
            <img
              src="./netflix-logo.png"
              alt=""
              className=" relative right-[10%] w-[8rem] h-[3rem] top-6  "
            />
            <button className=" relative top-6 left-[15%] bg-red text-white text-lg h-8 bg-red-600 hover:bg-red-700 w-20 rounded-xl" onClick={()=>navigate('/signin')} >signin</button>
          </nav>
          <div className="gap-4 w-[80%] sm:w-[50%] md:w-[40%]  mx-auto relative top-[20%]">
            <div className=" text-3xl sm:text-5xl font-extrabold text-white flex justify-center">
              <h2 className=" leading-snug max-w-[100vw]">
                Unlimited Movies,Tv Shows and more
              </h2>
            </div>
            <div className=" font-sans text-xl text-white flex justify-center items-center py-4">
              Starts at ₹149. cancel at anytime
            </div>
            <div className="  flex items-center justify-center py-5">
              <div className=" flex-col items-center w-full">
                <div className="text-white flex justify-center">
                  Ready to watch ? Enter your email to create or restart your
                  membership.
                </div>
                <form className="md:flex md:justify-center md:items-center justify-center mt-4 gap-10 md:gap-2">
                  <input
                    type="text"
                    className=" w-full h-14  bg-slate-500 ring-1 text-white ring-slate-500 rounded-lg bg-opacity-40"
                    placeholder="   Email address"
                  />
                  <div className="w-full md:w-[30%] h-14 md:h-14 ring-1 ring-slate-500 rounded-lg text-xl hover:bg-red-700 bg-red-600 text-white flex justify-center items-center">
                    <button type="submit">submit</button>
                    <ChevronRight className=" size-8 " />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>


        {/* Separation  */}

        {/* section TV shows */}
        {/* First Separation  */}

        <div className="py-2 bg-slate-700  text-white h-[60%]">
          <div className=" py-4 px-3 flex  h-[40rem] md:h-[28rem] justify-center items-center md:flex-row flex-col bg-black">
            {/* left */}
            <div className=" flex-1 text-center gap-2 flex items-center">
              <div className="text-center gap-2 flex-co4 items-center">
                <h2 className=" text-4xl md:text-5xl font-extrabold">
                  Love you Jhumu Darling !!!!!!! TV
                </h2>
                <p className=" text-lg md:text-xl px-4 leading-normal mt-5">
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique laboriosam illo, maxime nisi officia facere possimus ratione consectetur fuga debitis.
                </p>
              </div>
            </div>
            {/* right */}
            <div className=" relative  flex-1 flex justify-center bg-purple">
              <img src="./tv.png" className=" w-[70%] " alt="" />
              <video
                src="./hero-vid.m4v"
                className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2"
                playsInline
                autoPlay={true}
                muted
                loop
              ></video>
            </div>
          </div>
        </div>

        {/* Second Section  */}

        <div className="py-2 bg-slate-700  text-white h-[60%]">
          <div className=" py-4 px-3 flex  h-[40rem] md:h-[28rem] justify-center items-center md:flex-row flex-col bg-black">
            {/* left */}

            <div className=" relative  flex-1 flex justify-center ">
              <img
                src="./stranger-things-lg.png"
                className=" w-[70%] "
                alt=""
              />
              <div className=" absolute bg-black w-[40%] h-[22%] top-[70%] rounded-lg ring-2 ring-slate-500 flex flex-row justify-evenly items-center gap-2">
                <img
                  src="./stranger-things-sm.png"
                  alt=""
                  className=" w-[20%] h-[75%]"
                />
                <div className=" text-[60%] md:text-[80%]">
                  <h2>Stranger Things</h2>
                  <h2 className=" text-blue-800">Downloading...</h2>
                </div>
                <img
                  src=".\download-icon.gif"
                  alt=""
                  className=" w-[15%] h-[50%] "
                />
              </div>
            </div>

            {/* right */}

            <div className="flex-1 text-center gap-2 flex items-center">
              <div className="text-center gap-2 flex-co4 items-center">
                <h2 className=" text-4xl md:text-5xl font-extrabold">
                  Tame no 1 Bayaniiiii
                </h2>
                <p className=" text-lg md:text-xl px-4 leading-normal mt-5">
                  Save your favourite easily and always have something to watch
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Third Section  */}
        <div className="py-2 bg-slate-700  text-white h-[60%]">
          <div className=" py-4 px-3 flex  h-[40rem] md:h-[28rem] justify-center items-center md:flex-row flex-col bg-black">
            {/* left */}
            <div className=" flex-1 text-center gap-2 flex items-center">
              <div className="text-center gap-2 flex-co4 items-center">
                <h2 className=" text-4xl md:text-5xl font-extrabold">
                  Watch Everywhere
                </h2>
                <p className=" text-lg md:text-xl px-4 leading-normal mt-5 md:mx-10">
                  Stream unlimited movies and Tv shows on your
                  phone,tablet,laptop and TV
                </p>
              </div>
            </div>
            {/* right */}
            <div className=" relative flex-1 flex justify-center bg-purple">
              <img
                src="./device-pile.png"
                className=" w-[70%] relative z-20 "
                alt=""
              />
              <video
                src="./video-devices.m4v"
                className=" absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2"
                playsInline
                autoPlay={true}
                muted
                loop
              ></video>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div>
          <Footer/>
        </div>
       
      </div>
    </>
  );
}

export default LandingPage;
