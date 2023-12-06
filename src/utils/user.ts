import { User, SkillsPoints, Belt } from "../types"
import { beltPoints } from "./belt-points"
import { skillsList } from "./skills-list"


export const initialSkills: SkillsPoints[] = skillsList.reduce<SkillsPoints[]>((acc, item) => {
    acc.push({skill: item, points: 0})
    return acc
}, [])

export const user: User = {
    belt: Belt.Blue,
    skillpoints: beltPoints('blue'),
    skills: initialSkills,
}
