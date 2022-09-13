import React, {useState} from "react";
import "./qualification.css";


export const Qualification = () => {

    const [toggleButton, setToggleButton] = useState<0 | 1>(0);

    const getClassForButton = (staticNumber: number) => {
        return toggleButton === staticNumber
            ? "qualification__button qualification__active button--flex"
            : "qualification__button button--flex"
    }

    const getClassForSection = (staticNumber: number) => {
        return toggleButton === staticNumber
            ? "qualification__content qualification__content-active"
            : "qualification__content"
    }

    return (
        <section className={"Qualification section"}>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={getClassForButton(0)} onClick={() => setToggleButton(0)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>
                    <div className={getClassForButton(1)} onClick={() => setToggleButton(1)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>
                <div className="qualification__sections">
                    <div className={getClassForSection(0)}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Design</h3>
                                <span className="qualification__subtitle">
                                        Spain - Institute
                                    </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - Present
                                </div>

                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line">

                                </span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Art Director</h3>
                                <span className="qualification__subtitle">
                                        Spain - Institute
                                    </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2020-2021
                                </div>

                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">
                                        Spain - Institute
                                    </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2018 - 2020
                                </div>

                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line">

                                </span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">UX Expert</h3>
                                <span className="qualification__subtitle">
                                        Spain - Institute
                                    </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2017 - 2018
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={getClassForSection(1)}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Product Designer</h3>
                                <span className="qualification__subtitle">
                                        Microsoft - Spain
                                    </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - Present
                                </div>

                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line">

                                </span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">UX Designer</h3>
                                <span className="qualification__subtitle">
                                        Apple Inc - Institute
                                    </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2020-2021
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">
                                        Figma - Spain
                                    </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2018 - 2020
                                </div>

                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line">

                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};
