import React from "react";
import s from "./SkillsBar.module.css"

type SkillType = {
    title: string
    percent: number
    delay: number
}

export const Skill = ({title, percent, delay}: SkillType) => {
    return (
        <div className={s["skill-box"]}>
            <span className={s["title"]}>{title}</span>
            <div className={s["skill-bar"]}>
                    <span className={s["skill-per"]} style={{"width": `${percent}%`, "animationDelay": `${delay}s`}}>
                        <span className={s["tooltip"]}>{percent}%</span>
                    </span>
            </div>
        </div>
    );
};
