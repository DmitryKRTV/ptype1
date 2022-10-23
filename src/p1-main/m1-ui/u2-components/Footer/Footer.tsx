import React from "react";
import "./footer.css"


export const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">DmitryKRTV</h1>

                <ul className="footer__list">
                    <li>
                        <a href={"#about"} className="footer__link">About</a>
                    </li>
                    <li>
                        <a href={"#portfolio"} className="footer__link">Projects</a>
                    </li>
                    {/*<li>*/}
                    {/*    <a href="#testimonials" className="footer__link">Testimonials</a>*/}
                    {/*</li>*/}
                </ul>

                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/dzmitry-karatayeu-892671253" className="footer__social-link"
                       target="_blank">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/vahkrasavcheg/" className="footer__social-link" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://vk.com/vahkrasavcheg" className="footer__social-link" target="_blank">
                        <i className="bx bxl-vk"></i>
                    </a>
                </div>
                <span className={"footer__copy"}>&#169; DmitryKRTV. All rights reserved</span>
            </div>
        </footer>
    );
};
