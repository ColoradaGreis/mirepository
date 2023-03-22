import React from 'react'
import s from './Projects.module.css'
import wines from '../../assets/images/PF-wines.png'
import pi from '../../assets/images/pi-videogames.png'
import Button from '../Button/Button'

function Projects () {
  const Project = [{
    img: wines,
    name: 'E-Commerce Wine Store',
    tools: ['React', 'Redux', 'Nodejs', 'Express', 'PostgreSQL', 'Sequelize', 'HTML5', 'CSS3', 'Bootstrap', 'Git', 'Github'],
    url: 'https://e-wine-ashen.vercel.app',
    github: 'https://github.com/ColoradaGreis/E-WINE-Final-Project'
  },
  {
    img: pi,
    name: 'Video Games App',
    tools: ['React', 'Redux', 'Nodejs', 'Express', 'PostgreSQL', 'Sequelize', 'HTML5', 'CSS3', 'Bootstrap', 'Git', 'Github'],
    url: 'https://main--pi-videogames-greis.netlify.app',
    github: 'https://github.com/ColoradaGreis/PI-Videogames'
  }]
  return (
    <div className='flex-column'>

    <div className='d-flex justify-content-center m-5'>
      <h1 className={s.title}>My recent work</h1>
    </div>
    <div className='gap-5 d-flex flex-nowrap justify-content-center'>

    {
      Project.map((project) => {
        return (
        <div className={`card m-5 ${s.card}`} key={project.name}>
          <img src={project.img} className={`card-img-top ${s.img}`} alt={project.name}/>
          <div className="card-body">
            <h5 className="card-title">{project.name}</h5>
            <div className='d-flex flex-nowrap gap-2'>
            <Button type='link' text='View' link={project.url} target='_blank' rel='noreferrer'/>
            <Button type='link2' text='Info' link={project.github} target='_blank' rel='noreferrer'/>
            </div>
          </div>
        </div>

        )
      })
    }
    </div>
    </div>
  )
}

export default Projects
