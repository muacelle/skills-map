export enum Belt {
    White = 'white',
    Blue = 'blue',
    Purple = 'purple',
    Brown = 'brown',
    Black = 'black'
}

export type User = {
    skillpoints: number,
    skills: SkillsPoints[],
    belt: Belt
}

export type Skills =
    | 'guarda-fechada' 
    | 'passagem-guarda'
    | 'quedas'
    | 'saída-montada'
    | 'saída-100kg'
    | 'arm-lock'
    | 'triangulo'
    | 'estrangulamento'
    | 'kimura'

export interface SkillsPoints {
    skill: Skills
    points: number
}

export interface SkillOption {
    value: Skills
    label: string
}
