import React from 'react'
import { Link } from 'react-router-dom'
import s from './AboutHome.module.css'

function AboutHome () {
  return (
    <div className={s.about}>

        <h1 className={s.h1}>About me</h1>
        <p className={s.p}>
          My name is Graciana Baratti.
        I’m a Full Stack Developer based in Argentina.
         I have a passion for learning and I’m always looking for new opportunities to grow and improve my skills...<Link to='/about' className={s.link}><p className={s.pl}>read more</p></Link>
        </p>

    </div>

  )
}

export default AboutHome
