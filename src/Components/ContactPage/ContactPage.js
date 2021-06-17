import React from "react";
import "./conta.css";
import { Link } from "react-router-dom";
import phone from "./Image/phone-removebg-preview.png";
import chat from "./Image/chat.png";

function ContactPage() {
  return (
    <div className="contactUs3">
      <div className="contactUscontainer3">
        <div className="thefirsPart3">
          <div className="backGoundOpacity3">
            {/* <div className="thecontent"> */}
            <div className="getInTouch3">
              <h1>Get in touch</h1>
              <h4>We want to hear from you. Here is how you can reach us...</h4>
            </div>

            {/* </div> */}
          </div>
        </div>
        <div className="theMainPart3">
          <div className="theCard3">
            <div className="theLOgoHolder3">
              <img src={phone} />
            </div>
            <h3>Talk to Us</h3>
            <p>Interested in helping a child contact us now</p>
            <Link style={{ color: "#478E02" }} className="Link">
              08000000000
            </Link>
          </div>

          <div className="theCard3">
            <div className="theLOgoHolder3">
              <img src={chat} />
            </div>
            <h3>Contact Africa stalking</h3>
            <p>
              Sometimes you need a ittle help from your friends, a little touch
              of love can change a life forever
            </p>
            <button>Contact Support</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
