import React from 'react'
import about from '../../assets/images/about.png'
import home from '../../assets/images/home.png'
import work from '../../assets/images/work.png'
import contact from '../../assets/images/contact.png'
import s from './NavIzq.module.css'

function NavIzq () {
  return (
    <div className={`${s.nav} d-flex bg-white`}>
        <div>
            <img src={home} alt='home' />
        </div>
        <div>
            <img src={about} alt='about' />
        </div>
        <div>
            <img src={work} alt='work' />
        </div>
        <div>
            <img src={contact} alt='contact' />
        </div>
    </div>
  )
}

export default NavIzq
