import React from "react";
import foot from "../Components/img/11.png";
import foot1 from "../Components/img/12.png";
import foot2 from "../Components/img/13.png";
import foot3 from "../Components/img/14.png";

function Footer() {
  return (
    <div
      style={{
        height: "1000%",
        backgroundColor: "#DE6316",
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "80%",
          // background: "red",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          color: "white",
          fontFamily: "poppins",
          flexWrap: " wrap",
          height: "80%",
          margin: "10px",
        }}
      >
        <div style={{ margin: "10px" }}>
          <div style={{ fontWeight: "bold" }}>Home</div>
          <br />
          <div>How it works</div>
          <div>Testimonial</div>
          <div>Investors</div>
          <div>Terms of Service</div>
        </div>
        <div style={{ margin: "10px" }}>
          <div style={{ fontWeight: "bold" }}>About</div>
          <br />
          <div>How it works</div>
          <div>Testimonial</div>
          <div>Investors</div>
          <div>Terms of Service</div>
        </div>
        <div style={{ margin: "10px" }}>
          <div style={{ fontWeight: "bold" }}>Contact</div>
          <br />
          <div>How it works</div>
          <div>Testimonial</div>
          <div>Investors</div>
          <div>Terms of Service</div>
        </div>
        <div style={{ margin: "10px" }}>
          <div style={{ fontWeight: "bold" }}>Services</div>
          <br />
          <div>How it works</div>
          <div>Testimonial</div>
          <div>Investors</div>
          <div>Terms of Service</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          width: "80%",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-around",
          margin: "20px",
        }}
      >
        <div style={{ height: "40px", width: "100px" }}>
          <img src={foot} style={{ height: "100%", width: "100%" }} />
        </div>
        <div>
          {" "}
          Developed by Gideon 🚀 | © {new Date().getFullYear()} All rights
          reserved
        </div>
        <div
          style={{
            width: "10%",
            display: "flex",
            justifyContent: "space-beween",

            alignItems: "center",
          }}
        >
          <div
            style={{
              height: "30px",
              width: "40px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <img src={foot1} style={{ height: "100%", width: "100%" }} />
            <img src={foot2} style={{ height: "100%", width: "100%" }} />
            <img
              src={foot3}
              style={{ height: "100%", width: "100%", marginRight: "20px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
