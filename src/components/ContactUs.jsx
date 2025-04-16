import React from "react";
import Cafe from "../assets/cafe.jpeg";
import Cafe001 from "../assets/cafe001.jpeg";
import Cafe002 from "../assets/cafe002.jpeg";
import Cafe003 from "../assets/cafe003.jpeg";
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineMail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa6";

export default function ContactUs() {
  return (
    <div className="w-full my-8 relative">
      <div className="w-fit relative mb-4 mx-auto after:bg-[#FFB700] after:content-[''] after:w-full after:h-4 after:opacity-50 after:-translate-y-[10%] after:top-1/2 after:z-[-1] after:px-8 after:absolute">
        <h1 className="text-4xl font-bold text-center px-4">Contact Us</h1>
      </div>

      <div className="flex gap-4 px-32">
        <div>
          <img src={Cafe} alt="" className="w-[620px] h-[650px] rounded-3xl" />
        </div>
        <div>
          <img
            src={Cafe001}
            alt=""
            className="w-[491px] h-[650px] rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <img
              src={Cafe002}
              alt=""
              className="w-[362px] h-[311px] rounded-2xl"
            />
          </div>
          <div>
            <img
              src={Cafe003}
              alt=""
              className="w-[362px] h-[311px] rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row gap-4 my-4">
        <div className="w-1/2 flex flex-col gap-4">
          <div className="w-fit relative ml-32 after:bg-[#FFB700] after:content-[''] after:w-full after:h-4 after:opacity-50 after:translate-y-[20%] after:top-1/2 after:z-[-1] after:absolute">
            <h1 className="text-base font-normal">
              If you have any questions feel free to get in touch with us via
              <br />
              phone, text, email, the form below or even on social media !
            </h1>
          </div>
          <div className="w-[622px] flex flex-col gap-4 ml-32 px-12 py-8 border border-opacity-50 border-gray-400 rounded-lg">
            <h2 className="font-semibold text-3xl">Contact Information</h2>
            <hr className="border border-gray-400 border-opacity-50 w-[498px]" />
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <h2>
                  <HiOutlinePhone className="w-[30px] h-[30px] text-[#C03808]" />
                </h2>
                <p className="flex flex-col">
                  <h2>Phone</h2>
                  <p>+977 970-1650769</p>
                </p>
              </div>
              <div className="flex gap-4">
                <h2>
                  <MdOutlineMail className="w-[35px] h-[35px] text-[#C03808]" />
                </h2>
                <p className="flex flex-col">
                  <h2>Email</h2>
                  <p>info.onedine@gmail.np</p>
                </p>
              </div>
              <div className="flex gap-4">
                <h2>
                  <SlLocationPin className="w-[35px] h-[35px] text-[#C03808]" />
                </h2>
                <p className="flex flex-col">
                  <h2>Address</h2>
                  <p>Butwal-11 Kalikanagar Rupandehi</p>
                </p>
              </div>
              <div className="flex gap-4">
                <h2>
                  <FaRegClock className="w-[30px] h-[30px] text-[#C03808]" />
                </h2>
                <p className="flex flex-col">
                  <h2>Hours</h2>
                  <p>24/7 Front Desk Service</p>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[708px] bg-[#ffffff] border border-opacity-50 absolute left-[924px] top-[600px] border-gray-400 rounded-lg px-12 pt-2 pb-8">
          <h2 className="text-3xl font-medium leading-normal">
            Book a Table Online
          </h2>
          <hr className="border border-gray-400 border-opacity-50 w-[650px]" />
          <form className="flex flex-col pt-2 gap-4">
            <diV className="flex gap-4">
              <label>
                First Name
                <br />
                <input
                  type="text"
                  placeholder="John"
                  className="w-[309px] border border-gray-400 rounded-lg px-4 py-2"
                />
              </label>
              <label>
                Last Name
                <br />
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-[309px] border border-gray-400 rounded-lg px-4 py-2"
                />
              </label>
            </diV>
            <label>
              Phone Number
              <br />
              <input
                type="tel"
                placeholder="977 9762769812"
                className="w-[642px] border border-gray-400 rounded-lg px-4 py-2"
              />
            </label>
            <label for="message" class="block text-lg font-semibold">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              class="w-[642PX] p-4 border border-gray-300 rounded-lg"
              placeholder="Any special requirement or preference..."
            ></textarea>
            <button
              disabled
              className="w-[641px] h-[50px] bg-[#C03808] text-white rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
