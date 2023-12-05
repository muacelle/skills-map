import { useState } from 'react'
import { Skills, SkillsPoints } from "./types/types"
import './App.css'

function App() {
  const skillsList: Skills[] = [
    'arm-lock', 'estrangulamento', 'guarda-fechada', 'kimura', 'passagem-guarda',
    'quedas', 'saída-100kg', 'saída-montada', 'triangulo'
  ]

  // const user: User = {
  //     belt: Belt.Blue,
  //     skillpoints: beltPoints('blue'),
  //     skills: initialSkills,
  // }

  const [skillsPoints, setSkillsPoints] = useState<SkillsPoints[]>(() => {
    return skillsList.reduce<SkillsPoints[]>((acc, item) => {
      acc.push({skill: item, points: 0})
      return acc
  }, [])
  })

  const handlePointsChange = (skill: Skills, newPoints: number) => {
    setSkillsPoints((prevSkillsPoints) =>
      prevSkillsPoints.map((prevSkill) =>
        prevSkill.skill === skill ? { ...prevSkill, points: newPoints } : prevSkill
      )
    )
  }
  // function beltPoints(belt: string): number {
  //     switch(belt) {
  //         case 'white':
  //             return 2
  //         case 'blue':
  //             return 4
  //         case 'purple':
  //             return 7
  //         case 'brown':
  //             return 10
  //         case 'black':
  //             return 14
  //     }
  //     return 0
  // }

  return (
    <div>
      <h2>Habilidades</h2>
      <ul>
        {skillsPoints.map((skillPoint) => (
          <li key={skillPoint.skill}>
            {skillPoint.skill}: {skillPoint.points}
            <input
              type="range"
              min={0}
              max={5}
              value={skillPoint.points}
              onChange={(e) => handlePointsChange(skillPoint.skill, parseInt(e.target.value, 10))}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App