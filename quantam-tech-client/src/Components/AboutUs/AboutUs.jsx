import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-gradient-to-br from-sky-600 to-blue-300 py-16 md:py-16 ">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center" data-aos="fade-up">
          <img className="" src="/about.com.png" alt="" />
          <p className="text-gray-600 text-start font-semibold md:text-2xl text-xl mt-5 p-3" data-aos="fade-up" data-aos-delay="200">
            Where It All Started
            <br />
            Conceptualized by Quantum in the year 2018 in Mumbai, India. KothariTech has been a pioneer and leading comprehensive website development & online marketing service provider in the global arena. The company has taken a major leap to become a 360° online service provider, encompassing a wide gamut of services, including Web Development, E-commerce Websites, Digital Marketing, Custom Portals & Mobile Apps Development.
          </p>
        </div>
        <div className="mt-12">
          <h3 className="text-xl md:text-5xl font-bold text-gray-700 mb-10" data-aos="fade-up">Why Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="200">
              <img src="/creative service.com.png" alt="" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Creative Services</h4>
              <p className="text-gray-600 text-start">
                We offer a range of creative services to help you stand out, including website design, branding, and graphic design.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="400">
              <img src="/team .com.png" alt="" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Experienced Team Members</h4>
              <p className="text-gray-600 text-start">
                Our team consists of experienced professionals who are dedicated to delivering high-quality results and exceptional customer service.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="600">
              <img src="/digitalbus.com.png" alt="" />
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Digital Business Development</h4>
              <p className="text-gray-600 text-start">
                We specialize in digital business development strategies and solutions to help your business thrive in the online world.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-xl md:text-5xl font-bold text-gray-700 mb-10" data-aos="fade-up">Our Vision</h3>
          <p className="text-gray-600 text-start font-semibold md:text-2xl text-xl mt-5 p-3" data-aos="fade-up" data-aos-delay="200">
            Our vision is to expand our services and face real-world challenges through our passion and commitment. It is our passion for and commitment to our work that allows us to become a better company for ourselves, our clients, our community, and the world.
          </p>
        </div>
        <div className="mt-12">
          <h3 className="text-xl md:text-5xl font-bold text-gray-700 mb-10" data-aos="fade-up">Our Mission</h3>
          <p className="text-gray-600 text-start font-semibold md:text-2xl text-xl mt-5 p-3" data-aos="fade-up" data-aos-delay="200">
            Our mission is to understand the client's requirements, provide innovative solutions, and ensure to clear their queries in the best possible manner to move ahead in the right direction. We strive to deliver exceptional results that exceed expectations and contribute to the success of our clients' businesses.
          </p>
        </div>
        <div className="mt-12">
          <h3 className="text-xl md:text-5xl font-bold text-gray-700 mb-10" data-aos="fade-up">Our Motto</h3>
          <p className="text-gray-600 text-start font-semibold md:text-2xl text-xl mt-5 p-3" data-aos="fade-up" data-aos-delay="200">
            Our motto is "When your client makes business, you make business." We believe that by helping our clients achieve their goals and grow their businesses, we create mutual success and long-term partnerships. We are dedicated to providing excellent customer service and fostering strong relationships based on trust, reliability, and results.
          </p>
        </div>
        <div className="mt-12">
          <h3 className="text-xl md:text-5xl font-bold text-gray-700 mb-10" data-aos="fade-up">Contact Us</h3>
          <p className="text-gray-600 text-start font-semibold md:text-2xl text-xl mt-5 p-3" data-aos="fade-up" data-aos-delay="200">
            If you have any inquiries or would like to discuss your project, please feel free to contact us.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4" data-aos="fade-up" data-aos-delay="400">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
