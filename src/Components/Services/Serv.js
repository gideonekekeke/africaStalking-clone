import React, { useState } from "react";
import { app } from "../../Base";
import { useEffect } from "react";
import { Button } from "antd";
import "./sev.css";
import { Link } from "react-router-dom";
const db = app.firestore().collection("stalk");

function Serv() {
  const [fileUrl, setFileUrl] = useState([]);

  const getData = async () => {
    await db.onSnapshot((snap) => {
      const item = [];
      snap.forEach((doc) => {
        item.push({ ...doc.data(), id: doc.id });
      });
      setFileUrl(item);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {fileUrl.map(({ id, title, content, avatar }) => (
        <div className="card_background">
          <div
            className="card"
            style={{
              height: "350px",

              backgroundColor: "white",
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
              {title}
            </div>
            <Link to={`/serv/${id}`}>
              <div className="image_circle">
                <img style={{ height: "100%", width: "100%" }} src={avatar} />
              </div>
            </Link>
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
                width: "50%",
                textAlign: "center",
                color: "black",
                marginTop: "15px",
              }}
            >
              We provide a variety of comm...
            </div>
            {/* <Button
              style={{
                marginTop: "5px",
                height: "40px",
                width: "100px",
                backgroundColor: "#FD7F00",
                color: "white",

                border: "none",
                fontWeight: "bold",
              }}
            ></Button> */}
          </div>
        </div>
      ))}
    </>
  );
}

export default Serv;
