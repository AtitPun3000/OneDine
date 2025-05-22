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
import KhanaSet2 from "../assets/khanaset2.png";
import Coffee from "../assets/coffee11.jpg";
import Burger from "../assets/burger.webp";
import TextWithBackground from "./ui/TextWithBackground";

const items = [
  {
    id: 1,
    name: "Starter",
    img: StarterImage,
    altname: "starter",
  },
  {
    id: 2,
    name: "Hot Beverage",
    img: CoffeeImage,
    altname: "coffee",
  },
  {
    id: 3,
    name: "Cold Beverage",
    img: MojitoImage,
    altname: "mojito",
  },
  {
    id: 4,
    name: "Breakfast",
    img: BreakfastImage,
    altname: "breakfast",
  },
  {
    id: 5,
    name: "Pizza",
    img: PizzaImage,
    altname: "pizza",
  },
  {
    id: 6,
    name: "Momo",
    img: MomoImage,
    altname: "momo",
  },
  {
    id: 7,
    name: "Noodles",
    img: Noodles,
    altname: "noodles",
  },
  {
    id: 8,
    name: "Desserts",
    img: Desserts,
    altname: "desserts",
  },
  {
    id: 9,
    name: "Khana Set",
    img: KhanaSet,
    altname: "khanaset",
  },
];

const items2 = [
  {
    id: 1,
    name: "Cold Beverage",
    img: MojitoImage,
    altname: "mojito",
  },
  {
    id: 2,
    name: "Hot Beverage",
    img: Coffee,
    altname: "coffee",
  },
  {
    id: 3,
    name: "Breakfast",
    img: BreakfastImage,
    altname: "breakfast",
  },
  {
    id: 4,
    name: "Pizza",
    img: PizzaImage,
    altname: "pizza",
  },
  {
    id: 5,
    name: "Desserts",
    img: Desserts,
    altname: "desserts",
  },
  {
    id: 6,
    name: "Momo",
    img: MomoImage,
    altname: "momo",
  },
  {
    id: 7,
    name: "Burger",
    img: Burger,
    altname: "burger",
  },
  {
    id: 8,
    name: "Khana Set",
    img: KhanaSet2,
    altname: "khanaset",
  },
];

export default function Categories() {
  return (
    <div className="my-10 w-full">
      <TextWithBackground>Categories</TextWithBackground>
      <div className="w-full hidden sm:grid sm:grid-cols-3 sm:gap-4 sm:pb-36 sm:px-48">
        {items.map((item) => (
          <div className="relative">
            <img
              key={item.id}
              alt={item.altname}
              src={item.img}
              className="w-[491px] h-[420px] object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 text-white font-normal text-3xl">
              {item.name}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full sm:hidden grid grid-cols-2 gap-4 px-16">
        {items2.map((item) => (
          <div className="relative">
            <img
              key={item.id}
              alt={item.altname}
              src={item.img}
              className="w-60 h-56 object-cover rounded-lg"
            />
            <div className="absolute bottom-2 left-4 text-white font-normal text-lg">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
