import React, { useState } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import emoji from "react-easy-emoji";
import {Fade} from "react-reveal";

export default function Skills() {
  let [ skills ] = useState([
    emoji("⚡ Develop Scalable Applications"),
    emoji("⚡ Payment Gateways integrations (CCAvenue, Stripe, Payfast, etc)"),
    emoji("⚡ Full-Duplex Communication using WebSockets"),
    emoji("⚡ Google Chrome Extensions")
  ])

  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
        <div className="skills-image-div">
          <img alt="Saad Working" src={require("../../assets/images/developerActivity.svg")}></img>
        </div>
        </Fade>
        <Fade right duration={1000}>
        <div className="skills-text-div">
          <h1 className="skills-heading">{ "What I do" } </h1>
          <p className="subTitle skills-text-subtitle">{ "CRAZY FULL STACK ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK" }</p>
          <SoftwareSkill />
          <div>
            {
              skills.map((skills, i) => {
                return <p className="subTitle skills-text" key = {i}>{skills}</p>;
              })
            }
          </div>
        </div>
        </Fade>
      </div>
    </div>
  );
}
