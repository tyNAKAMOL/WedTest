import React from "react";
import { useLocation } from "react-router-dom";
import "./Chord.css";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Player from "../components/Player";

export default function Chord() {
  const Location = useLocation();
  const a = Location.params?.song;
  // const b = Location.params?.pix;
  function flieName(x) {
    return "/chord/" + x + ".png";
  }
  function album(x) {
    return "/img1/" + x + ".jpg";
  }
  const songname = ["ถ้าเธอรักฉันจริง", "ไปเถอะเธอ", "ข้างกัน"];

  return (
    <div>
      <div className="containerHW">
        <div className="head-menu">
          <Link
            style={{
              textDecoration: "none",
            }}
            to={{
              pathname: "/",
            }}
            className="N"
          >
            KONCOOL
          </Link>
        </div>
        <div
          style={{
            backgroundColor: "pink",
            justifyContent: "center",
            display: "flex",
            paddingTop: "30px",
            height: "10%",
          }}
        >
          <SearchBar />
        </div>
        {/* <div> */}
        <div className="container-pathchord ">
          <div className="play-music">
            <div className="container-album">
              <img className="img-bum" src={album(a)} />
              <p style={{ color: "white" }}>{a} - Three Man Down</p>
              <Player />
            </div>
          </div>
          <div className="chord">
            <img className="img-1" src={flieName(a)} />
          </div>

          <div className="suggest-song">
            <div
              style={{
                // backgroundColor: "orange",
                height: "100vh",
                paddingTop: "50px",
              }}
            >
              {songname.map((v) => {
                return (
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to={{
                      pathname: "/chord",
                      params: { song: v },
                    }}
                    // className="app-boxmusic"
                  >
                    <img class="img" src={"/img1/" + v + ".jpg"} />
                    <h1 className="nemeMusic">{v}</h1>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        {/* <div className="foot">ty</div> */}
      </div>
    </div>
  );
}
