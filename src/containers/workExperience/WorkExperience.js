import React, { useState } from "react";
import "./WorkExperience.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { Fade } from "react-reveal";


export default function WorkExperience() {
    let [ workExperiences ] = useState([
        {
          role: "Software Engineer",  
          company: "Metadesign Solution Pvt Ltd.",
          date: "April 2017 – Present",
          desc: "Working as a Software Engineer with thorough hands-on experience in all levels of development in both Backend(Ruby On Rails, Nodejs) and Frontend (Angular 6+, Reactjs) technologies."
        }
      ])

    return (
        <div id="experience">
            <Fade bottom duration={1000} distance="20px">
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
