import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const DesingAndBuild = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-gradient-to-br from-sky-300 via-cyan-200 to-blue-200">
      <div className="md:flex flex-col sm:flex-row p-16 w-full max-w-screen-xl mx-auto items-center justify-between">
        <div>
          <div className="text-start" data-aos="fade-right">
            <p className="font-semibold text-lg md:text-xl  mt-5 mb-5 text-black ">
              LET’S DESIGN & BUILD YOUR WEBSITE
            </p>
            <h1 className="font-lg font-thin text-2xl  md:text-4xl text-black ">
              More Than Ever Before, Your Website Matters<br />Business.
            </h1>
            <p className=" mt-5 mb-10 text-black ">
              We are passionate about our work. Our designers stay ahead of the
              curve to provide <br /> engaging and user-friendly website designs
              to make your business stand out.
            </p>
            <button className="btn btn-wide rounded-full bg-white text-blue-800 ">
              Contact Us{" "}
            </button>
          </div>
        </div>
        <div data-aos="fade-left">
          <img
            className="w-96 mt-10 md:mt-0"
            src="/pngwing.com.png"
            alt=""
          />
        </div>
      </div>
      <div className="md:flex flex-col sm:flex-row p-16 w-full max-w-screen-xl mx-auto items-center justify-between">
        <div data-aos="fade-right">
          <img
            className="w-96 mt-10 md:mt-0"
            src="/seo.com.png"
            alt=""
          />
        </div>
        <div>
          <div className="text-end" data-aos="fade-left">
            <p className="font-semibold text-lg md:text-xl  mt-5 mb-5 text-black ">
              GROW TRAFFIC & INCREASE REVENUE
            </p>
            <h1 className="font-lg font-thin text-2xl  md:text-4xl text-black ">
              Appear On The Front Page Of Google!
            </h1>
            <p className=" mt-5 mb-10 text-black ">
              We offer professional SEO services that help websites increase
              their organic <br /> search score drastically in order to compete
              for the highest rankings — even when it <br /> comes to highly
              competitive keywords.
            </p>
            <button className="btn btn-wide rounded-full bg-white text-blue-800 ">
              Contact Us{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="md:flex flex-col sm:flex-row p-16 w-full max-w-screen-xl mx-auto items-center justify-between">
        <div>
          <div className="text-start" data-aos="fade-right">
            <p className="font-semibold text-lg md:text-xl  mt-5 mb-5 text-black ">
              DELIVER PREDICTABLE AND MEASURABLE RESULTS EVERY TIME
            </p>
            <h1 className="font-lg font-thin text-2xl  md:text-4xl text-black ">
              DIGITAL MARKETING
            </h1>
            <p className=" mt-5 mb-10 text-black ">
              A digital marketing Company with outstanding credentials that
              specialize <br /> in helping businesses reach their target audience
              online
            </p>
            <button className="btn btn-wide rounded-full bg-white text-blue-800 ">
              Contact Us{" "}
            </button>
          </div>
        </div>
        <div data-aos="fade-left">
          <img
            className="w-96 mt-10 md:mt-0"
            src="/digital.com.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DesingAndBuild;
