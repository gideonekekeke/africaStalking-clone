import React from "react";
import "./hero.css";
import pic from "../Components/img/3.svg";
import { RotateRight } from "@material-ui/icons";
function Hero() {
  return (
    <div className="contactUs">
      <div className="contactUscontainer">
        <div className="thefirsPart">
          <div className="backGoundOpacity">
            <div className="getInTouch">
              <div className="spread" style={{ width: "50%", color: "white" }}>
                <h1>Powering Communications Solutions Across Africa</h1>
                <h4>
                  With simplified access to telco infrastructure, developers use
                  our powerful SMS, USSD, Voice, Airtime and Payments APIs to
                  bring their ideas to life, as they build and sustain scalable
                  businesses.
                </h4>
                <button
                  style={{
                    height: "50px",
                    width: "150px",
                    borderRadius: "50px",
                    color: "white",
                    background: "#DE6316",
                    fontWeight: "bold",
                    border: "1px solid silver",
                  }}
                >
                  Get started{" "}
                </button>
              </div>
              <div
                className="hero_image"
                style={{
                  height: "100%",
                  width: "600px",
                  // backgroundColor: "white",
                }}
              >
                <img src={pic} style={{ height: "100%", width: "100%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
