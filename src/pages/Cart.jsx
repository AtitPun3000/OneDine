import React from "react";
import BlankPage from "../assets/blankpage.png";
import Cart from "../assets/cart.png";
import { RiDeleteBin6Line } from "react-icons/ri";
import FooterPage from "../components/FooterPage";

export default function About() {
  return (
    <div>
      <div className="flex flex-col pt-[60px] pl-[200px] w-full">
        <div className="flex justify-between w-[1520px] h-12 border bg-[#FFFAFA]">
          <div className="flex px-8 items-center">
            <label>
              <input type="checkbox" /> Select all (5 items)
            </label>
          </div>
          <div className="flex items-center px-8 gap-2">
            <RiDeleteBin6Line className="w-6 h-6 text-[#C03808]" />
            <h1 className="text-[#C03808]">Delete</h1>
          </div>
        </div>

        <div className="flex justify-center py-12 items-center relative">
          <div className="relative z-10">
            <img
              src={BlankPage}
              alt="blankpage"
              className="w-[436px] h-[436px]"
            />
          </div>
          <div className="absolute z-20">
            <img src={Cart} alt="cart" className="w-[256px] h-[283px]" />
          </div>
        </div>

        <div className="flex flex-col items-center pb-96 gap-4">
          <h1 className="text-lg font-semibold">Your cart is empty</h1>
          <h2 className="text-lg font-normal text-center">
            Looks like you have not added anything to your cart. Go
            <br /> ahead and explore top categories.
          </h2>
          <button className="border text-white text-sm w-48 h-8 rounded-md bg-[#C03808]">
            Check the Menu
          </button>
        </div>
      </div>

      <FooterPage />
    </div>
  );
}
