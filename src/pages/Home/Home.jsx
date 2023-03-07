import React from 'react'
import NavIzq from '../../components/NavIzq/NavIzq'
import s from './Home.module.css'

function Home () {
  return (
    <div className={`container ${s.home}`}>
      <div className='row'>
        <div className='col-1'>
          <NavIzq/>
        </div>

      </div>
    </div>
  )
}

export default Home
