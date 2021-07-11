import React from "react";
import "./control.css";

function Control({ play, isPlaying, duration, currentTime }) {
  function secondsToHms(seconds) {
    if (!seconds) return "00m 00s";

    let duration = seconds;
    let hours = duration / 3600;
    duration = duration % 3600;

    let min = parseInt(duration / 60);
    duration = duration % 60;

    let sec = parseInt(duration);

    if (sec < 10) {
      sec = `0${sec}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }

    if (parseInt(hours, 10) > 0) {
      return `${parseInt(hours, 10)}h ${min}m ${sec}s`;
    } else if (min == 0) {
      return `00m ${sec}s`;
    } else {
      return `${min}m ${sec}s`;
    }
  }
  return (
    <div className="control">
      <div className="control-panel">
        <div className="timer">{secondsToHms(currentTime)}</div>
        <i
          class="bx bx-rewind"
          style={{ fontSize: "30px", paddingTop: "8px" }}
        ></i>
        <div className="B-play">
          <i
            style={{ fontSize: "30px", margin: "8px" }}
            onClick={play}
            className={isPlaying ? "bx bx-pause" : "bx bx-play"}
            play={play}
            isPlaying={isPlaying}
          ></i>
        </div>
        <i
          style={{ fontSize: "30px", paddingTop: "8px" }}
          class="bx bx-fast-forward"
        ></i>
        <div className="timer">{secondsToHms(duration)}</div>
      </div>
    </div>
  );
}
export default Control;
