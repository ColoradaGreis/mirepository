import React from 'react'
import s from './TechSkills.module.css'
import { skills } from '../../assets/utilities/Skills'

function Techskills () {
  return (
    <div className={s.box}>
        <div>
            <h1>My Tech Skills:</h1>
        </div>
        <div className='d-flex flex-norap justify-content-center'>

        {
            skills.map((skill) => {
              return (

                    <img className={`m-3 ${s.img}`} src={skill.img} alt={skill.name} key={skill.name} />
              )
            })
        }
        </div>
    </div>
  )
}

export default Techskills
