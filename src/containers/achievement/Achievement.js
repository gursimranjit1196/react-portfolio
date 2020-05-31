import React from "react";
import "./Achievement.css";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";

export default function Achievement() {
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="achievements">
      <div className="achievement-main-div">
        <div className="achievement-header">
          <h1 className="heading achievement-heading">{ emoji("Achievements And Certifications 🏆 ") }</h1>
          <p className="subTitle achievement-subtitle">{ "Achievements, Certifications that I have done !" }</p>
        </div>
        <div className="achievement-cards-div">
          <div className="certificate-card">
            <div className="certificate-image-div">
              <img src = { require("../../assets/images/AWS-SolArchitect-Associate.png") } alt="AWS" className="card-image"></img>
            </div>
            <div className="certificate-detail-div">
              <h5 className="card-title">{ "AWS Solution Architect Associate" }</h5>
              <p className="card-subtitle">{ "Completed Solution Architect Associate Certifcation from AWS" }</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Fade>
  )
}
