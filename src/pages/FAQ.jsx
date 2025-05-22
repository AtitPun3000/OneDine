import React from "react";
import FAQImg from "../assets/FAQ-img.png";
import TextWithBackground from "../components/ui/TextWithBackground";
import FooterPage from "../components/FooterPage";
import { IoSearchOutline } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoRemoveCircleOutline } from "react-icons/io5";

export default function FAQ() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-center gap-12 py-8">
        <div className="flex flex-col items-center">
          <div>
            <TextWithBackground>Frequently Asked Questions</TextWithBackground>
          </div>
          <p>
            Have questions? Here you’ll find the answer most valued by
            <br /> our partners, along with access to step-to-step instructions
            <br /> and support.
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="Make any questions you want to know!"
              className="w-[480px] relative border-2 border-gray-400 rounded-md px-12 py-1"
            />
            <IoSearchOutline className="absolute text-gray-400 w-6 h-6 top-1/2 left-4 transform -translate-y-1/2" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img src={FAQImg} alt="" className="w-96 h-96" />
        </div>
      </div>

      <div className="flex flex-col items-center mx-auto mt-4 mb-40">
        <TextWithBackground>Questions? Look here.</TextWithBackground>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between border-x border-x-gray-300 border-b-2 border-b-gray-300">
            <div className="flex flex-col gap-2 p-4">
              <h2 className="text-lg font-medium">
                What is One Dine and how does it work?
              </h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proidentDuis aute irure dolor in
                <br /> reprehenderit in voluptate velit esuis aute irure dolor
                in reprehenderit in voluptate velit es
              </p>
            </div>
            <div className="flex items-center px-4">
              <IoRemoveCircleOutline size={24} />
            </div>
          </div>
          <div className="flex justify-between border-x border-x-gray-300 border-b-2 border-b-gray-300">
            <h2 className="text-lg font-medium p-4">
              How do I make a reservation through One Dine?
            </h2>
            <div className="flex items-center px-4">
              <IoAddCircleOutline size={24} />
            </div>
          </div>
          <div className="flex justify-between border-x border-x-gray-300 border-b-2 border-b-gray-300">
            <h2 className="text-lg font-medium p-4">
              Can I modify or cancel my reservation after booking?
            </h2>
            <div className="flex items-center px-4">
              <IoAddCircleOutline size={24} />
            </div>
          </div>
          <div className="flex justify-between border-x border-x-gray-300 border-b-2 border-b-gray-300">
            <h2 className="text-lg font-medium p-4">
              Is there a fee for using One Dine to make reservations?
            </h2>
            <div className="flex items-center px-4">
              <IoAddCircleOutline size={24} />
            </div>
          </div>
          <div className="flex justify-between border-x border-x-gray-300 border-b-2 border-b-gray-300">
            <h2 className="text-lg font-medium p-4">
              Can I view the menu of a restaurant before making a reservation?
            </h2>
            <div className="flex items-center px-4">
              <IoAddCircleOutline size={24} />
            </div>
          </div>
          <div className="flex justify-between border-x border-x-gray-300 border-b-2 border-b-gray-300">
            <h2 className="text-lg font-medium p-4">
              How can I contact customer support if I need help with my
              reservation?
            </h2>
            <div className="flex items-center px-4">
              <IoAddCircleOutline size={24} />
            </div>
          </div>
          <div className="flex justify-between border-x border-x-gray-300 border-b-2 border-b-gray-300">
            <h2 className="text-lg font-medium p-4">
              Is my personal information safe when I book through One Dine?
            </h2>
            <div className="flex items-center px-4">
              <IoAddCircleOutline size={24} />
            </div>
          </div>
          <div className="flex justify-between border-x border-x-gray-300 border-b-2 border-b-gray-300">
            <h2 className="text-lg font-medium p-4">
              Is One Dine available in my area, and how do I know which
              restaurants are partnered with you?
            </h2>
            <div className="flex items-center px-4">
              <IoAddCircleOutline size={24} />
            </div>
          </div>
        </div>
      </div>

      <FooterPage />
    </div>
  );
}
