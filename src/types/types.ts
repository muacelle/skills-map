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

export const skillsList: Skills[] = [
    'arm-lock', 'estrangulamento', 'guarda-fechada', 'kimura', 'passagem-guarda',
    'quedas', 'saída-100kg', 'saída-montada', 'triangulo'
]

export interface SkillsPoints {
    skill: Skills
    points: number
}

// 'arm-lock': 0, 'estrangulamento': 0, 'guarda-fechada': 0, 'kimura': 0, 'passagem-guarda': 0, 
//     'quedas': 0, 'saída-100kg': 0, 'saída-montada': 0, 'triangulo': 0