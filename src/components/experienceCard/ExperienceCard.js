import React, { useState } from "react";
import "./ExperienceCard.css";

export default function ExperienceCard({ cardInfo }) {
  return (
    <div className="experience-card">
      <div className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>
      </div>
      <div className="experience-text-details">
        <h5 className="experience-text-role">{cardInfo.role}</h5>
        <h5 className="experience-text-date">{cardInfo.date}</h5>
        <p className="subTitle experience-text-desc">{cardInfo.desc}</p>
      </div>
    </div>
  );
}
