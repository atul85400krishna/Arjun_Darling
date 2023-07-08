import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./BannerCarousel.css";

const BannerCarousel = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="pt-32 pb-32 bg-gradient-to-br from-sky-300 to-blue-200 ">
      <Slider {...settings} className="absolute bottom-0 left-0 right-0 w-full">
        <div className="slider-ite" data-aos="fade-right">
          <div className="card w-60 border-2 p-2 mx-auto bg-white ">
            <img
              className="card-image object-fill bg-white w-20 h-20 mx-auto"
              src="/website-seo-audit.gif"
              alt=""
            />
            <p className="card-title text-blue-700 mt-4">
              Web Search Engine Optimization
            </p>
          </div>
        </div>

        <div className="slider-item" data-aos="fade-right">
          <div className="card w-60 border-2 p-2 mx-auto bg-white ">
            <img
              className="card-image object-scale-down bg-white w-20 h-20 mx-auto"
              src="/web-design.gif"
              alt=""
            />
            <p className="card-title text-blue-700 mt-4">
              Website Design and development
            </p>
          </div>
        </div>

        <div className="slider-item" data-aos="fade-right">
          <div className="card w-60 border-2 p-2 mx-auto bg-white ">
            <img
              className="card-image object-scale-down bg-white w-20 h-20 mx-auto"
              src="/29751-social-media-marketing.gif"
              alt=""
            />
            <p className="card-title text-blue-700 mt-4">
              Digital Social Media Marketing
            </p>
          </div>
        </div>

        <div className="slider-item" data-aos="fade-right">
          <div className="card w-60 border-2 p-2 mx-auto bg-white  ">
            <img
              className="card-image object-scale-down bg-white w-20 h-20 mx-auto"
              src="/90586-graphic-designer.gif"
              alt=""
            />
            <p className="card-title text-blue-700 mt-4">
              Graphic Designing and Branding
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default BannerCarousel;
