import React from "react";
import { useLocation } from "react-router-dom";
import "./Chord.css";
import { Link } from "react-router-dom";
import Details from "../components/Details";
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
  const songname = ["ถ้าเธอรักฉันจริง", "ไปเถอะเธอ"];

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
        {/* <div
          style={{
            backgroundColor: "pink",
            justifyContent: "center",
            paddingLeft: "50px",
            display: "flex",
            paddingTop: "30px",
            height: "10%",
          }}
        >
      </div> */}
        {/* <div> */}
        <div className="container-pathchord ">
          <div className="container-player">
            <div className="contect-up">
              <div className="s-Or-a">
                <div style={{ marginTop: "15px" }}>
                  <SearchBar />
                </div>
              </div>
              <div className="chord">
                <img className="img-1" src={flieName(a)} />
              </div>
              <div className="suggest-song">
                <div
                  style={{
                    // backgroundColor: "rgb(52, 53, 52)",
                    height: "55vh",
                    width: "18vw",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",

                    borderRadius: "2%",
                  }}
                >
                  {songname.map((v) => {
                    return (
                      <Link
                        className="suggest-song-2"
                        to={{
                          pathname: "/chord",
                          params: { song: v },
                        }}
                      >
                        <img class="img" src={"/img1/" + v + ".jpg"} />
                        <h1 className="nemeMusic">{v}</h1>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="contect-down">
              <div
                style={{
                  backgroundColor: "pink",
                  marginLeft: "40px",
                  height: "80%",
                  width: "20%",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                <img className="img-bum" src={album(a)} />
              </div>
              <div
                style={{
                  // backgroundColor: "black",
                  width: "15%",
                  marginLeft: "25px",
                }}
              >
                <Details />
              </div>
              <div
                style={{
                  // backgroundColor: "blue",
                  marginLeft: "30px",
                  height: "100%",
                  width: "50%",
                }}
              >
                <Player />
              </div>
            </div>
          </div>
          {/* <div className="play-music">
            <div className="container-album">
            </div>
          </div> */}
          {/* <div className="chord">
            <img className="img-1" src={flieName(a)} />
          </div> */}

          {/* <div className="suggest-song">
            <div
              style={{
                backgroundColor: "rgb(52, 53, 52)",
                height: "542px",
                width: "165px",
                display: "flex",
                flexDirection: "column",
                marginRight: "50px",
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
                  >
                    <img class="img" src={"/img1/" + v + ".jpg"} />
                    <h1 className="nemeMusic">{v}</h1>
                  </Link>
                );
              })}
            </div>
          </div> */}
        </div>
        <div
          className="foot"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <img className="img-me" src="/img1/me1.jpg" />
          <div
            style={{
              // backgroundColor: "blue",
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
            }}
          >
            <h3 style={{ paddingLeft: "12px" }}>Nakamol Saeheng</h3>
            <div
              style={{
                height: "50px",
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
    </div>
  );
}
