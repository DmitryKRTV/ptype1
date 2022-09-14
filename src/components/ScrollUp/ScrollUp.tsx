import React, {useEffect} from "react";
import "./scrollUp.css"

export const ScrollUp = () => {

    useEffect(() => {
        document.addEventListener("scroll", scrollUpCallback)
        return () => {
            document.removeEventListener("scroll", scrollUpCallback)
        };
    }, []);


    const scrollUpCallback = (e: any) => {
        const scrollUp = document.querySelector(".scrollUp")
        if (window.scrollY >= 560 && scrollUp) {
            scrollUp.classList.add("show-scroll")
        } else if (window.scrollY < 560 && scrollUp) {
            scrollUp.classList.remove("show-scroll")
        }
    }

    return (
        <a href="#" className="scrollUp">
            <i className="uil uil-arrow-up scrollUp_icon"></i>
        </a>
    );
};
