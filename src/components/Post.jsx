import React from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

function Post() {
  return (
    <div>
      <div className="main-post">
        <div className="top-div">
          <div className="left-div">
            <div className="logo">
              <img
                src="https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="logo img"
              />
            </div>
            <div className="logo-data">
              <h3>City Light</h3>
              <p>amaizing city</p>
            </div>
          </div>
          <div className="right-div">
            <span>
              <SlOptionsVertical />
            </span>
          </div>
        </div>
        <div className="caption">
          <p>Lorem amet consectetur adipisicing elit.</p>
        </div>
        <div className="post-img">
          <div className="img">
            <img
              src="https://images.pexels.com/photos/1721637/pexels-photo-1721637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="post img"
            />
          </div>
          <div className="like-com-share">
            <div>
              <span>
                <FaHeart></FaHeart>
              </span>
              10.2k
            </div>
            <div>
              <span>
                <FaComment></FaComment>
              </span>
              2.8k
            </div>
            <div>
              <span>
                <FaShare></FaShare>
              </span>
              908
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
