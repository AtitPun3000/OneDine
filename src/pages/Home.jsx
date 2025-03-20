import React from "react";
import BackgroundImage from "../assets/background.jpeg";
import MemorableEvents from "../components/MemorableEvents";
import GuestExperiences from "../components/GuestExperiences";
import ExploreCategories from "../components/ExploreCategories";

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
          <img
            src="https://s3-alpha-sig.figma.com/img/7eb8/ac2b/28b6c758e8203959b172830b4b5ee177?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dvRjTrh~lx4V5iuPysmQzXaBzihzGW670bmZA-EJxnBuPRBBxW52pzlNBYhxSB6OHrgXpXB4GZ10-cmmmE60THg6aZHT9r0ptmD0KIuuNl2aam0xC8HKFYMmH3YjAq-vTs8Dl8tCAcE9BopTZX0FDJQrARce5wrfyQE~BcItsISsRMTv~NP6A3anoRb-JFGnsMJBeTrGYCnfhL7o4RFQpWdMfTlWejy4ZS-HLpk6vg6w6VKlHzcS4nh6gkpPnTQdM6LJut92Us4wTsYpDX3Dfd5xvpHGLe-Ez8ajT4wEuRAV76ZCzL043N8cvLG-0ILLQfp1FsIVJ6MVIFnQlPBp~g__"
            alt=""
          />
        </div>
      </div>

      <MemorableEvents />
      <GuestExperiences />
    </div>
  );
}
