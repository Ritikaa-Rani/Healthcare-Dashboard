// src/components/Header.jsx
import React from "react";
import "./Header.css";
import { CiSearch } from "react-icons/ci";
import { GoBellFill } from "react-icons/go";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">
          <span>Health</span>care.
        </h1>
      </div>
      <div className="header-center">
        <div className="search-wrapper">
          <span className="search-icon">
            <CiSearch />
          </span>
          <input type="text" className="search-bar" placeholder="Search" />
        </div>
        <span className="notification-icon">
          <GoBellFill />
        </span>
      </div>

      <div className="header-right">
        <div className="user-profile">
          <img
            src="https://img.icons8.com/?size=100&id=23239&format=png&color=000000"
            alt="User Avatar"
            className="avatar"
          />
        </div>
        <button className="add-button">+</button>
      </div>
    </header>
  );
};

export default Header;
