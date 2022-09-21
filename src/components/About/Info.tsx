import React from "react";
import "./about.css";


export const Info = () => {

    return (
        <div className={"about__info grid"}>
            <ul className="about__box">
                <div className="about__odd about__box-container">
                    <span className={"about__box-text"}>Dmitry</span>
                    <li className={"about__box-li"}>First Name</li>
                </div>
                <div className="about__even about__box-container">
                    <span className={"about__box-text"}>Korotayev</span>
                    <li className={"about__box-li"}>Last Name</li>
                </div>
                <div className="about__odd about__box-container">
                    <span className={"about__box-text"}>2 June 1997</span>
                    <li className={"about__box-li"}>Birthdate</li>
                </div>
                <div className="about__even about__box-container">
                    <span className={"about__box-text"}>Belarusian</span>
                    <li className={"about__box-li"}>Nationality</li>
                </div>
                <div className="about__odd about__box-container">
                    <span className={"about__box-text"}>1 year</span>
                    <li className={"about__box-li"}>Experience</li>
                </div>
                <div className="about__even about__box-container">
                    <span className={"about__box-text"}>Minsk, Belarus</span>
                    <li className={"about__box-li"}>Address</li>
                </div>

            </ul>
            <ul className="about__box">
                <div  className="about__box-container">
                    <span className={"about__box-text"}>English, Russian</span>
                    <li className={"about__box-li"}>Languages</li>
                </div>
                <div className="about__box-container">
                    <span className={"about__box-text"}>+375 29 871-28-86</span>
                    <li className={"about__box-li"}>Phone</li>
                </div>
                <div className="about__box-container">
                    <span className={"about__box-text"}>dmitry.korotayev@gmail.com</span>
                    <li className={"about__box-li"}>Email</li>
                </div>
                <div className="about__box-container">
                    <span className={"about__box-text"}>Dmitry Korotaev</span>
                    <li className={"about__box-li"}>Skype</li>
                </div>

                {/*<span className={"about__box-text"}>Dmitry</span>*/}
                {/*<li className={"about__box-li"}>Dribbble</li>*/}
                {/*<span className={"about__box-text"}>Dmitry</span>*/}
                {/*<li className={"about__box-li"}>Freelance</li>*/}
            </ul>
        </div>
    );
};

