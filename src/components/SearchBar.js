import React, { useState } from "react";
import "./SearchBar.css";
import JSONDATA from "./Data.json";
import { Link } from "react-router-dom";

function SearchBar() {
  const [searchText, setSearchText] = useState("");
  // const [textEnter, settextEnter] = useState("");
  const clearInput = () => {
    setSearchText("");
  };
  return (
    <div>
      {/* <div className={dark ? "dm" : "lm"}> */}
      {/* <i
          class="bx bx-search-alt-2"
          style={{
            fontSize: "27px",
            paddingLeft: "350px",
            // backgroundColor: "white",
            paddingTop: "50px",
            // marginTop: "510px",
          }}
        ></i> */}
      {/* </div> */}
      <input
        type="text"
        placeholder="Search..."
        autoComplete="off"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
          // settextEnter(searchText);
        }}
      />
      {JSONDATA.filter((val) => {
        if (searchText == "") {
          return;
        } else if (val.name.toLowerCase().includes(searchText.toLowerCase())) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div key={key}>
            <Link
              onClick={clearInput}
              style={{
                textDecoration: "none",
              }}
              to={{
                pathname: "/chord",
                params: { song: val.name },
              }}
            >
              <p className="dropSearch">{val.name}</p>{" "}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
export default SearchBar;
