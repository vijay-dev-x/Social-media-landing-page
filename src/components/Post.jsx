import React from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

function Post({ data, color, bgColor }) {
  return (
    <div>
      <div
        className="main-post"
        style={{ color: `${color}`, backgroundColor: `${bgColor}` }}
      >
        <div className="top-div">
          <div className="left-div">
            <div className="logo">
              <img src={data.pImg} alt="logo img" />
            </div>
            <div className="logo-data">
              <h3>{data.userName}</h3>
              <p>{data.title}</p>
            </div>
          </div>
          <div className="right-div">
            <span>
              <SlOptionsVertical />
            </span>
          </div>
        </div>
        <div className="caption">
          <p>{data.description}</p>
        </div>
        <div className="post-img">
          <div className="img">
            <img src={data.mImg} alt="post img" />
          </div>
          <div className="like-com-share">
            <div>
              <span className="like-post">
                <FaHeart></FaHeart>
              </span>
              {data.like}k
            </div>
            <div>
              <span>
                <FaComment></FaComment>
              </span>
              {data.comment}k
            </div>
            <div>
              <span>
                <FaShare></FaShare>
              </span>
              {data.share}k
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
