import React, { useState } from "react";
import "./WorkExperience.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { Fade } from "react-reveal";


export default function WorkExperience() {
    let [ workExperiences ] = useState([
        {
          role: "Software Engineer",  
          company: "Metadesign Solution Pvt Ltd.",
          date: "April 2017 – Oct 2020",
          desc: "Working as a Software Engineer with thorough hands-on experience in all levels of development in both Backend(Ruby On Rails, Nodejs) and Frontend (Angular 6+, Reactjs) technologies."
        },
        {
          role: "Software Engineer",  
          company: "Gartner",
          date: "Oct 2020 – Oct 2021",
          desc: "Building Web application as Recommendation Engine for Business Unit, handled Backend and AWS Architecture."
        },
        {
          role: "SDE 2",  
          company: "TATA 1mg",
          date: "Oct 2021 – Present",
          desc: ""
        }
      ])

    return (
        <div id="experience">
            <Fade right duration={2000} distance="20px">
            <div className="experience-container" id="workExperience">
                <div>
                    <h1 className="experience-heading">Experiences</h1>
                    <div className="experience-cards-div">
                    { 
                        workExperiences.map((card, i) => {
                            return (
                                <ExperienceCard
                                    key = {i}
                                    cardInfo={{
                                        company: card.company,
                                        desc: card.desc,
                                        date: card.date,
                                        role: card.role
                                    }}
                                />
                            )
                        })
                    }
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    )
}
