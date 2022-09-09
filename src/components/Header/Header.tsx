import React, {MouseEvent, useState} from "react";
import "./header.css"

export const Header = () => {

    const [toggle, setToggle] = useState<boolean>(false);

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
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i>Skills
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#services" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon"></i>Services
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#portfolio" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i>Portfolio
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#contact" className="nav__link">
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

