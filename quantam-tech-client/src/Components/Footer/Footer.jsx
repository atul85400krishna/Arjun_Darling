import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faFacebook,
  faLinkedin,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="border-t-2 border-black flex justify-center flex-col items-center  ">
      <div className="w-full">
        <footer className="footer p-10 bg-gradient-to-r from-blue-600 to-blue-800 text-base-content">
          <div className="flex flex-col md:flex-row items-center logo">
            <img
              className="rounded-full w-20 mb-4 md:mb-0 md:mr-8"
              src="/logo.png"
              alt=""
            />
            <div>
              <p className="text-2xl font-semibold ">
                QUANTUM TECH.
                <br />
                <span className="text-lg text-gray-200">
                  Web design and Development
                </span>
              </p>
              <div className="flex justify-center mt-5">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-3 hover:text-blue-500 transition-colors duration-300"
                >
                  <FontAwesomeIcon
                    className="text-pink-500"
                    icon={faInstagram}
                    size="2x"
                  />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-3 hover:text-blue-500 transition-colors duration-300"
                >
                  <FontAwesomeIcon
                    className="text-blue-400"
                    icon={faTwitter}
                    size="2x"
                  />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-3 hover:text-blue-500 transition-colors duration-300"
                >
                  <FontAwesomeIcon
                    className="text-blue-600"
                    icon={faFacebook}
                    size="2x"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-3 hover:text-blue-500 transition-colors duration-300"
                >
                  <FontAwesomeIcon
                    className="text-blue-700"
                    icon={faLinkedin}
                    size="2x"
                  />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-3 hover:text-blue-500 transition-colors duration-300"
                >
                  <FontAwesomeIcon
                    className="text-red-700"
                    icon={faYoutube}
                    size="2x"
                  />
                </a>
                <a
                  href="https://www.pinterest.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors duration-300"
                >
                  <FontAwesomeIcon
                    className="text-red-700"
                    icon={faPinterest}
                    size="2x"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className=" text-gray-200 font-semibold">
            <span className="text-2xl font-semibold text-black">Services</span>
            <a className="link link-hover">Website Developments</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Mobile Application</a>
            {/* <a className="link link-hover"></a> */}
          </div>
          <div className=" text-gray-200 font-semibold">
            <span className="text-2xl font-semibold text-black">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div className=" text-gray-200 font-semibold">
            <span className="text-2xl font-semibold text-black">
              Contact us
            </span>

            <p className="link link-hover">Phone: +91 7979053308</p>
            <p className="link link-hover">Phone: +91 8788328856</p>

            <p className="link link-hover">Email: quantumtech1995@gmail.com</p>
            <p className="link link-hover">
              Address: India(Remote)
            </p>
          </div>
        </footer>
      </div>
      <div>
        <p className="font-bold text-gray-500">
          ©2023 – 2023 <span className="text-blue-500">QUANTUM TECH</span> All
          Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
