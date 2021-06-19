import React from "react";
import "./App.css";
function App() {
  const Name = ["K", "O", "N", "C", "O", "O", "L"];
  const data = [
    { picture: "/img1/อยู่ในสาย.jpg", name: "อยู่ในสาย" },
    { picture: "/img1/ฝนตกไฟม.jpg", name: "ฝนตกไหม" },
    { picture: "/img1/เดาไม่เก่ง.jpg", name: "เดาไม่เก่ง" },
    { picture: "/img1/คุยคนเดียวเก่ง.jpg", name: "คุยคนเดียวเก่ง" },
  ];

  function music() {
    return data.map((key) => {
      return (
        <div className="app-boxmusic">
          <img class="img" src={key.picture} />
          <h1 className="nemeMusic">{key.name}</h1>
        </div>
      );
    });
  }

  function name() {
    return Name.map((key) => {
      return <div className="text">{key}</div>;
    });
  }

  return (
    <div className="bg">
      <div className="header-left">
        <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
          <h1>{name()}</h1>
        </div>
      </div>
      <div className="app-content">
        <div className="app-box">
          <div>{music()}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
