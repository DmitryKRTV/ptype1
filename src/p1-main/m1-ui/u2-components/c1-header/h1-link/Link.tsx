import React from "react";
import styles from "../header.module.scss"
import {linksType} from "../Header";

type LinkProps = {
    refer: linksType
    activeNav: linksType
    setActiveNav: (refer: linksType) => void
    iconClass: string
    title: string
}

export const Link = ({refer, activeNav, iconClass, setActiveNav, title}: LinkProps) => {

    return (
        <li className={`${styles["nav_item"]}`}>
            <a href={`${refer}`}
               onClick={() => {
                   setActiveNav(refer)
               }}
               className={activeNav === `${refer}`
                   ? `${styles["nav__link"]} ${styles["active-link"]}`
                   : `${styles["nav__link"]}`
               }
            >
                <i className={`${iconClass} ${styles["nav__icon"]}`}></i>{title}
            </a>
        </li>
    );
};
