import React from "react";
import "./SearchBar.css";

function SearchBar({ dark }) {
  return (
    <div>
      <div className={dark ? "dm" : "lm"}>
        <i
          class="bx bx-search-alt-2"
          style={{
            fontSize: "27px",
            paddingLeft: "310px",
            // backgroundColor: "white",
            marginTop: "10px",
            // marginTop: "510px",
          }}
        ></i>
        <d-input type="text" />
      </div>
    </div>
  );
}
export default SearchBar;
