import React, {useState} from "react";
import {QualificationItem} from "./q1-qualificationItem/QualificationItem";
import styles from "./qualification.module.scss"


export const Qualification = () => {

    const [toggleButton, setToggleButton] = useState<0 | 1>(0);

    const getClassForButton = (staticNumber: number) => {
        return toggleButton === staticNumber
            ? `${styles.qualification__button} ${styles.qualification__active} button--flex`
            : `${styles.qualification__button} button--flex`
    }

    const getClassForSection = (staticNumber: number) => {
        return toggleButton === staticNumber
            ? `${styles.qualification__content} ${styles["qualification__content-active"]}`
            : `${styles.qualification__content}`
    }

    return (
        <section className={"qualification section"}>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className={`${styles.qualification__container} container`}>
                <div className={`${styles.qualification__tabs}`}>
                    <div className={getClassForButton(0)} onClick={() => setToggleButton(0)}>
                        <i className={`uil uil-graduation-cap ${styles.qualification__icon}`}></i>
                        Education
                    </div>
                    <div className={getClassForButton(1)} onClick={() => setToggleButton(1)}>
                        <i className={`uil uil-briefcase-alt ${styles.qualification__icon}`}></i>
                        Experience
                    </div>
                </div>
                <div className={`${styles.qualification__sections}`}>
                    <div className={getClassForSection(0)}>
                        <QualificationItem position={"left"}
                                           jobTitle={"Frontend"}
                                           placeTitle={"IT-INCUBATOR, Course"}
                                           whenItWas={"June 2022 - Present"}
                        />
                        <QualificationItem position={"right"}
                                           jobTitle={"Java Developer"}
                                           placeTitle={"JavaRush, Course"}
                                           whenItWas={"May 2021 - Nov 2021"}
                        />
                        <QualificationItem position={"left"}
                                           jobTitle={"Production manager"}
                                           placeTitle={"PSU, Belarus, University"}
                                           whenItWas={"2017 - 2019"}
                        />
                        <QualificationItem position={"right"}
                                           jobTitle={"Civil engineer"}
                                           placeTitle={"PSU, Belarus, University"}
                                           whenItWas={"2014 - 2019"}
                        />
                    </div>
                    <div className={getClassForSection(1)}>
                        <QualificationItem position={"left"}
                                           jobTitle={"Web Developer"}
                                           placeTitle={"Part time, Belarus"}
                                           whenItWas={"Sep 2021 - Present"}
                        />
                        <QualificationItem position={"right"}
                                           jobTitle={"System Administrator"}
                                           placeTitle={"Housing and utilities, Belarus"}
                                           whenItWas={"2020-2021"}
                        />
                        <QualificationItem position={"left"}
                                           jobTitle={"Boiler building master"}
                                           placeTitle={"Housing and utilities, Belarus"}
                                           whenItWas={"2019 - 2021"}
                        />
                    </div>
                </div>
            </div>

        </section>
    );
};
