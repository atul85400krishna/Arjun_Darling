import React from "react";
import BannerSection from "./BannerSection";
import BannerCarousel from "./BannerCarousel";
import DesingAndBuild from "./HomePageServicesSection/DesingAndBuild";
import WhyChoceUs from "./WhyChoceUs/WhyChoceUs";
import HappyClients from "./HappyClients/HappyClients";

const Home = () => {
  return (
    <div>
      <BannerSection />
      <BannerCarousel />
      <DesingAndBuild />
      <WhyChoceUs />
      <HappyClients />
    </div>
  );
};

export default Home;
