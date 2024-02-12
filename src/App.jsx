// import "./App.css";
import "./Style.scss";
import Navbar from "./components/Navbar";
import LeftBar from "./components/LeftBar";
import Posts from "./components/Posts";
import RightBar from "./components/RightBar";
import Post from "./components/Post";

function App() {
  return (
    <>
      <div className="main-navbar">
        <Navbar></Navbar>
      </div>

      <div className="app-page">
        <div className="left-bar">
          <LeftBar></LeftBar>
        </div>
        <div className="main-posts">
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </div>
        <div className="right-bar">
          <RightBar></RightBar>
        </div>
      </div>
    </>
  );
}

export default App;
