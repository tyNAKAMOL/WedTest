import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Details from "./Details";
import Control from "./Control";
import song from "./song/ไปเถอะเธอ.mp3";
import "./Player.css";
import "./Thumb.css";

function Player() {
  const Location = useLocation();
  const s = Location.params?.song;
  function song1(x) {
    return "./song/" + x + ".mp3";
  }

  const audioRef = useRef();

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const [percentage, setPercentge] = useState(0);
  const [position, setPosition] = useState(0);
  const [margingLeft, setMargingLeft] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  const rangeRef = useRef();
  const thumbRef = useRef();

  useEffect(() => {
    const rangeWidth = rangeRef.current.getBoundingClientRect().width;
    const thumbWidth = -2;
    const centerThumb = (thumbWidth / 100) * percentage * -1;

    const centerProgressBar =
      thumbWidth +
      (rangeWidth / 100) * percentage -
      (thumbWidth / 100) * percentage;
    setPosition(percentage);
    setMargingLeft(centerThumb);
    setProgressBarWidth(centerProgressBar);
  }, [percentage]);

  const onChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = (audio.duration / 100) * e.target.value;
    setPercentge(e.target.value);
  };

  const play = () => {
    const audio = audioRef.current;
    audio.volume = 0.1;

    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    }

    if (isPlaying) {
      setIsPlaying(false);
      audio.pause();
    }
  };

  const getCurrDuration = (e) => {
    const percent = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const time = e.currentTarget.currentTime;

    setPercentge(+percent);
    setCurrentTime(time.toFixed(2));
  };

  return (
    <div className="player">
      <div>{song}</div>
      <Details />
      <Control
        play={play}
        isPlaying={isPlaying}
        duration={duration}
        currentTime={currentTime}
      />

      <div className="slider-container">
        <div
          className="progress-bar-cover"
          style={{
            width: `${progressBarWidth}px`,
          }}
        ></div>
        <div
          className="thumb"
          ref={thumbRef}
          style={{
            left: `${position}%`,
            marginLeft: `${margingLeft}px`,
          }}
        ></div>
        <input
          type="range"
          value={position}
          ref={rangeRef}
          step="0.01"
          className="range"
          onChange={onChange}
        />
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2));
        }}
        src={song1(s)}
      ></audio>
    </div>
  );
}
export default Player;
