import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="text-white py-10 px-5 w-full">
      <div className="max-w-full mx-2">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-700 pb-8  leading-loose">
          {/* Left Section - Brand Info */}
          <div>
            <h2 className="text-red-500 text-2xl font-bold">STREAMIT</h2>
            <p className="mt-2 text-gray-400">
              Email us:{" "}
              <span className="text-blue-400">customer@streamit.com</span>
            </p>
            <p className="mt-4 text-gray-400">CUSTOMER SERVICES</p>
            <p className="text-lg font-bold">+ (480) 555-0103</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li className=" hover:text-red-800">➤ About Us</li>
              <li className=" hover:text-red-800">➤ Blog</li>
              <li className=" hover:text-red-800">➤ Pricing Plan</li>
              <li className=" hover:text-red-800">➤ FAQ</li>
            </ul>
          </div>

          {/* Movies To Watch */}
          <div>
            <h3 className="text-lg font-semibold">Movies To Watch</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li className=" hover:text-red-800">➤ Top Trending</li>
              <li className=" hover:text-red-800">➤ Recommended</li>
              <li className=" hover:text-red-800">➤ Popular</li>
            </ul>
          </div>

          {/* About Company */}
          <div>
            <h3 className="text-lg font-semibold">About Company</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li className=" hover:text-red-800">➤ Contact Us</li>
              <li className=" hover:text-red-800">➤ Privacy Policy</li>
              <li className=" hover:text-red-800">➤ Terms Of Use</li>
            </ul>
          </div>

          {/* Subscribe Newsletter */}
          <div className="w-full">
            <h3 className="text-lg font-semibold">Subscribe Newsletter</h3>
            <div className="mt-3 flex w-full ">
              <input
                type="email"
                placeholder="Email*"
                className="p-2  flex-grow bg-gray-800 text-white rounded-l-md outline-none w-[60%]"
              />
              <button className="  w-[40%] bg-red-500 px-4 py-2 rounded-r-md flex justify-center text-white hover:bg-red-800">
                <span>Subscribe</span>
              </button>
            </div>

            {/* Social Media Icons */}
            <h4 className="mt-4 text-gray-400">Follow Us:</h4>
            <div className="flex space-x-3 mt-2">
              {/* <FaFacebookF className="text-gray-400 hover:text-white text-xl cursor-pointer" />
              <FaTwitter className="text-gray-400 hover:text-white text-xl cursor-pointer" />
              <FaGithub className="text-gray-400 hover:text-white text-xl cursor-pointer" />
              <FaInstagram className="text-gray-400 hover:text-white text-xl cursor-pointer" /> */}
              <Facebook className="text-gray-400  hover:text-red-700 text-xl cursor-pointer" />
              <Twitter className="text-gray-400 hover:text-red-700 text-xl cursor-pointer" />
              <Github className="text-gray-400 hover:text-red-700 text-xl cursor-pointer" />
              <Instagram className="text-gray-400 hover:text-red-700 text-xl cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between text-gray-400 text-sm my-10">
          {/* Footer Links */}
          <div className="flex space-x-6">
            <p>Terms Of Use</p>
            <p>Privacy Policy</p>
            <p>FAQ</p>
            <p>Watch List</p>
          </div>

          {/* Copyright Text */}
          <p className="mt-4 md:mt-0">
            © 2025 <span className="text-red-500 font-semibold">STREAMIT.</span>{" "}
            All Rights Reserved.
          </p>

          {/* Download Apps */}
          <div className="mt-4 md:mt-0 flex space-x-3">
            <img
              src=""
              alt="Google Play"
              className="h-10"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
