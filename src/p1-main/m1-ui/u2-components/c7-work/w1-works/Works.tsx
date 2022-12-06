import React, {useEffect, useState} from "react";
import Work1 from "../../../../../p2-assets/packScreen.png"
import Work2 from "../../../../../p2-assets/noteAditor.png"
import {WorkItems} from "./w1-workItems/WorkItems";
import styles from "../work.module.scss"

const projectsData: DataItemType[] = [
    {
        id: 1,
        image: Work1,
        title: "Card application",
        category: "pet",
        stack: "React, Redux, Redux-Thunk, Formik , MaterialUI",
        description: "This app allows you to create and manage packs with cards in order to practice, study or just remember the information that you want.",
        githubLink: "https://github.com/EdmondDantess/project_friday",
        link: "https://edmonddantess.github.io/project_friday",
    },
    {
        id: 2,
        image: Work2,
        title: "Note editor",
        category: "test",
        stack: "TS, React, Redux, using local storage with Redux, MaterialUI",
        description: "Using this little app you can save notes to your browser's local storage, update or delete them. Also, you can use #hashtags in order to add some keywords to your navigation. Type something in the note field then #someKeyWord. After submitting, you create someKeyWord tag, by clicking on it, you will filter the notes.",
        githubLink: "https://github.com/DmitryKRTV/ivashin",
        link: "https://tourmaline-puppy-e8e942.netlify.app/",
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

const projectsNav: NavItemType[] = [{name: "all"}, {name: "pet"}, {name: "test"}]

type NavItemType = {
    name: "all" | "pet" | "test"
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

    // useEffect(() => {
    //     const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 3, 4, 5, 1, 1, 1, 2, 2, 3, 4, 5]
    //
    //     const arrSet = (arr: any) => {
    //         const obj = arr.reduce((acc: any, el: any) => {
    //             acc[el] = (acc[el] || 0) + 1
    //             return acc
    //         }, {})
    //         console.log(obj)
    //         return Object.keys(obj).sort((a: any, b: any) => obj[b] - obj[a])
    //     }
    //
    //     console.log(arrSet(arr))
    // }, []);


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

