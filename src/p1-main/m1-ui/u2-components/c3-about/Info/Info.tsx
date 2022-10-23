import React from "react";
import {InfoItem} from "./InfoItem";
import styles from "../about.module.scss"


export const Info = () => {

    return (
        <div className={`${styles.about__info} grid`}>
                <ul className={`${styles.about__box}`}>
                <InfoItem spanValue={"Dmitry"} underSpanValue={"First Name"} parityClass={`${styles.about__odd}`}/>
                <InfoItem spanValue={"Korotayev"} underSpanValue={"Last Name"} parityClass={`${styles.about__even}`}/>
                <InfoItem spanValue={"2 June 1997"} underSpanValue={"Birthdate"} parityClass={`${styles.about__odd}`}/>
                <InfoItem spanValue={"Belarusian"} underSpanValue={"Nationality"} parityClass={`${styles.about__even}`}/>
                <InfoItem spanValue={"2 years"} underSpanValue={"Experience"} parityClass={`${styles.about__odd}`}/>
                <InfoItem spanValue={"Minsk, Belarus"} underSpanValue={"Address"} parityClass={`${styles.about__even}`}/>
            </ul>
            <ul className={`${styles.about__box}`}>
                <InfoItem spanValue={"English, Russian"} underSpanValue={"Languages"} parityClass={""}/>
                <InfoItem spanValue={"+375 29 871-28-86"} underSpanValue={"Phone"} parityClass={""}/>
                <InfoItem spanValue={"Dmitry Korotaev"} underSpanValue={"Skype"} parityClass={""}/>
                <InfoItem spanValue={"dmitry.korotayev@gmail.com"} underSpanValue={"Email"} parityClass={""}/>
                <InfoItem spanValue={"Part time"} underSpanValue={"Working Activity"} parityClass={""}/>
            </ul>
        </div>
    );
};

