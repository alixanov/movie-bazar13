import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <img src={logo} alt="" />
        <p>Movies Bazer</p>
      </div>
      <div className="a-links">
        <a href="">Home</a>
        <a href="">Explore</a>
        <a href="">Genre</a>
        <a href="">News</a>
        <a href="">Movies</a>
        <a href="">TV Showes</a>
      </div>
    </nav>
  );
};

export default Navbar;
