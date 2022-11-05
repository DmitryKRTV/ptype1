import React, {useState} from "react";
import styles from "./services.module.scss"
import {ServiceContent} from "./s1-serviceContent/ServiceContent";

const servicesData: ServicesDataType[] = [
    {
        title: "UI/UX Designer",
        toggleModalStatic: 1,
        icon: "uil uil-web-grid",
        description: "As a UI/UX designer I create both functional and appealing features that help involve new customers.",
        items: [
            "Gather and evaluate user requirements in collaboration with product managers and developers.",
            "Illustrate design ideas using storyboards, process flows and sitemaps.",
            "Design graphic user interface elements, like menus, tabs and widgets.",
            "Build page navigation buttons and search fields.",
            "Develop UI mockups and prototypes that clearly illustrate how sites function and look like.",
            "Identify and troubleshoot UX problems.",
            "Adhere to style standards on fonts, colors and images.",
        ]
    },
    {
        title: "Frontend Developer",
        toggleModalStatic: 2,
        icon: "uil uil-arrow",
        description: "As a Frontend Developer I create extensible applications splitting them into 3 main layers: UI - user interface layer responsible for rendering components, BLL - business logic layer responsible for state management and DAL - data access layer responsible for all AJAX in the project.",
        items: [
            "Understanding of Flux architecture and methods of its implementation.",
            "Build UI with frontend frameworks such as React, Angular or Vue",
            "Build BLL using state managers like Redux, Redux-toolkit or Mobx.",
            "Understanding of AJAX, REST API and building DAL using frameworks(Thunk, Saga) or without it.",
            "Write code using TDD and test it using unit, snapshot, integrations and end-to-end(e2e) tests.",
            "Working in Version control system such as Git and Subversion for a project participating.",
            "Creating responsive layouts using UI frameworks such as Bootstrap, Material UI or AntDesign and using preprocessors(SASS/SCSS/LESS)."
        ]
    },
    {
        title: "Backend Developer",
        toggleModalStatic: 3,
        icon: "uil uil-edit",
        description: "As a Backend Developer I'm mastering Node.js and also familiar with Java. Currently I'm expanding knowledge of backend technologies.",
        items: [
            "Understanding of principles of OOP and Solid.",
            "Extending my knowledge of packaging, deploying, and running applications using Docker.",
            "Studying design patterns of OOP.",
            "c7-work with relational and non-relational databases such as MongoDB, MySQL, PostgresQL and others.",
            "c7-work in a team to meet deadlines and bring my solutions to life.",
            "Update already implemented and working suite solutions.",
        ]
    }
]

export const Services = () => {

    const [toggleModal, setToggleModal] = useState<ModalToggleType>(0);

    const closeModal = () => {
        setToggleModal(0)
    }

    return (
        <section className={"services section"} id={"services"}>
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">My responsibilities</span>

            <div className={`${styles.services__container} container grid`}>
                {servicesData.map((item, index) => {
                    return <ServiceContent toggleModal={toggleModal}
                                           setToggleModal={setToggleModal}
                                           closeModal={closeModal}
                                           serviceData={item}
                                           key={index}
                    />
                })}
            </div>
        </section>
    );
};

export type ModalToggleType = 0 | 1 | 2 | 3
export type ServicesDataType =
    {
        title: string
        toggleModalStatic: ModalToggleType
        description: string
        items: string[]
        icon: string
    }
