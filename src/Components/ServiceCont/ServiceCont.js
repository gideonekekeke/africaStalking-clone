import React from "react";
import { useState } from "react";
import image from "../img/6.svg";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { app } from "../../Base";
import "./cont.css";

const db = app.firestore().collection("stalk");
function ServiceCont() {
  const [data, setData] = useState(null);

  const { id } = useParams();

  const getPack = async () => {
    const docRef = await db.doc(id);
    const docData = await docRef.get();

    setData(docData.data());
  };

  useEffect(() => {
    getPack();
  }, []);

  return (
    <div
      style={{
        background: "#DA780D",
        // height: "100vh",
        display: "flex",
        justifyContent: "center",

        alignItems: "center",
      }}
    >
      <div
        style={{
          // background: "red",
          width: "80%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "500px",
            width: "700px",
            // backgroundColor: "white",
          }}
        >
          <img
            style={{ height: "100%", width: "100%" }}
            src={data && data.avatar}
          />
        </div>

        <div
          className="texting"
          style={{
            // backgroundColor: "black",
            color: "white",
            // marginRight: "30px",
            width: "500px",
            height: "100%",
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: "30px", width: "50%" }}>
            {data && data.title}
          </div>
          <br />
          {data && data.content}
        </div>
      </div>
    </div>
  );
}

export default ServiceCont;
