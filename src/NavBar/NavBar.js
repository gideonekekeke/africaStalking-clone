import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import React, { useContext, useState } from "react";
import logo from "../Components/img/10.png";
import { Link, useHistory } from "react-router-dom";
import { app } from "../Base";
import { GlobalContext } from "../Components/AppState/GlobalContext";
import LoginModal from "../Components/Login/LoginModal";
import "./nav.css";
// import signUpModal from "../Components/SignUp/SignUpModal";

function NavBar() {
  const hist = useHistory();

  const { currentUser, currentData } = useContext(GlobalContext);
  const [moveNav, setMoveNav] = useState(false);

  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onMoveNav = () => {
    if (window.scrollY >= 70) {
      setMoveNav(true);
    } else {
      setMoveNav(false);
    }
  };
  window.addEventListener("scroll", onMoveNav);

  return (
    <>
      <Header
        className={moveNav ? "your_nav" : "my_nav"}
        style={{
          height: "70px",
          top: 0,
          position: "sticky",
          // backgroundColor: "red",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            height: "100%",
            top: 0,
            position: "sticky",

            // backgroundColor: "white",

            cursor: "pointer",
          }}
        >
          <div className="image_move" style={{ height: "60px", width: "80px" }}>
            <img
              src={logo}
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
            />
          </div>

          <div
            className="navtext"
            style={{
              width: "50%",
              // background: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              height: "100%",
              fontFamily: "poppins",
              fontSize: "15px",
            }}
          >
            {/* <Link to="/" style={{ textDecoration: "none", color: "white" }}> */}
            <div
              onClick={() => {
                hist.push("/");
              }}
              className="navtext"
            >
              Home
            </div>
            {/* </Link> */}
            <div className="navtext">About</div>

            <div
              onClick={() => {
                hist.push("/contact");
              }}
              className="navtext"
            >
              Contact
            </div>
            <div className="navtext">Services</div>
          </div>
          {/* <div className="sidebar">Menu</div> */}

          {currentData ? (
            <div
              style={{
                height: "70%",
                width: "50px",
                background: "red",
                marginTop: "-50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "100px",
                marginTop: "5px",
              }}
            >
              <img
                src={currentData && currentData.avatar}
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "50px",
                  objectFit: "cover",
                }}
              />
            </div>
          ) : null}
          {currentUser ? (
            <Button
              onClick={() => {
                app.auth().signOut();
                hist.push("/");
              }}
              className="press"
              style={{
                width: "100px",
                height: "40px",
                borderRadius: "20px",
                backgroundColor: "#DE6316",
                color: "white",
                border: "1px solid gray",
                fontFamily: "poppins",
                outline: "none",
                cursor: "pointer",
              }}
            >
              LOG OUT
            </Button>
          ) : (
            // <Link to="/login" style={{ textDecoration: "none" }}>
            //   <Button
            //     style={{
            //       width: "100px",
            //       height: "40px",
            //       borderRadius: "20px",
            //       backgroundColor: "#DE6316",
            //       color: "white",
            //       border: "1px solid gray",
            //       fontFamily: "poppins",
            //       outline: "none",
            //       cursor: "pointer",
            //     }}
            //   >
            //     LOG IN
            //   </Button>
            // </Link>
            <LoginModal />
          )}
        </div>
      </Header>
    </>
  );
}

export default NavBar;
