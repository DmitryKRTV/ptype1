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
                  offset={1}
                  duration={500}
                  isDynamic={true}>
                <i className={`${iconClass} ${styles["nav__icon"]}`}></i>{title}
            </Link>
            {/*<a href={`${refer}`}*/}
            {/*   onClick={() => {*/}
            {/*       setActiveNav(refer)*/}
            {/*   }}*/}
            {/*   className={activeNav === `${refer}`*/}
            {/*       ? `${styles["nav__link"]} ${styles["active-link"]}`*/}
            {/*       : `${styles["nav__link"]}`*/}
            {/*   }*/}
            {/*>*/}
            {/*    <i className={`${iconClass} ${styles["nav__icon"]}`}></i>{title}*/}
            {/*</a>*/}
        </li>
    );
};
