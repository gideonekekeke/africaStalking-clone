import React from "react";

import "./style.css";
import { Button } from "antd";
import Modal1 from "./Modal";

function Background1({ bg, tt, img }) {
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="card_background">
        <div
          className="card"
          style={{
            height: "350px",

            backgroundColor: bg,
            borderRadius: "20px",
            boxShadow: "3px 3px 10px -3px gray",
            display: "flex",
            fontFamily: "poppins",
            alignItems: "center",
            flexDirection: "column",
            margin: " 0 30px",
          }}
        >
          <div
            style={{
              color: "black",
              fontFamily: "poppins",
              marginTop: "40px",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            {tt}
          </div>
          <div className="image_circle">
            <img style={{ height: "100%", width: "100%" }} src={img} />
          </div>
          <div
            style={{
              color: "black",
              fontSize: "13px",
              fontWeight: "",
              marginTop: "20px",
            }}
          ></div>
          <div
            style={{
              width: "80%",
              textAlign: "center",
              color: "black",
              marginTop: "15px",
            }}
          >
            engagement experiences solution
          </div>
          {open ? <Modal1 tt={tt} bg={bg} img={img} /> : null}
        </div>
      </div>
    </>
  );
}

export default Background1;
