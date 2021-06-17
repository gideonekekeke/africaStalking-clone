import React from "react";
import logi from "../img/7.png";

function LogoPage() {
  return (
    <div
      style={{ marginTop: "40px", display: "flex", justifyContent: "center" }}
    >
      <div
        style={{
          width: "80%",
          // backgroundColor: "red",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div style={{ width: "40%" }}>
          <img src={logi} style={{ height: "100%", width: "100%" }} />
        </div>
        <div style={{ fontWeight: "bold", fontSize: "30px", color: "#c6cdd1" }}>
          Other solutions using Africa’s Talking
        </div>
      </div>
    </div>
  );
}

export default LogoPage;
