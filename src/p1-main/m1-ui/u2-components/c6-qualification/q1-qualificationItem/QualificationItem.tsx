import React from "react";
import styles from "../qualification.module.scss"

type QualificationItemProps = {
    position: "left" | "right"
    jobTitle: string
    placeTitle: string
    whenItWas: string
}

export const QualificationItem = (props: QualificationItemProps) => {

    const {position, jobTitle, placeTitle, whenItWas} = props

    return (
        <div className={`${styles.qualification__data}`}>
            {position === "left" ?
                <>
                    <div className={`${styles.qualification__info}`}>
                        <h3 className={`${styles.qualification__title}`}>{jobTitle}</h3>
                        <span className={`${styles.qualification__subtitle}`}>{placeTitle}</span>
                        <div className={`${styles.qualification__calendar}`}>
                            <i className={`uil uil-calendar-alt ${styles.qualification__itemIcon}`}></i>
                            {whenItWas}
                        </div>

                    </div>
                    <div>
                        <span className={`${styles.qualification__rounder}`}></span>
                        <span className={`${styles.qualification__line}`}></span>
                    </div>
                </>
                :
                <>
                    <div></div>
                    <div>
                        <span className={`${styles.qualification__rounder}`}></span>
                        <span className={`${styles.qualification__line}`}></span>
                    </div>
                    <div className={`${styles.qualification__info}`}>
                        <h3 className={`${styles.qualification__title}`}>{jobTitle}</h3>
                        <span className={`${styles.qualification__subtitle}`}>{placeTitle}</span>
                        <div className={`${styles.qualification__calendar}`}>
                            <i className={`uil uil-calendar-alt ${styles.qualification__itemIcon}`}></i>
                            {whenItWas}
                        </div>
                    </div>
                </>
            }
        </div>
    );
};
