import React, { useEffect, useState } from "react";
import { FaAlignJustify, FaRegWindowClose } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import { NavLink, useLocation } from "react-router-dom";

const Navigationbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuAnimation = useSpring({
    width: isMenuOpen ? "85%" : "0%",
    opacity: isMenuOpen ? 1 : 0,
  });

  const [activeNavItem, setActiveNavItem] = useState("");
// Closeing  the menu when a navigation item is clickef
  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
    closeMenu(); 
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setActiveNavItem(location.pathname.substring(1));
  }, [location]);

  return (
    <nav
      className={`w-full p-4 fixed z-10 flex justify-between bg-blue-950 bg-opacity-40 ${
        isScrolled ? "hidden" : ""
      }`}
    >
      {/* Logo */}
      <div
        className={`flex items-center md:ms-32 ms-0 ${
          isScrolled ? "hidden" : ""
        }`}
      >
        <img
          className="w-10 md:w-20 mr-2 rounded-full border-2 border-gray-200"
          src="/logo.png"
          alt="Logo"
        />
        <span className="font-bold text-xl md:text-4xl md:ms-5 text-white">
          QUANTUM TECH
        </span>
      </div>

      {/* Hamburger Button */}
      <div className={`flex md:hidden ${isScrolled ? "hidden" : ""}`}>
        <button
          type="button"
          className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
          onClick={toggleMenu}
        >
          <FaAlignJustify className="me-7 text-2xl text-white" />
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <animated.div
        className="md:hidden absolute top-0 left-0 h-screen w-3/4 bg-blue-800 py-4 px-8"
        style={menuAnimation}
      >
        <div className="flex justify-end mb-4">
          <img
            className="h-8 w-8 rounded-full hidden"
            src="logo.png"
            alt="Logo"
          />
          <button
            type="button"
            className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
            onClick={toggleMenu}
          >
            <FaRegWindowClose className="text-3xl text-white" />
          </button>
        </div>
        <div className="flex flex-col justify-start items-start">
          <NavLink
            exact
            to="/"
            activeClassName="text-gray-500 font-bold"
            className="block mt-4 text-white font-semibold hover:text-gray-300"
            onClick={() => handleNavItemClick("home")}
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/about"
            activeClassName="text-gray-500"
            className="block mt-4 text-white font-semibold hover:text-gray-300"
            onClick={() => handleNavItemClick("about")}
          >
            About Us
          </NavLink>
          <NavLink
            to="/services"
            activeClassName="text-gray-500"
            className="block mt-4 text-white font-semibold hover:text-gray-300"
            onClick={() => handleNavItemClick("services")}
          >
            Services
          </NavLink>
          <NavLink
            to="/clients"
            activeClassName="text-gray-500"
            className="block mt-4 text-white font-semibold hover:text-gray-300"
            onClick={() => handleNavItemClick("clients")}
          >
            Clients
          </NavLink>
          <NavLink
            to="/careers"
            activeClassName="text-gray-500"
            className="block mt-4 text-white font-semibold hover:text-gray-300"
            onClick={() => handleNavItemClick("careers")}
          >
            Careers
          </NavLink>
          <NavLink
            to="/blogs"
            activeClassName="text-gray-500"
            className="block mt-4 text-white font-semibold hover:text-gray-300"
            onClick={() => handleNavItemClick("blogs")}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="text-gray-500"
            className="block mt-4 text-white font-semibold hover:text-gray-300"
            onClick={() => handleNavItemClick("contact")}
          >
            Contact Us
          </NavLink>
        </div>
      </animated.div>

      {/* Desktop Navigation Items */}
      <div className="hidden md:flex md:items-center md:justify-end w-full md:w-auto mt-4 md:mt-0 font-semibold me-6">
        <NavLink
          exact
          to="/"
          activeClassName="text-purple-900 font-bold text-xl"
          className={`block md:inline-block mt-4 md:mt-0 mr-4 text-white hover:text-gray-700 me-6 ${
            activeNavItem === "home" ? "text-purple-900 font-bold text-xl" : ""
          }`}
          onClick={() => handleNavItemClick("home")}
        >
          Home
        </NavLink>
        <NavLink
          exact
          to="/about"
          activeClassName="text-purple-900 font-bold text-xl"
          className={`block md:inline-block mt-4 md:mt-0 mr-4 text-white hover:text-gray-700 me-6 ${
            activeNavItem === "about" ? "text-purple-900 font-bold text-xl" : ""
          }`}
          onClick={() => handleNavItemClick("about")}
        >
          About Us
        </NavLink>
        <NavLink
          to="/services"
          activeClassName="text-purple-900 font-bold text-xl"
          className={`block md:inline-block mt-4 md:mt-0 mr-4 text-white hover:text-gray-700 me-6 ${
            activeNavItem === "services"
              ? "text-purple-900 font-bold text-xl"
              : ""
          }`}
          onClick={() => handleNavItemClick("services")}
        >
          Services
        </NavLink>
        <NavLink
          to="/clients"
          activeClassName="text-purple-900 font-bold text-xl"
          className={`block md:inline-block mt-4 md:mt-0 mr-4 text-white hover:text-gray-700 me-6 ${
            activeNavItem === "clients"
              ? "text-purple-900 font-bold text-xl"
              : ""
          }`}
          onClick={() => handleNavItemClick("clients")}
        >
          Clients
        </NavLink>
        <NavLink
          to="/careers"
          activeClassName="text-purple-900 font-bold text-xl"
          className={`block md:inline-block mt-4 md:mt-0 mr-4 text-white hover:text-gray-700 me-6 ${
            activeNavItem === "careers"
              ? "text-purple-900 font-bold text-xl"
              : ""
          }`}
          onClick={() => handleNavItemClick("careers")}
        >
          Careers
        </NavLink>
        <NavLink
          to="/blogs"
          activeClassName="text-purple-900 font-bold text-xl"
          className={`block md:inline-block mt-4 md:mt-0 mr-4 text-white hover:text-gray-700 me-6 ${
            activeNavItem === "blogs" ? "text-purple-900 font-bold text-xl" : ""
          }`}
          onClick={() => handleNavItemClick("blogs")}
        >
          Blogs
        </NavLink>
        <NavLink
          to="/contact"
          activeClassName="text-purple-900 font-bold text-xl"
          className={`block md:inline-block mt-4 md:mt-0 text-white hover:text-gray-700 ${
            activeNavItem === "contact"
              ? "text-purple-900 font-bold text-xl"
              : ""
          }`}
          onClick={() => handleNavItemClick("contact")}
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigationbar;
