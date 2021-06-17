import React from "react";
import me from "../img/9.svg";

function Map() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
    >
      <div
        style={{
          width: "80%",

          alignItems: "center",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <div style={{ width: "40%" }}>
          <img src={me} style={{ height: "100%", width: "100%" }} />
        </div>
        <div>
          <div
            style={{
              height: "50px",
              width: "",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              fontSize: "20px",
              boxShadow: "3px 3px 10px -3px gray",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            30 + Mobile Developers
          </div>
          <div
            style={{
              height: "50px",
              width: "",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              fontSize: "20px",
              boxShadow: "3px 3px 10px -3px gray",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            40,000 + Web Developers
          </div>
          <div
            style={{
              height: "50px",
              width: "",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              fontSize: "20px",
              boxShadow: "3px 3px 10px -3px gray",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          >
            300 + Ui/Ux
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
