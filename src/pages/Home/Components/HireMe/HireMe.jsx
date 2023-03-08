import React from 'react'
import s from './HireMe.module.css'
import Button from '../../../../components/Button/Button'

function HireMe () {
  return (
    <div className='flex-column justify-content-center'>
      <div className=''>
        <div className='d-flex'>
        <h1 className={s.h1}>Full Stack Developer</h1>
        </div>
        <div className='d-flex ' >
        <h1 className={s.h1}>Based in Argentina</h1>
        </div>
        <div className='d-flex '>
        <h1 className={s.h1}>Graciana Baratti</h1>
        </div>
      </div>
      <div className='d-flex gap-4'>
        <Button type='Hire' text='Hire Me' link='/contact' />
        <Button type='cv' text='Download CV' />
      </div>

    </div>
  )
}

export default HireMe
