import React from "react";
import logo from "../../assests/logo.png";
import SearchIcon from "../../assests/Search icon.jpg";
import navbar from "./Navbar.module.css";
import Button from "../Button";

const Navbar = () => {
  return (
    <div className={navbar.navBar}>
      <img className={navbar.img} src={logo} alt="logo" />
      <div className={navbar.searchContainer}>
        <input
          className={navbar.searchInput}
          placeholder="Search a album of your choice"
        />
        <button className={navbar.searchBtn}>
          <img src={SearchIcon} alt="searchIcon" />
        </button>
      </div>
      <Button className={navbar.button}>Give FeedBack</Button>
    </div>
  );
};

export default Navbar;
