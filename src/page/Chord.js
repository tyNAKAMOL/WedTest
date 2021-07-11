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
              paddingLeft: "20px",
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
            // backgroundColor: "pink",
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
              <Player />
            </div>
          </div>
          <div className="chord">
            <img className="img-1" src={flieName(a)} />
          </div>

          <div className="suggest-song">
            <div
              style={{
                backgroundColor: "rgb(52, 53, 52)",
                height: "555px",
                width: "320px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "5%",
              }}
            >
              {songname.map((v) => {
                return (
                  <Link
                    style={{
                      textDecoration: "none",
                      background:
                        "linear-gradient(135deg, #818596, #80afe5, #4dc1df)",
                      borderRadius: "4%",
                      maxWidth: "135px",
                      maxHeight: "150px",
                      margin: "5px",
                      padding: "10px",
                      position: "relative",
                      textAlign: "center",
                    }}
                    to={{
                      pathname: "/chord",
                      params: { song: v },
                    }}
                    // className="app-boxmusic"
                  >
                    {/* <div
                    style={{
                      backgroundColor: "rgb(36, 36, 36)",
                      width: "100%",
                      height: "100%",
                      marginTop: "50px",
                    }} */}

                    <img class="img" src={"/img1/" + v + ".jpg"} />
                    <h1 className="nemeMusic">{v}</h1>
                  </Link>
                  //{" "}
                );
              })}
            </div>
          </div>
        </div>
        <div
          className="foot"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <img className="img-me" src="/img1/me1.jpg" />
          <h2>Nakamol Saeheng</h2>
          <div
            style={{
              height: "50px",
              // marginTop: "120px",
              // backgroundColor: "white",
            }}
          >
            <i class="bx bxl-facebook-circle"></i>
            <i class="bx bxl-instagram-alt"></i>
            <i class="bx bxl-twitter"></i>
            <i class="bx bxl-github"></i>
            <i class="bx bxl-youtube"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
