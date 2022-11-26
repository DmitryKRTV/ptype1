import React, {useEffect, useState} from "react";
import {nickName} from "../../../../p2-assets/personalInfo"
import styles from "./header.module.scss"
import {CustomLink} from "./h1-customLink/CustomLink";


export const Header = () => {

    const [toggle, setToggle] = useState<boolean>(false);
    // const [activeNav, setActiveNav] = useState<linksType>("home");

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler)
        return () => {
            document.removeEventListener("scroll", scrollHandler)
        };
    }, []);

    const scrollHandler = () => {
        const header = document.querySelector(`#header`)
        if (window.scrollY >= 80 && header) {
            header.classList.add(`${styles["scroll-header"]}`)
        } else if (window.scrollY < 80 && header) {
            header.classList.remove(`${styles["scroll-header"]}`)
        }
    }

    const toggleMenuCB = () => {
        setToggle(!toggle)
    }

    return (
        <header className={styles.header} id={"header"}>
            <nav className={`${styles.nav} container`}>
                <a href="#" className={`${styles["nav__logo"]}`}>{nickName}</a>
                <div className={toggle ? `${styles["nav__menu"]} ${styles["show-menu"]}` : `${styles["nav__menu"]}`}>
                    <ul className={`${styles["nav__list"]}`}>
                        <CustomLink refer={"home"}
                                    iconClass={`uil uil-estate`}
                                    title={"Home"}
                        />

                        <CustomLink refer={"about"}
                                    iconClass={`uil uil-user`}
                                    title={"About"}
                        />

                        <CustomLink refer={"skills"}
                                    iconClass={`uil uil-file-alt`}
                                    title={"Skills"}
                        />

                        <CustomLink refer={"services"}
                                    iconClass={`uil uil-briefcase-alt`}
                                    title={"Services"}
                        />

                        <CustomLink refer={"portfolio"}
                                    iconClass={`uil uil-scenery`}
                                    title={"Portfolio"}
                        />

                        <CustomLink refer={"contact"}
                                    iconClass={`uil uil-message`}
                                    title={"Contact"}
                        />

                    </ul>

                    <i className={`uil uil-times ${styles["nav__close"]}`} onClick={toggleMenuCB}></i>
                </div>

                <div className={`${styles["nav__toggle"]}`} onClick={toggleMenuCB}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export type linksType = "home" | "about" | "skills" | "services" | "portfolio" | "contact"
