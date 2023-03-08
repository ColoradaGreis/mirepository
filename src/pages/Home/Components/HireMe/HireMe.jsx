import React from 'react'
import s from './HireMe.module.css'
import Button from '../../../../components/Button/Button'

function HireMe () {
  return (
    <div>
        <h1 className={s.h1}>Full Stack Developer</h1>
        <h1 className={s.h1}>Based in Argentina</h1>
        <h1 className={s.h1}>Graciana Baratti</h1>
        <Button type='Hire' text='Hire Me' link='/contact' />
        <Button type='cv' text='Download CV' />

    </div>
  )
}

export default HireMe
