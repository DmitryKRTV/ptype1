import React, {MouseEvent, useEffect, useState} from "react";
import "./header.css"

type linksType = "#home" | "#about" | "#skills" | "#services" | "#portfolio" | "#contact"

export const Header = () => {


    useEffect(() => {
        document.addEventListener("scroll",scrollHandler)
        return () => {
            document.removeEventListener("scroll",scrollHandler)
        };
    }, []);

    const scrollHandler = (e: any) => {
        const header = document.querySelector(".header")
        if (window.scrollY >= 80 && header) {
            header.classList.add("scroll-header")
        } else if (window.scrollY < 80 && header) {
            header.classList.remove("scroll-header")
        }
    }

    const [toggle, setToggle] = useState<boolean>(false);
    const [activeNav, setActiveNav] = useState<linksType>("#home");


    const toggleMenuCB = (e: MouseEvent<HTMLElement>) => {
        setToggle(!toggle)
    }

    return (
        <header className={"header"}>
            <nav className={"nav container"}>
                <a href="index.html" className="nav__logo">Smith</a>
                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav_item">
                            <a href="#home"
                               onClick={() => {setActiveNav("#home")}}
                               className={activeNav === "#home"
                                ?   "nav__link active-link"
                                :   "nav__link"
                            }>
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#about" onClick={() => {setActiveNav("#about")}}
                               className={activeNav === "#about"
                                   ?   "nav__link active-link"
                                   :   "nav__link"
                               }>
                                <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#skills" onClick={() => {setActiveNav("#skills")}}
                               className={activeNav === "#skills"
                                   ?   "nav__link active-link"
                                   :   "nav__link"
                               }>
                                <i className="uil uil-file-alt nav__icon"></i>Skills
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#services" onClick={() => {setActiveNav("#services")}}
                               className={activeNav === "#services"
                                   ?   "nav__link active-link"
                                   :   "nav__link"
                               }>
                                <i className="uil uil-briefcase-alt nav__icon"></i>Services
                            </a>
                        </li>
                        {/*<li className="nav_item">*/}
                        {/*    <a href="#portfolio" onClick={() => {setActiveNav("#portfolio")}}*/}
                        {/*       className={activeNav === "#portfolio"*/}
                        {/*           ?   "nav__link active-link"*/}
                        {/*           :   "nav__link"*/}
                        {/*       }>*/}
                        {/*        <i className="uil uil-scenery nav__icon"></i>Portfolio*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        <li className="nav_item">
                            <a href="#contact" onClick={() => {setActiveNav("#contact")}}
                               className={activeNav === "#contact"
                                   ?   "nav__link active-link"
                                   :   "nav__link"
                               }>
                                <i className="uil uil-message nav__icon"></i>Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={toggleMenuCB}></i>
                </div>

                <div className="nav__toggle" onClick={toggleMenuCB}>
                    <i className="uil uil-apps "></i>
                </div>
            </nav>
        </header>
    );
};

