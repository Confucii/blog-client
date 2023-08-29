import "./styles/Header.css";
import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="img-container">
        <img className="logo-img" src="/logo.svg" alt="logo" />
      </div>
    </header>
  );
}

export default Header;
