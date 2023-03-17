import React from 'react'
import s from './TechSkills.module.css'
import { skills } from '../../assets/utilities/Skills'

function Techskills () {
  return (
    <div>
        <div>
            <h1>My Tech Skills:</h1>
        </div>
        {
            skills.map((skill) => {
              return (

                    <img className={`m-3 ${s.img}`} src={skill.img} alt={skill.name} key={skill.name} />
              )
            })
        }
    </div>
  )
}

export default Techskills
