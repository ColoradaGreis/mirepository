import React from 'react'
import NavIzq from '../../components/NavIzq/NavIzq'
import AboutHome from './Components/AboutHome/AboutHome'
import s from './Home.module.css'
import HireMe from './Components/HireMe/HireMe'

function Home () {
  return (
    <div className={`container ${s.home}`}>
      <div className='row'>
        <div className='col-1'>
          <NavIzq/>
        </div>
        <div className='col-11 h-max'>
          <HireMe />
        </div>
          <AboutHome/>
      </div>
    </div>
  )
}

export default Home
