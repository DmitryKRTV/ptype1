import React from "react";
import "./skill.css"

type SkillType = {
    title: string
    percent: number
}

export const Skill = ({title, percent}: SkillType) => {
    return (
        <div className={"skill__container"}>
            <span className={"skill-text"}>{title}</span>
            <div className={"chart-bar"}>
                <span className={"item-progress"} style={{"width":`${percent}%`}}></span>
                <span className={"percent"} style={{"left":`calc(${percent}% - 24px)`}}>
                    {percent}%
                    <b className={"arrow"}></b>
                </span>
            </div>

        </div>
    );
};

