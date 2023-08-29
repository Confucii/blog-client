import "./styles/Layout.css";
import Header from "./Header/Header";
import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="Main">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
