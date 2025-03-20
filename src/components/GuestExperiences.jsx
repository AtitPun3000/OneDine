import React from "react";

export default function GuestExperiences() {
  return (
    <div className="mx-36 my-10">
      <div className="w-fit relative mx-auto after:bg-[#FFB700] after:content-[''] after:w-full after:h-4 after:opacity-50 after:-translate-y-[10%] after:top-1/2 after:z-[-1] after:px-8 after:absolute">
        <h1 className="text-4xl font-bold text-center px-4">
          Guest Experiences
        </h1>
      </div>
      <h2 className="text-xl font-light text-gray-700 text-center">
        Discover what our guests have to say about their stay at One Dine
      </h2>
      <div className="flex flex-row gap-4 mt-10">
        <div>
          <h1>Sarah Johnson</h1>
          <h2>International Tourist</h2>
          <p>
            Amazing food and great vibes! The burgers were
            <br /> juicy, and the fries were perfectly crispy. The staff
            <br /> was super friendly, and the service was fast.
            <br /> Definitely coming back!
          </p>
        </div>
        <div>
          <h1>Rajesh Patel</h1>
          <h2>Corporate Event Organizer</h2>
          <p>
            Such a charming little spot! The homemade soup
            <br /> was comforting, and the bread was fresh and
            <br /> warm. Perfect place for a relaxing meal. Highly
            <br /> recommend!
          </p>
        </div>
        <div>
          <h1>Emma Wilson</h1>
          <h2>Wedding Celebrant</h2>
          <p>
            Huge portions for a great price! The food was
            <br /> flavorful, and I loved the family-friendly
            <br /> atmosphere. The only downside was the long
            <br /> wait time, but it was worth it!
          </p>
        </div>
      </div>
    </div>
  );
}
