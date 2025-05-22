import React from "react";
import FooterPage from "../components/FooterPage";
import Events1 from "../assets/events1.jpg";
import Events2 from "../assets/events2.jpg";
import Events3 from "../assets/events3.jpg";
import Events4 from "../assets/events4.jpg";
import Events5 from "../assets/events5.jpg";
import Events6 from "../assets/events6.jpg";
import TextWithBackground from "../components/ui/TextWithBackground";

export default function Events() {
  return (
    <div>
      <div className="flex max-w-[1400px] justify-center mx-auto gap-4 py-4">
        <div className="flex flex-col justify-center gap-2 p-4">
          <h1>Great Food, Unforgettable Moments</h1>
          <h2 className="text-4xl font-medium text-[#C03808]">
            Be Part of Every
            <br /> Moment Worth
            <br /> Celebrating
          </h2>
          <p>
            Be part of every moment worth celebrating!
            <br /> Whether it’s a birthday, an anniversary, or
            <br /> simply a night out with loved ones, we’re
            <br /> here to make it special. Great food, warm
            <br /> ambiance, and unforgettable memories
            <br /> because every occasion deserves to be
            <br /> cherished.
          </p>
        </div>
        <div>
          <img
            src={Events1}
            alt=""
            className="w-80 h-[488px] object-cover rounded-3xl"
          />
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <img
              src={Events2}
              alt=""
              className="w-80 h-60 object-cover rounded-3xl"
            />
          </div>
          <div>
            <img
              src={Events3}
              alt=""
              className="w-80 h-60 object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mx-auto gap-4 py-4">
        <div>
          <TextWithBackground>
            Explore Our Diverse Event Categories
          </TextWithBackground>
          <p className="text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur
            <br /> sint occaecat cupidatat non proident.Lorem ipsum dolor sit
            Duis aute irure dolor.
          </p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <div className="relative">
              <img
                src={Events2}
                alt=""
                className="w-96 h-[420px] object-cover rounded-3xl"
              />
            </div>
            <div className="absolute top-[340px] left-4">
              <h2 className="text-2xl font-medium text-[#f5f5f5]">
                Dance Events
              </h2>
              <p className="text-xs font-normal text-[#f5f5f5]">
                Duis aute irure dolor in reprehenderit in voluptate velit
                <br /> esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative">
              <img
                src={Events4}
                alt=""
                className="w-96 h-[420px] object-cover rounded-3xl"
              />
            </div>
            <div className="absolute top-[340px] left-4">
              <h2 className="text-2xl font-medium text-[#f5f5f5]">
                Music Events
              </h2>
              <p className="text-xs font-normal text-[#f5f5f5]">
                Duis aute irure dolor in reprehenderit in voluptate velit
                <br /> esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative">
              <img
                src={Events5}
                alt=""
                className="w-96 h-[420px] object-cover rounded-3xl"
              />
            </div>
            <div className="absolute top-[340px] left-4">
              <h2 className="text-2xl font-medium text-[#f5f5f5]">
                Festival Events
              </h2>
              <p className="text-xs font-normal text-[#f5f5f5]">
                Duis aute irure dolor in reprehenderit in voluptate velit
                <br /> esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mx-auto pt-4 pb-8">
        <TextWithBackground>Memorable Past Events</TextWithBackground>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <div>
              <img src={Events5} alt="" className="w-60 h-64 object-cover" />
            </div>
            <div>
              <img src={Events4} alt="" className="w-96 h-64 object-cover" />
            </div>
            <div>
              <img src={Events3} alt="" className="w-96 h-64 object-cover" />
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <img
                src={Events6}
                alt=""
                className="scale-x-[-1] w-96 h-64 object-cover"
              />
            </div>
            <div>
              <img
                src={Events2}
                alt=""
                className="scale-x-[-1] w-96 h-64 object-cover"
              />
            </div>
            <div>
              <img
                src={Events1}
                alt=""
                className="scale-x-[-1] w-60 h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <FooterPage />
    </div>
  );
}
