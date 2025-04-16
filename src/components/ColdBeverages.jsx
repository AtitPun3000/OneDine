import React from "react";
import TextWithBackground from "./ui/TextWithBackground";
import Mojito from "../assets/mojito.jpeg";
import MintMojito from "../assets/mintmojito.jpeg";
import FrappeShake from "../assets/frappe-shake.jpeg";
import Lemonade from "../assets/lemonade.jpeg";
import StrawBerryShake from "../assets/strawberry-shake.jpeg";
import MangoSmoothie from "../assets/mango-smoothie.jpeg";
import OrangeDrink from "../assets/orange-drink.jpeg";
import LemonJuice from "../assets/lemon-juice.jpeg";
import PineAppleJuice from "../assets/pineapple-juice.jpeg";
import MangoShake from "../assets/mango-shake.jpeg";
import FruitShake from "../assets/fruit-shake.jpeg";
import CarrotJuice from "../assets/carrot-juice.jpeg";
import DalgonaCoffee from "../assets/dalgona-coffee.jpeg";
import IceCoffee from "../assets/ice-coffee.jpeg";
import CocaCola from "../assets/coca-cola.jpeg";
import LemonYogurt from "../assets/lemon-yogurt.jpeg";
import { IoMdStar } from "react-icons/io";

const coldDrinks = [
  {
    id: 1,
    name: "Mojito",
    price: 200,
    image: Mojito,
    rating: 4.3,
  },
  {
    id: 2,
    name: "Mint Mojito",
    price: 190,
    image: MintMojito,
    rating: 4.3,
  },
  {
    id: 3,
    name: "Frappe Shake",
    price: 280,
    image: FrappeShake,
    rating: 4,
  },
  {
    id: 4,
    name: "Lemonade",
    price: 170,
    image: Lemonade,
    rating: 4.3,
  },
  {
    id: 5,
    name: "Strawberry Shake",
    price: 200,
    image: StrawBerryShake,
    rating: null,
  },
  {
    id: 6,
    name: "Mango Smoothie",
    price: 200,
    image: MangoSmoothie,
    rating: null,
  },
  {
    id: 7,
    name: "Orange Drink",
    price: 200,
    image: OrangeDrink,
    rating: 4,
  },
  {
    id: 8,
    name: "Lemon Juice",
    price: 200,
    image: LemonJuice,
    rating: 4.3,
  },
  {
    id: 9,
    name: "Pineapple Juice",
    price: 200,
    image: PineAppleJuice,
    rating: null,
  },
  {
    id: 10,
    name: "Mango Shake",
    price: 200,
    image: MangoShake,
    rating: 4,
  },
  {
    id: 11,
    name: "Fruit Shake",
    price: 200,
    image: FruitShake,
    rating: 4.3,
  },
  {
    id: 12,
    name: "Carrot Juice",
    price: 200,
    image: CarrotJuice,
    rating: 4.3,
  },
  {
    id: 13,
    name: "Dalgona Coffee",
    price: 200,
    image: DalgonaCoffee,
    rating: null,
  },
  {
    id: 14,
    name: "Ice Coffee",
    price: 200,
    image: IceCoffee,
    rating: 4.3,
  },
  {
    id: 15,
    name: "Coca Cola",
    price: 200,
    image: CocaCola,
    rating: 4.3,
  },
  {
    id: 16,
    name: "Lemon Yogurt",
    price: 200,
    image: LemonYogurt,
    rating: 4,
  },
];

export default function ColdBeverages() {
  return (
    <div>
      <TextWithBackground>Cold Beverages</TextWithBackground>
      <div className="grid grid-cols-4 gap-x-4 pb-16 gap-y-4 mx-96">
        {coldDrinks.map((item) => (
          <div key={item.id} className="flex flex-col gap-2">
            <div>
              <img
                src={item.image}
                alt={item.name}
                className="w-[300px] h-[300px] rounded-md"
              />
            </div>
            <div className="flex justify-between gap-2">
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-medium">
                  <span>{item.name}</span>
                  {item.rating !== null && (
                    <>
                      (
                      <IoMdStar
                        className="text-yellow-400 inline-block"
                        size={16}
                      />
                      <span>{item.rating}</span>)
                    </>
                  )}
                </h3>
                <p className="text-sm font-light">Rs {item.price}</p>
              </div>
              <button className="w-[120px] h-[40px] text-sm text-white bg-[#C03808] rounded-md">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
