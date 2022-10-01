import React from "react";
import {DataItemType} from "./Works";

export const WorkItems = ({item}: WorkItemsType) => {
    return (
        <div className="work__card">
            <img src={item.image} alt="Work Image" className={"work__img"}/>
            <h3 className="work__title">{item.title}</h3>
            <a href="#" className="work__button">
                Demo
                <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
        </div>
    );
};

type WorkItemsType = {
    item: DataItemType
}

