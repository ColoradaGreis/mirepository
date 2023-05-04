import React from 'react'
import s from './TechSkills.module.css'
import { skills } from '../../assets/utilities/Skills'

function Techskills () {
  return (
    <div className={s.box}>
        <div className='d-flex justify-content-center w-100'>
            <h1 className={` mt-5 ${s.title}`}>Skills</h1>
        </div>
        <div className='d-flex flex-wrap justify-content-center align-items-center w-100'>

        {
            skills.map((skill) => {
              return (
                    <div key={skill.name} className='flex-column justify-content-center align-items-center p-4'>
                    <img className={`m-3 ${s.Techskillsimg}`} src={skill.img} alt={skill.name} key={skill.name} />
                    <div className='d-flex justify-content-center align-items-center m-0'>
                    <p className={s.text}>{skill.name}</p>
                    </div>
                    </div>
              )
            })
        }
        </div>
    </div>
  )
}

export default Techskills
