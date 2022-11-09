import React from "react";
import {DataItemType} from "../Works";
import styles from "../../work.module.scss"

export const WorkItems = ({item}: WorkItemsType) => {
    return (
        <div className={`${styles.work__card}`}>
            <img src={item.image} alt="Work Image" className={`${styles.work__img}`}/>
            <h3 className={`${styles.work__title}`}>{item.title}</h3>
            <a href="#"
               className={`${styles.work__button}`}>
                View more
                <i className={`bx bx-right-arrow-alt ${styles["work__button-icon"]}`}></i>
            </a>
        </div>
    );
};

type WorkItemsType = {
    item: DataItemType
}

