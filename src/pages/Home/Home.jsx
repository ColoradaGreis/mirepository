import React from 'react'
import NavIzq from '../../components/NavIzq/NavIzq'
import AboutHome from './Components/AboutHome/AboutHome'
import s from './Home.module.css'
import HireMe from './Components/HireMe/HireMe'
import top from '../../assets/images/Illustration_top.png'

function Home () {
  return (
    <div >
      <div className={` ${s.home} m-0`}>
          <div className=''>
            <NavIzq/>
          </div>
      <div className={`row ${s.hire}`} >
        <div className='col-12 h-max'>
          <img className={s.top} src={top} alt='top' />
        </div>
          <div className='col-2 h-max'>

          </div>
          <div className={'col-10 h-max '}>
            <HireMe />
          </div>

          <div className={'col-12 h-max '}>

          <AboutHome/>
          </div >
      </div>
      </div>
    </div>
  )
}

export default Home
