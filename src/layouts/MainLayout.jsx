import React, { useState } from "react";
import Logo from "../assets/One_Dine.png";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { HiShoppingCart } from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  const [showTitleBar, setShowTitleBar] = useState(false);

  const navBar = () => {
    setShowTitleBar((prev) => !prev);
  };

  return (
    <>
      <div className="w-full py-4 text-white text-normal bg-[#C03808]">
        <div className="max-w-[1600px] mx-auto w-full px-10 flex justify-between items-center">
          <img src={Logo} alt="company logo" className="w-40 hidden sm:flex" />
          <div className="w-screen sm:hidden flex gap-4 justify-between items-center">
            <div className="relative">
              <input
                type="search"
                placeholder="Search any food here....."
                className="w-60 border relative border-[#FFB700] placeholder-[#C03808] text-sm rounded-md outline-none py-2 text-black px-4 pr-10"
              />
              <CiSearch className="text-2xl absolute top-1/2 right-4 transform -translate-y-1/2 text-[#C03808]" />
            </div>
            <Link to="/cart">
              <HiShoppingCart className="text-2xl" />
            </Link>
            <IoMenu size={20} onClick={navBar} />
          </div>
          {showTitleBar && (
            <div className="w-80 h-screen sm:hidden bg-[#C03808] z-50 absolute top-[68px] left-0 py-8 text-[#f5f5f5] flex flex-col items-center gap-4">
              <h1>
                <Link to="/">Home</Link>
              </h1>
              <h1>
                <Link to="/menu">Menu</Link>
              </h1>
              <h1>
                <Link to="/submenu">Submenu</Link>
              </h1>
              <h1>
                <Link to="/events">Events</Link>
              </h1>
              <h1>
                <Link to="/about">About</Link>
              </h1>
              <h1>
                <Link to="/contact">Contact</Link>
              </h1>
              <h1>
                <Link to="/privacypolicy">Privacy Policy</Link>
              </h1>
              <h1>
                <Link to="/FAQ">FAQ</Link>
              </h1>
            </div>
          )}
          <div className="sm:flex sm:gap-4 hidden">
            <div className="relative">
              <input
                type="search"
                placeholder="Search any food here....."
                className="w-[400px] border relative border-[#FFB700] placeholder-[#C03808] text-sm rounded-md outline-none py-2 text-black px-4 pr-10"
              />
              <CiSearch className="text-2xl absolute top-1/2 right-4 transform -translate-y-1/2 text-[#C03808]" />
            </div>
            <div className="flex gap-10 items-center text-base">
              <Link to="/">Home</Link>
              <Link to="/menu">Menu</Link>
              <Link to="/submenu">Submenu</Link>
              <Link to="/events">Events</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/privacypolicy">Privacy Policy</Link>
              <Link to="/FAQ">FAQ</Link>
              <Link to="/cart">
                <HiShoppingCart className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}
