import React from "react";
import gen from "../img/8.png";

function GenBody() {
  return (
    <div style={{ marginTop: "30px" }}>
      <div style={{ height: "500px", backgroundColor: "red" }}>
        <img
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          src={gen}
        />
      </div>
    </div>
  );
}

export default GenBody;
