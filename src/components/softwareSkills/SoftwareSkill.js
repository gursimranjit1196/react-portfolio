import React, { useState } from "react";
import "./SoftwareSkill.css";

export default function SoftwareSkill() {
  let [ skillsSection ] = useState([
    {
      skillName: "ruby",
      fontAwesomeClassname: "far fa-gem"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ])

  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {
            skillsSection.map((skills, i) => {
              return (
                <li className="software-skill-inline" name={skills.skillName} key = {i}>
                  <i className={skills.fontAwesomeClassname}></i>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}
