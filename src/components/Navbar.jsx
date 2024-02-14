import React from "react";
import { MdSearch } from "react-icons/md";
import { IoFilter } from "react-icons/io5";
import { BsToggleOff } from "react-icons/bs";
import { BsToggleOn } from "react-icons/bs";
import { GoLinkExternal } from "react-icons/go";

function Navbar({ bgColor, color, toggle, toogleBtn, themeText }) {
  return (
    <>
      <div className="navbar">
        <div
          className="left-nav"
          style={{ color: `${color}`, backgroundColor: `${bgColor}` }}
        >
          <div
            className="theme"
            onClick={toogleBtn}
            style={{ backgroundColor: `${bgColor}` }}
          >
            <p>{themeText} theme</p>
            <span className="theme-icon">
              {toggle ? <BsToggleOff /> : <BsToggleOn />}
            </span>
          </div>
        </div>
        <div
          className="middle-nav"
          style={{ color: `${color}`, backgroundColor: `${bgColor}` }}
        >
          <div className="search">
            <span id="nav-span">
              <MdSearch></MdSearch>
            </span>
            <p> search here</p>
          </div>
          <div className="filter">
            <span id="nav-span">
              <IoFilter />
            </span>
            <p>Filters</p>
          </div>
        </div>
        <div
          className="right-nav"
          style={{ color: `${color}`, backgroundColor: `${bgColor}` }}
        >
          <p>Acces to beta</p>
          <span id="nav-span">
            <GoLinkExternal />
          </span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
