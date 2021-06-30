import React from "react";
import { useLocation } from "react-router-dom";
import "./Chord.css";

export default function Chord() {
  const Location = useLocation();
  const a = Location.params?.song;
  const flieName = "/chord/" + a + ".png";
  const album = "/img1/" + a + ".jpg";
  return (
    <div className="container-pathchord ">
      <div className="play-music">
        <div className="container-album">
          <img className="img-bum" src={album} />
          <p>{a} - Three Man Down</p>
        </div>
      </div>

      <div className="chord">
        <img className="img-1" src={flieName} />
      </div>
      <div className="suggest-song">tyur</div>
      {/* <p>{a}</p> */}
    </div>
  );
}
