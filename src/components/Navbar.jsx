import React from "react";
import { MdSearch } from "react-icons/md";
import { IoFilter } from "react-icons/io5";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="left-nav">Theme </div>
        <div className="middle-nav">
          <div className="search">
            <span>
              <MdSearch></MdSearch>
            </span>
            search...
          </div>
          <div className="filter">
            <span>
              <IoFilter />
            </span>
          </div>
        </div>
        <div className="right-nav">become a seller</div>
      </div>
    </div>
  );
}

export default Navbar;
