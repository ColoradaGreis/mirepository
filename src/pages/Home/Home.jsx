import React from 'react'
// import NavIzq from '../../components/NavIzq/NavIzq'
import AboutHome from './Components/AboutHome/AboutHome'
import s from './Home.module.css'
import HireMe from './Components/HireMe/HireMe'
import top from '../../assets/images/Illustration_top.png'
// import Techskills from '../../components/TechSkills/Techskills'
import Projects from '../../components/Projects/Projects'
import Contact from '../../components/Contact/Contact'

function Home () {
  return (
    <div >
      <div className={` ${s.home} m-0`}>
          {/* <div className={s.navIzq}>
            <NavIzq/>
          </div> */}
      <div className={`row align-content-start ${s.hire}`} >
        <div className='col-12 h-25'>
          <img className={s.top} src={top} alt='top' />
        </div>
          <div className='col-2'>

          </div>
          <div className={'col-10'}>
            <HireMe />
          </div>

      </div>
        <div className='row'>

            <div className={'col-12 h-max '}>
            <AboutHome/>
            </div >
        </div>
        {/* <div className={`${s.tech} d-flex justify-content-center`}>
          <Techskills/>
        </div> */}
        <div className={s.back}>
          <Projects/>
        </div>
        <div className='m-5'>
          <Contact/>
        </div>
      </div>
    </div>
  )
}

export default Home
