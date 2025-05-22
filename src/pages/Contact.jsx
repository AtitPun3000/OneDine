import React from "react";
import FooterPage from "../components/FooterPage";
import ContactUs from "../components/ContactUs";
import TextWithBackground from "../components/ui/TextWithBackground";
import Map from "../assets/map001.png";

export default function Contact() {
  return (
    <div>
      <ContactUs />

      <div className="flex flex-col pb-8 gap-4">
        <TextWithBackground>Visit Us</TextWithBackground>
        <div className="flex justify-center">
          <img src={Map} alt="map" />
        </div>
      </div>

      <FooterPage />
    </div>
  );
}
