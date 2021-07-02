import React from "react";
import { useLocation } from "react-router-dom";

function Details() {
  const Location = useLocation();
  const songName = Location.params?.song;
  return (
    <div className="details">
      <div className="de-img">
        <img src="" />
      </div>
      <h3>{songName}</h3>
      <h3>Three Man Down</h3>
    </div>
  );
}
export default Details;
