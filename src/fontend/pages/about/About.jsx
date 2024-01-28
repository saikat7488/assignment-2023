import React, { useEffect } from "react";
import AboutUs from "../../components/aboutUs/AboutUs";
import ImageGallery from "../../components/imageGallery/ImageGallery";
import Story from "../../components/story/Story";
import Mission from "../../components/missionGoal/Mission";
import FAQSection from "../../components/faq/FAQSection";

export default function About() {
  useEffect(() => {
    document.title = 'WorldCoder | About';
  }, []);
  return (
    <>
      <AboutUs />
      <Story />
      <Mission />
      <ImageGallery />
      <FAQSection />
    </>
  );
}
