import React, {useEffect} from "react";
import "./skills.css";
import {Skill} from "./Skill/Skill";
import { useSelector} from "react-redux";
import {AppRootState} from "../../../../m2-bll/redux/store";
import {SkillType} from "../../../../m2-bll/redux/skills-reducer";

export const SkillsAlternative = React.memo(() => {

    const skills = useSelector<AppRootState, SkillType[]>((state) => state.skills);

    const finalSkills = skills.map(skill => {
        return <Skill title={skill.title}
                      percent={skill.percent}
                      key={skill.id}
        />
    })

    return (
        <section className={"skills section"} id={"skills"}>
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>
            <div className="skills__container container">
                <div className={"skills__content"}>
                    {finalSkills}
                </div>
            </div>
        </section>
    );
});

