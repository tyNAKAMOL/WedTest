import React from "react";
import { useLocation } from "react-router-dom";
import "./Player.css";

function Details() {
  const Location = useLocation();
  const songName = Location.params?.song;
  return (
    <div className="box-xname">
      <div className="nsong">
        <h2 style={{ fontSize: "24px" }}>{songName}</h2>
      </div>
      <div className="nsinger">Three Man Down</div>
    </div>
  );
}
export default Details;
