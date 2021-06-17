import React from "react";
import "./uba.css";

import DriveEtaIcon from "@material-ui/icons/DriveEta";
import ExtensionIcon from "@material-ui/icons/Extension";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
// import AttractionsIcon from "@material-ui/icons/Attractions";

function UbaniProject() {
  return (
    <div className="ProductHolder">
      <div
        style={{
          display: "flex",
          width: "60%",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div className="boxHolder">
          <Link
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "white",
            }}
            to="/product"
          >
            <div className="IconHoder">
              <ExtensionIcon />
            </div>
          </Link>
          <h5 style={{ textAlign: "center", width: "200px" }}>RESEARCH</h5>
          <p
            style={{
              fontSize: "10px",
              marginTop: "-20px",
              width: "200px",
              textAlign: "center",
              // background: "red",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="boxHolder">
          <Link
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "white",
            }}
            to="/product"
          >
            <div className="IconHoder">
              <DriveEtaIcon />
            </div>
          </Link>
          <h5>RESEARCH</h5>
          <p
            style={{
              fontSize: "10px",
              marginTop: "-20px",
              width: "80%",
              textAlign: "center",
              width: "200px",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="boxHolder">
          <Link
            style={{
              textDecoration: "none",
              cursor: "pointer",
              color: "white",
            }}
            to="/product"
          >
            <div className="IconHoder">
              <ShoppingCartIcon />
            </div>
          </Link>
          <h5>RESEARCH</h5>
          <p
            style={{
              fontSize: "10px",
              marginTop: "-20px",
              width: "80%",
              textAlign: "center",
              width: "200px",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UbaniProject;
