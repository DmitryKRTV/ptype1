import React, {useEffect, useState} from "react";
import {nickName} from "../../../../p3-assets/personalInfo"
import styles from "./header.module.scss"
import {Link} from "./h1-link/Link";


export const Header = () => {

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

    const [toggle, setToggle] = useState<boolean>(false);
    const [activeNav, setActiveNav] = useState<linksType>("#home");

    const toggleMenuCB = () => {
        setToggle(!toggle)
    }

    return (
        <header className={styles.header} id={"header"}>
            <nav className={`${styles.nav} container`}>
                <a href="#" className={`${styles["nav__logo"]}`}>{nickName}</a>
                <div className={toggle ? `${styles["nav__menu"]} ${styles["show-menu"]}` : `${styles["nav__menu"]}`}>
                    <ul className={`${styles["nav__list"]} grid`}>
                        <Link refer={"#home"}
                              setActiveNav={setActiveNav}
                              activeNav={activeNav}
                              iconClass={`uil uil-estate`}
                              title={"Home"}
                        />

                        <Link refer={"#about"}
                              setActiveNav={setActiveNav}
                              activeNav={activeNav}
                              iconClass={`uil uil-user`}
                              title={"About"}
                        />

                        <Link refer={"#skills"}
                              setActiveNav={setActiveNav}
                              activeNav={activeNav}
                              iconClass={`uil uil-file-alt`}
                              title={"Skills"}
                        />

                        <Link refer={"#services"}
                              setActiveNav={setActiveNav}
                              activeNav={activeNav}
                              iconClass={`uil uil-briefcase-alt`}
                              title={"Services"}
                        />

                        <Link refer={"#portfolio"}
                              setActiveNav={setActiveNav}
                              activeNav={activeNav}
                              iconClass={`uil uil-scenery`}
                              title={"Portfolio"}
                        />

                        <Link refer={"#contact"}
                              setActiveNav={setActiveNav}
                              activeNav={activeNav}
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

export type linksType = "#home" | "#about" | "#skills" | "#services" | "#portfolio" | "#contact"
