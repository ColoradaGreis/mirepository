import React from 'react'
import NavIzq from '../../components/NavIzq/NavIzq'
import s from './Home.module.css'

function Home () {
  return (
    <div className={`w-100 h-100 ${s.home}`}>
      <NavIzq/>
    </div>
  )
}

export default Home
