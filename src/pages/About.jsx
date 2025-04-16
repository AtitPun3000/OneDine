import React from "react";
import FooterPage from "../components/FooterPage";
import GuestExperiences from "../components/GuestExperiences";
import CafePic from "../assets/cafe007.png";
import Pic111 from "../assets/pic111.png";
import Pic112 from "../assets/pic112.png";
import Pic113 from "../assets/pic113.png";
import Background from "../assets/background.jpeg";

export default function About() {
  return (
    <div>
      <div>
        <div className="flex gap-4">
          <div className="w-1/2 flex flex-col px-36 py-32 gap-2">
            <h1 className="font-semibold text-5xl">About Us</h1>
            <p className="font-light text-sm">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat
              <br /> nulla pariatur. Excepteur sint occaecat cupidatat non
              proident.Lorem ipsum dolor sit
              <br /> amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et
              <br />
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco
              <br /> laboris nisi ut aliquip ex ea commodo consequat. .Duis aute
              irure dolor in
              <br /> reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur
              <br /> sint occaecat cupidatat non proident.Lorem ipsum dolor sit
              amet, consectetur
              <br /> adipiscing elit. Sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut
              <br /> enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea
              <br /> commodo consequat. .
            </p>
          </div>
          <div className="w-1/2 px-40 py-8">
            <img
              src={CafePic}
              alt="CafePic"
              className="w-[750px] rounded-xl h-[500px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 px-48 py-16">
          <div>
            <h1 className="font-semibold text-3xl">Why We Are Best?</h1>
            <p className="font-light text-sm">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla
              <br /> pariatur. Excepteur sint occaecat cupidatat non
              proident.Lorem ipsum dolor sit Duis aute
              <br /> irure dolor.
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-3xl">Ambiance & Atmosphere</h1>
            <p className="font-light text-sm">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla
              <br /> pariatur. Excepteur sint occaecat cupidatat non
              proident.Lorem ipsum dolor sit Duis aute irure
              <br /> dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div>
            <img
              src={Pic111}
              alt="Pic111"
              className="w-[748px] h-[261px] rounded-2xl"
            />
          </div>
          <div>
            <h1 className="font-semibold text-3xl">
              Quality Food & Unique Menu
            </h1>
            <p className="font-light text-sm">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla
              <br /> pariatur. Excepteur sint occaecat cupidatat non
              proident.Lorem ipsum dolor sit Duis aute irure
              <br /> dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.uis aute irure
              <br /> dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. uis aute
              <br /> irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div>
            <img
              src={Pic112}
              alt="Pic112"
              className="w-[748px] h-[261px] rounded-2xl"
            />
          </div>
          <div>
            <h1 className="font-semibold text-3xl">Hygiene & Cleanliness</h1>
            <p className="font-light text-sm">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla
              <br /> pariatur. Excepteur sint occaecat cupidatat non
              proident.Lorem ipsum dolor sit Duis aute irure
              <br /> dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.uis aute irure
              <br /> dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. uis aute
              <br /> irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <div>
            <img
              src={Pic113}
              alt="Pic113"
              className="w-[748px] h-[261px] rounded-2xl"
            />
          </div>
          <div>
            <h1 className="font-semibold text-3xl">Value for Money and Time</h1>
            <p className="font-light text-sm">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla
              <br /> pariatur. Excepteur sint occaecat cupidatat non
              proident.Lorem ipsum dolor sit Duis aute irure
              <br /> dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.uis aute irure
              <br /> dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. uis aute
              <br /> irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div>
          <img src={Background} alt="Background" />
        </div>
        <div>
          <h1>Vision</h1>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla
            <br /> pariatur. Excepteur sint occaecat cupidatat non
            proident.Lorem ipsum dolor sit Duis
            <br /> aute irure dolor.Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore
            <br /> eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident.Lorem ipsum
            <br /> dolor sit Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu
            <br /> fugiat nulla pariatur.uis aute irure dolor in reprehenderit
            in voluptate velit esse cillum
            <br /> dolore eu fugiat nulla pariatur. uis aute irure dolor in
            reprehenderit in voluptate velit
            <br /> esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div>
          <h1>Mission</h1>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla
            <br /> pariatur. Excepteur sint occaecat cupidatat non
            proident.Lorem ipsum dolor sit Duis
            <br /> aute irure dolor.Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore
            <br /> eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident.Lorem ipsum
            <br /> dolor sit Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu
            <br /> fugiat nulla pariatur.uis aute irure dolor in reprehenderit
            in voluptate velit esse cillum
            <br /> dolore eu fugiat nulla pariatur. uis aute irure dolor in
            reprehenderit in voluptate velit
            <br /> esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div>
          <h1>Inspirations</h1>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla
            <br /> pariatur. Excepteur sint occaecat cupidatat non
            proident.Lorem ipsum dolor sit Duis
            <br /> aute irure dolor.Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore
            <br /> eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident.Lorem ipsum
            <br /> dolor sit Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu
            <br /> fugiat nulla pariatur.uis aute irure dolor in reprehenderit
            in voluptate velit esse cillum
            <br /> dolore eu fugiat nulla pariatur. uis aute irure dolor in
            reprehenderit in voluptate velit
            <br /> esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>

      <GuestExperiences />
      <FooterPage />
    </div>
  );
}
