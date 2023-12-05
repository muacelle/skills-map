import { User, Skills, SkillsPoints, Belt } from "./types"

const skillsList: Skills[] = [
    'arm-lock', 'estrangulamento', 'guarda-fechada', 'kimura', 'passagem-guarda',
    'quedas', 'saída-100kg', 'saída-montada', 'triangulo'
]

const initialSkills: SkillsPoints[] = skillsList.reduce<SkillsPoints[]>((acc, item) => {
    acc.push({skill: item, points: 0})
    return acc
}, [])

const user: User = {
    belt: Belt.Blue,
    skillpoints: beltPoints('blue'),
    skills: initialSkills,
}

function beltPoints(belt: string): number {
    switch(belt) {
        case 'white':
            return 2
        case 'blue':
            return 4
        case 'purple':
            return 7
        case 'brown':
            return 10
        case 'black':
            return 14
    }
    return 0
}

console.log(user)