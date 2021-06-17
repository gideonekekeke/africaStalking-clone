import React, { useState } from "react";
import { Button } from "antd";
import { Link, useHistory } from "react-router-dom";
import { app } from "../../Base";

const db = app.firestore().collection("africa");
function Login() {
  const hist = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LogInNewUser = async () => {
    await app.auth().signInWithEmailAndPassword(email, password);
    hist.push("/dashboard");
  };

  return (
    <>
      <center>
        <h3 style={{ color: "black" }}>LOG IN</h3>
      </center>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "90%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              height: "300px",
              width: "400px",
              border: "1px solid silver",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              style={{
                color: "black",
                height: "30px",
                width: "70%",
                paddingLeft: "20px",
                margin: "10px",
              }}
              type="text"
              placeholder="Email"
            />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              style={{
                color: "black",
                height: "30px",
                width: "70%",
                paddingLeft: "20px",
                margin: "10px",
              }}
              type="text"
              placeholder="Password"
            />

            <Button
              style={{
                width: "50%",
                height: "40px",
                borderRadius: "5px",
                backgroundColor: "#DE6316",
                color: "white",
                border: "1px solid gray",
                fontFamily: "poppins",
                outline: "none",
                cursor: "pointer",
                marginTop: "20px",
              }}
              onClick={LogInNewUser}
            >
              Log in
            </Button>
            <br />
            <div style={{ display: "flex" }}>
              Don't Have an Account ?
              <Link style={{ textDecoration: "none" }} to="/signup">
                <div
                  style={{
                    marginLeft: "10px",
                    color: "red",
                    cursor: "pointer",
                  }}
                >
                  Sign up{" "}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
