import React, {useEffect, useState, MouseEvent} from "react";
import Work1 from "../../../../p3-assets/work1.jpg"
import Work2 from "../../../../p3-assets/work2.jpg"
import Work3 from "../../../../p3-assets/work3.jpg"
import Work4 from "../../../../p3-assets/work4.jpg"
import Work5 from "../../../../p3-assets/work5.jpg"
import {WorkItems} from "./WorkItems";
import "./work.css"

const projectsData: DataItemType[] = [
    {
        id: 1,
        image: Work1,
        title: "Web design",
        category: "web",
    },
    {
        id: 2,
        image: Work2,
        title: "App movil",
        category: "app",
    },
    {
        id: 3,
        image: Work3,
        title: "Brand design",
        category: "design",
    },
    {
        id: 4,
        image: Work4,
        title: "App movil",
        category: "app",
    },
    {
        id: 5,
        image: Work5,
        title: "Web design",
        category: "web",
    },
];

export type DataItemType = {
    id: number
    image: string
    title: string
    category: string
}

const projectsNav: NavItemType[] = [{name: "all"}, {name: "web"}, {name: "app"}, {name: "design"}]

type NavItemType = {
    name:  "all" | "web" | "app" | "design"
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
        return (e: MouseEvent<HTMLSpanElement>) => setItems(itemsType)
    }

    return (
       <div>
           <div className="work__filters">
               {projectsNav.map((item: NavItemType, index) => {
                   return (
                       <span className={item.name === items.name
                       ? "work__item work__item-active"
                       : "work__item"}
                             key={index}
                             onClick={onWorkTypeChanged(item)}>{item.name}</span>
                   )
               })}
           </div>
           <div className="work__container container grid">
               {projects.map((item, index) => {
                   return <WorkItems item={item} key={index}/>
               })}
           </div>
       </div>
    );
};

