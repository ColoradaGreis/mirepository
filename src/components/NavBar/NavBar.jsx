import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logopruebauno.png'
import s from './NavBar.module.css'

function NavBar () {
  return (
    <div className={`${s.nav} d-flex justify-content-center align-items-center gap-5 py-4`}>
      <Link className={s.link} to='/'>
        <h1 className={s.h1}>Home</h1>
      </Link>
      <Link className={s.link} to='/about'>
      <h1 className={s.h1}>About</h1>
      </Link>
      <img src={logo} alt='logo' className={s.logo} />
      <Link className={s.link} to='/contact'>
      <h1 className={s.h1}>Contact</h1>
      </Link>
      <Link className={s.link} to='/work'>
      <h1 className={s.h1}>Work</h1>
      </Link>

    </div>
  )
}

export default NavBar
