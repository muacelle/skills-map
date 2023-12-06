import { User, SkillsPoints, Belt } from "../types"
import { beltPoints } from "./belt-points"
import { skillsOptions } from "./skills-options"


const initialSkills: SkillsPoints[] = skillsOptions.reduce<SkillsPoints[]>((acc, item) => {
    acc.push({ skill: item.value, points: 0 })
    return acc
}, [])

export const user: User = {
    belt: Belt.Blue,
    skillpoints: beltPoints('blue'),
    skills: initialSkills,
}
