import { useState } from 'react'
import { Skills, SkillsPoints } from "./types"
import { user, skillsList} from './utils'
import './App.css'

function App() {
  const [skillsPoints, setSkillsPoints] = useState<SkillsPoints[]>(() => {
    return skillsList.reduce<SkillsPoints[]>((acc, item) => {
      acc.push({skill: item, points: 0})
      return acc
  }, [])
  })

  const totalAvailablePoints = user.skillpoints

  const calculateRemainingPoints = (): number => {
    const allocatedPoints = skillsPoints.reduce((acc, skill) => acc + skill.points, 0)
    return totalAvailablePoints - allocatedPoints
  }

  const handlePointsChange = (skill: Skills, newPoints: number) => {
    const remainingPoints = calculateRemainingPoints()
    if (remainingPoints > 0) {
      setSkillsPoints((prevSkillsPoints) =>
        prevSkillsPoints.map((prevSkill) =>
          prevSkill.skill === skill ? { ...prevSkill, points: newPoints } : prevSkill
        )
      )
    } else {
      // se os pontos acabaram, é possível somente retirar os pontos já alocados
      setSkillsPoints((prevSkillsPoints) => 
        prevSkillsPoints.map((prevSkill) =>
          prevSkill.skill === skill && newPoints < prevSkill.points ? { ...prevSkill, points: newPoints } : prevSkill
        )
      )
    }
  }

  const handleSubmit = () => {
    console.log('Dados submetidos:', skillsPoints);
  }

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
      <h3>Pontos restantes: {calculateRemainingPoints()}</h3>
      <button onClick={handleSubmit} disabled={calculateRemainingPoints() < 0}>
        Enviar
      </button>
    </div>
  )
}

export default App