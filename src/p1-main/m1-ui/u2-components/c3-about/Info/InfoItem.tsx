import React from "react";
import styles from "../about.module.scss"

type InfoItemProps = {
    spanValue: string,
    underSpanValue: string,
    parityClass: string,
}

export const InfoItem = (props: InfoItemProps) => {
    const {spanValue, underSpanValue, parityClass} = props
    return (
        <div className={`${parityClass ? parityClass : ""}`}>
            <span className={`${styles["about__box-text"]}`}>{spanValue}</span>
            <li className={`${styles["about__box-li"]}`}>{underSpanValue}</li>
        </div>
    );
};

