import React from "react";
import {Skill} from "./Skill";
import s from "./SkillsBar.module.css"
import {useSelector} from "react-redux";
import {AppRootState} from "../../../redux/store";
import {SkillType} from "../../../redux/skills-reducer";


export const SkillsBar = () => {
    const skills = useSelector<AppRootState, SkillType[]>((state) => state.skills);

    const finalSkills = skills.map(skill => {
        return <Skill title={skill.title}
                      percent={skill.percent}
                      delay={skill.delay}
                      key={skill.id}
        />
    })

    return (
        <section className={"skills section"} id={"skills"}>
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>
            <div className="skills__container container">
                <div className={s["container"]}>
                    {finalSkills}
                </div>
            </div>
        </section>
    )
};