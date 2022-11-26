import React, {useEffect, useState} from "react";
import Work1 from "../../../../../p2-assets/packScreen.png"
import {WorkItems} from "./w1-workItems/WorkItems";
import styles from "../work.module.scss"

const projectsData: DataItemType[] = [
    {
        id: 1,
        image: Work1,
        title: "Card application",
        category: "web",
        stack: "React, Redux, Redux-Thunk, Formik , MaterialUI",
        description: "This app allows you to create and manage packs with cards in order to practice, study or just remember the information that you want.",
        githubLink: "https://github.com/EdmondDantess/project_friday",
        link: "https://edmonddantess.github.io/project_friday",
    },
];

export type DataItemType = {
    id: number
    image: string
    category: string
    title: string
    stack: string
    description: string
    githubLink: string
    link: string
}

const projectsNav: NavItemType[] = [{name: "all"}, {name: "web"}]

type NavItemType = {
    name: "all" | "web"
}

export const Works = () => {

    const [items, setItems] = useState<NavItemType>({name: "all"});
    const [projects, setProjects] = useState<DataItemType[]>([]);

    useEffect(() => {
        if (items.name === "all") {
            setProjects(projectsData)
        } else {
            setProjects(projectsData.filter(item => item.category.toLowerCase() === items.name))
        }
    }, [items]);

    const onWorkTypeChanged = (itemsType: NavItemType) => {
        return () => setItems(itemsType)
    }

    return (
        <div>
            <div className={`${styles.work__filters}`}>
                {projectsNav.map((item: NavItemType, index) => {
                    return (
                        <span className={item.name === items.name
                            ? `${styles.work__item} ${styles["work__item-active"]}`
                            : `${styles.work__item}`}
                              key={index}
                              onClick={onWorkTypeChanged(item)}>{item.name}</span>
                    )
                })}
            </div>
            <div className={`${styles.work__container} container grid`}>
                {projects.map((item, index) => {
                    return <WorkItems item={item} key={index}/>
                })}
            </div>
        </div>
    );
};

