import React from "react";
import styles from "../contact.module.scss"

export const ContactCard = (props: ContactCardType) => {

    const {iconClass, title, cardData, linkHref} = props

    return (
        <div className={`${styles.contact__card}`}>
            <i className={`${iconClass} ${styles["contact__card-icon"]}`}></i>

            <h3 className={`${styles["contact__card-title"]}`}>{title}</h3>
            <span className={`${styles["contact__card-data"]}`}>{cardData}</span>
            <a target={"_blank"} href={linkHref} className={`${styles.contact__button}`}>
                Write me
                <i className={`bx bx-right-arrow-alt ${styles["contact__button-icon"]}`}></i>
            </a>
        </div>
    );
};

type ContactCardType = {
    iconClass: string
    title: string
    cardData: string
    linkHref: string
}