import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import cv from '../../assets/archives/Resume_Baratti.pdf'
import s from './Button.module.css'

function Button (props) {
  const { text, type, link } = props

  if (type === 'Hire') {
    return (
        <Link className='text-decoration-none' to={link}>
    <button className={`btn btn-primary ${s.hire}`}>
      {text}
    </button>
    </Link>
    )
  }
  if (type === 'cv') {
    return (
        <a href={cv} download='resume_Baratti.pdf' className='text-decoration-none' >
    <button className={` ${s.cv}`}>
      {text}
    </button>
        </a>
    )
  }
  if (type === 'submit') {
    return (
      <button className={` ${s.cv}`} type='submit'>
        {text}
      </button>
    )
  }
  if (type === 'link') {
    return (
      <a className='text-decoration-none' href={link} target='_blank' rel='noreferrer'>
  <button className={`btn btn-primary ${s.hire}`}>
    {text}
  </button>
  </a>
    )
  }
  if (type === 'link2') {
    return (
      <a className='text-decoration-none' href={link} target='_blank' rel='noreferrer'>
  <button className={`${s.cv}`}>
    {text}
  </button>
  </a>
    )
  }
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  link: PropTypes.string
}

export default Button
