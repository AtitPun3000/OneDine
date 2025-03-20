import React from "react";
import Logo from "../assets/One_Dine.png";

import { CiSearch } from "react-icons/ci";
import { HiShoppingCart } from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <div className="w-full py-4 text-white text-normal bg-[#C03808]">
        <div className="max-w-[1600px] mx-auto w-full px-10 flex justify-between items-center">
          <img src={Logo} alt="company logo" className="w-40" />
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
            <Link to="/events">Events</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div>
            <HiShoppingCart className="text-2xl" />
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}
