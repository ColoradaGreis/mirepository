// import logo from './logo.svg';
import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About.jsx'
import Work from './pages/Work/Work'
import NavBar from './components/NavBar/NavBar'
import Contact from './components/Contact/Contact'
import NotFound from './pages/NotFound/NotFound'
// import NavIzq from './components/NavIzq/NavIzq'

function App () {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<NavBar/>} >
          <Route path='' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='work' element={<Work/>} />
          <Route path='contact' element={<Contact/>} />
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default App
