import { v1 } from "uuid"


export type SkillType = {
    id: string
    title: string
    percent: number
    delay: number
}

const initialState = [
    {id: v1(), title: "Html", percent: 75, delay: 0.1},
    {id: v1(), title: "Css", percent: 70, delay: 0.2},
    {id: v1(), title: "JS/TS", percent: 75, delay: 0.2},
    {id: v1(), title: "React", percent: 65, delay: 0.3},
    {id: v1(), title: "Redux", percent: 64, delay: 0.3},
    {id: v1(), title: "Storybook", percent: 76, delay: 0.3},
    {id: v1(), title: "Git", percent: 63, delay: 0.4},
    {id: v1(), title: "Jest", percent: 71, delay: 0.4},
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