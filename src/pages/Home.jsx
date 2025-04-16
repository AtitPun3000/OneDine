import React from "react";
import BackgroundImage from "../assets/background.jpeg";
import MealBox from "../assets/mealbox.png";
import MemorableEvents from "../components/MemorableEvents";
import GuestExperiences from "../components/GuestExperiences";
import ExploreCategories from "../components/ExploreCategories";
import ContactUs from "../components/ContactUs";
import FooterPage from "../components/FooterPage";

export default function Homepage() {
  return (
    <div>
      <div>
        <img
          alt="background"
          src={BackgroundImage}
          className="w-full h-[884px]"
        />
      </div>

      <ExploreCategories />

      <div className="flex justify-center items-center bg-[#FFDA7F]">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-normal font-2">Fast & Free Delivery</h1>
          <h2 className="text-3xl font-semibold">
            Get a quick delivery
            <br /> if you live inside butwal
          </h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
            <br /> Excepteur sint occaecat cupidatat non proident.Lorem ipsum
            dolor sit amet, consectetur
            <br />
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad
            <br /> minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo
            <br />
            consequat. .
          </p>
          <button className="w-32 h-10 border text-white rounded-lg bg-[#C03808]">
            Order Now
          </button>
        </div>
        <div>
          <img src={MealBox} alt="MealBox" />
        </div>
      </div>

      <MemorableEvents />
      <GuestExperiences />
      <ContactUs />
      <FooterPage />
    </div>
  );
}
