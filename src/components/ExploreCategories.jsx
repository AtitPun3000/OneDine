import React from "react";
import MomoImage from "../assets/momo.jpeg";
import PizzaImage from "../assets/pizza.jpeg";
import CoffeeImage from "../assets/coffee.jpeg";
import MojitoImage from "../assets/mojito.jpeg";
import StarterImage from "../assets/starter.jpeg";
import BreakfastImage from "../assets/breakfast.jpeg";
import TextWithBackground from "./ui/TextWithBackground";

export default function ExploreCategories() {
  return (
    <div className="flex flex-col gap-2 items-center mx-auto py-8">
      <TextWithBackground>Explore Our Food Categories</TextWithBackground>
      <div className="w-full grid px-4 grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 sm:px-48">
        <div className="relative">
          <img
            alt="starter"
            src={StarterImage}
            className="w-[491px] h-[420px] object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-white font-normal text-3xl">
            Starter
          </div>
        </div>
        <div className="relative">
          <img
            alt="coffee"
            src={CoffeeImage}
            className="w-[491px] h-[420px] object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-white font-normal text-3xl">
            Hot Beverage
          </div>
        </div>
        <div className="relative">
          <img
            alt="mojito"
            src={MojitoImage}
            className="w-[491px] h-[420px] object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-white font-normal text-3xl">
            Cold Beverage
          </div>
        </div>
        <div className="relative">
          <img
            alt="breakfast"
            src={BreakfastImage}
            className="w-[491px] h-[420px] object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-white font-normal text-3xl">
            Breakfast
          </div>
        </div>
        <div className="relative">
          <img
            alt="pizza"
            src={PizzaImage}
            className="w-[491px] h-[420px] object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-white font-normal text-3xl">
            Pizza
          </div>
        </div>
        <div className="relative">
          <img
            alt="momo"
            src={MomoImage}
            className="w-[491px] h-[420px] object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-white font-normal text-3xl">
            Momo
          </div>
        </div>
      </div>
    </div>
  );
}
