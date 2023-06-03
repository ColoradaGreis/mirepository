import React from 'react'
import AboutMe from '../../components/Aboutme/AboutMe'
import Techskills from '../../components/TechSkills/Techskills'
import s from './About.module.css'

function About () {
  return (
    <div className='flex-column justify-content-center px-5'>
      <div>
        <AboutMe/>
      </div>
      <div>
        <Techskills/>
      </div>
      <div className=''>
        <div className='d-flex justify-content-center'><h1 className={s.title}>Learning</h1></div>
        <div className='flex-column justify-content-center align-items-center p-4'>
          <div className='d-flex justify-content-center align-items-center m-0'>
        <img className={`m-3 ${s.img}`} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
          </div>
        <div className='d-flex justify-content-center align-items-center m-0'>
        <p className={s.text}>docker</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
