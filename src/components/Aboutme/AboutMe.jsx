import React from 'react'
import s from './AboutMe.module.css'
import crystal from '../../assets/images/crystal.png'

function AboutMe () {
  return (
    <div className={`justify-content-center ${s.aboutMe}`}>
        <div className=''>
            <h1 className={s.title}>About me</h1>
        </div>
        <div className='container mt-5'>
        <div className='row flex-wrap'>
            <div className='col-4'>
                <img className={`img-fluid ${s.img}`} src={crystal} alt='crystal'/>
            </div>
            <div className='col-8 mt-5'>
                <p className={s.text}>I am a Full Stack developer with experience developing web applications using technologies like Node.js and React. I specialize in creating engaging and interactive user interfaces, as well as designing and building RESTful APIs and relational databases.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AboutMe
