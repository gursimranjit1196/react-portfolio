import React, { useState } from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";

export default function Contact() {
    let [ mobile ] = useState("+91-9873196086")
    let [ email ] = useState("gursimranjit1196@gmail.com")

    return (
        <Fade bottom duration={1000} distance="20px">
        <div className="main contact-margin-top" id="contact">
            <div className="contact-div-main">
                <div className="contact-header">
                    <h1 className="heading contact-title">{ emoji("Contact Me ☎️") }</h1>
                    <p className="subTitle contact-subtitle">{ "Discuss a project or just want to say hi? My Inbox is open for all." }</p>

                    <div className="contact-text-div">
                        <a className="contact-detail" href={"tel:" + mobile}>{ mobile }</a>
                        <br/><br/>
                        <a className="contact-detail-email"
                           href={"mailto:" + email}>{ email }</a>
                        <br/><br/>
                        <SocialMedia/>
                    </div>
                </div>
                <div className="contact-image-div">
                    <img alt="Saad Working" src={require("../../assets/images/contactMail.png")}></img>
                </div>
            </div>
        </div>
        </Fade>
    )
}
