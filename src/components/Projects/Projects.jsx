import React from 'react'
import s from './Projects.module.css'
import wines from '../../assets/images/PF-wines.png'
import pi from '../../assets/images/pi-videogames.png'
// import { Project } from '../../assets/utilities/Project'

function Projects () {
  const Project = [{
    img: wines,
    name: 'E-Commerce Wine Store',
    tools: ['React', 'Redux', 'Nodejs', 'Express', 'PostgreSQL', 'Sequelize', 'HTML5', 'CSS3', 'Bootstrap', 'Git', 'Github'],
    url: 'https://e-wine-ashen.vercel.app'
  },
  {
    img: pi,
    name: 'Video Games App',
    tools: ['React', 'Redux', 'Nodejs', 'Express', 'PostgreSQL', 'Sequelize', 'HTML5', 'CSS3', 'Bootstrap', 'Git', 'Github'],
    url: 'https://main--pi-videogames-greis.netlify.app'
  }]
  return (
    <div>

    <div>
      <h1>My recent work</h1>
    </div>
    <div>

    {
      Project.map((project) => {
        return (
        <div className={`card ${s.card}`} key={project.name}>
          <img src={project.img} className="card-img-top" alt={project.name}/>
          <div className="card-body">
            <h5 className="card-title">{project.name}</h5>
              <p className="card-text">tools: {project.tools}</p>
            <a href={project.url} className="btn btn-primary" target='_blank' rel='noreferrer'>see</a>
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
