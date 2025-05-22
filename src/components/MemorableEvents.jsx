import React from "react";
import Pic001 from "../assets/pic001.jpeg";
import Pic002 from "../assets/pic002.jpeg";
import Pic003 from "../assets/pic003.jpeg";
import Pic004 from "../assets/pic004.jpeg";
import Pic005 from "../assets/pic005.jpeg";

export default function MemorableEvents() {
  return (
    <div className="my-10">
      <div className="w-fit relative mb-4 mx-auto after:bg-[#FFB700] after:content-[''] after:w-full after:h-4 after:opacity-50 after:-translate-y-[10%] after:top-1/2 after:z-[-1] after:px-8 after:absolute">
        <h1 className="text-4xl font-bold text-center px-4">
          Memorable Past Events
        </h1>
      </div>
      <div className="flex gap-6 px-4 sm:mx-36">
        <div>
          <img
            src={Pic001}
            alt="Singing"
            className="w-[619px] h-[532px] object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <img
              src={Pic002}
              alt=""
              className="w-[492px] h-[252px] object-cover"
            />
          </div>
          <div>
            <img
              src={Pic003}
              alt=""
              className="w-[361px] h-[252px] object-cover"
            />
          </div>
          <div>
            <img
              src={Pic004}
              alt=""
              className="w-[492px] h-[252px] object-cover"
            />
          </div>
          <div>
            <img
              src={Pic005}
              alt=""
              className="w-[361px] h-[252px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
