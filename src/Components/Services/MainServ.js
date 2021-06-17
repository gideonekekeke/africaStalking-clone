import React from "react";
import "./sev.css";

import pics from "../img/2.png";
import pics1 from "../img/4.png";
import pic2 from "../img/5.png";
import Serv from "./Serv";

function MainServ() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "poppins",
          fontSize: "bold",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "100px",
          // backgroundColor: "red",
        }}
      >
        <div style={{ fontSize: "30px" }}>Services</div>

        <div
          className="products_text"
          style={{ width: "70%", textAlign: "center", fontSize: "15px" }}
        >
          We provide a variety of communication and payments API products that
          are everything you need to build high impact mobile engagement
          solutions. Our platform allows to you work on building superior
          customer engagement experiences without the complexity that comes from
          working directly with mobile operators.
        </div>
      </div>
      <div className="card_background">
        <Serv />
      </div>
    </>
  );
}

export default MainServ;
