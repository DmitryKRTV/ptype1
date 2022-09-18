import { v1 } from "uuid"


export type SkillType = {
    id: string
    title: string
    percent: number
}

const initialState = [
    {id: v1(), title: "Html", percent: 65},
    {id: v1(), title: "Css", percent: 60},
    {id: v1(), title: "JS/TS", percent: 65},
    {id: v1(), title: "React", percent: 50},
    {id: v1(), title: "Redux", percent: 54},
    {id: v1(), title: "Storybook", percent: 66},
    {id: v1(), title: "Git", percent: 53},
    {id: v1(), title: "Jest", percent: 66},
]

type GetSkills = ReturnType<typeof getSkillsAC>

type FinalActionType = GetSkills


export const skillsReducer = (state: SkillType[] = initialState, action: FinalActionType): SkillType[] => {
    switch (action.type) {
        case "GET_SKILLS":
            return state;
        default:
            return state;
    }
}

export const getSkillsAC = () => ({
    type: "GET_SKILLS"
})