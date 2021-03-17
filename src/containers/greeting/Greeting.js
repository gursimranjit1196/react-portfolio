import React, { useState } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";

export default function Greeting() {
  let [ shortDescription ] = useState(emoji("Passionate Software Engineer 🚀 having an experience of building Scalable Web Applications (with Ruby / Rails / JavaScript / Angular / Reactjs / Nodejs / AWS) including Project Analysis, Designing Architecture, End Testing and Deployment"))
  let [ resumeLink ] = useState("https://drive.google.com/file/d/1b9Z1kGA-NDavCQwwRz1qj-0v5K-r9Z4R/view?usp=sharing")

  return (
    <Fade bottom duration={1000} distance="40px">
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">
              {" "}
              { "Gursimranjit Singh Channa" }
            </h1>
            <h1 className="greeting-subtext">
              { "Software Engineer @ Gartner" }
            </h1>
            <h1 className="greeting-subsubtext">
              { "(AWS SAA | AWS DA)" }
            </h1>
            <p className="greeting-text-p subTitle">{ shortDescription }</p>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={ resumeLink } />
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <img alt="saad sitting on table" src={require("../../assets/images/me.jpeg")}></img>
        </div>
      </div>
    </div>
    </Fade>
  );
}
