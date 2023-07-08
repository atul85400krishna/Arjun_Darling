import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaUsers,
  FaLaptopCode,
  FaSearch,
  FaMobileAlt,
  FaEnvelope,
  FaLightbulb,
  FaHandsHelping,
  FaPalette,
  FaGlobe,
  FaUserFriends,
  FaChartLine,
  FaMagic,
  FaBullhorn,
  FaCamera,
  FaMapMarkerAlt,
  FaGoogle,
  FaLink,
  FaShoppingBag,
  FaBullseye,
  FaEnvelopeOpenText,
  FaImage,
  FaLocationArrow,
  FaStar,
  FaShopify,
  FaCheckCircle,
} from "react-icons/fa";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <div className="flex flex-col py-32 bg-gradient-to-br from-sky-700 to-blue-500 ">
      <div className="mx-auto">
        <img src="/our services.com.png" alt="" />
      </div>
      <div className="grid gap-6 md:grid-cols-3 p-20 ">
        {/* Talent Management */}
        <div
          className="bg-white rounded-lg shadow-md p-6 "
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaUsers className="text-4xl text-purple-900 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Talent Management</h3>
          <p>
            Through collaborations, PR, and monetization, we help creators build
            the strongest personal brands.
          </p>
        </div>

        {/* Website Designing & Development */}
        <div
          className="bg-white rounded-lg shadow-md p-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaLaptopCode className="text-4xl text-purple-900 mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Website Designing & Development
          </h3>
          <p>
            Expert web design and development services to create a stunning and
            functional online presence for your business.
          </p>
        </div>

        {/* Search Engine Optimization (SEO) */}
        <div
          className="bg-white rounded-lg shadow-md p-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaSearch className="text-4xl text-purple-900 mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Search Engine Optimization (SEO)
          </h3>
          <p>
            Boost your online visibility and drive traffic to your website with
            our proven SEO strategies and tactics.
          </p>
        </div>

        {/* Email Marketing */}
        <div
          className="bg-white rounded-lg shadow-md p-6 md:col-span-3"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaEnvelope className="text-4xl text-purple-900 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Email Marketing</h3>
          <p>
            Stay top-of-mind with your customers and increase sales with our
            effective email marketing campaigns.
          </p>
        </div>

        {/* Mobile Apps Development */}
        <div
          className="bg-white rounded-lg shadow-md p-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaMobileAlt className="text-4xl text-purple-900 mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Mobile Apps Development
          </h3>
          <p>
            Transform your ideas into engaging mobile apps with our expertise in
            app development across various platforms.
          </p>
        </div>

        {/* Customer Relationship Management */}
        <div
          className="bg-white rounded-lg shadow-md p-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaHandsHelping className="text-4xl text-purple-900 mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Customer Relationship Management
          </h3>
          <p>
            Strengthen your customer relationships and enhance business
            efficiency with our CRM solutions tailored to your specific needs.
          </p>
        </div>

        {/* Custom Website Design */}
        <div
          className="bg-white rounded-lg shadow-md p-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaPalette className="text-4xl text-purple-900 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Custom Website Design</h3>
          <p>
            Elevate your online presence and stand out from the competition with
            our personalized and visually stunning Custom Website Design
            services.
          </p>
        </div>

        {/* Social Media Marketing (SMM) */}
        <div
          className="bg-white rounded-lg shadow-md p-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaGlobe className="text-4xl text-purple-900 mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Social Media Marketing (SMM)
          </h3>
          <p>
            Engage and convert your target audience through effective social
            media marketing campaigns that elevate your brand presence.
          </p>
        </div>

        {/* Digital Marketing */}
        <div
          className="bg-white rounded-lg shadow-md p-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaUserFriends className="text-4xl text-purple-900 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
          <p>
            Drive business growth and expand your online reach with our
            comprehensive digital marketing solutions.
          </p>
        </div>

        {/* Experiential Marketing */}
        <div
          className="bg-white rounded-lg shadow-md p-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaChartLine className="text-4xl text-purple-900 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Experiential Marketing</h3>
          <p>
            Connect with your audience on a deeper level and create memorable
            experiences with our experiential marketing strategies.
          </p>
        </div>

        {/* Branding */}
        <div
          className="bg-white rounded-lg shadow-md p-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaMagic className="text-4xl text-purple-900 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Branding</h3>
          <p>
            Establish a strong brand identity and stand out in your market with
            our holistic branding solutions.
          </p>
        </div>

        {/* Strategic & Planning */}
        <div
          className="bg-white rounded-lg shadow-md p-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaBullhorn className="text-4xl text-purple-900 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Strategic & Planning</h3>
          <p>
            Chart a clear path to success with our strategic planning services
            that align your business goals with actionable plans.
          </p>
        </div>

        {/* Creative Media */}
        <div
          className="bg-white rounded-lg shadow-md p-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaCamera className="text-4xl text-purple-900 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Creative Media</h3>
          <p>
            Bring your brand to life with visually stunning and compelling
            creative media solutions tailored to your business needs.
          </p>
        </div>

        {/* Public Relations */}
        <div
          className="bg-white rounded-lg shadow-md p-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaMapMarkerAlt className="text-4xl text-purple-900 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Public Relations</h3>
          <p>
            Build and maintain your brand reputation with our customized PR
            strategies that elevate your brand's voice.
          </p>
        </div>

        {/* Graphic Designing */}
        <div
          className="bg-white rounded-lg shadow-md p-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaGoogle className="text-4xl text-purple-900 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Graphic Designing</h3>
          <p>
            Elevate your brand's visual appeal and communication with our
            creative graphic design services.
          </p>
        </div>

        {/* Start-Ups */}
        <div
          className="bg-white rounded-lg shadow-md p-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaLink className="text-4xl text-purple-900 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Start-Ups</h3>
          <p>
            Unlock your start-up's potential with our customized solutions that
            accelerate growth and drive success.
          </p>
        </div>

        {/* Video Animations */}
        <div
          className="bg-white rounded-lg shadow-md p-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaShoppingBag className="text-4xl text-purple-900 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Video Animations</h3>
          <p>
            Bring your ideas to life and engage your audience with our
            captivating and creative video animation services.
          </p>
        </div>

        {/* Integrated Marketing */}
        <div
          className="bg-white rounded-lg shadow-md p-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaBullseye className="text-4xl text-purple-900 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Integrated Marketing</h3>
          <p>
            Streamline your marketing efforts and increase your brand's impact
            with our holistic and integrated marketing solutions.
          </p>
        </div>

        {/* Lead Generation */}
        <div
          className="bg-white rounded-lg shadow-md p-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaEnvelopeOpenText className="text-4xl text-purple-900 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Lead Generation</h3>
          <p>
            Expand your customer base and drive business growth with our
            customized lead generation strategies that deliver results.
          </p>
        </div>

        {/* Pay-Per-Click */}
        <div
          className="bg-white rounded-lg shadow-md p-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaImage className="text-4xl text-purple-900 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Pay-Per-Click</h3>
          <p>
            Maximize your online visibility and drive high-quality traffic with
            our targeted and ROI-driven Pay-Per-Click campaigns.
          </p>
        </div>

        {/* Online Reputation Management */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <FaLocationArrow className="text-4xl text-purple-900 mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Online Reputation Management
          </h3>
          <p>
            Protect your brand's reputation and boost its online presence with
            our proven online reputation management strategies.
          </p>
        </div>

        {/* Digital Content Creation */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <FaStar className="text-4xl text-purple-900 mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Digital Content Creation
          </h3>
          <p>
            Create engaging, shareable, and SEO-friendly digital content that
            boosts your online presence with our expert content creation
            services.
          </p>
        </div>

        {/* Video Production and Photography */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <FaCamera className="text-4xl text-purple-900 mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Video Production and Photography
          </h3>
          <p>
            Elevate your brand storytelling with high-quality video production
            and photography services that captivate your audience.
          </p>
        </div>

        {/* E-commerce Solutions */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <FaShopify className="text-4xl text-purple-900 mb-4" />
          <h3 className="text-xl font-semibold mb-2">E-commerce Solutions</h3>
          <p>
            Build a robust and user-friendly online store that drives sales and
            enhances customer experience with our e-commerce solutions.
          </p>
        </div>

        {/* Conversion Rate Optimization */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <FaCheckCircle className="text-4xl text-purple-900 mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Conversion Rate Optimization
          </h3>
          <p>
            Optimize your website's performance and increase conversions with
            our data-driven strategies and conversion rate optimization
            techniques.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
