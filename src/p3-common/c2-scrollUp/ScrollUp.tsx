import React, {useEffect} from "react";
import styles from "./scrollUp.module.scss"
import Scroll from "react-scroll";

export const ScrollUp = () => {

    let scroll = Scroll.animateScroll;

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
        <a onClick={() => {
            scroll.scrollToTop()
        }} className={`${styles.scrollUp}`} id={"scrollUp"}>
            <i className={`uil uil-arrow-up ${styles["scrollUp_icon"]}`}></i>
        </a>
    );
};
