import React from "react";
import Categories from "../components/Categories";
import FooterPage from "../components/FooterPage";
import Plate from "../assets/plate.png";

export default function Menu() {
  return (
    <div>
      <div className="flex relative gap-24 mb-8">
        <div className="flex flex-col gap-2 pt-24 pl-36">
          <h1 className="font-medium text-2xl">Fast & Unique Taste</h1>
          <h2 className="font-semibold leading-8 text-4xl">
            Come for the Taste
            <br /> Stay for the Experience
          </h2>
          <p className="text-sm font-light">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
            <br /> Excepteur sint occaecat cupidatat non proident.Lorem ipsum
            dolor sit amet, consectetur
            <br /> adipiscing elit. Sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad
            <br /> minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo
            <br /> consequat. .
          </p>
          <button className="bg-[#C03808] w-[160px] text-white h-[40px] rounded-md">
            Order Now
          </button>
        </div>

        <div className="absolute w-[724px] h-[661px] top-[40px] left-[891px]">
          <img src={Plate} alt="Plate" />
        </div>

        <div className="w-[693px] h-[550px] ml-auto rounded-tl-[100px] rounded-bl-[100px] bg-[#FFB700]"></div>
      </div>

      <Categories />

      <FooterPage />
    </div>
  );
}
