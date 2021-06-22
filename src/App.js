import React, { useState } from "react";
// css carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "./Carousel";
import "./App.css";
function App() {
  const Name = ["K", "O", "N", "C", "O", "O", "L"];
  function name() {
    return Name.map((key) => {
      return <div className="text">{key}</div>;
    });
  }
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="header-left">
        <div className="d">
          <h1 style={{ paddingLeft: "10px" }}>{name()}</h1>
        </div>
        <div className="logo">
          <i class="bx bxl-facebook-square" style={{ fontSize: "25px" }}></i>
        </div>
        <div className="logo">
          <i class="bx bxl-instagram" style={{ fontSize: "25px" }}></i>
        </div>
        <div className="logo">
          <i class="bx bxl-github" style={{ fontSize: "25px" }}></i>
        </div>
      </div>
      <div className="container">
        <SimpleSlider></SimpleSlider>
      </div>
      <div className="container2">
        <label className="switch">
          <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}

export default App;
