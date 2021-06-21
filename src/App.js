import React from "react";
import "./App.css";
function App() {
  const Name = ["K", "O", "N", "C", "O", "O", "L"];
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
