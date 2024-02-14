import "./App.css";
// import "./Style.scss";
import { useState } from "react";

import Navbar from "./components/Navbar";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import Post from "./components/Post";
import { Data, Data2 } from "./components/Data";

function App() {
  const [bgColor, setBgColor] = useState("#272829");
  const [color, setColor] = useState("Light");
  const [toggle, setToggle] = useState(true);
  const [themeText, setThemeText] = useState("Light");

  const toogleBtn = () => {
    setToggle(!toggle);
    if (toggle) {
      setBgColor("#C4DFDF");
      setColor("black");
      document.querySelector("body").style.backgroundColor = "#D2E9E9";
      setThemeText("Dark");
    } else {
      setBgColor("#272829");
      setColor("white");
      document.querySelector("body").style.backgroundColor = "black";
      setThemeText("Light");
    }
  };
  return (
    <>
      <Navbar
        bgColor={bgColor}
        color={color}
        toggle={toggle}
        toogleBtn={toogleBtn}
        themeText={themeText}
      ></Navbar>

      {/* <div className="main-navbar">
      </div> */}

      <div className="app-page">
        <div className="left-bar-app">
          <LeftBar bgColor={bgColor} color={color}></LeftBar>
        </div>
        <div className="main-posts-app">
          {Data.map((d) => {
            return (
              <Post key={d.id} data={d} color={color} bgColor={bgColor}></Post>
            );
          })}
        </div>
        <div className="right-bar-app">
          {Data2.map((d2) => (
            <RightBar
              bgColor={bgColor}
              color={color}
              key={d2.id}
              data2={d2}
            ></RightBar>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
