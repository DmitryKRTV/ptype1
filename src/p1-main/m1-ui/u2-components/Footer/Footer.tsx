import React from "react";
import styles from "./footer.module.scss"

export const Footer = () => {
    return (
        <footer className={`${styles.footer}`}>
            <div className={`${styles.footer__container} container`}>
                <h1 className={`${styles.footer__title}`}>DmitryKRTV</h1>

                <ul className={`${styles.footer__list}`}>
                    <li>
                        <a href={"#about"} className={`${styles.footer__link}`}>About</a>
                    </li>
                    <li>
                        <a href={"#portfolio"} className={`${styles.footer__link}`}>Projects</a>
                    </li>
                    {/*<li>*/}
                    {/*    <a href="#testimonials" className="footer__link">Testimonials</a>*/}
                    {/*</li>*/}
                </ul>

                <div className={`${styles.footer__social}`}>
                    <a href="https://www.linkedin.com/in/dzmitry-karatayeu-892671253"
                       className={`${styles["footer__social-link"]}`}
                       target="_blank">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/vahkrasavcheg/"
                       className={`${styles["footer__social-link"]}`}
                       target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://vk.com/vahkrasavcheg"
                       className={`${styles["footer__social-link"]}`}
                       target="_blank">
                        <i className="bx bxl-vk"></i>
                    </a>
                </div>
                <span className={`${styles.footer__copy}`}>&#169; DmitryKRTV. All rights reserved</span>
            </div>
        </footer>
    );
};
