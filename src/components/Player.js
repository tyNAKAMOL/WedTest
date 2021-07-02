import React from "react";
import Details from "./Details";
import Control from "./Control";

function Player() {
  return (
    <div className="player">
      <h1>Player Now!</h1>
      <Details />
      <Control />
      <audio className="player_sudio" src="" controls></audio>
    </div>
  );
}
export default Player;
