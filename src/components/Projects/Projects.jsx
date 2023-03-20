import React from 'react'
// import s from './Projects.module.css'
import { Project } from '../../assets/utilities/Project'

function Projects () {
  return (
    <div>

    <div>
      <h1>Projects</h1>
    </div>
    <div>

    {
      Project.map((project) => {
        return (
        <div className="card" key={project.name}>
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
