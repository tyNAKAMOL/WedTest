import React, { useState } from "react";
// css carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "./Carousel";
import "./App.css";
import SearchBar from "./components/SearchBar";
// import { Link } from "react-router-dom";

function Main() {
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
          <h1>{name()}</h1>
        </div>
        <div className="logo">
          <a href="https://www.facebook.com/nakamol.saeheng/">
            <i class="bx bxl-facebook-square" style={{ fontSize: "25px" }}></i>
          </a>
        </div>
        <div className="logo">
          <a href="https://www.instagram.com/ty_nkm.sh/">
            <i class="bx bxl-instagram" style={{ fontSize: "25px" }}></i>
          </a>
        </div>
        <div className="logo">
          <a href="https://github.com/tyNAKAMOL">
            <i class="bx bxl-github" style={{ fontSize: "25px" }}></i>
          </a>
        </div>
        <div className="logo">
          <i class="bx bx-grid" style={{ fontSize: "25px" }}></i>
        </div>
        <div className="logo">
          <i class="bx bx-ghost" style={{ fontSize: "25px" }}></i>
        </div>
      </div>
      <div className="container">
        <div
          style={{
            // backgroundColor: "orange",
            display: "flex",
            paddingTop: "40px",
            justifyContent: "center",
            height: "8%",
          }}
        >
          <div className={darkMode ? "logo-search-light" : "logo-search-dark"}>
            <i class="bx bx-search-alt-2"></i>
          </div>
          <SearchBar dark={darkMode} />
        </div>
        <div
          style={{
            // backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            paddingLeft: "45px",
            paddingTop: "20px",
          }}
        >
          {/* <button>
            <Link to="/chord">Yp!</Link>
          </button> */}
          <img className="img-TMD" src="/img1/TMD3.png" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
            // backgroundColor: "green",
            alignItems: "center",
          }}
        >
          <div
            style={{
              // backgroundColor: "blue",
              maxWidth: "780px",
            }}
          >
            <SimpleSlider></SimpleSlider>
          </div>
        </div>
      </div>
      <div className="container2">
        <div style={{ marginTop: "35px" }}>
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider"></span>
          </label>
        </div>
      </div>
      <div className="Incon-s-m">
        <div style={{ marginTop: "35px" }}>
          <div className={darkMode ? "icon-light" : "icon-dark"}>
            <i class={darkMode ? "bx bxs-sun" : "bx bxs-moon"}></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
