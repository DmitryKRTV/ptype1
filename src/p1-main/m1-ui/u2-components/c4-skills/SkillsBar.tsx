import React from "react";
import {Skill} from "./s1-skill/Skill";
import s from "./SkillsBar.module.scss"
import {useSelector} from "react-redux";
import {AppRootState} from "../../../m2-bll/redux/store";
import {SkillType} from "../../../m2-bll/redux/skills-reducer";


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
            <div className={`container`}>
                <div className={s["skills__container"]}>
                    {finalSkills}
                </div>
            </div>
        </section>
    )
};
