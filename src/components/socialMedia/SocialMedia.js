import React from "react";
import "./SocialMedia.css";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      <a href = "https://github.com/gursimranjit1196" className="icon-button github" target="_blank">
        <i className="fab fa-github"></i>
        <span></span>
      </a>

      <a href = "http://www.linkedin.com/in/gursimranjit1196" className="icon-button linkedin" target="_blank">
        <i className="fab fa-linkedin-in"></i>
        <span></span>
      </a>

      <a href={`mailto:${ "gursimranjit1196@gmail.com" }`} className="icon-button google" target="_blank">
        <i className="fab fa-google"></i>
        <span></span>
      </a>

      <a href = { "https://medium.com/@gursimranjit1196" } className="icon-button medium" target="_blank">
        <i className="fab fa-medium"></i>
        <span></span>
      </a>
    </div>
  )
}
