import React, {useEffect} from "react";
import styles from "./scrollUp.module.scss"

export const ScrollUp = () => {

    useEffect(() => {
        document.addEventListener("scroll", scrollUpCallback)
        return () => {
            document.removeEventListener("scroll", scrollUpCallback)
        };
    }, []);


    const scrollUpCallback = () => {
        const scrollUp = document.querySelector("#scrollUp")
        if (window.scrollY >= 560 && scrollUp) {
            scrollUp.classList.add(`${styles["show-scroll"]}`)
        } else if (window.scrollY < 560 && scrollUp) {
            scrollUp.classList.remove(`${styles["show-scroll"]}`)
        }
    }

    return (
        <a href="#" className={`${styles.scrollUp}`} id={"scrollUp"}>
            <i className={`uil uil-arrow-up ${styles["scrollUp_icon"]}`}></i>
        </a>
    );
};
