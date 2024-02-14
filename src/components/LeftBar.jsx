import React from "react";
import { FaHome } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { BiConversation } from "react-icons/bi";
import { IoMdWallet } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";

function LeftBar({ color, bgColor }) {
  return (
    <>
      <div
        className="main-left"
        style={{ color: `${color}`, backgroundColor: `${bgColor}` }}
      >
        <div className="top-div">
          <div>
            <span>
              <FaHome></FaHome>
            </span>{" "}
            <h3>Home</h3>
          </div>
          <div>
            <span>
              <MdNotificationsActive></MdNotificationsActive>
            </span>
            <h3> Notifications</h3>
          </div>
          <div>
            <span>
              <FaShoppingBag></FaShoppingBag>
            </span>

            <h3> Shopping</h3>
          </div>
          <div>
            <span>
              <BiConversation></BiConversation>
            </span>
            <h3> Converstations</h3>{" "}
          </div>
          <div>
            <span>
              {" "}
              <IoMdWallet></IoMdWallet>
            </span>
            <h3> Wallet</h3>{" "}
          </div>
          <div>
            <span>
              <MdSubscriptions></MdSubscriptions>
            </span>
            <h3> Subscriptions</h3>{" "}
          </div>
          <div>
            <span>
              <CgProfile></CgProfile>
            </span>
            <h3>Profile</h3>
          </div>
        </div>
        <div className="bottom-div">
          <div>
            <span>
              <MdLogout></MdLogout>
            </span>
            <h3>Log out</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftBar;
