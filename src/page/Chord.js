import React from "react";
import { useLocation } from "react-router-dom";
import "./Chord.css";

export default function Chord() {
  const Location = useLocation();
  const a = Location.params?.song;
  const flieName = "/chord/" + a + ".png";
  return (
    <div className="container-pathchord ">
      <div className="play-music">u</div>
      <div className="chord">
        <img src={flieName} />
      </div>
      <div className="suggest-song">tyur</div>
      {/* <p>{a}</p> */}
    </div>
  );
}
