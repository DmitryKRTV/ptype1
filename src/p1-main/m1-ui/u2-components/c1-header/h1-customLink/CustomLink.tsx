import React from "react";
import styles from "../header.module.scss"
import {linksType} from "../Header";
import {Link} from "react-scroll";

type LinkProps = {
    refer: linksType
    iconClass: string
    title: string
}

export const CustomLink = ({refer, iconClass, title}: LinkProps) => {
    return (
        <li className={`${styles["nav_item"]}`}>
            <Link activeClass={`${styles["active"]}`}
                  to={`${refer}`}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  isDynamic={true}
                  className={`${styles["link"]}`}
            >
                <i className={`${iconClass} ${styles["nav__icon"]}`}></i>{title}
            </Link>
        </li>
    );
};
