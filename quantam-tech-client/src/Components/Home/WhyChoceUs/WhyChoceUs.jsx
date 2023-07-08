import React from "react";
import { FaClock, FaUserFriends, FaSmile, FaTasks } from "react-icons/fa";
import CountUp from "react-countup";

const WhyChooseUs = () => {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-blue-600 py-8 px-6 shadow-lg pb-10 pt-16">
      <div className="max-w-md mx-auto">
        <h2 className=" font-serif text-5xl font-bold text-white mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center flex-col mb-4">
            <div className="mr-4">
              <FaClock className="text-blue-500 text-4xl mb-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                <CountUp end={4} duration={6} />+ Years of Service
              </h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center flex-col mb-4">
            <div className="">
              <FaUserFriends className="text-blue-500 text-4xl mb-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                <CountUp end={22} duration={5} />+ Professionals
              </h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center flex-col mb-4">
            <div className="">
              <FaSmile className="text-blue-500 text-4xl mb-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                <CountUp end={300} duration={5} />+ Satisfied Clients
              </h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center flex-col mb-4">
            <div className="mb">
              <FaTasks className="text-blue-500 text-4xl mb-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                <CountUp end={450} duration={8} />+ Projects Completed
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
