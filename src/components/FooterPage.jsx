import React from "react";
import Logo from "../assets/logo.png";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { PiTwitterLogo } from "react-icons/pi";

export default function FooterPage() {
  return (
    <div className="flex bg-[#C03808] flex-col gap-4">
      <div className="flex flex-col gap-4">
        <div className="flex justify-center pt-4">
          <img src={Logo} alt="logo" />
        </div>
        <p className="text-white text-base text-center font-medium">
          Welcome to One Dine Restaurant - Butwal's Dining Destination
        </p>
      </div>

      <div className="flex justify-around gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-white text-lg font-medium">Quick Links</h2>
          <ul className="flex flex-col gap-1 text-white text-base font-normal">
            <li>About</li>
            <li>Menu</li>
            <li>Events</li>
            <li>Contact</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-white text-lg font-medium">Location</h2>
          <p className="text-white text-base font-normal">
            Butwal-11, Kalikanagar, Rupandehi
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-white text-lg font-medium">For Reservation</h2>
          <p className="text-white text-base font-normal">
            Call us at: 9764678511
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-white text-lg font-medium">Follow Us</h2>
          <div className="flex gap-2">
            <diV className="bg-[#EFF6FF] rounded-full p-2">
              <LuFacebook className="w-[26px] h-[26px] text-[#B28E6A]" />
            </diV>
            <div className="bg-[#EFF6FF] rounded-full p-2">
              <FaInstagram className="w-[22px] h-[22px] text-[#B28E6A]" />
            </div>
            <div className="bg-[#EFF6FF] rounded-full p-2">
              <PiTwitterLogo className="w-[22px] h-[22px] text-[#B28E6A]" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-4">
        <p className="text-white text-center text-base font-normal">
          © 2023 Gorkhali Resort. All rights reserved.
        </p>
      </div>
    </div>
  );
}
