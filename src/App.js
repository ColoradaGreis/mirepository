// import logo from './logo.svg';
import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Work from './pages/Work/Work'
import NavBar from './components/NavBar/NavBar'
import Contact from './components/Contact/Contact'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar/>} />
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='work' element={<Work/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='*' element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
