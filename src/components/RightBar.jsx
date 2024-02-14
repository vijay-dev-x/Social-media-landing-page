import React from "react";

function RightBar({ data2, color, bgColor }) {
  return (
    <>
      <div
        className="rightbar"
        style={{ color: `${color}`, backgroundColor: `${bgColor}` }}
      >
        <div className="main-img">
          <img src={data2.img} alt="" />
          <div className="inside-img">
            <div className="img">
              <img src={data2.authorImg} alt="" />
            </div>
            <div className="inside-text">
              <div className="inner-h3">
                <h3>{data2.authorName}</h3>
              </div>
              <div className="inner-p">
                <p>{data2.authortext}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightBar;
