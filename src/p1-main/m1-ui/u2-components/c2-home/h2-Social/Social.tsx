import React from "react";
import styles from "../home.module.scss"

export const Social = () => {
    return (
        <div className={`${styles.home__social}`}>
            <a href="https://www.instagram.com/vahkrasavcheg/" className={`${styles["home__social-icon"]}`}
               target="_blank" rel="noreferrer">
                <i className="uil uil-instagram"></i>
            </a>
            <a href="https://t.me/dmitryKorotaev" className={`${styles["home__social-icon"]}`} target="_blank"
               rel="noreferrer">
                <i className="uil uil-telegram-alt"></i>
            </a>
            <a href="https://github.com/DmitryKRTV" className={`${styles["home__social-icon"]}`} target="_blank"
               rel="noreferrer">
                <i className="uil uil-github-alt"></i>
            </a>
        </div>
    );
};


