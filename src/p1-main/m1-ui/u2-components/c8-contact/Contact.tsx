import React, {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import {email} from "../../../../p2-assets/personalInfo"
import {emailHref} from "../../../../p2-assets/personalInfo"
import {skype} from "../../../../p2-assets/personalInfo"
import {skypeHref} from "../../../../p2-assets/personalInfo"
import {telegram} from "../../../../p2-assets/personalInfo"
import {telegramHref} from "../../../../p2-assets/personalInfo"
import styles from "./contact.module.scss"
import {ContactCard} from "./c1-contactCard/ContactCard";


export const Contact = () => {

    const [nameF, seNameF] = useState("");
    const [emailF, seEmailF] = useState("");
    const [messageF, seMessageF] = useState("");

    const form = useRef<any>();

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm("service_9ryyzse", "template_yvr4ykd", form.current, "GxyYPu0pIz4JHNRKt")

        seNameF("")
        seEmailF("")
        seMessageF("")
    };

    return (
        <section className={"contact section"} id={"contact"}>
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className={`${styles.contact__container} container grid`}>
                <div>
                    <h3 className={`${styles.contact__title}`}>Talk to me</h3>
                    <div className={`${styles.contact__info}`}>
                        <ContactCard linkHref={emailHref}
                                     title={"Email"}
                                     cardData={email}
                                     iconClass={"bx bx-mail-send"}/>
                        <ContactCard linkHref={skypeHref}
                                     title={"Skype"}
                                     cardData={skype}
                                     iconClass={"bx bxl-skype"}/>
                        <ContactCard linkHref={telegramHref}
                                     title={"Telegram"}
                                     cardData={telegram}
                                     iconClass={"bx bxl-telegram"}/>
                    </div>
                </div>
                <div>
                    <h3 className={`${styles.contact__title}`}>Write me!</h3>

                    <form className={`${styles.contact__form}`} ref={form} onSubmit={sendEmail}>
                        <div className={`${styles["contact__form-div"]}`}>
                            <label className={`${styles["contact__form-tag"]}`}>Name</label>
                            <input type={"text"}
                                   name={"name"}
                                   className={`${styles["contact__form-input"]}`}
                                   placeholder={"Insert your name"}
                                   value={nameF}
                                   onChange={(e) => {
                                       seNameF(e.currentTarget.value)
                                   }}
                            />
                        </div>
                        <div className={`${styles["contact__form-div"]}`}>
                            <label className={`${styles["contact__form-tag"]}`}>Email</label>
                            <input type={"email"}
                                   name={"email"}
                                   className={`${styles["contact__form-input"]}`}
                                   placeholder={"Insert your email"}
                                   value={emailF}
                                   onChange={(e) => {
                                       seEmailF(e.currentTarget.value)
                                   }}
                            />
                        </div>
                        <div className={`${styles["contact__form-div"]} ${styles["contact__form-area"]}`}>
                            <label className={`${styles["contact__form-tag"]}`}>Message</label>
                            <textarea name={"message"}
                                      cols={30}
                                      rows={10}
                                      className={`${styles["contact__form-input"]}`}
                                      placeholder={"Write your project"}
                                      value={messageF}
                                      onChange={(e) => {
                                          seMessageF(e.currentTarget.value)
                                      }}
                            ></textarea>
                        </div>
                        <button className="button button--flex" type={"submit"} value={"Send"}>
                            Send Message
                            <svg
                                className="button__icon"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                                    fill="var(--container-color)"
                                ></path>
                                <path
                                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                                    fill="var(--container-color)"
                                ></path>
                            </svg>
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};
