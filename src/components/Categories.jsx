import React from "react";
import MomoImage from "../assets/momo.jpeg";
import PizzaImage from "../assets/pizza.jpeg";
import CoffeeImage from "../assets/coffee.jpeg";
import MojitoImage from "../assets/mojito.jpeg";
import StarterImage from "../assets/starter.jpeg";
import BreakfastImage from "../assets/breakfast.jpeg";
import Noodles from "../assets/noodles.jpeg";
import Desserts from "../assets/desserts.jpeg";
import KhanaSet from "../assets/khanaset.jpeg";
import TextWithBackground from "./ui/TextWithBackground";

export default function Categories() {
  return (
    <div className="my-10 w-full">
      <TextWithBackground>Categories</TextWithBackground>
      <div className="w-full grid grid-cols-3 gap-4 pb-36 px-48">
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
          <div className="absolute bottom-4 left-4 text-[#FFFFFF] font-normal text-3xl">
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
        <div className="relative">
          <img
            alt="noodles"
            src={Noodles}
            className="w-[491px] h-[420px] object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-white font-normal text-3xl">
            Noodles
          </div>
        </div>
        <div className="relative">
          <img
            alt="desserts"
            src={Desserts}
            className="w-[491px] h-[420px] object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-white font-normal text-3xl">
            Desserts
          </div>
        </div>
        <div className="relative">
          <img
            alt="khanaset"
            src={KhanaSet}
            className="w-[491px] h-[420px] object-cover rounded-lg"
          />
          <div className="absolute bottom-4 left-4 text-white font-normal text-3xl">
            Khana Set
          </div>
        </div>
      </div>
    </div>
  );
}
