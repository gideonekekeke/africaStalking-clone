import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { useHistory } from "react-router";
import { app } from "../../Base";

const db = app.firestore().collection("africa");
function SignUp() {
  const hist = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [biography, setBiography] = useState("");

  const [fileUrl, setFileUrl] = useState(null);

  const ImageUpload = async (e) => {
    const File = e.target.files[0];
    const fileRef = app.storage().ref();
    const storageRef = fileRef.child(File.name);
    console.log(File);

    await storageRef.put(File);
    setFileUrl(await storageRef.getDownloadURL());
  };

  const signInNewUser = async () => {
    const newUser = await app
      .auth()
      .createUserWithEmailAndPassword(email, password);

    await db.doc(newUser.user.uid).set({
      name,
      email,
      password,
      biography,
      avatar: await fileUrl,
    });
    hist.push("/dashboard");
  };

  // useEffect(() => {
  //   signInNewUser();
  // });

  return (
    <>
      <center>
        <h3 style={{ color: "black" }}>SIGN UP</h3>
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
              height: "400px",
              width: "400px",
              border: "1px solid silver",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              onChange={ImageUpload}
              style={{
                color: "black",
                height: "30px",
                width: "70%",
                paddingLeft: "20px",
                margin: "10px",
              }}
              type="file"
              placeholder="file"
            />
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              style={{
                color: "black",
                height: "30px",
                width: "70%",
                paddingLeft: "20px",
                margin: "10px",
              }}
              type="text"
              placeholder="Name"
            />
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
            <input
              value={biography}
              onChange={(e) => {
                setBiography(e.target.value);
              }}
              style={{
                color: "black",
                height: "30px",
                width: "70%",
                paddingLeft: "20px",
                margin: "10px",
              }}
              type="text"
              placeholder="Biography"
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
              onClick={signInNewUser}
            >
              Sign Up
            </Button>
            <br />
            <div style={{ display: "flex" }}>
              Already Have an Account ?
              <div
                style={{ marginLeft: "10px", color: "red", cursor: "pointer" }}
              >
                Log in{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
