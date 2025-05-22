import React, { useState } from "react";
import Sarah from "../assets/sarah.jpeg";
import Rajesh from "../assets/rajesh.jpeg";
import Emma from "../assets/emma.jpeg";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

const reviews = [
  {
    id: 1,
    profile: Sarah,
    name: "Sarah Johnson",
    designation: "International Tourist",
    rating: 4.5,
    message:
      "Amazing food and great vibes! The burgers were juicy, and the fries were perfectly crispy. The staff was super friendly, and the service was fast. Definitely coming back!",
  },
  {
    id: 2,
    profile: Rajesh,
    name: "Rajesh Patel",
    designation: "Corporate Event Organizer",
    rating: 3,
    message:
      "Such a charming little spot! The homemade soup was comforting, and the bread was fresh and warm. Perfect place for a relaxing meal. Highly recommend!",
  },
  {
    id: 3,
    profile: Emma,
    name: "Emma Wilson",
    designation: "Wedding Celebrant",
    rating: 4,
    message:
      "Huge portions for a great price! The food was flavorful, and I loved the family-friendly atmosphere. The only downside was the long wait time, but it was worth it.",
  },
];

export default function GuestExperiences() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="text-center max-w-md mx-auto">
      <div className="flex justify-center">
        <h1 className="bg-[#FFB700] px-4 py-0.5 text-lg font-semibold leading-none">
          Guest Experiences
        </h1>
      </div>
      <h2 className="text-xl font-light text-gray-700 text-center">
        Discover what our guests have to say about their stay at One Dine
      </h2>
      <div className="p-5 border border-gray-300 min-h-[100px]">
        <ReviewCard key={currentIndex} review={reviews[currentIndex]} />
      </div>
      <div className="mt-2.5">
        <button
          onClick={prevReview}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={nextReview}
          className="ml-2.5 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Next
        </button>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {reviews.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-black" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}

const ReviewCard = ({ review }) => {
  return (
    <div className="px-12 space-y-5 py-8 border rounded-xl">
      <div className="flex items-center gap-4">
        <img
          alt={review.name}
          src={review.profile}
          className="size-14 object-cover rounded-full"
        />
        <div className="flex flex-col">
          <h1 className="text-base font-semibold">{review.name}</h1>
          <h2 className="text-sm font-light">{review.designation}</h2>
        </div>
      </div>
      <Ratings stars={review.rating} size={20} />
      <p className="text-sm font-light">{review.message}</p>
    </div>
  );
};

const Ratings = ({ stars = 5, size = 16 }) => {
  const fullStars = Math.floor(stars);
  const hasHalfStar = stars % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  const starsArray = [...Array(fullStars)];
  const emptyStarsArray = Array(emptyStars).fill(0);

  return (
    <div className="flex flex-row gap-1 text-yellow-500">
      {starsArray.map((_, index) => (
        <IoMdStar size={size} key={index} />
      ))}
      {hasHalfStar && <IoMdStarHalf size={size} />}
      {emptyStarsArray.map((_, index) => (
        <IoMdStarOutline size={size} key={index} />
      ))}
    </div>
  );
};
