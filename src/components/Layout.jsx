import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ConnectWalletModal from "./Widget/ConnectWalletModal";

function Layout() {
  return (
    <div>
      <ConnectWalletModal />
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
