import React from 'react'
import Projects from '../../components/Projects/Projects'
import s from './Work.module.css'

function Work () {
  return (
    <div className={s.back}>
      <div className='flex-wrap'>
      <Projects/>
      </div>
      <div>
        <div>
          <h1>My experience</h1>
        </div>
      </div>
    </div>
  )
}

export default Work
