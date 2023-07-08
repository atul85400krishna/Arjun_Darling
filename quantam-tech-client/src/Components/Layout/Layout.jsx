import React from "react";
import Navigationbar from "../Navigationbar/Navigationbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navigationbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
