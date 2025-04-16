import React from "react";
import Lemon from "../assets/lemon.png";
import Juice from "../assets/juice.png";
import ColdBeverages from "../components/ColdBeverages";
import FooterPage from "../components/FooterPage";

export default function Events() {
  return (
    <div className="flex flex-col w-full h-screen">
      <div className="flex">
        <div>
          <img src={Lemon} alt="lemon" className="w-[586px] h-[839px]" />
        </div>
        <div className="flex flex-col py-24">
          <h1 className="text-2xl font-medium leading-10">#Tasty</h1>
          <h2 className="text-3xl font-semibold leading-10">SUMMER DRINKS</h2>
          <p className="text-xs font-light">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla
            <br /> pariatur. Excepteur sint occaecat cupidatat non
            proident.Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore
            <br /> magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi
            <br /> ut aliquip ex ea commodo consequat. .
          </p>
        </div>
        <div>
          <img src={Juice} alt="juice" className="w-[745px] h-[609px]" />
        </div>
      </div>

      <ColdBeverages />
      <FooterPage />
    </div>
  );
}
