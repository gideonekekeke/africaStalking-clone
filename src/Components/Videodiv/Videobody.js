import React from "react";
import "./vi.css";
import { Button } from "antd";
import vid from "../Videodiv/video/f1.mp4";
function Videobody() {
  return (
    <div
      style={{
        // height: "300px",
        marginTop: "100px",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            // justifyContent: "center",
          }}
        >
          <div
            className="remove"
            style={{
              // height: "300px",
              width: "60%",
              backgroundColor: "rgb(226, 125, 10, 0.7)",
              paddingLeft: "150px",
              borderRadius: "0px 20px 20px 0px",
            }}
          >
            <div className="spread1" style={{ width: "50%", color: "white" }}>
              <h1>Powering Communications Solutions Across Africa</h1>
              <h4>
                With simplified access to telco infrastructure, developers use
                our powerful SMS, USSD, Voice, Airtime and Payments APIs to
                bring their ideas to life, as they build and sustain scalable
                businesses.
              </h4>
              <Button
                className="buten"
                style={{
                  height: "50px",
                  width: "150px",
                  borderRadius: "50px",
                  color: "white",
                  background: "#EB991E",
                  fontWeight: "bold",
                  border: "1px solid silver",
                }}
              >
                Get started{" "}
              </Button>
            </div>
          </div>
          <div
            className="video_im"
            style={{
              height: "280px",
              width: "30%",
              backgroundColor: "red",
              marginLeft: "-60px",
            }}
          >
            <video
              controls
              autoPlay
              muted
              src={vid}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videobody;
